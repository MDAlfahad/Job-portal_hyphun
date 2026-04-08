// import Image from "../../images/image.webp";
import Button from "../../Components/buttons/ButtonComponents";
import BarContainer from "../HeroContaner/BarContainer"
import Services from "../HeroContaner/Services"
import ContactContainer from "../HeroContaner/ContactContainer"
import FooterContainer from "../HeroContaner/FooterContainer"
import { useNavigate } from "react-router-dom";
import CrauselContainer from "./CrauselContainer";

const Hero = () => {
  

  const navigate = useNavigate();
  return (
    <>
      <div className="w-full max-w-[1800px] m-auto mainbackground noselect">
        <div className="w-full md:px-4 lg:px-12 py-28 md:py-2 px-4 lg:py-40  text-center flex flex-col justify-center lg:h-auto md:h-[100vh]">
          <div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
             Get Your Job Now, <br />
              <span className="text-secondary"> Your Journey Never end </span>
            </h1>
            <p className="text-sm md:text-lg lg:text-xl py-6 text-textcolor2">
              The Placement Cell plays a vital role in shaping students’ careers
              by acting as a bridge between students and recruiters. It
              organizes campus recruitment drives, internships, skill
              development programs, mock interviews, resume-building workshops,
              and career counseling sessions to prepare students for the
              professional world.
            </p>
          </div>
          <div className="flex  gap-6 justify-center items-center">
            <Button text="Apply Now" 
            onClick={() => navigate("/job-page")}
              />
          </div>
        </div>
      </div>
      <BarContainer/>
        <Services/>
        <CrauselContainer/>
        <ContactContainer/>
        <FooterContainer/>
    </>
  );
};

export default Hero;
