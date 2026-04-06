import {
  Bookmark,
  Briefcase,
  CalendarClock,
  IndianRupee,
  MapPin,
  Share2,
  TimerReset,
  TrendingUp,
  Zap,
} from "lucide-react";
import Button from "../../../Components/buttons/ButtonComponents";
import { IoBookmark, IoBookmarkOutline } from "react-icons/io5";
import Footer from "../../HeroContaner/FooterContainer";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { formatDistanceToNow } from "date-fns";
import JobApplyForm from "../../../Components/forms/JobApplyFrom";

const JobPageRoute = () => {
  const API_CALL = `http://localhost:4000`;
  const { id } = useParams();
  const [jobs, setJobs] = useState(null);
  const [ischange, setischange] = useState(true);
  const [isApply, setIsApply] = useState(false);

  useEffect(() => {
    fetch(`${API_CALL}/api/jobdata/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setJobs(result);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setJobs(null);
      });
  }, [id]);
  if (!jobs) return <h1>Loding....</h1>;


  // data formatte
  const formattedDate = formatDistanceToNow(
    new Date(jobs.posted_at.replace(" ", "T")),
    { addSuffix: true },
  );

  return (
    <>
      {/* // Apply from  */}
      {isApply && <JobApplyForm onClose={()=> setIsApply(false)}  />}

      {/* //job post details  */}
      <div className={isApply ? "blur pointer-events-none" : ""}>
        <div className="w-full max-w-[1800px] m-auto flex flex-col items-center pt-20 text-textcolor2 relative">
          <h1 className="text-2xl md:text-4xl font-semibold pt-10 text-black ">
            {jobs.job_desigination}
          </h1>

          <div className="border w-[1000px] p-6 rounded-md flex flex-col gap-4 my-20 ">
            <div className="border rounded-sm px-2 py-1 w-40 flex gap-2 items-center justify-center">
              <TrendingUp
                strokeWidth={1.5}
                size={16}
                className="text-secondary"  
              />
              <p className="text-md">Actively hiring</p>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex flex-col ">
                <h1 className="text-gray-800 font-semibold text-xl ">
                  {jobs.job_desigination}
                </h1>
                <p className="text-sm">{jobs.company_name}</p>
              </div>
              <div>
                <p>company logo</p>
              </div>
            </div>

            <div className="flex gap-1 items-center">
              <MapPin strokeWidth={1.5} size={16} />
              <h1>Bhilai, Chhattisgarh</h1>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-center">
                <span className="flex items-center gap-1">
                  <CalendarClock strokeWidth={1.5} size={16} />
                  <h1> Start Date</h1>
                </span>
                <p>{jobs.job_startdate}</p>
              </div>
              <div className="text-center">
                <span className="flex items-center gap-1">
                  <IndianRupee strokeWidth={1.5} size={16} />
                  <h1>CTC (annual)</h1>
                </span>
                <p>{jobs.job_ctc}</p>
              </div>
              <div className="text-center">
                <span className="flex items-center gap-1">
                  <Briefcase strokeWidth={1.5} size={16} />
                  <h1>Experience</h1>
                </span>
                <p>{jobs.job_experience}</p>
              </div>
              <div className="text-center">
                <span className="flex items-center gap-1">
                  <CalendarClock strokeWidth={1.5} size={16} />
                  <h1>Apply by</h1>
                </span>
                <p>{jobs.Job_lastdate}</p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <span className="bg-gray-200 px-4 py-0.5 rounded-full flex items-center gap-1">
                <TimerReset strokeWidth={1.5} size={16} />
                <p>{formattedDate}</p>
              </span>
              <span className="bg-gray-200 px-4 py-0.5 rounded-full">
                {jobs.job_type}
              </span>
            </div>
            <div className="flex justify-between items-center ">
              <div className="flex gap-2 items-center">
                <span className="p-0.5 rounded-full bg-orange-500">
                  <Zap strokeWidth={2} size={16} />
                </span>
                <p>Be the early applicant</p>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex gap-4 items-center">
                  <Share2 strokeWidth={1.5} />
                  <p onClick={() => setischange(!ischange)}>
                    {ischange ? (
                      <IoBookmarkOutline size={22} />
                    ) : (
                      <IoBookmark size={22} className="text-secondary" />
                    )}
                  </p>
                </div>
                <Button text="Apply now" onClick={() => setIsApply(!isApply)} />
              </div>
            </div>
            <hr />
            <div className="flex flex-col gap-2 ">
              <h1 className="text-xl font-semibold text-black">
                About this job
              </h1>
              <p>Key Responsibilities</p>
              <div>{jobs.job_description}</div>
            </div>
            <div>
              <h1 className="text-md font-semibold text-black">
                Skills required
              </h1>
              <p>{jobs.job_skills}</p>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-semibold text-black" >Earn certificates in this skills </h1>
              <div className="flex items-center gap-4">
                <p>{jobs.certifications}</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-semibold text-black">Who can apply</h1>
              <p>
                Only those candidates can apply who: <br />
                1. have minimum 1 years of experience
              </p>
              <div>
                <h1 className="text-black font-semibold">Salary</h1>
                <p>Annual CTC: {jobs.job_ctc}</p>
              </div>
              <div>
                <h1 className="text-black font-semibold">Number of opening</h1>
                <p>20</p>
              </div>
            </div>
            <div>
              <h1 className="text-black font-semibold">About (company name)</h1>
              <p>{jobs.about_company}</p>
            </div>
            <div className="flex justify-center">
              <Button text="Apply Now" onClick={()=> setIsApply(!isApply)} />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};
export default JobPageRoute;
