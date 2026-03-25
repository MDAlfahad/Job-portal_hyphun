import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
// import StudentDashboard from "../Pages/studentDashboard/StudentDashboard";
import Hero from "../Pages/HeroContaner/Hero";
import JobPage from "../Pages/jobpages/Jobpage";
import PlacementContainer from "../Pages/Placementpage/PlacementContainer";
import UserLoginPage from "../Authpages/Userloginpage/UserLoginPage";
import UserSignupPage from "../Authpages/Userloginpage/UserSignupPage";
import CompanySignupPage from "../Authpages/Companysignuppage/CompanySignupPage";
import StudentDashboard from "../Pages/studentDashboard/StudentDashboard";
import AdminDashboard from "../Pages/AdminDashboard/AdminDashboard"
import CompanyDashboard from "../Pages/companyDashbashboard/CompanyDashboard";
//import CompanyForm3 from "../Pages/companyDashbashboard/Sidebarmenu/CompanyForm3";
import JobPostPage from "../Pages/companyDashbashboard/Sidebarmenu/JobPostPage";
import Dashboard from "../Pages/companyDashbashboard/DashboardPages/Dashboard";
import ScrollTopTop from "../ScrollToTop";
import JobPageRoute from "../Pages/jobpages/JobpageDetals/JobPageRoute";



const MainRoute = () => {
  return (
    <>
      <Router >
        <ScrollTopTop/>
        <Navbar />
        <Routes >
          <Route path="/" element={<Hero />} />
          <Route path="/placement" element={<PlacementContainer />} />
          <Route path="/jobpage" element={<JobPage/>} />
          {/* -----------------login page------------------------------- */}
          <Route path="/loginpage" element={<UserLoginPage/>}/>
          {/* --------------- signup page----------------------------- */}
          <Route path="/signup" element={<UserSignupPage/>}/>
          <Route path="companySigup" element={<CompanySignupPage/>}/>
          {/* -----------------------------------------CompanyDashboard----------------------------- */}
          {/* <Route path="/companydashboard" element={<CompanyDashboard/>} /> */}
          {/* -----------------------------student Dasboard------------------------- */}\
          <Route path="/studentDashboard" element={<StudentDashboard/>} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/companyDashboard" element={<CompanyDashboard/>} />
          <Route path="/jobpostpage" element={<JobPostPage/>} />
          <Route path="/DashboardCompany" element={<Dashboard/>} />
          <Route path="/jobpageroute" element={<JobPageRoute/>} />
          
          
        </Routes>
      </Router>
    </>
  );
};
export default MainRoute;
