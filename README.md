# 🔐 Secure Auth API & Dashboard

A complete full-stack authentication system built with Node.js, Express, and MongoDB. This project demonstrates secure user registration, login flow, and JWT-based route protection, served alongside a vanilla JavaScript frontend.

## 🚀 Features

* **User Registration:** Secure signup with encrypted passwords using `bcryptjs`.
* **Authentication:** Login system that issues JSON Web Tokens (JWT) for session management.
* **Protected Routes:** Custom middleware to verify tokens and restrict access to private endpoints.
* **Full-Stack Integration:** Includes a built-in frontend dashboard to interact with the API seamlessly.
* **Cloud Ready:** Configured for easy deployment on platforms like Render, using MongoDB Atlas for database hosting.

## 🛠️ Tech Stack

**Backend:**
* Node.js & Express.js
* MongoDB & Mongoose (ODM)
* JWT (JSON Web Tokens) for authentication
* Bcrypt.js for password hashing

**Frontend:**
* HTML5 / CSS3
* Vanilla JavaScript (ES6 Fetch API)

## 📂 Project Structure

```text
├── middleware/
│   └── authMiddleware.js    # JWT verification logic
├── models/
│   └── User.js              # Mongoose schema for user data
├── public-frontend/
│   ├── index.html           # Login/Signup UI
│   ├── dashboard.html       # Protected dashboard UI
│   ├── script.js            # Frontend API calls & token handling
│   └── style.css            # Styling
├── routes/
│   ├── auth.js              # Signup, login, and user routes
│   └── secret.js            # Example of a protected route
├── server.js                # Entry point and server configuration
└── package.json




🔒 Environment Variables
To run this project, you will need to add the following environment variables to your .env file (or your hosting provider's settings):

MONGO_URI = Your MongoDB connection string
JWT_SECRET = A secure random string for signing tokens
PORT = (Optional) Port number for the server, defaults to 5000

📡 API Endpoints
Authentication Routes (/api/auth)

<img width="917" height="366" alt="image" src="https://github.com/user-attachments/assets/079ad1b1-40c9-4042-ab81-91f8b11a10f9" />

Protected Routes

<img width="899" height="139" alt="image" src="https://github.com/user-attachments/assets/e67ad4c0-5db6-4ee0-b8d9-9a064ef86083" />
