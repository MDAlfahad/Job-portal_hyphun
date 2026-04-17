import { useEffect } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterContainer = () => {
  

  return (
    <>
      <div className="w-full shadow-2xl border noselect capitalize">
        <div className="w-full max-w-[1800px] m-auto px-4 md:px-12 py-12 md:flex justify-between">
          <div className="flex flex-col gap-1">
            <h1 className="text-4xl font-semibold md:text-4xl">JOB PORTAL</h1>
            <a
              className="text-sm md:text-[14px] lowercase"
              href="mailto:alfahadkhan715@gmail.com"
            >
              alfahadkhan715@gmail.com
            </a>
            <div className=" flex gap-2 py-2">
              <span
              title="instagram"
               className="p-1.5 rounded-full text-xl hover:scale-105 hover:text-secondary text-textcolor  transition duration-500">
                <FaInstagram />
              </span>
              <span
              title="facebook"
               className="p-1.5 rounded-full text-xl hover:scale-105 hover:text-secondary text-textcolor transition duration-500">
                <FaFacebook />
              </span>
              <span
              title="linkedin"
              className="p-1.5 rounded-full text-xl hover:scale-105 hover:text-secondary text-textcolor  transition duration-500">
                <FaLinkedin />
              </span>
              <span
              title="twitter"
               className="p-1.5 rounded-full text-xl hover:scale-105 hover:text-secondary text-textcolor  transition duration-500">
                <FaTwitter />
              </span>
            </div>
            <div className="flex border rounded-sm items-center overflow-hidden">
              <input
                className="px-4 py-2 outline-none w-full"
                type="email"
                placeholder="Email"
              />
              <a
                href="#"
                title="click to subscribe!"
                className="px-4 py-2 bg-secondary text-white hover:bg-textcolor  transition duration-300"
              >
                Subscribe
              </a>
            </div>
          </div>
          <div className="flex gap-20">
            <div className="flex flex-col gap-4">
              <h1 className="text-xl font-semibold text-textcolor">About</h1>
              <Link
                className="hover:text-secondary text-[14px] transition duration-300"
                to="/"
              >
                Home
              </Link>
              <Link
                className="hover:text-secondary text-[14px] transition duration-300"
                to="/jobpage"
              >
                Jobs
              </Link>
              <Link
                className="hover:text-secondary text-[14px] transition duration-300"
                to="/companySigup"
              >
                Company
              </Link>
              <Link
                className="hover:text-secondary text-[14px] transition duration-300"
                to="#"
              >
                Contact
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-xl font-semibold text-textcolor">LInks</h1>
              <Link
                className="hover:text-secondary text-[14px] transition duration-300"
                to="/login-page"
              >
                Post a Job
              </Link>
              <Link
                className="hover:text-secondary text-[14px] transition duration-300"
                to="/placement"
              >
                Get Placed
              </Link>
              <Link
                className="hover:text-secondary text-[14px] transition duration-300"
                to="/company"
              >
                Join us
              </Link>
              <Link
                className="hover:text-secondary text-[14px] transition duration-300"
                to="/contact"
              >
                Blogs
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-xl font-semibold text-textcolor">Products</h1>
              <Link
                className="hover:text-secondary text-[14px] transition duration-300"
                to="/"
              >
                Terms of use
              </Link>
              <Link
                className="hover:text-secondary text-[14px] transition duration-300"
                to="Jobs"
              >
                Privacy policy
              </Link>
              <Link
                className="hover:text-secondary text-[14px] transition duration-300"
                to="/signup"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
        <p className="text-center text-[12px] md:py-5 lowercase">
          &copy; copyright 2026 Job Portal, All right reserved.
        </p>
      </div>
    </>
  );
};

export default FooterContainer;
