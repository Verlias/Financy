import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Home-Page/Home-Main.jsx";
import About from "./About-Page/About.jsx";
import Learn from "./Learn-Page/Learn.jsx";
import SignUp from './Sign-Up-Page/Sign-Up.jsx';

function App() {
  return (
    <>
      <Router>
        <Routes>
            <Route index element={<Home />}/>
            <Route path="/Home" element={<Home />}/>
            <Route path="/About" element={<About />}/>
            <Route path="/Learn" element={<Learn />}/>
            <Route path="/Sign-Up" element={<SignUp />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
