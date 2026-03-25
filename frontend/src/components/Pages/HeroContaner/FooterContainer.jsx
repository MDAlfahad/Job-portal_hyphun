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
      <div className="w-full shadow-2xl border noselect">
        <div className="w-full max-w-[1800px] m-auto px-4 md:px-12 py-12 md:flex justify-between">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-semibold md:text-4xl">JOB PORTAL</h1>
            <a
              className="text-sm md:text-lg"
              href="mailto:alfahadkhan715@gmail.com"
            >
              alfahadkhan715@gmail.com
            </a>
            <div className=" flex gap-4">
              <span className="p-1.5 rounded-full text-xl md:text-3xl hover:scale-105 hover:bg-secondary text-textcolor hover:text-white transition duration-500">
                <FaInstagram />
              </span>
              <span className="p-1.5 rounded-full text-xl md:text-3xl hover:scale-105 hover:bg-secondary text-textcolor hover:text-white transition duration-500">
                <FaFacebook />
              </span>
              <span className="p-1.5 rounded-full text-xl md:text-3xl hover:scale-105 hover:bg-secondary text-textcolor hover:text-white transition duration-500">
                <FaLinkedin />
              </span>
              <span className="p-1.5 rounded-full text-xl md:text-3xl hover:scale-105 hover:bg-secondary text-textcolor hover:text-white transition duration-500">
                <FaTwitter />
              </span>
            </div>
            <div className="flex border items-center">
              <input
                className="px-4 py-2 outline-none w-full"
                type="email"
                placeholder="Email"
              />
              <a
                href="#"
                className="px-4 py-2 bg-textcolor text-white hover:bg-secondary transition duration-300"
              >
                Subscribe
              </a>
            </div>
          </div>
          <div className="flex gap-20">
            <div className="flex flex-col gap-4">
              <h1 className="text-xl font-semibold text-textcolor">About</h1>
              <Link
                className="hover:text-secondary transition duration-300"
                to="/"
              >
                Home
              </Link>
              <Link
                className="hover:text-secondary transition duration-300"
                to="/jobpage"
              >
                Jobs
              </Link>
              <Link
                className="hover:text-secondary transition duration-300"
                to="/companySigup"
              >
                Company
              </Link>
              <Link
                className="hover:text-secondary transition duration-300"
                to="#"
              >
                Contact
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-xl font-semibold text-textcolor">LInks</h1>
              <Link
                className="hover:text-secondary transition duration-300"
                to="/loginpage"
              >
                Post a Job
              </Link>
              <Link
                className="hover:text-secondary transition duration-300"
                to="/placement"
              >
                Get Placed
              </Link>
              <Link
                className="hover:text-secondary transition duration-300"
                to="/company"
              >
                Join us
              </Link>
              <Link
                className="hover:text-secondary transition duration-300"
                to="/contact"
              >
                Blogs
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-xl font-semibold text-textcolor">Products</h1>
              <Link
                className="hover:text-secondary transition duration-300"
                to="/"
              >
                Terms of use
              </Link>
              <Link
                className="hover:text-secondary transition duration-300"
                to="Jobs"
              >
                Privacy policy
              </Link>
              <Link
                className="hover:text-secondary transition duration-300"
                to="/signup"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
        <p className="text-center md:py-5 mb-2">
          &copy; copyrigth 2026 Job Portal, All Right Reserved.
        </p>
      </div>
    </>
  );
};

export default FooterContainer;
