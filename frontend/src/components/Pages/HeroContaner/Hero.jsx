import Image from "../../images/image.webp";

const Hero = () => {
  return (
    <>
      <div className="w-full max-w-[1800px] m-auto">
        <div className="w-full md:px-4 lg:px-12 md:py-2 lg:py-10 flex items-center justify-center  ">
          <div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
              Your Journey Never end, <br /><span className="text-[#FF0000]"> Get Your Job Now</span>
            </h1>
            <p className="text-md md:text-lg lg:text-xl">
              The Placement Cell plays a vital role in shaping students’ careers
              by acting as a bridge between students and recruiters. It
              organizes campus recruitment drives, internships, skill
              development programs, mock interviews, resume-building workshops,
              and career counseling sessions to prepare students for the
              professional world.
            </p>
          </div>
          <div>
            <img src={Image} alt="image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
