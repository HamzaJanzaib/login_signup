# Book Store API Server

## Overview

This is a RESTful API server for a book store application. It provides endpoints for user authentication (registration and login) and product management. The server is built with Node.js, Express, and MongoDB.

## Features

- User authentication (register, login)
- JWT-based authentication
- Product management (create, retrieve)
- Input validation middleware
- MongoDB database integration
- CORS support
- Static file serving

## Tech Stack

- **Node.js**: JavaScript runtime
- **Express**: Web framework
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB object modeling
- **JWT**: JSON Web Tokens for authentication
- **bcrypt**: Password hashing
- **dotenv**: Environment variable management
- **cors**: Cross-Origin Resource Sharing

## Prerequisites

- Node.js (v16.20.1 or higher)
- MongoDB database (local or Atlas)

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Install dependencies:
   ```
   cd server
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=5000
   MONGO_URI=<your-mongodb-connection-string>
   JWT_SECRET=<your-jwt-secret-key>
   ```

## Running the Server

Development mode:
```
npm start
```

This will start the server using nodemon, which automatically restarts the server when changes are detected.

## API Endpoints

### User Routes

- **GET /users/register**: Test endpoint for registration
- **GET /users/login**: Test endpoint for login
- **POST /users/register**: Register a new user
  - Required fields: firstname, lastname, email, password, age, phone, gender
  - Request body example:
    ```json
    {
      "firstname": "John",
      "lastname": "Doe",
      "email": "john@example.com",
      "password": "securepassword123",
      "age": "30",
      "phone": "1234567890",
      "gender": "male"
    }
    ```
  - Response: 
    - Success (201 Created): Returns the created user object (excluding password)
    - Error (400 Bad Request): Returns validation errors
- **POST /users/login**: Login a user
  - Required fields: email, password
  - Request body example:
    ```json
    {
      "email": "john@example.com",
      "password": "securepassword123"
    }
    ```
  - Response:
    - Success (200 OK): Returns JWT token
    - Error (401 Unauthorized): Returns error message for invalid credentials

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

## Authentication

The API uses JWT (JSON Web Tokens) for authentication. When a user logs in successfully, the server returns a token that should be included in the Authorization header for protected routes.

## Validation

Input validation is implemented using custom middleware:

- **validregister**: Validates registration input
- **validlogin**: Validates login input

## Error Handling

The API returns appropriate HTTP status codes and error messages:

- 200: Success
- 201: Resource created
- 400: Bad request (validation errors)
- 401: Unauthorized
- 500: Internal server error

## Frontend Integration

The server is configured to serve static files from the `Client/dist` directory, making it easy to deploy both frontend and backend together.

## License

ISC
