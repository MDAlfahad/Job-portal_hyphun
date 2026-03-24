import Cards from "../../Components/Cards/Cards";
import { HiClipboardList } from "react-icons/hi";
import { VscServerProcess } from "react-icons/vsc";
import { AiOutlineMessage } from "react-icons/ai";

const Services = () => {
  return (
    <>
      <div className=" w-full md:h-screen lg:h-auto max-w-[1800px] m-auto px-4 md:px-12 py-12 ">
        <h1 className="text-4xl md:text-5xl text-textcolor font-semibold md:text-bold py-10 "><span className="text-secondary" >Services</span> Provide here</h1>
        <div className="w-full md:flex justify-between ">
          <Cards
            logo={<HiClipboardList className="text-6xl text-secondary"/>}
            h1="Verified Job Listings & Smart Job Matching"
            p="Access thousands of trusted job opportunities from top companies across various industries. Our intelligent matching system connects you with roles that fit your skills, experience, and career goals."
            text="Apply Now"
          />
          <Cards
          logo={<VscServerProcess className="text-6xl text-secondary" />}
          h1="Easy Application Process"
          p="ACreate one comprehensive profile and use it to apply for multiple job opportunities quickly and effortlessly. Upload your resume, showcase your skills, experience, certifications, and achievements in one place, and avoid the hassle of filling out repetitive application forms."
          text="Apply Now"

          />
          <Cards 
           logo={<AiOutlineMessage className="text-6xl text-secondary"/>}
           h1="Job Alerts & Notifications"
           p="Stay updated with personalized job alerts so you never miss an opportunity."
           text="Apply Now"
          />
        </div>
      </div>
    </>
  );
};

export default Services;
