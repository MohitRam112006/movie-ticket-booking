import axios from "axios";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Book() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [seats, setSeats] = useState("");

  const bookTicket = async () => {
    // 🔐 Check if user is logged in
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login first");
      navigate("/login");
      return;
    }

    // 🧪 Validate seats
    if (!seats || seats <= 0) {
      alert("Enter valid number of seats");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/book", {
        movieId: id,
        seats: Number(seats)
      });

      alert(res.data.message);
    } catch (err) {
      console.log("Booking error:", err);
      alert("Booking failed");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>🎟️ Book Ticket</h2>

      <input
        type="number"
        placeholder="Enter seats"
        value={seats}
        onChange={(e) => setSeats(e.target.value)}
        style={{ padding: "8px", marginRight: "10px" }}
      />

      <button onClick={bookTicket}>Confirm Booking</button>
    </div>
  );
}

export default Book;