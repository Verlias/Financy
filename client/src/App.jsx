import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Home-Page/Home-Main.jsx";
import About from "./About-Page/About.jsx";
import Learn from "./Learn-Page/Learn.jsx";
import BankingReadingR1 from './Banking-Learning/BankingLearnRead1/BankingLearnR1.jsx';
import BankingVideoV1 from './Banking-Learning/BankingLearnVideos/BankingLearnV1.jsx';
import BankingVideoV2 from './Banking-Learning/BankingLearnVideos/BankingLearnV2.jsx';


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
              <Route path="/BankingV1" element={<BankingVideoV1 />}/>
              <Route path="/BankingV2" element={<BankingVideoV2 />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
