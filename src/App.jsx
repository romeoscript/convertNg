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
import DashLayout from "./layout/DashLayout";
import Profile from "./pages/Dashb/Profile";
// import AdminDashboard from "./pages/admin/AdminDashboard";

function App() {

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Main />}>
          <Route index element={<Homepage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>


          <Route path="/auth" element={<AuthLayout />}>
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<SignUpPage />} />
            {/* Add more admin routes here */}
          </Route>
          <Route path="/dashboard" element={<DashLayout />}>
            <Route path="profile" element={<Profile />} />
            <Route path="register" element={<SignUpPage />} />
            {/* Add more admin routes here */}
          </Route>

      </Routes>
    </Router>
  );
}

export default App;
