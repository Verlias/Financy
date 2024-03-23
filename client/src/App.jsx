import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Home-Page/Home-Main.jsx";
import About from "./About-Page/About.jsx";
import Learn from "./Learn-Page/Learn.jsx";
import BankingReadingR1 from './Banking-Learning/BankingLearnR1.jsx';

function App() {
  return (
    <>
      <Router>
        <Routes>
            <Route index element={<Home />}/>
            <Route path="/Home" element={<Home />}/>
            <Route path="/About" element={<About />}/>
            <Route path="/Learn" element={<Learn />}/>


            {/*Routes for Learning Pages */}
              {/*Routes for Banking Pages */}
              <Route path="/BankingR1" element={<BankingReadingR1 />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
