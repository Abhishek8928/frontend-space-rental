# Space Rental Application

## Overview
This application allows users to manage space rentals efficiently.

## API Endpoints
- **GET** `/api/v1/spaces`: View all space rentals.
- **POST** `/api/v1/spaces`: Create a new space for rent.
- **PUT** `/api/v1/spaces/:spaceId`: Update a specific space for rent.
- **DELETE** `/api/v1/spaces/:spaceId`: Delete a specific space for rent.

## Frontend Setup
- **Bundled using Vite**: For fast development and build processes.
- **Form Validation**: Handled using the Validator package.
- **Styling**: Utilizes Tailwind CSS for a modern and responsive design.
- **State Management**: Managed with Redux to showcase multiple components.
- **Custom Hooks**: Created for better state management.
- **API Calls**: Made using Axios.

## Getting Started
1. **Clone the repository**:
   ```bash
   git clone https://github.com/Abhishek8928/frontend-space-rental.git
   ```
2. **Navigate to the project directory**:
   ```bash
   cd frontend-space-rental
   ```
3. **Install the dependencies**:
   ```bash
   npm install
   ```
4. **Start the development server**:
   ```bash
   npm run dev
   ```

## Backend
- The backend runs on **http://localhost:3000**. Ensure that the backend server is started before accessing the frontend.

## App Layout
- **Header**: Contains the navigation and branding.
- **Content**: Rendered using `<Outlet>` based on the routes.
- **Footer**: Displays additional information and links.

