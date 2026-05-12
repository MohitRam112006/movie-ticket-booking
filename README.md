# 🎟️ Online Movie & Event Ticket Booking System

A **full-stack web application** for seamless movie and event ticket booking with real-time seat management, secure user authentication, and a responsive modern UI.

---

## 📊 Project Overview

| Aspect | Details |
|--------|---------|
| **Type** | Full-Stack Web Application |
| **Purpose** | Online ticket booking platform |
| **Architecture** | MERN (MongoDB, Express, React, Node.js) |
| **Users** | Movie enthusiasts, event organizers, admin staff |

---

## 🏗️ Architecture & Project Structure

```
movie-ticket-booking/
│
├── 📁 backend/                          # Node.js + Express Backend
│   ├── models/                          # Database schemas
│   │   ├── User.js                      # User authentication model
│   │   ├── Movie.js                     # Movie/Event details model
│   │   └── Booking.js                   # Ticket booking records model
│   │
│   ├── routes/                          # API endpoints
│   │   ├── auth.js                      # Login/Register routes
│   │   ├── movies.js                    # Movie CRUD routes
│   │   └── bookings.js                  # Booking management routes
│   │
│   ├── middleware/                      # Middleware functions
│   │   ├── authMiddleware.js            # Token verification
│   │   └── errorHandler.js              # Error handling
│   │
│   ├── server.js                        # Main server entry point
│   ├── package.json                     # Backend dependencies
│   └── .env                             # Environment variables (not committed)
│
├── 📁 ticket-frontend/                  # React.js Frontend
│   ├── public/
│   │   └── index.html                   # Main HTML file
│   │
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Movies.js                # Movies listing page
│   │   │   ├── Book.js                  # Booking page
│   │   │   ├── Login.js                 # Authentication page
│   │   │   └── Confirmation.js          # Booking confirmation
│   │   │
│   │   ├── components/
│   │   │   ├── Navbar.js                # Navigation component
│   │   │   ├── SeatMap.js               # Interactive seat selector
│   │   │   └── MovieCard.js             # Movie display card
│   │   │
│   │   ├── services/
│   │   │   └── api.js                   # Axios API client
│   │   │
│   │   ├── App.js                       # Root component
│   │   ├── index.js                     # React entry point
│   │   └── App.css                      # Global styles
│   │
│   ├── package.json                     # Frontend dependencies
│   └── node_modules/
│
└── README.md                            # Project documentation
```

---

## 🛠️ Technology Stack

### **Backend Technologies**

| Technology | Version | Purpose |
|------------|---------|---------|
| **Node.js** | 18+ | JavaScript runtime environment |
| **Express.js** | 4.x | Web framework for REST APIs |
| **MongoDB** | 5.0+ | NoSQL database |
| **Mongoose** | 7.x | Object Data Modeling (ODM) |
| **JWT** | - | Secure token authentication |
| **CORS** | - | Cross-origin request handling |
| **Dotenv** | - | Environment variable management |
| **Bcrypt** | - | Password hashing & security |

### **Frontend Technologies**

| Technology | Version | Purpose |
|------------|---------|---------|
| **React.js** | 18.x | UI library |
| **React Router** | 6.x | Client-side routing |
| **Axios** | 1.x | HTTP client for API calls |
| **CSS3** | - | Responsive styling |
| **HTML5** | - | Semantic markup |
| **JavaScript ES6+** | - | Modern JavaScript logic |

---

## 🎯 Core Features & Functionality

### 👤 **User Management**

- ✅ User registration with email validation
- ✅ Secure login with JWT authentication
- ✅ Password hashing using bcrypt
- ✅ Session management
- ✅ User profile management

### 🎬 **Movie & Event Management**

- ✅ Add movies/events with details (title, genre, time, price)
- ✅ Display available movies with descriptions
- ✅ Real-time seat availability tracking
- ✅ Dynamic pricing for different seat categories
- ✅ Movie search and filtering

### 🎟️ **Ticket Booking System**

