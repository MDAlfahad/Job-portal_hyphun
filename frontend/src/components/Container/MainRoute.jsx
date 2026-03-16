import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
// import StudentDashboard from "../Pages/studentDashboard/StudentDashboard";
import Hero from "../Pages/HeroContaner/Hero";
import JobPage from "../Pages/jobpages/Jobpage";
import PlacementContainer from "../Pages/Placementpage/PlacementContainer";
import Companies from "../Pages/Companies/Companies";
import CompanyDashboard from "../Pages/companyDashbashboard/CompanyDashboard";



const MainRoute = () => {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/placement" element={<PlacementContainer />} />
          <Route path="/jobpage" element={<JobPage/>} />
          <Route path="/companies" element={<Companies/>} />
          {/* -----------------------------------------CompanyDashboard----------------------------- */}
          <Route path="/companydashboard" element={<CompanyDashboard/>} />
        </Routes>
      </Router>
    </>
  );
};
export default MainRoute;
