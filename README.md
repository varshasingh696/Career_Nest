# JobQuest – Full Stack Job Portal

JobQuest is a modern full-stack job platform designed to connect employers and job seekers through a secure and efficient hiring system.

Employers can post and manage jobs, while job seekers can explore opportunities and submit applications through an intuitive interface.

---

## Features

### Authentication & Security
- User Registration and Login
- Secure Logout
- JWT Authentication
- HTTP-only Cookie Sessions
- Password Encryption using bcrypt
- Role-Based Access Control

---

## Employer Features
- Create Job Posts
- Update Job Listings
- Delete Jobs
- Manage Posted Jobs
- View Applicants

---

## Job Seeker Features
- Browse Available Jobs
- Apply for Jobs
- Track Applications
- Manage Profile

---

## Core Functionalities
- RESTful APIs
- CRUD Operations
- Protected Routes
- Ownership Authorization
- Centralized Error Handling
- Session Persistence
- Responsive User Interface

---

## Tech Stack

### Frontend
- React.js
- Vite
- JavaScript
- CSS

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Security
- JWT
- bcrypt
- HTTP-only Cookies

---

## Project Structure

```bash
JobQuest/
│
├── frontend/        # React Client
├── backend/         # Express Server
│
├── routes/          # API Routes
├── controllers/     # Business Logic
├── models/          # Database Schemas
├── middlewares/     # Authentication & Authorization
├── utils/           # Helper Functions
```

---

## Installation

### Clone Repository
```bash
git clone <repository-url>
cd JobQuest
```

### Install Dependencies

Backend
```bash
cd backend
npm install
```

Frontend
```bash
cd frontend
npm install
```

---

## Environment Variables

Create `.env` files inside frontend and backend folders.

### Backend (.env)

```env
PORT=
NODE_ENV=
FRONTEND_URLS=
MONGO_URI=
MONGO_DB_NAME=
JWT_SECRET_KEY=
JWT_EXPIRE=
COOKIE_EXPIRE_DAYS=

CLOUDINARY_CLIENT_NAME=
CLOUDINARY_CLIENT_API=
CLOUDINARY_CLIENT_SECRET=
```

---

### Frontend (.env)

```env
VITE_API_URL=http://localhost:5000/api/v1
```

---

## Run Project

Start Backend
```bash
cd backend
npm run dev
```

Start Frontend
```bash
cd frontend
npm run dev
```

---

## API Modules

### User APIs
- Register User
- Login User
- Logout User
- Get Profile

### Job APIs
- Create Job
- Update Job
- Delete Job
- Fetch All Jobs

### Application APIs
- Apply for Job
- View Applications
- Manage Applicants

---

## Deployment

### Backend Deployment
Deploy backend using Render.

- Build Command:
```bash
npm install
```

- Start Command:
```bash
npm start
```

Add all backend environment variables before deployment.

---

### Frontend Deployment
Deploy frontend using Vercel or Netlify.

- Build Command
```bash
npm run build
```

- Publish Directory
```bash
dist
```

Set:

```env
VITE_API_URL=<your-backend-url>/api/v1
```

---

## Project Highlights
- Secure Authentication System
- Role-Based Job Management
- Complete Job Application Workflow
- Modular Backend Architecture
- Production Ready Deployment Setup

---

## Submission Checklist

- Source Code Uploaded to GitHub  
- Backend Deployed  
- Frontend Deployed  
- Authentication Verified  
- Protected Routes Tested  
- GitHub and Live Links Ready  

---

## Future Enhancements
- Resume Upload
- Job Search Filters
- Email Notifications
- Admin Dashboard
- Interview Scheduling

---

## Author

**Varsha Singh**  
Developed as a Full Stack Job Portal Project using MERN technologies.  

This project was designed and developed as a complete end-to-end job portal system, focusing on secure authentication, scalable backend architecture, and real-world application workflows.

🔗 GitHub: https://github.com/varshasingh696
🔗 LinkedIn: https://www.linkedin.com/in/varsha-singh-587191287