- ✅ Interactive seat selection interface
- ✅ Real-time seat availability updates
- ✅ Multiple seat booking in one transaction
- ✅ Automatic seat count deduction after booking
- ✅ Booking confirmation with unique ticket ID
- ✅ Booking history tracking

### 🎨 **User Interface**

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Intuitive navigation
- ✅ Modern and clean UI
- ✅ Visual seat map with color-coded availability
- ✅ Error handling with user-friendly messages

---

## 📚 Curriculum Coverage

### **Unit I: Node.js Fundamentals**

| Topic | Implementation | Details |
|-------|---|---------|
| **NPM & Package Management** | `package.json` dependencies | Version control, scripts |
| **Node.js Runtime** | `server.js` | Asynchronous execution |
| **Modules** | `models/`, `routes/` | ES6 import/export |
| **Async Programming** | `async/await` | Non-blocking operations |
| **File System** | `.env` configuration | File handling |
| **Event-Driven Architecture** | Express server | Event listeners & handlers |

### **Unit II: Express.js Web Framework**

| Topic | Implementation | Details |
|-------|---|---------|
| **Express Server Setup** | `server.js` | Initialization & configuration |
| **Routing System** | `routes/auth.js`, `routes/movies.js` | GET, POST, PUT, DELETE |
| **Middleware Functions** | `CORS`, `express.json()` | Request processing pipeline |
| **Request/Response Handling** | API endpoints | JSON parsing & responses |
| **CRUD Operations** | Movie & Booking management | Database interactions |
| **Error Handling** | Try-catch blocks | Error middleware |
| **Authentication** | JWT tokens | Route protection |

### **Unit III: React.js Frontend Development**

| Topic | Implementation | Details |
|-------|---|---------|
| **Components** | `Movies.js`, `Book.js`, `SeatMap.js` | Functional & class components |
| **State Management** | `useState()` hook | Component state |
| **Side Effects** | `useEffect()` hook | API calls, lifecycle |
| **Routing** | `React Router DOM` | Multi-page navigation |
| **API Integration** | `Axios` | Backend communication |
| **Conditional Rendering** | JSX logic | Dynamic UI updates |
| **Props & Events** | Component communication | Data passing & callbacks |

### **Unit IV: MongoDB & Mongoose ODM**

| Topic | Implementation | Details |
|-------|---|---------|
| **Database Design** | Schema modeling | `User`, `Movie`, `Booking` |
| **MongoDB Collections** | 3 main collections | Structured data storage |
| **Mongoose Schemas** | Data validation | Field types, constraints |
| **CRUD Operations** | Create, Read, Update, Delete | Database transactions |
| **Data Relationships** | Foreign keys | User-Booking relationships |
| **Query Operations** | `findById()`, `find()` | Data retrieval |
| **Data Indexing** | Email indexes | Query optimization |

---

## 🗄️ Database Schema Design

### **User Model**
```javascript
{
  _id: ObjectId,
  name: String,
  email: String (unique),
  password: String (hashed),
  phone: String,
  createdAt: Date,
  updatedAt: Date
}
```

### **Movie Model**
```javascript
{
  _id: ObjectId,
  title: String,
  genre: String,
  language: String,
  duration: Number (minutes),
  releaseDate: Date,
  price: Number,
  totalSeats: Number,
  availableSeats: Number,
  description: String,
  imageUrl: String,
  createdAt: Date,
  updatedAt: Date
}
```

### **Booking Model**
```javascript
{
  _id: ObjectId,
  bookingId: String (unique),
  userId: ObjectId (ref: User),
  movieId: ObjectId (ref: Movie),
  seatsBooked: [Number],
  numberOfSeats: Number,
  totalPrice: Number,
  bookingDate: Date,
  showTime: String,
  status: String (pending/confirmed/cancelled),
  paymentMethod: String,
  createdAt: Date,
  updatedAt: Date
}
```

---

## 🌐 REST API Endpoints

