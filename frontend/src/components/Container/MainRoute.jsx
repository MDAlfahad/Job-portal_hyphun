import { Route, Routes, BrowserRouter as Router } from "react-router-dom"
import Navbar from "../Components/Navbar/Navbar"
import StudentDashboard from "../Pages/studentDashboard/StudentDashboard"
import Hero from "../Pages/HeroContaner/Hero"

const MainRoute= ()=>{

return(
    <> 
    <Router>
        <Navbar/>
        <Routes>
            <Route path="/" element={
                <Hero/>
                
                }/>
            <Route path="/sudentdashboard" element={<StudentDashboard/>}/>
        </Routes>
    </Router>
   
    </>
)


}
export default MainRoute