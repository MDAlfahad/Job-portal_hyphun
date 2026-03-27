import { Link, useNavigate } from "react-router-dom";
import { UserRound, Bell } from "lucide-react";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { useState } from "react";

const Navbar = () => {

  const navigate = useNavigate();
  const [isClick, setIsClick] = useState(false);

  const[isUser, setIsUser] = useState(false)

  const toggle = () => {
    setIsClick((prev) => !prev);
  };
  const userclick= ()=>{
    setIsUser((show)=> !show)
  }

  
  return (
    <div className="w-full fixed bg-white border z-40">
      <div className="max-w-[1800px] m-auto px-6 md:px-12 py-4 text-textcolor flex justify-between items-center relative">
        <div className="flex gap-5 lg:gap-20 items-center">
          <h1 className="text-2xl lg:text-3xl font-bold">JOB PORTAL</h1>
          <div className="hidden md:flex gap-5 lg:gap-10">
            <Link
              className="text-textcolor hover:text-secondary md:text-sm lg:text-[16px] transition-all duration-300 active:text-textcolor"
              to="/"
            >
              Home
            </Link>
            <Link
              className="text-textcolor hover:text-secondary md:text-sm lg:text-[16px] transition-all duration-300 active:text-textcolor"
              to="/placement"
            >
              Get placement
            </Link>
            <Link
              className="text-textcolor hover:text-secondary md:text-sm lg:text-[16px] transition-all duration-300 active:text-textcolor"
              to="/jobpage"
            >
              Job
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <button onClick={()=> navigate("/loginpage")} className="hidden md:flex items-center gap-1 px-6 py-2 bg-secondary rounded-md text-md font-bold text-white">
            LOGIN
          </button>
          <div className="md:block bg-background p-2 rounded-full cursor-pointer border">
            <Bell strokeWidth={1.5} />
          </div>
          <div className="bg-background p-2 rounded-full cursor-pointer border">
            <UserRound onClick={userclick} strokeWidth={1.5} />
          </div>
          <div className="flex md:hidden">
            <HiOutlineBars3BottomRight
              onClick={toggle}
              className="text-4xl cursor-pointer"
            />
          </div>
        </div>
        <div 
         className={`absolute top-full right-5 shadow-lg border border-gray-100 ${isUser ? " translate-y-0" : "max-h-0 hidden -translate-y-0"}`}>
          <div className=" flex flex-col bg-white">
            <Link to="loginpage" className="px-4 py-2 hover:bg-secondary hover:text-white" href="">Login</Link>
            <Link to="studentDashboard" className="px-4 py-2 hover:bg-secondary hover:text-white" >DashBoard</Link>
          </div>
        </div>

        <div
          className={`flex flex-col bg-white w-full top-full left-0 px-4 py-2 z-50 md:hidden absolute overflow-hidden transition-all duration-500
    ${isClick ? "max-h-96 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"}`}
        >
          <Link
            className="text-textcolor font-semibold hover:text-white transition-all duration-300 hover:bg-secondary px-4 py-2"
            to="/"
          >
            Home
          </Link>
          <Link
            className="text-textcolor font-semibold hover:text-white transition-all duration-300 hover:bg-secondary px-4 py-2"
            to="/placement"
          >
            Get placement
          </Link>
          <Link
            className="text-textcolor font-semibold hover:text-white transition-all duration-300 hover:bg-secondary px-4 py-2"
            to="/jobpage"
          >
            Job
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
