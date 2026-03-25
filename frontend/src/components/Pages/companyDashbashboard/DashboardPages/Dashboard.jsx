
import { useState } from "react";
import CompanySidebar from "./CompanySidebar"; 
import Profile from "../DashboardPages/DashboardProfilePage"
import Form from "../DashboardPages/DashboardApplicantPage"

const Dashboard=()=>{

  const [activePage, setActivePage] = useState("profile");

  const pages = {
    profile: <Profile />,
    application : <Form/>,
    // savedform: <SavedForm/>
  };

  return (
    <div className="w-full max-w-[1800px] m-auto md:h-[100vh] flex">
      

      <CompanySidebar
        setActivePage={setActivePage}
        activePage={activePage}
      />
      <div className="flex-1 p-4 bg-gray-50">
        {pages[activePage]}
      </div>

    </div>
  );
};


export default Dashboard;