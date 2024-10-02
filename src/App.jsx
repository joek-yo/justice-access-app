// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Import routing components
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './styles/App.css'; // Import custom CSS file
import HomePage from './pages/HomePage'; // Import HomePage component
import LoginPage from './pages/LoginPage'; // Import LoginPage component
import ResourcePage from './pages/ResourcePage'; // Import ResourcePage
import UserProfile from './pages/UserProfile'; // Import UserProfile component
import { AuthProvider } from './context/AuthContext'; // Import AuthProvider
import ProtectedRoute from './components/ProtectedRoute'; // Import ProtectedRoute

const App = () => {
  return (
    <AuthProvider> {/* Wrap the application in AuthProvider for authentication context */}
      <Router>
        <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">Justice Access App</Link>
              <button 
                className="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarNav" 
                aria-controls="navbarNav" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/resources">Resources</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/profile">Profile</Link> {/* Link for User Profile */}
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="container mt-4">
            <Routes>
              <Route 
                path="/" 
                element={
                  <ProtectedRoute>
                    <HomePage />
                  </ProtectedRoute>
                } 
              /> {/* Protected Home Route */}
              <Route path="/login" element={<LoginPage />} /> {/* Public Login Route */}
              <Route 
                path="/resources" 
                element={
                  <ProtectedRoute>
                    <ResourcePage />
                  </ProtectedRoute>
                } 
              /> {/* Protected Resources Route */}
              <Route 
                path="/profile" 
                element={
                  <ProtectedRoute>
                    <UserProfile />
                  </ProtectedRoute>
                } 
              /> {/* Protected User Profile Route */}
            </Routes>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
