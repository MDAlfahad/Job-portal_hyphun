import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import Button from "../../Components/buttons/ButtonComponents";

const UserLoginPage = () => {



  return (
    <>
      <div className="max-w-[1800px] m-auto md:py-20 px-4 md:px-12 py-6">
        <div className="flex justify-center items-center h-[80vh]">
          <form className="shadow-xl p-6 w-auto gap- border flex flex-col rounded-xl">
            <div className="flex flex-col items-center">
              <p className="flex gap-4 items-center border px-2 py-2 w-full justify-center rounded-md text-md font-semibold text-textcolor">
                <FcGoogle className="text-2xl md:text-4xl" />
                Login with google
              </p>
             <span className="flex items-center justify-center py-2 w-full">
                <hr className=" w-full  " />
                <p className="px-4 ">or</p>
                <hr className=" w-full " />
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <input
                className="px-2 py-2 border rounded-md outline-none text-lg "
                type="email"
                id="email"
                required
              />
              <label htmlFor="password">Password</label>
              <input
                className="px-2 py-2 border rounded-md outline-none text-lg "
                type="password"
                id="password"
                required
              />
              
              <Button text="Login" />
            </div>
            <p className="text-sm md:text-[16px] py-4">
              Don't have account? Create<span >( <Link to="/signup" className="text-secondary">Student</Link>/<Link to="/companySigup" className="text-secondary">Company</Link>)</span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
export default UserLoginPage;
