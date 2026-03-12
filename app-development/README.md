# SyncTalk – Scalable Real-Time Chat Application

SyncTalk is a real-time messaging application built using the **MERN stack (MongoDB, Express.js, React, Node.js)** and **Socket.IO**.
The system enables instant communication between users with a responsive interface and scalable backend architecture.

The application also integrates **Redis for real-time user presence tracking and message scalability**, making it closer to production-level chat systems.

## Features

### Real-Time Messaging

Users can send and receive messages instantly using **WebSocket communication with Socket.IO**.

### User Authentication

Secure login and signup system implemented using **JWT authentication**.

### Online User Tracking

The system tracks active users in real-time and displays currently online users.

### Redis Integration

Redis is used for:

* Online user presence tracking
* Real-time message event scaling using Redis Pub/Sub
* Improving system performance and scalability

### Responsive UI

The frontend is built with **React + TailwindCSS**, ensuring a modern and responsive chat interface.

---

## Tech Stack

Frontend

* React
* Vite
* TailwindCSS
* DaisyUI

Backend

* Node.js
* Express.js
* Socket.IO

Database

* MongoDB

Caching / Scalability

* Redis

Authentication

* JWT (JSON Web Token)

---

## Project Structure

```
client/
   src/
   components/
   pages/

server/
   controllers/
   models/
   routes/
   socket/
   utils/
```

---

## Installation

### Clone the Repository

```
git clone https://github.com/YOUR_USERNAME/synctalk-chat-app.git
```

---

### Install Client Dependencies

```
cd client
npm install
```

---

### Install Server Dependencies

```
cd ../server
npm install
```

---

### Configure Environment Variables

Create a `.env` file inside the **server** directory.

Example:

```
PORT=5000
MONGO_DB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
NODE_ENV=development
REDIS_URL=your_redis_connection_string
```

---

## Running the Application

Start the backend server:

```
cd server
npm run dev
```

Start the frontend client:

```
cd client
npm run dev
```

Open the application in your browser:

```
http://localhost:3000
```

---

## Future Improvements

Possible enhancements for the system:

* Group chat functionality
* File and image sharing
* Message reactions and emojis
* Push notifications
* Message read receipts
* Typing indicators
* Chat search functionality

---

## Project Highlights

This project demonstrates:

* Full-stack MERN application development
* Real-time communication using WebSockets
* Redis-based caching and Pub/Sub architecture
* Scalable backend system design
* Authentication and secure user management

---

## Author

Developed as a full-stack real-time communication system using modern web technologies.
