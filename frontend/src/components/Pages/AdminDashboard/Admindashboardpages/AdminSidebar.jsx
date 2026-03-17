import {
  Bookmark,
  BookText,
  ClipboardList,
  LogOut,
  TextAlignJustify,
  User,
} from "lucide-react";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { GiBellShield } from "react-icons/gi";
import { HiBuildingOffice } from "react-icons/hi2";
import { SiGoogleforms } from "react-icons/si";

const AdminSidebar = ({ setActivePage, activePage }) => {
  const [show, setShow] = useState(true);

  const menuClass = (page) =>
    `flex items-center gap-3 px-4 py-3 cursor-pointer rounded-md transition-all duration-300 ${
      activePage === page ? "bg-secondary text-white" : "hover:bg-gray-200"
    }`;

  return (
    <div
      className={`mt-14 bg-white border  transition-all duration-300 ${
        show ? "w-[250px]" : "w-[50px]"
      }`}
    >
      <div className="flex items-center gap-3 px-4 py-5">
        <TextAlignJustify
          strokeWidth={1.5}
          className="cursor-pointer"
          onClick={() => setShow(!show)}
        />
        {show && (
          <p className="text-lg font-semibold transition-all duration-300">
            ADMIN DASHBOARD
          </p>
        )}
      </div>

      <div className="flex flex-col h-[80%] justify-between">
        <div className="flex flex-col gap-2">
          <div
            className={menuClass("profile")}
            onClick={() => setActivePage("profile")}
            title={!show ? "Profile" : ""}
          >
            <GiBellShield />
            {show && <p>Dashboard</p>}
          </div>

          <div
            className={menuClass("application")}
            onClick={() => setActivePage("application")}
            title={!show ? "applicaton" : ""}
          >
          <FaUser />
            {show && <p>User Credentials</p>}
          </div>

          <div
            className={menuClass("CompanyUser")}
            onClick={() => setActivePage("CompanyUser")}
            title={!show ? "Saved Forms" : ""}
          >
           <HiBuildingOffice />
            {show && <p>Companies Credentials</p>}
          </div>
          <div className={menuClass("form")}
          onClick={()=>setActivePage("form")}
          title={!show ? "forms" : ""}>
            
           <SiGoogleforms />
            {show && <p>Forms</p>}
            
          </div>
        </div>

        <div
          className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-gray-200 rounded-md"
          title={!show ? "Logout" : ""}
        >
          <LogOut size={22} />
          {show && <p>Logout</p>}
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