### **Authentication Endpoints**

| Method | Endpoint | Request Body | Response | Status |
|--------|----------|-------------|----------|--------|
| POST | `/api/auth/register` | `{name, email, password}` | `{token, user}` | 201 |
| POST | `/api/auth/login` | `{email, password}` | `{token, user}` | 200 |
| GET | `/api/auth/profile` | Headers: `{Authorization}` | `{user}` | 200 |
| POST | `/api/auth/logout` | - | `{message}` | 200 |

### **Movie Endpoints**

| Method | Endpoint | Purpose | Status |
|--------|----------|---------|--------|
| GET | `/api/movies` | Fetch all movies | 200 |
| GET | `/api/movies/:id` | Get movie details | 200 |
| POST | `/api/movies` | Add new movie (admin) | 201 |
| PUT | `/api/movies/:id` | Update movie | 200 |
| DELETE | `/api/movies/:id` | Delete movie (admin) | 200 |

### **Booking Endpoints**

| Method | Endpoint | Purpose | Status |
|--------|----------|---------|--------|
| POST | `/api/bookings` | Create new booking | 201 |
| GET | `/api/bookings` | Get user bookings | 200 |
| GET | `/api/bookings/:id` | Get booking details | 200 |
| PUT | `/api/bookings/:id/cancel` | Cancel booking | 200 |
| GET | `/api/bookings/stats/revenue` | Get revenue stats (admin) | 200 |

---

## 🚀 Installation & Setup Guide

### **Prerequisites**

Ensure you have the following installed:

