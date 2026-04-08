import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import Button from "../../Components/buttons/ButtonComponents";
import { useState } from "react";
import axios from "axios";
import useAuthStore from "../../../Store/userAuth";
import { PiEye, PiEyeClosed } from "react-icons/pi";
import { AiOutlineEyeInvisible, AiTwotoneEye } from "react-icons/ai";

const UserLoginPage = () => {
  const API_CALL = `http://localhost:4000`;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const setAuth = useAuthStore((state) => state.setAuth);
  const [show, setshow] = useState(false);

  const handlelogin = async (e) => {
    e.preventDefault();
    try {
      const login = await axios.post(`${API_CALL}/api/login_users`, {
        email,
        password,
      });

      const { token, user } = login.data;

      setAuth(user, token);

      if (user.auth_role === "admin") navigate("/admin-dashboard");
      else if (user.auth_role === "company") navigate("/Dashboard-Company");
      else {
        navigate("/");
      }
    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong");
    }
  };
  //show passwod

  const showPassword = () => {
    setshow(!show);
  };

  return (
    <>
      <div className="max-w-[1800px] m-auto md:py-20 px-4 md:px-12 py-6 noselect">
        <div className="flex justify-center items-center h-[80vh]">
          <form
            className="shadow-xl p-6 w-auto gap- border flex flex-col rounded-xl"
            onSubmit={handlelogin}
          >
            <div className="flex flex-col items-center">
              <p className="flex gap-4 items-center border px-2 py-2 w-full justify-center rounded-md text-md font-semibold text-textcolor">
                <FcGoogle className="text-2xl md:text-4xl" />
                Login with Google
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label htmlFor="password">Password</label>
              <span className="px-2 w-full border rounded-md outline-none flex items-center">
                <input
                  className="px-2 py-2  text-lg w-full outline-none "
                  type={!show ? "password" : "text"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                <p onClick={showPassword}>
                  {!show? <AiOutlineEyeInvisible size={22} /> : <AiTwotoneEye size={22}/>}
                </p>
              </span>
              <Button type="submit" text="Login" />
            </div>

            <p className="text-sm md:text-[16px] py-4">
              Don't have an account? Create
              <span>
                ({" "}
                <Link to="/user-signup" className="text-secondary">
                  Student
                </Link>
                /
                <Link to="/company-signup" className="text-secondary">
                  Company
                </Link>
                )
              </span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
export default UserLoginPage;
