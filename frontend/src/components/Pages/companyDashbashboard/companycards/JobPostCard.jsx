import { Locate } from "lucide-react";
import { useState } from "react";
import { FaLocationArrow, FaRegSun } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { TfiArrowCircleDown, TfiArrowCircleRight } from "react-icons/tfi";

const JobPostCard = ({
  job_desigination,
  company_name,
  job_location,
  job_ctc,
  job_experience,
  job_description,
  job_skills,
  job_workingtype,
  job_startdate,
  Job_lastdate,
  about_company,
}) => {
  const [isShow, setisShow] = useState(false);

  const toggleShow = () => {
    setisShow(!isShow);
  };

  return (
    <>
      <div className="w-full h-auto px-2 ">
        <div className="w-full border rounded-lg overflow-hidden bg-gray-100 border-0.5 text-black">
          <div className="w-full flex   ">
            <div className="w-2 h-50  bg-secondary"></div>
            <div className="py-4  flex justify-between pl-3 pr-6 w-full">
              <div>
                <h1 className="text-xl font-semibold text-secondary">
                  {job_desigination}
                </h1>
                <p className="text-sm text-textcolor2 font-semibold">
                  {company_name}
                </p>
                <p className="text-textcolor2 font-semibold flex gap-1 items-center">
                  <CiLocationOn />
                  {job_location}
                </p>
              </div>
              <div className="flex  items-center gap-12">
                <div className="flex flex-col gap-2">
                  <p className="text-sm md:text-[16px] font-semibold">
                    Start Date: {job_startdate}
                  </p>
                  <p className="text-sm md:text-[16px] font-semibold">
                    Apply By: {Job_lastdate}
                  </p>
                </div>
                <p onClick={toggleShow}>
                  {!isShow ? (
                    <TfiArrowCircleRight className="text-2xl text-secondary" />
                  ) : (
                    <TfiArrowCircleDown className="text-2xl text-secondary" />
                  )}
                </p>
              </div>
            </div>
          </div>

          {isShow && (
            <div className=" text-textcolor px-12 py-4 w-full flex flex-col gap-2 bg-white">
              <span className=" flex py-4"><h1 className="font-semibold pr-1"> Company:</h1> {company_name}</span>
              <div className="flex justify-around border py-4 bg-gray-100 rounded-lg  ">
                <span className=" bg-gray-100 rounded-md flex flex-col text-center">
                  <h1 className="font-semibold">Job Type</h1> {job_workingtype}
                </span>
                <span className=" bg-gray-100 rounded-md  flex flex-col gap-2 text-center">
                  <h1 className="font-semibold">Annual CTC</h1> {job_ctc}
                </span>
                <span className=" bg-gray-100 rounded-md  flex flex-col gap-2 text-center">
                  <h1 className="font-semibold">Experience</h1> {job_experience}
                </span>
                <span className=" bg-gray-100 rounded-md  flex flex-col gap-2 text-center">
                  <h1 className="font-semibold">Last Date</h1> {Job_lastdate}
                </span>
              </div>

              <span className="px-2 py-2 rounded-md"><h1 className="font-semibold">About Job</h1>{job_description}</span>
              <span className="px-2 py-2 rounded-md"><h1 className="font-semibold">Skills</h1>{job_skills}</span>
              <span className="px-2 py-2 rounded-md"><h1 className="font-semibold">About Company</h1>{about_company}</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default JobPostCard;
