import { Link } from "react-router-dom";


const DashboardSidebar = ()=>{

    return(
        <>
        <div>
            <div>
                <Link to="dashboard">Dashboard</Link>
                <Link to="applicant">Applicant</Link>
                <Link to="applicant">Applicant</Link>
            </div>
        </div>
        </>
    )
}

export default DashboardSidebar;