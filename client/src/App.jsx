import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Home-Page/Home-Main.jsx";
import About from "./About-Page/About.jsx";
import Learn from "./Learn-Page/Learn.jsx";
import BankingReadingR1 from './Banking-Learning/BankingLearnRead1/BankingLearnR1.jsx';
import BankingVideoV1 from './Banking-Learning/BankingLearnVideos/BankingLearnV1.jsx';
import BankingVideoV2 from './Banking-Learning/BankingLearnVideos/BankingLearnV2.jsx';
import SignUp from "./Sign-Up-Page/Sign-Up.jsx";
import LogIn from './Log-In-Page/Log-In.jsx';
import UserDash from './User-Dash/User-Dash.jsx';
import Courses from './User-Dash/Dash-Components/Courses.jsx';
import Settings from './User-Dash/Dash-Components/Settings.jsx';
import Recommended from './User-Dash/Dash-Components/Recommended.jsx';

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
            <Route path="/Log-In" element={<LogIn />}/>
            {/*Routes for Learning Pages */}
              {/*Routes for Banking Pages */}
              <Route path="/BankingR1" element={<BankingReadingR1 />}/>
              <Route path="/BankingV1" element={<BankingVideoV1 />}/>
              <Route path="/BankingV2" element={<BankingVideoV2 />}/>
              <Route path="/My-Courses" element={<Courses />}/>
              <Route path="/Recommended" element={<Recommended />}/>
              <Route path="/Settings" element={<Settings />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
