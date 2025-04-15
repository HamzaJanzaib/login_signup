# Book Store Application

## Overview

This is a full-stack Book Store application with a Node.js/Express backend and a React frontend. The application allows users to register, login, and browse books. It features user authentication, product management, and a responsive user interface.

## Project Structure

The project is organized into two main directories:

- **Server**: Backend API built with Node.js, Express, and MongoDB
- **Client**: Frontend application built with React and Vite

## Features

### Backend Features
- User authentication (register, login)
- JWT-based authentication
- Product management (create, retrieve)
- Input validation middleware
- MongoDB database integration
- CORS support
- Static file serving

### Frontend Features
- User authentication (register, login)
- Responsive design with styled-components
- React Router for navigation
- Form validation
- JWT token storage

## Tech Stack

### Backend
- **Node.js**: JavaScript runtime
- **Express**: Web framework
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB object modeling
- **JWT**: JSON Web Tokens for authentication
- **bcrypt**: Password hashing
- **dotenv**: Environment variable management
- **cors**: Cross-Origin Resource Sharing

### Frontend
- **React**: UI library
- **Vite**: Build tool and development server
- **React Router**: Client-side routing
- **Styled Components**: CSS-in-JS styling
- **ESLint**: Code linting

## Prerequisites

- Node.js (v16.20.1 or higher)
- MongoDB database (local or Atlas)
- npm or yarn

## Installation and Setup

### Backend Setup

1. Navigate to the server directory:
   ```
   cd Server
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the Server directory with the following variables:
   ```
   PORT=5000
   MONGO_URI=<your-mongodb-connection-string>
   JWT_SECRET=<your-jwt-secret-key>
   ```

### Frontend Setup

1. Navigate to the client directory:
   ```
   cd Client
   ```

2. Install dependencies:
   ```
   npm install
   ```

## Running the Application

### Running the Backend

From the Server directory:
```
npm start
```

This will start the server using nodemon, which automatically restarts the server when changes are detected.

### Running the Frontend

From the Client directory:
```
npm run dev
```

For production build:
```
npm run build
```

## API Endpoints

### User Routes

- **GET /users/register**: Test endpoint for registration
- **GET /users/login**: Test endpoint for login
- **POST /users/register**: Register a new user
  - Required fields: firstname, lastname, email, password, age, phone, gender
- **POST /users/login**: Login a user
  - Required fields: email, password
  - Returns: JWT token

### Product Routes

- **GET /products**: Get all products
- **POST /products/create**: Create a new product
  - Required fields: Title, Author, specialPrice, regularPrice, description, category
  - Optional fields: quantity, rating, reviews, discount, brand, cover, Weight, Width, Length, Height, shipping, returns, availability

## Data Models

### User Model

- firstname: String
- lastname: String
- email: String
- password: String (hashed)
- age: String
- phone: String
- gender: String

### Product Model

- image: Buffer
- Title: String (required)
- Author: String (required)
- specialPrice: Number (required)
- regularPrice: Number (required)
- description: String (required)
- category: String (required, enum: ["Romance", "litrature", "manga", "self-help", "computer-Technology", "history", "socail-science", "science-fiction"])
- quantity: Number (default: 0)
- rating: Number (min: 0, max: 5, default: 0)
- reviews: Array of ObjectIds
- discount: Number (default: 0)
- brand: String
- cover: Array of Strings
- Weight: String
- Width: String
- Length: String
- Height: String
- shipping: String
- returns: String
- availability: Boolean (default: true)

## Frontend Pages

### Home

The landing page with links to register and login pages.

### Register

Allows new users to create an account with the following information:
- First name
- Last name
- Email
- Password
- Age
- Gender
- Phone number

### Login

Allows existing users to log in with their email and password.

## Authentication Flow

1. User registers or logs in through the frontend
2. On successful login, the server returns a JWT token
3. The token is stored in localStorage
4. The user is redirected to the dashboard
5. For protected routes, the token is included in the Authorization header

## Deployment

The server is configured to serve static files from the `Client/dist` directory, making it easy to deploy both frontend and backend together.

To prepare for deployment:

1. Build the frontend:
   ```
   cd Client
   npm run build
   ```

2. Start the server:
   ```
   cd Server
   npm start
   ```

The application will be available at the port specified in your environment variables (default: 5000).

## Development

### Backend Development

The server uses nodemon for automatic restarts during development.

### Frontend Development

The client uses Vite for fast development and hot module replacement. ESLint is configured for code linting.

Run the linter:
```
cd Client
npm run lint
```

## License

ISC
