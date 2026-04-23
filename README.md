# JobQuest (Round 2 Ready)

JobQuest is a full-stack job platform where:
- Employers can post, manage, and delete jobs.
- Job Seekers can browse jobs and submit applications.
- Both roles can securely register, login, and logout.

The project is now upgraded to production-ready standards for the Cleanian Round 2 assignment.

## Production Features Implemented

- Real authentication flow:
  - Signup/Register
  - Login
  - Secure logout
  - JWT-based auth with HTTP-only cookies
  - Password hashing with `bcrypt`
- Structured backend architecture:
  - Modular `routes`, `controllers`, `models`, `middlewares`, `utils`
  - REST APIs for users, jobs, and applications
  - Centralized error handling
  - Role-based and ownership access checks
- Database integration:
  - MongoDB connection via Mongoose
  - User/Job/Application schemas
  - Secure storage for auth data
  - CRUD operations for jobs and applications
- Frontend improvements:
  - Central API client with environment-based base URL
  - Protected routes by auth + role
  - Improved auth/session bootstrapping
  - Better API error fallback messages
  - Responsive UI preserved from existing design
- Deployment readiness:
  - Environment variable support (`.env.example`)
  - Production-safe cookie settings
  - Build verified (`vite build`)

## Tech Stack

- Frontend: React + Vite
- Backend: Node.js + Express
- Database: MongoDB + Mongoose
- Auth/Security: JWT + bcrypt + HTTP-only cookies

## Project Structure

- `frontend/` - React client
- `backend/` - Express API server

## Local Setup

### 1) Clone and install

```bash
git clone <your-repo-url>
cd JobQuest
cd backend && npm install
cd ../frontend && npm install
```

### 2) Configure environment files

Create `.env` files using:
- `backend/.env.example`
- `frontend/.env.example`

### 3) Start development servers

Backend:
```bash
cd backend
npm run dev
```

Frontend:
```bash
cd frontend
npm run dev
```

## Environment Variables

### Backend (`backend/.env`)

- `PORT`
- `NODE_ENV`
- `FRONTEND_URLS` (comma-separated origins)
- `MONGO_URI`
- `MONGO_DB_NAME`
- `JWT_SECRET_KEY`
- `JWT_EXPIRE`
- `COOKIE_EXPIRE_DAYS`
- `CLOUDINARY_CLIENT_NAME`
- `CLOUDINARY_CLIENT_API`
- `CLOUDINARY_CLIENT_SECRET`

### Frontend (`frontend/.env`)

- `VITE_API_URL` (example: `http://localhost:5000/api/v1`)

## Deployment (Render + Vercel/Netlify)

### Backend on Render

1. Create a new Web Service from `backend`.
2. Build command: `npm install`
3. Start command: `npm start`
4. Add backend environment variables from `backend/.env.example`.
5. Set `NODE_ENV=production`.
6. Set `FRONTEND_URLS` to your frontend deployed URL.

### Frontend on Vercel or Netlify

1. Deploy `frontend`.
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Add `VITE_API_URL` pointing to your Render API URL + `/api/v1`.

## Submission Checklist

- [ ] Push clean code to GitHub
- [ ] Deploy backend
- [ ] Deploy frontend
- [ ] Verify signup/login/logout flow on deployed app
- [ ] Verify protected routes and role-specific pages
- [ ] Submit GitHub + live links
