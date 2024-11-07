import React from "react";
import "./App.css";
import Main from "./layout/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <>
      <Router>
        <Main>
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </Main>
      </Router>
    </>
  );
}

export default App;
