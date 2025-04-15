# Book Store Client Application

## Overview

This is the frontend client for the Book Store application. It's built with React and Vite, providing a modern and responsive user interface for interacting with the Book Store API.

## Features

- User authentication (register, login)
- Responsive design with styled-components
- React Router for navigation
- Form validation
- JWT token storage
- API integration with Axios

## Tech Stack

- **React**: UI library
- **Vite**: Build tool and development server
- **React Router**: Client-side routing
- **Styled Components**: CSS-in-JS styling
- **ESLint**: Code linting
- **Axios**: HTTP client for API requests

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Book Store API server running

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Install dependencies:
   ```
   cd client
   npm install
   ```

3. Create a `.env` file in the root of the client directory with the following content:
   ```
   VITE_API_URL=http://localhost:5000/api
   ```

## Running the Application

Development mode:
```
npm run dev
```

Build for production:
```
npm run build
```

Preview production build:
```
npm run preview
```

## Application Structure

- `src/`: Source code
  - `components/`: React components
    - `app/`: Main application components
      - `Home.jsx`: Home page component
      - `Login.jsx`: Login form component
      - `Register.jsx`: Registration form component
  - `services/`: API service functions
    - `api.js`: Axios instance and API methods
  - `App.jsx`: Main application component with routing
  - `main.jsx`: Application entry point
  - `index.css`: Global styles

## Pages

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

## API Integration

The client communicates with the Book Store API server using Axios. API calls are centralized in the `src/services/api.js` file.

Example API call:

```javascript
import api from '../services/api';

const login = async (email, password) => {
  try {
    const response = await api.post('/users/login', { email, password });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
```

Make sure the API server is running and accessible at the correct URL (default: http://localhost:5000/api).

## Styling

The application uses styled-components for styling, providing a clean and modular approach to CSS. Each component contains its own styled wrapper with component-specific styles.

## Authentication Flow

1. User registers or logs in
2. On successful login, the server returns a JWT token
3. The token is stored in localStorage
4. The token is added to the Authorization header for subsequent API requests
5. The user is redirected to the dashboard

## Error Handling

API errors are caught and displayed to the user using a toast notification system or inline error messages.

## Development

### ESLint Configuration

The project uses ESLint for code linting with configurations for React. Run the linter with:

```
npm run lint
```

### API Mocking

For development without a backend, consider using tools like Mock Service Worker (MSW) to mock API responses.

## License

ISC
