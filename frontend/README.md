# Fullstack React + Node.js Map & Dashboard App

## Project Overview
This project is a full-stack application featuring a React frontend and Node.js (Express) backend. It includes secure JWT-based authentication, a dynamic dashboard with clickable cards, and an interactive map of India using Leaflet.

## Features
- JWT Authentication
- Login Page with protected routes
- Dashboard displaying card components
- Clicking a card navigates to the Map View
- Map View of India with zoom in/out features
- Responsive, styled UI using Styled components

---

## Folder Structure

root/
│
├── backend
│   ├── middleware
│   │   └── authMiddleware.js
│   ├── routes
│   │   ├── auth.js
│   │   ├── dashboard.js
│   │   └── map.js
│   ├── .env
│   └── server.js
│
└── frontend
    └── src
        ├── components
        │   ├── Dashboard.js
        │   ├── Login.js
        │   └── MapView.js
        ├── api.js
        └── App.js


---

## Backend Setup
### 1. Navigate to backend:
bash
cd backend

### 2. Install dependencies:
bash
npm install express jsonwebtoken bcryptjs cors dotenv

### 3. Create a .env file:

JWT_SECRET=Srinivas@123

### 4. Start server:
bash
node server.js


---

## Frontend Setup
### 1. Navigate to frontend:
bash
cd frontend

### 2. Install dependencies:
bash
npm install react-router-dom axios leaflet react-leaflet styled-components

### 3. Start frontend:
bash
npm start


---

## Packages Used
### Backend:
- express: Handles API routing
- jsonwebtoken: JWT creation and verification
- bcryptjs: Password hashing
- cors: Enable cross-origin requests
- dotenv: Manage environment variables

### Frontend:
- react-router-dom: Client-side routing
- axios: API requests
- leaflet & react-leaflet: Interactive maps
- styled-components: Styling

---


## Usage
- Start backend server on port 5000
- Start frontend on port 3000
- Login with username: admin & password: admin123
- Navigate to dashboard and click cards to view the map.
