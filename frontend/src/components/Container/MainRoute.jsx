import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Pages/HeroContaner/Hero";
import JobPage from "../Pages/jobpages/Jobpage";
import PlacementContainer from "../Pages/Placementpage/PlacementContainer";
import UserLoginPage from "../Authpages/Userloginpage/UserLoginPage";
import UserSignupPage from "../Authpages/Userloginpage/UserSignupPage";
import CompanySignupPage from "../Authpages/Companysignuppage/CompanySignupPage";
import StudentDashboard from "../Pages/studentDashboard/StudentDashboard";
import AdminDashboard from "../Pages/AdminDashboard/AdminDashboard";
import CompanyDashboard from "../Pages/companyDashbashboard/CompanyDashboard";
import JobPostPage from "../Pages/companyDashbashboard/Sidebarmenu/JobPostPage";
import Dashboard from "../Pages/companyDashbashboard/DashboardPages/Dashboard";
import ScrollTopTop from "../ScrollToTop";
import JobPageRoute from "../Pages/jobpages/JobpageDetals/JobPageRoute";
import ProtectedRoute from "../../protectetroutes/ProtectedRoute";

const MainRoute = () => {
  return (
    <>
      <Router>
        <ScrollTopTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/internships" element={<PlacementContainer />} />
          <Route path="/job-page" element={<JobPage />} />
          {/* -----------------login page------------------------------- */}
          <Route path="/login-page" element={<UserLoginPage />} />
          {/* --------------- signup page----------------------------- */}
          <Route path="/user-signup" element={<UserSignupPage />} />
          <Route path="company-signup" element={<CompanySignupPage />} />
          {/* -----------------------------student Dasboard------------------------- */}
          <Route element={<ProtectedRoute allowedRoles={"user"} />}>
            <Route path="/student-Dashboard" element={<StudentDashboard />} />
          </Route>
          <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
          </Route>
          <Route element={<ProtectedRoute allowedRoles={["company"]} />}>
            <Route path="/handlenavigate" element={<CompanyDashboard />} />
          </Route>
          <Route path="/job-post-page" element={<JobPostPage />} />
          <Route path="/Dashboard-Company" element={<Dashboard />} />
          <Route path="/job-page-route/:id" element={<JobPageRoute />} />
        </Routes>
      </Router>
    </>
  );
};
export default MainRoute;
