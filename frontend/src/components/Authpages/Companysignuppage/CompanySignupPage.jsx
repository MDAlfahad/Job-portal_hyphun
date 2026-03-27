import { FcGoogle } from "react-icons/fc";
import Background from "../../images/background.png";
import { useState } from "react";
import Button from "../../Components/buttons/ButtonComponents";
import { Link } from "react-router-dom";
import axios from "axios";
const CompanySignupPage = () => {
  const API_CALL = `http://localhost:4000`;

  const [isSignup, setIsSignup] = useState({
    name: "",
    email: "",
    password: "",
    mobilenumber: "",
  });

  const handleChange = (e) => {
    setIsSignup({
      ...isSignup,
      [e.target.name]: e.target.value,
    });
  };

  const handlesignup = async (e) => {
    e.preventDefault();

    try {
      const signup = await axios.post(`${API_CALL}/api/register_company`,isSignup)
      console.log(signup.data)
    } catch (err) {
      console.log(err);
    }
  };

  // const [password, setpassword] = useState("");
  return (
    <>
      <div className="max-w-[1800px] m-auto  w-full noselect">
        <div className="w-full md:h-[100vh] lg:h-auto bg-secondary md:pt-20 md:flex justify-between px-4 md:px-12 items-center overflow-hidden">
          <div>
            <div className="mt-10">
              <h1 className="text-3xl md:text-6xl text-white font-semibold">
                Start hireing now
              </h1>
              <p className="text-md md:text-xl text-white py-2">
                Hire students from top Colleges and Universities
              </p>
              <div>
                <img width={700} src={Background} alt="" />
              </div>
            </div>
          </div>

          <div>
            <form
              onSubmit={handlesignup}
              className="shadow-xl p-6 w-[400px] gap- border flex flex-col rounded-xl bg-white"
            >
              <div className="flex flex-col items-center">
                <p className="flex gap-4 items-center border px-2 py-2 w-full justify-center rounded-md text-md font-semibold text-textcolor">
                  <FcGoogle className="text-2xl md:text-4xl" />
                  Login with google
                </p>
                <span className="flex items-center justify-center py-2 w-full">
                  <hr className=" w-full  " />
                  <p className="px-4">or</p>
                  <hr className=" w-full " />
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="name">Name</label>
                <input
                  className="px-2 py-2 border rounded-md outline-none text-lg "
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={isSignup.name}
                  placeholder="name"
                  required
                />
                <label htmlFor="email">Offical email</label>
                <input
                  className="px-2 py-2 border rounded-md outline-none text-lg "
                  type="email"
                  id="email"
                  name="email"
                  value={isSignup.email}
                  placeholder="example@company.com"
                  onChange={handleChange}
                  required
                />
                <label htmlFor="password">Password</label>
                <input
                  className="px-2 py-2 border rounded-md outline-none text-lg "
                  type="password"
                  id="password"
                  required
                  name="password"
                  placeholder="password"
                  value={isSignup.password}
                  onChange={handleChange}
                />

                <label htmlFor="number">Mobile number</label>
                <input
                  className="px-2 py-2 border rounded-md outline-none text-lg "
                  type="tel"
                  name="mobilenumber"
                  value={isSignup.mobilenumber}
                  onChange={handleChange}
                  placeholder="e.g +91 6260XX XXXX XX"
                />
                <Button text="Sign up" />
              </div>
              <p className="text-sm md:text-[16px] py-4 text-center">
                Already have Account?
                <Link className="text-secondary" to="/loginpage">
                  Login
                </Link>
                <span></span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanySignupPage;
