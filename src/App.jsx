import React from "react";
import "./App.css";
import Main from "./layout/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AboutPage from "./pages/Aboutpage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <>
      <Router>
        <Main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage/>} />
          </Routes>
        </Main>
      </Router>
    </>
  );
}

export default App;
