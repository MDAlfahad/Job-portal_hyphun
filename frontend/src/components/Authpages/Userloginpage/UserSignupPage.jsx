import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import Button from "../../Components/buttons/ButtonComponents";
import { useState } from "react";
import axios from "axios";

const UserLSignupPage = () => {
  const API_CALL = `http://localhost:4000`;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlEvent = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${API_CALL}/api/register_User`, formData);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const [password, setpassword] = useState("");
  return (
    <>
      <div className="max-w-[1800px] m-auto md:py-20 px-4 md:px-12 py-6 noselect">
        <div className="flex justify-center items-center h-[80vh]">
          <form
            className="shadow-xl p-6 w-[400px] gap- border flex flex-col rounded-xl"
            onSubmit={handlEvent}
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
                placeholder="Name"
                name="name"
                value={formData.name}
                id="name"
                required
                onChange={handleChange}
              />
              <label htmlFor="email">Email</label>
              <input
                className="px-2 py-2 border rounded-md outline-none text-lg "
                type="email"
                id="email"
                name="email"
                placeholder="e.g example@.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label htmlFor="password">Password</label>
              <input
                className="px-2 py-2 border rounded-md outline-none text-lg "
                type="password"
                id="password"
                placeholder="password contain atleast 6 digits"
                required
                name="password"
                value={formData.password}
                // onChange={(e) => {
                //   setpassword(e.target.value);
                // }
                // }
                onChange={handleChange}
              />
              {password.length > 0 && (
                <p style={{ color: password.length < 5 ? "red" : "green" }}>
                  {password.length < 5
                    ? "password must contain 6 digits"
                    : "strong password !"}
                </p>
              )}
              <Button text="Sign up" />
            </div>
            <p className="text-sm md:text-[16px] py-4 text-center">
              Already have Account?
              <span>
                <Link to="/loginpage" className="text-secondary">
                  {" "}
                  Login
                </Link>
              </span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default UserLSignupPage;
