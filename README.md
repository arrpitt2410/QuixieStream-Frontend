# QuixieStream-Frontend

## Description

This project is the frontend component of QuixieStream, a live streaming platform. It provides users with the ability to connect, create, and captivate audiences through seamless live streaming experiences.  The frontend is built with React and utilizes various libraries for routing, state management, and real-time communication.

## Features and Functionality

*   **User Authentication:**  Users can create accounts, log in, and manage their profiles. Authentication is handled using `axios` to communicate with the backend API.
*   **Home Page:** Displays a hero section with a call to action (signup) for unauthenticated users, and a "Coming Soon" message for authenticated users.
*   **Stream Creation:** Allows authenticated users to create new streams by providing a title and description.
*   **Live Streaming:** Enables users to start and stop their camera to begin or end a live stream.  Uses `socket.io-client` for real-time communication.
*   **Profile Management:**  Authenticated users can view their profile information (name, email).
*   **Routing:** Utilizes `react-router-dom` for navigating between different pages (Home, Login, Signup, Profile, StreamCreate, Streaming).
*   **Real-time communication:** Implements video call between users using `socket.io-client`, `simple-peer` and `webrtc` technology.

## Technology Stack

*   **React:** A JavaScript library for building user interfaces.
*   **React Router DOM:**  For handling client-side routing.
*   **Axios:**  For making HTTP requests to the backend API.
*   **Socket.IO Client:** For real-time, bidirectional communication between the client and server (used for streaming).
*   **Simple Peer:** For WebRTC peer-to-peer connections.
*   **React Hot Toast:** For displaying notifications.
*   **DaisyUI:** Tailwind CSS components.
*   **JavaScript:** Programming language.

## Prerequisites

Before running the application, ensure you have the following installed:

*   **Node.js:** (version >= 14)
*   **npm** or **yarn:** Package managers for JavaScript.

## Installation Instructions

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/arrpitt2410/QuixieStream-Frontend.git
    cd QuixieStream-Frontend
    ```

2.  **Install dependencies:**

    ```bash
    npm install  # or yarn install
    ```

## Usage Guide

1.  **Start the development server:**

    ```bash
    npm run dev # or yarn dev
    ```

    This will start the application at `http://localhost:5173/` (or another port if 5173 is in use).

2.  **Access the application:**

    Open your web browser and navigate to the address provided by the development server.

3.  **Register/Login:**
    Navigate to the `/signup` or `/login` routes to create a new account or log in with existing credentials.

4.  **Start Streaming (after authentication):**
    After authentication the user can access `/newstream` route to create stream, then redirect to `/stream` route to initiate stream.

## API Documentation

The frontend interacts with the backend API at `https://quixiestream-backend.onrender.com`. The following endpoints are used:

*   **`GET https://quixiestream-backend.onrender.com/users/me`:**  Retrieves user information based on the session (requires cookies).  Used in `src/App.jsx` to check authentication status and set user context.
*   **`POST https://quixiestream-backend.onrender.com/users/login`:**  Logs in a user.  Requires `email` and `password` in the request body. Used in `src/components/Login.jsx`.
*   **`POST https://quixiestream-backend.onrender.com/users/signup`:**  Registers a new user. Requires `name`, `email`, and `password` in the request body. Used in `src/components/Signup.jsx`.

**Note:** The stream creation endpoint is currently pointing to `http://localhost:3000/streams/new` which should be updated to the appropriate backend API endpoint.

## Contributing Guidelines

Contributions are welcome! To contribute to this project, please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with descriptive commit messages.
4.  Push your changes to your fork.
5.  Submit a pull request to the main repository.

## License Information

No license was specified for this project. All rights are reserved unless otherwise specified.

## Contact/Support Information

Email : arrpittiwari@gmail.com