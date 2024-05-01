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
import InvestingReadingR1 from './Investing-Learn/InvestingReading/InvestingLearnR1.jsx';
import InvestingReadingR2 from './Investing-Learn/InvestingReading/InvestingLearnR2.jsx';
import InvestingReadingR3 from './Investing-Learn/InvestingReading/InvestingLearnR3.jsx';
import InvestingReadingR4 from './Investing-Learn/InvestingReading/InvestingLearnR4.jsx';
import InvestingReadingR5 from './Investing-Learn/InvestingReading/InvestingLearnR5.jsx';
import InvestingVideoV1 from './Investing-Learn/InvestingVideos/InvestingVideoV1.jsx';
import InvestingVideoV2 from './Investing-Learn/InvestingVideos/InvestingVideoV2.jsx';
import InvestingVideoV3 from './Investing-Learn/InvestingVideos/InvestingVideoV3.jsx';
import InvestingVideoV4 from './Investing-Learn/InvestingVideos/InvestingVideoV4.jsx';
import InvestingVideoV5 from './Investing-Learn/InvestingVideos/InvestingVideoV5.jsx';
import InvestingVideoV6 from './Investing-Learn/InvestingVideos/InvestingVideoV6.jsx';



{/*Imports for Credit and Debt Learning */}
import CreditDebtReadingR1 from './CreditDebt-Learn/CreditDebtRead/CreditDebtLearnR1.jsx';
import CreditDebtReadingR2 from './CreditDebt-Learn/CreditDebtRead/CreditDebtLearnR2.jsx';
import CreditDebtReadingR3 from './CreditDebt-Learn/CreditDebtRead/CreditDebtLearnR3.jsx';
import CreditDebtReadingR4 from './CreditDebt-Learn/CreditDebtRead/CreditDebtLearnR4.jsx';
import CreditDebtVideoV1 from './CreditDebt-Learn/CreditDebtVideos/CreditDebtVideoV1.jsx';
import CreditDebtVideoV2 from './CreditDebt-Learn/CreditDebtVideos/CreditDebtVideoV2.jsx';
import CreditDebtVideoV3 from './CreditDebt-Learn/CreditDebtVideos/CreditDebtVideoV3.jsx';
import CreditDebtVideoV4 from './CreditDebt-Learn/CreditDebtVideos/CreditDebtVideoV4.jsx';


{/*Imports for Financing Higher Education Learning */}
import FinancingReadingR1 from './FinancingHigherEd-Learning/FinancingReading/FinancingHigherLearnR1.jsx';
import FinancingReadingR2 from './FinancingHigherEd-Learning/FinancingReading/FinancingHigherLearnR2.jsx';
import FinancingReadingR3 from './FinancingHigherEd-Learning/FinancingReading/FinancingHigherLearnR3.jsx';
import FinancingVideoV1 from './FinancingHigherEd-Learning/FinancingVideos/FinancingHigherVideoV1.jsx';
import FinancingVideoV2 from './FinancingHigherEd-Learning/FinancingVideos/FinancingHigherVideoV2.jsx';



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
              <Route path="/InvestingR1" element={<InvestingReadingR1 />}/>
              <Route path="/InvestingR2" element={<InvestingReadingR2 />}/>
              <Route path="/InvestingR3" element={<InvestingReadingR3 />}/>
              <Route path="/InvestingR4" element={<InvestingReadingR4 />}/>
              <Route path="/InvestingR5" element={<InvestingReadingR5 />}/>
              <Route path="/InvestingV1" element={<InvestingVideoV1 />}/>
              <Route path="/InvestingV2" element={<InvestingVideoV2 />}/>
              <Route path="/InvestingV3" element={<InvestingVideoV3 />}/>
              <Route path="/InvestingV4" element={<InvestingVideoV4 />}/>
              <Route path="/InvestingV5" element={<InvestingVideoV5 />}/>
              <Route path="/InvestingV6" element={<InvestingVideoV6 />}/>



              {/*Routes for Credit and Debt Pages */}
              <Route path="/CreditDebtR1" element={<CreditDebtReadingR1 />}/>
              <Route path="/CreditDebtR2" element={<CreditDebtReadingR2 />}/>
              <Route path="/CreditDebtR3" element={<CreditDebtReadingR3 />}/>
              <Route path="/CreditDebtR4" element={<CreditDebtReadingR4 />}/>
              <Route path="/CreditDebtV1" element={<CreditDebtVideoV1 />}/>
              <Route path="/CreditDebtV2" element={<CreditDebtVideoV2 />}/>
              <Route path="/CreditDebtV3" element={<CreditDebtVideoV3 />}/>
              <Route path="/CreditDebtV4" element={<CreditDebtVideoV4 />}/>

              
              {/*Routes for Financing Higher Education Pages */}
              <Route path="/FinancingHigherR1" element={<FinancingReadingR1 />}/>
              <Route path="/FinancingHigherR2" element={<FinancingReadingR2 />}/>
              <Route path="/FinancingHigherR3" element={<FinancingReadingR3 />}/>
              <Route path="/FinancingHigherV1" element={<FinancingVideoV1 />}/>
              <Route path="/FinancingHigherV2" element={<FinancingVideoV2 />}/>

              {/*Routes for User Dashboard */}
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