- **Node.js** v18 or higher ([Download](https://nodejs.org/))
- **MongoDB** v5.0+ ([Local](https://docs.mongodb.com/manual/installation/) or [Atlas](https://www.mongodb.com/cloud/atlas))
- **npm** v9+ (comes with Node.js)
- **Git** for version control

---

### **Step 1️⃣ - Clone Repository**

```bash
git clone https://github.com/MohitRam112006/movie-ticket-booking.git
cd movie-ticket-booking
```

---

### **Step 2️⃣ - Backend Setup**

#### Install Dependencies
```bash
cd backend
npm install
```

#### Create Environment Variables
Create a `.env` file in the `backend/` directory:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Configuration
MONGODB_URI=mongodb://127.0.0.1:27017/moviebooking
# OR for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/moviebooking

# JWT Authentication
JWT_SECRET=your_super_secret_key_here_min_32_chars
JWT_EXPIRE=7d

# CORS Configuration
FRONTEND_URL=http://localhost:3000

# Email Configuration (Optional)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
```

#### Start MongoDB

**If using local MongoDB:**
```bash
# On Windows
mongod

# On macOS/Linux
brew services start mongodb-community
```

**If using MongoDB Atlas:**
- Ensure your IP is whitelisted
- Update `MONGODB_URI` in `.env` with your connection string

#### Start Backend Server
```bash
npm start
# Server runs on http://localhost:5000
```

---

### **Step 3️⃣ - Frontend Setup**

#### Open New Terminal & Install Dependencies
```bash
cd ticket-frontend
npm install
```

#### Create Environment Variables
Create a `.env` file in the `ticket-frontend/` directory:

```env
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_ENV=development
```

#### Start Frontend Application
```bash
npm start
# Frontend opens at http://localhost:3000
```

---

## 🧪 Testing API Endpoints

Use **Postman**, **Thunder Client**, or **cURL** to test APIs:

### **1. Register User**
```
POST http://localhost:5000/api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "SecurePass123!"
}
```

### **2. Login User**
```
POST http://localhost:5000/api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "SecurePass123!"
}
```

### **3. Add Movie**
```
POST http://localhost:5000/api/movies
Content-Type: application/json
Authorization: Bearer <YOUR_JWT_TOKEN>

{
  "title": "Avengers: Endgame",
  "genre": "Action",
  "language": "English",
  "duration": 181,
  "releaseDate": "2024-06-01",
  "price": 250,
  "totalSeats": 100,
  "description": "Epic superhero movie",
  "imageUrl": "https://example.com/image.jpg"
}
```

### **4. Get All Movies**
```
GET http://localhost:5000/api/movies
```

### **5. Book Tickets**
```
POST http://localhost:5000/api/bookings
Content-Type: application/json
Authorization: Bearer <YOUR_JWT_TOKEN>

{
  "movieId": "movie_id_here",
  "seatsBooked": [1, 2, 3],
  "showTime": "18:00",
  "paymentMethod": "credit_card"
}
```

### **6. Get User Bookings**
```
GET http://localhost:5000/api/bookings
Authorization: Bearer <YOUR_JWT_TOKEN>
```

---

## 🔐 Security Features

| Feature | Implementation |
|---------|-----------------|
| **Password Hashing** | Bcrypt with salt rounds |
| **JWT Authentication** | Token-based auth with expiry |
| **CORS Protection** | Cross-origin request validation |
| **Environment Variables** | Sensitive data in `.env` |
| **Input Validation** | Server-side data validation |
| **Rate Limiting** | Prevent brute-force attacks |
| **HTTPS Ready** | Production SSL support |

---

## 📊 Sample Data for Testing

### Sample Movie Data
```javascript
[
  {
    title: "Inception",
    genre: "Sci-Fi",
    language: "English",
    duration: 148,
    price: 300,
    totalSeats: 150,
    description: "A mind-bending thriller"
  },
  {
    title: "The Dark Knight",
    genre: "Action/Crime",
    language: "English",
    duration: 152,
    price: 280,
    totalSeats: 120,
    description: "Batman epic sequel"
  }
]
```

---

## 🐛 Troubleshooting

| Problem | Solution |
|---------|----------|
| **MongoDB Connection Error** | Check if MongoDB is running; verify `MONGODB_URI` in `.env` |
| **CORS Error** | Ensure `FRONTEND_URL` in backend `.env` matches your frontend URL |
| **JWT Token Issues** | Verify token in Authorization header: `Bearer <token>` |
| **Port Already in Use** | Change `PORT` in `.env` or kill process using the port |
| **Dependencies Not Installing** | Delete `node_modules` and `package-lock.json`, then `npm install` |
| **React Not Starting** | Clear cache: `npm cache clean --force` |

---

## 📁 Environment Variables Reference

### Backend `.env`
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://127.0.0.1:27017/moviebooking
JWT_SECRET=your_secret_key_32_chars_minimum
JWT_EXPIRE=7d
FRONTEND_URL=http://localhost:3000
```

### Frontend `.env`
```env
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_ENV=development
```

---

## 📈 Performance Optimization

- **Database Indexing** on frequently queried fields
- **Pagination** for movie listings
- **Lazy Loading** for images
- **Caching** of user sessions
- **Compression** for API responses
- **Code Splitting** in React

---

## 🤝 Contributing Guidelines

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/YourFeature`
3. Commit changes: `git commit -m 'Add YourFeature'`
4. Push to branch: `git push origin feature/YourFeature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 👨‍💻 Author

**Mohit Ram**
- GitHub: [@MohitRam112006](https://github.com/MohitRam112006)
- Email: contact@example.com

---

## 📞 Support & Contact

For issues, questions, or suggestions:
- 📧 Email: support@moviebooking.com
- 🐛 Report Issues: [GitHub Issues](https://github.com/MohitRam112006/movie-ticket-booking/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/MohitRam112006/movie-ticket-booking/discussions)

---

## 🎓 Learning Resources

- [Node.js Documentation](https://nodejs.org/docs/)
- [Express.js Guide](https://expressjs.com/)
- [MongoDB Tutorial](https://docs.mongodb.com/manual/)
- [React Documentation](https://react.dev/)
- [JWT Authentication](https://jwt.io/)
- [REST API Best Practices](https://restfulapi.net/)

---

**Last Updated:** May 12, 2026  
**Status:** ✅ Production Ready
