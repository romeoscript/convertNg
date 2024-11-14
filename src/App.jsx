import React from "react";
import "./App.css";
import Main from "./layout/Main";
// import AdminLayout from "./layout/AdminLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AboutPage from "./pages/Aboutpage";
import ContactPage from "./pages/ContactPage";
import AuthLayout from "./layout/AuthLayout";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
// import AdminDashboard from "./pages/admin/AdminDashboard";

function App() {
  const isAdmin = true; // Replace with real authentication logic

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Main />}>
          <Route index element={<Homepage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>

        {/* Admin Routes */}
        {isAdmin && (
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<SignUpPage />} />
            {/* Add more admin routes here */}
          </Route>
        )}
      </Routes>
    </Router>
  );
}

export default App;
