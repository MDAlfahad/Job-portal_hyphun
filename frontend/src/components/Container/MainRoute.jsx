import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import StudentDashboard from "../Pages/studentDashboard/StudentDashboard";
import Hero from "../Pages/HeroContaner/Hero";
import BarContainer from "../Pages/HeroContaner/BarContainer";
import Services from "../Pages/HeroContaner/Services";
import JobContainer from "../../components/Pages/HeroContaner/JobContainer"
import CrauselContainer from "../Pages/HeroContaner/CrauselContainer";

const MainRoute = () => {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/sudentdashboard" element={<StudentDashboard />} />
        </Routes>
        <BarContainer/>
        <Services/>
        <JobContainer/>
        <CrauselContainer/>
      </Router>
    </>
  );
};
export default MainRoute;
