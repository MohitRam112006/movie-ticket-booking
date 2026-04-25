import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const SECRET = "mysecretkey";
import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

const app = express();
app.use(express.json());
app.use(cors());

/* ================= DATABASE ================= */
mongoose.connect("mongodb://127.0.0.1:27017/ticketDB")
.then(() => console.log("DB Connected"))
.catch(err => console.log(err));

/* ================= MODELS ================= */

// Movie model
const Movie = mongoose.model("Movie", {
    name: String,
    seats: Number
});

// Event model
const Event = mongoose.model("Event", {
    name: String,
    seats: Number
});
const User = mongoose.model("User", {
    email: String,
    password: String
});

/* ================= MOVIE ROUTES ================= */

// add movie
app.post("/add", async (req, res) => {
    const movie = new Movie(req.body);
    await movie.save();
    res.json({ message: "Movie added" });
});

// get movies
app.get("/movies", async (req, res) => {
    const data = await Movie.find();
    res.json(data);
});

/* ================= EVENT ROUTES ================= */

// add event
app.post("/addevent", async (req, res) => {
    const event = new Event(req.body);
    await event.save();
    res.json({ message: "Event added" });
});

// get events
app.get("/events", async (req, res) => {
    const data = await Event.find();
    res.json(data);
});

/* ================= BOOKING ================= */

app.post("/book", async (req, res) => {
    const { movieId, seats } = req.body;

    // Try movie first
    let item = await Movie.findById(movieId);

    // If not movie, try event
    if (!item) {
        item = await Event.findById(movieId);
    }

    if (!item) {
        return res.json({ message: "Item not found" });
    }

    if (item.seats < seats) {
        return res.json({ message: "Not enough seats" });
    }

    item.seats -= seats;
    await item.save();

    res.json({ message: "Booked successfully" });
});

/* ================= SERVER ================= */
app.post("/register", async (req, res) => {
    const { email, password } = req.body;

    const hashed = await bcrypt.hash(password, 10);

    const user = new User({
        email,
        password: hashed
    });

    await user.save();

    res.json({ message: "User registered" });
});
app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
        return res.json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return res.json({ message: "Wrong password" });
    }

    const token = jwt.sign({ id: user._id }, SECRET);

    res.json({ message: "Login successful", token });
});

app.listen(5000, () => {
    console.log("Server running on 5000");
});