# Property Listing Platform

## Project Overview
This repository contains the code for a mini Property Listing Platform, developed as part of the Urs Tech Solution hiring task for the MERN Stack Developer position. The platform features a React-based frontend with a searchable property listing interface and a Spring Boot-based backend with REST APIs, JWT-based authentication, and Spring Security for admin access.

## Folder Structure
- `/frontend`: React-based frontend application with a home page, property details page, admin page, and search functionality.
- `/backend`: Spring Boot-based backend with REST APIs and authentication.

## Features
### Frontend (React)
- **Home Page**: Displays property cards with image, title, price, and location.
- **Property Details Page**: Dynamic route for individual property details.
- **Admin Page**: Protected route with a form to add new properties (integration pending).
- **Search Functionality**: Option to filter properties by location or price (implemented).
- **Responsive UI**: Designed with a clean and functional layout (further enhancements in progress).

### Backend (Spring Boot)
- **REST APIs**:
  - `GET /api/properties`: Fetch all properties.
  - `GET /api/properties/:id`: Fetch details of a specific property.
  - `POST /api/properties`: Add a new property (admin-only).
- **Authentication**: JWT-based authentication with a hardcoded admin user (email: admin@test.com, password: admin123).
- **Security**: Integrated Spring Security for protecting admin routes.
- **Database**: H2 (local) database (MongoDB configurable).

## How to Run Locally
### Backend
1. Navigate to `/backend`.
2. Ensure Java 17+ and Maven are installed.
3. Run `mvn spring-boot:run`.
4. Access APIs at `http://localhost:8090/api/properties`.

### Frontend
1. Navigate to `/frontend`.
2. Run `npm install` and then `npm start`.
3. Access at `http://localhost:3000` (note: backend integration pending).

## Prerequisites
- **Backend**: Java 17+, Maven, H2 database (or MongoDB Atlas).
- **Frontend**: Node.js, npm.

## Current Status
- Backend APIs are fully functional and tested with JWT authentication and Spring Security.
- Frontend is built with React, including search functionality, but it integrated with the backend as soon.
- Deployment is pending due to time constraints.

## Future Updates
- Integrate frontend with backend APIs.
- Enhance UI to match 99acres-style responsiveness.
- Deploy on Vercel (frontend) and Render/Heroku (backend).
- Optimize search and filter features.