import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Home-Page/Home-Main.jsx";
import About from "./About-Page/About.jsx";
import Learn from "./Learn-Page/Learn.jsx";
{/*Imports for Banking Learning */}
import BankingReadingR1 from './Banking-Learning/BankingLearnRead/BankingLearnR1.jsx';
import BankingReadingR2 from './Banking-Learning/BankingLearnRead/BankingLearnR2.jsx';
import BankingReadingR3 from './Banking-Learning/BankingLearnRead/BankingLearnR3.jsx';
import BankingVideoV1 from './Banking-Learning/BankingLearnVideos/BankingLearnV1.jsx';
import BankingVideoV2 from './Banking-Learning/BankingLearnVideos/BankingLearnV2.jsx';
import BankingVideoV3 from './Banking-Learning/BankingLearnVideos/BankingLearnV3.jsx';
{/*Imports for Budgeting Learning */}
import BudgetingReadingR1 from './Budgeting-Learning/BudgetingReading/BudgetingLearnR1.jsx';
import BudgetingReadingR2 from './Budgeting-Learning/BudgetingReading/BudgetingLearnR2.jsx';
import BudgetingReadingR3 from './Budgeting-Learning/BudgetingReading/BudgetingLearnR3.jsx';
import BudgetingReadingR4 from './Budgeting-Learning/BudgetingReading/BudgetingLearnR4.jsx';
import BudgetingVideo1 from './Budgeting-Learning/BudgetingVideos/BudgetingVideo1.jsx';
import BudgetingVideo2 from './Budgeting-Learning/BudgetingVideos/BudgetingVideo2.jsx';
import BudgetingVideo3 from './Budgeting-Learning/BudgetingVideos/BudgetingVideo3.jsx';
import BudgetingVideo4 from './Budgeting-Learning/BudgetingVideos/BudgetingVideo4.jsx';


{/*Imports for Investing Learning */}

{/*Imports for Credit and Debt Learning */}

{/*Imports for Financing Higher Education Learning */}

import SignUp from "./Sign-Up-Page/Sign-Up.jsx";
import LogIn from './Log-In-Page/Log-In.jsx';
import UserDash from './User-Dash/User-Dash.jsx';
import Courses from './User-Dash/Dash-Components/Courses.jsx';
import SettingsNew from './User-Dash/Dash-Components/SettingsUpdate.jsx';
import Recommended from './User-Dash/Dash-Components/Recommended.jsx';
import Settings from './User-Dash/Dash-Components/Settings.jsx'
 
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
              <Route path="/BankingR2" element={<BankingReadingR2 />}/>
              <Route path="/BankingR3" element={<BankingReadingR3 />}/>
              <Route path="/BankingV1" element={<BankingVideoV1 />}/>
              <Route path="/BankingV2" element={<BankingVideoV2 />}/>
              <Route path="/BankingV3" element={<BankingVideoV3 />}/>

              {/*Routes for Budgeting Pages */}
              <Route path="/BudgetingR1" element={<BudgetingReadingR1 />}/>
              <Route path="/BudgetingR2" element={<BudgetingReadingR2 />}/>
              <Route path="/BudgetingR3" element={<BudgetingReadingR3 />}/>
              <Route path="/BudgetingR4" element={<BudgetingReadingR4 />}/>
              <Route path="/BudgetingV1" element={<BudgetingVideo1 />}/>
              <Route path="/BudgetingV2" element={<BudgetingVideo2 />}/>
              <Route path="/BudgetingV3" element={<BudgetingVideo3 />}/>
              <Route path="/BudgetingV4" element={<BudgetingVideo4 />}/>


              {/*Routes for Investing Pages */}
              <Route path="/My-Courses" element={<Courses />}/>
              <Route path="/Recommended" element={<Recommended />}/>
              <Route path="/SettingsNew" element={<SettingsNew />}/>
              <Route path="/Settings" element={<Settings />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
