import React from 'react'

const AddExpense = () => {
  return (
    <div>AddExpense</div>
  )
}

export default AddExpense


import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";

const Home = () => <h2>Home Page</h2>;
const About = () => <h2>About Page</h2>;

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulate authentication
    navigate("/dashboard", { replace: true });
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

const Dashboard = () => {
  const isAuthenticated = true; // Replace with actual authentication logic
  return isAuthenticated ? <h2>Dashboard</h2> : <Navigate to="/login" replace />;
};

const Navigation = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/login">Login</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default Navigation;