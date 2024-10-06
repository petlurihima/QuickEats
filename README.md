# QuickEats
QuickEats is a full-stack food ordering application built using the **MERN stack** (MongoDB, Express.js, React.js, and Node.js). Users can browse food items, add them to their cart, place orders, and view their order history. The app also includes user authentication with login and signup functionalities.

## Features

- **User Authentication**: Users can sign up, log in, and log out. Authentication is handled using JWT tokens.
- **Food Ordering**: Users can browse a variety of food items, add them to the cart, and place orders.
- **Cart**: Users can manage their food items in the cart.
- **Order History**: Users can view their past orders.
- **Responsive UI**: Built with React, ensuring the app is accessible and easy to use.

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
  
## Getting Started

### Prerequisites

Before you can run the project, you will need:

- **Node.js** installed on your machine
- **MongoDB** (either locally or a cloud instance like MongoDB Atlas)
  
### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/quickeats.git
   ```

2. Navigate to the project directory:

   ```bash
   cd quickeats
   ```

3. Install the required dependencies for both the client and server:

   ```bash
   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

### Configuration

1. **Backend Configuration**:
   - Create a `.env` file in the `backend` directory and add the following environment variables:

     ```bash
     MONGO_URI=<your-mongodb-uri>
     JWT_SECRET=<your-jwt-secret>
     ```

   - Example `.env`:

     ```bash
     MONGO_URI=mongodb://localhost:27017/quickeats
     JWT_SECRET=mysecretkey
     ```

2. **Frontend Configuration**:
   - Make sure that the frontend is pointing to the correct backend server. Check the API endpoints in your React components (e.g., `fetch("http://localhost:8080/api/...")`).

### Running the Application

1. **Run the backend server**:
   In the `backend` folder, run the following command to start the backend server:

   ```bash
   npm start
   ```

   The backend will run on `http://localhost:8080`.

2. **Run the frontend server**:
   In the `frontend` folder, run the following command to start the frontend React app:

   ```bash
   npm start
   ```

   The frontend will run on `http://localhost:3000`.

### Project Structure

```bash
quickeats/
│
├── backend/               # Backend (Node.js & Express)
│   ├── models/            # Mongoose models (User, Orders, etc.)
│   ├── routes/            # Express routes (API endpoints)
│   └── index.js          # Entry point for backend
│
├── frontend/              # Frontend (React.js)
│   ├── src/
│   │   ├── components/    # Reusable components (Navbar, Footer, etc.)
│   │   ├── screens/       # Pages (Home, Login, Signup, Orders, Cart)
│   │   ├── App.js         # Main React App component
│   │   └── index.js       # Entry point for React
│
├── README.md              # This README file
└── package.json           # Project dependencies and scripts
```

## API Endpoints

### Authentication

- `POST /api/auth/signup`: Register a new user
- `POST /api/auth/login`: Authenticate an existing user

### Orders

- `POST /api/myOrderData`: Fetch the user's order history

### Cart

- `POST /api/cart`: Add items to the user's cart
- `GET /api/cart`: Get the user's cart items

## Usage

1. **Signup/Login**: Users can create an account or log in using an existing account.
2. **Browse Food Items**: Browse available food items and add them to the cart.
3. **Place an Order**: Once the cart is filled, place an order, which will be saved in the database.
4. **View Order History**: Check past orders on the "My Orders" page.

## Future Enhancements

- **Payment Integration**: Integrate payment gateways for placing orders.
- **Admin Panel**: Add functionality for restaurant owners/admins to manage food items and orders.
- **Real-time Order Tracking**: Implement order status updates in real time.
