import {
  Bookmark,
  ClipboardList,
  LogOut,
  TextAlignJustify,
  UserRound,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../../Store/userAuth";

const StudentSideBar = ({ setActivePage, activePage }) => {
  const navigate = useNavigate();
  // multiple pages routing

  const logout = useAuthStore((state) => state.logout);
  const handlelogout = () => {
    logout();
    navigate("/login-page");
  };

  const [show, setShow] = useState(true);
  const menuClass = (page) =>
    `flex items-center gap-3 px-4 py-3 cursor-pointer  transition-all duration-300 ${
      activePage === page ? "bg-secondary text-white" : "hover:bg-blue-100"
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
            DASHBOARD
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
            <UserRound size={22} />
            {show && <p>Profile</p>}
          </div>

          <div
            className={menuClass("application")}
            onClick={() => setActivePage("application")}
            title={!show ? "applicaton" : ""}
          >
            <ClipboardList size={22} />
            {show && <p>Application</p>}
          </div>

          <div
            className={menuClass("savedform")}
            onClick={() => setActivePage("savedform")}
            title={!show ? "Saved Forms" : ""}
          >
            <Bookmark size={22} />
            {show && <p>Saved</p>}
          </div>
        </div>

        <div
          className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-gray-200 rounded-md"
          title={!show ? "Logout" : ""}
        >
          <LogOut size={22} />
          {show && <p onClick={handlelogout}>Logout</p>}
        </div>
      </div>
    </div>
  );
};

export default StudentSideBar;
