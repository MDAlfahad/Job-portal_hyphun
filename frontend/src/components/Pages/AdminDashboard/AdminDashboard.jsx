import { useState } from "react";
import Adminsidebar from "./Admindashboardpages/AdminSidebar";
import Profile from "./Admindashboardpages/AdminPorfilepage";
import User from "./Admindashboardpages/UserPage"
import CompanyUser from "./Admindashboardpages/CompayUserpage";
 import JobPostedForm from "./Admindashboardpages/JobPostedFormDetails"

const AdminDashboard = () => {
  const [activePage, setActivePage] = useState("profile");

  const pages = {
    profile: <Profile />,
    application: <User />,
    CompanyUser: <CompanyUser />,
    form : <JobPostedForm/>
  };

  return (
    <div className="w-full max-w-[1800px] m-auto md:h-[100vh] flex">
      <Adminsidebar setActivePage={setActivePage} activePage={activePage} />
      <div className="flex-1 ">{pages[activePage]}</div>
    </div>
  );
};
export default AdminDashboard;
