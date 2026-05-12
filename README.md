# 🎟️ Online Movie & Event Ticket Booking System

A full-stack web application for booking movie and event tickets online with real-time seat management, user authentication, and responsive frontend UI.

Built using React.js, Node.js, Express.js, MongoDB, and Axios.

---

# 📁 Project Structure

movie-ticket-booking/
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   ├── Movie.js
│   │   └── Booking.js
│   ├── server.js
│   ├── package.json
│   └── node_modules/
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Movies.js
│   │   │   └── Book.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── App.css
│   ├── package.json
│   └── node_modules/
│
└── README.md

---

# 🛠️ Tech Stack & Features

## Frontend Technologies

| Technology | Purpose |
|------------|---------|
| React.js | Frontend UI |
| React Router DOM | Routing between pages |
| Axios | API communication |
| HTML5 | Structure |
| CSS3 | Styling |
| JavaScript ES6 | Frontend logic |

---

## Backend Technologies

| Technology | Purpose |
|------------|---------|
| Node.js | Runtime environment |
| Express.js | Backend framework |
| MongoDB | Database |
| Mongoose | MongoDB ODM |
| CORS | Cross-origin requests |

---

# 🚀 Project Features

## 👤 User Features

- User Registration
- User Login
- View Movies & Events
- Book Tickets
- Real-Time Seat Availability
- View Bookings
- Responsive Design

---

## 🎬 Movie/Event Features

- Add Movies/Events
- Display Available Seats
- Ticket Price Display
- Seat Count Update After Booking

---

## 🎟️ Booking Features

- Ticket Booking System
- Booking Confirmation
- Seat Reduction Logic
- Store Booking Details in Database

---

# 📚 Concepts Covered

## Unit I – Node.js Fundamentals

| Feature | Implementation |
|---------|---------------|
| npm & package.json | Dependency management |
| Node.js Runtime | Backend execution |
| Modules | import/export syntax |
| Async Programming | async/await |
| Local Modules | models & routes |

---

## Unit II – Express.js

| Feature | Implementation |
|---------|---------------|
| Express Server | server.js |
| REST APIs | GET, POST routes |
| Middleware | express.json(), cors() |
| Request & Response | API handling |
| CRUD Operations | Movies & Bookings |

---

## Unit III – React.js Frontend

| Feature | Implementation |
|---------|---------------|
| Components | Movies.js, Book.js |
| State Management | useState |
| Side Effects | useEffect |
| Routing | React Router DOM |
| API Calls | Axios |

---

## Unit IV – MongoDB & Mongoose

| Feature | Implementation |
|---------|---------------|
| MongoDB Database | Store users & bookings |
| Schemas | User, Movie, Booking |
| CRUD Operations | Create & Read |
| Mongoose Models | Database interaction |

---

# 🌐 API Endpoints

## 👤 Authentication APIs

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /register | Register User |
| POST | /login | User Login |

---

## 🎬 Movie APIs

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /movies | Add Movie/Event |
| GET | /movies | Get All Movies |

---

## 🎟️ Booking APIs

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /book | Book Tickets |
| GET | /bookings | Get All Bookings |

---

# 🗄️ Database Models

## User Model

```js
{
  name: String,
  email: String,
  password: String
}

🚀 Setup & Run
Prerequisites
Node.js 18+
MongoDB (local or Atlas)
1. Install Dependencies
cd backend
npm install
2️⃣ Backend Setup
cd backendnpm install

3️⃣ Start MongoDB
Make sure MongoDB is running locally.
Default MongoDB URL:
mongodb://127.0.0.1:27017/moviebooking

4️⃣ Start Backend Server
node server.js
Backend runs on:
http://localhost:5000

5️⃣ Frontend Setup
Open a new terminal:
cd frontendnpm install

6️⃣ Start Frontend
npm start
Frontend runs on:
http://localhost:3000

🎬 Open Application
Visit:
http://localhost:3000

🧪 Test APIs using Thunder Client
Add Movie
POST:
http://localhost:5000/movies
Body:
{  "title": "Avengers",  "price": 200,  "seats": 50}

Get Movies
GET:
http://localhost:5000/movies

Book Ticket
POST:
http://localhost:5000/book
