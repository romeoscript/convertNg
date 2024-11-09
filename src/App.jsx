import React from "react";
import "./App.css";
import Main from "./layout/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AboutPage from "./pages/Aboutpage";

function App() {
  return (
    <>
      <Router>
        <Main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </Main>
      </Router>
    </>
  );
}

export default App;
