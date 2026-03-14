import { MousePointerClick } from "lucide-react";
import Image from "../../images/company.webp";

const BarContainer = () => {
  return (
    <>
      <div className="w-full max-w-[1800px]  m-auto bg-secondary shadow-xl">
        <div className="w-full md:h-auto md:px-12 px-4 py-10  md:flex items-center md:gap-20 justify-between text-white">
          <div className=" flex items-center gap-12 justify-between bg-white rounded-full px-6 py-3 text-black md:text-white md:bg-transparent">
            <div className="relative flex  ">
              <img
                className="absolute left-10 w-20 rounded-full h-20 border border-white border-spacing"
                src={Image}
                alt=""
              />
              <img
                className=" w-20 rounded-full h-20 border border-white border-spacing"
                src={Image}
                alt=""
              />
            </div>
            <div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold ">100+</h1>
                <p className="text-xs md:text-lg lg:text-xl">Applicant per day</p>
            </div>
          </div>
          <div className="flex gap-5 items-center bg-white shadow-xl rounded-full px-6 py-3 border my-10 md:my-0 justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black">Features</h1>
              <p className="text-xs md:text-lg lg:text-xl text-black">Apply Easily</p>
            </div>
            <div>
              <img className="h-20 w-20 rounded-full border border-secondary" src={Image} alt="" />
            </div>
          </div>
          <div className="flex gap-5 items-center justify-between md:text-white text-black bg-white rounded-full px-6 py-4 md:bg-transparent">
            <div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">What we do</h1>
              <p className="text-xs md:text-lg lg:text-xl">Help You to get job</p>
            </div>
            <div className="p-3 md:bg-white bg-secondary  rounded-s-2xl rounded-t-2xl ">
              <MousePointerClick strokeWidth={1.5} size={40} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BarContainer;
