import {
  Bookmark,
  BriefcaseBusiness,
  IndianRupee,
  MapPin,
  TimerReset,
  TrendingUp,
  Zap,
} from "lucide-react";
import Logo from "../../images/jio.png";
import { useState } from "react";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";

const JobPageCard = ({
  job_id,
  job_desigination,
  company_name,
  job_location,
  job_ctc,
  job_experience,
  job_description,
  job_skills,
  job_workingtype,
  posted_at,
}) => {
  const [Click, setClick] = useState(true);
  const handleclick = () => {
    setClick(!Click);
  };
  const formattedate = formatDistanceToNow(
    new Date(posted_at.replace(" ", "T")),
    {addSuffix: true}, 
  );


  return (
    <>
      <div className="w-full flex flex-col gap-4 p-4 shadow-xl rounded-xl border bg-white">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl md:text-3xl font-semibold ">
              {job_desigination}
            </h1>
            <div className="flex items-center md:gap-10 gap-2">
              <p className="text-textcolor2">{company_name}</p>
              <p className="px-2 py-[2px] border border-secondary rounded-full flex items-center gap-2 text-sm md:text-md">
                <TrendingUp strokeWidth={1.5} size={14} />
                Actively hiring
              </p>
            </div>
          </div>
          <div className="cover overflow-hidden">
            <img src={Logo} width={100} alt="" />
          </div>
        </div>
        <Link to={`/job-page-route/${job_id}`}>
          <div className="flex flex-col gap-2">
            <div className="flex gap-4 items-center">
              <p className="text-[14px] font-semibold text-textcolor flex gap-2 items-center">
                <MapPin strokeWidth={2} size={16} />
                {job_location}
              </p>
              <p className="text-[14px] font-semibold text-textcolor flex gap-2 items-center">
                <IndianRupee strokeWidth={2} size={16} />
                {job_ctc}
              </p>
              <p className="text-[14px] font-semibold text-textcolor flex gap-2 items-center">
                <BriefcaseBusiness strokeWidth={2} size={16} />
                {job_experience}
              </p>
            </div>

            <p className="text-textcolor  line-clamp-1">{job_description}</p>
            <p className="text-md text-textcolor2">{job_skills}</p>
            <p className="line-clamp-2">{job_workingtype}</p>
          </div>
        </Link>

        <div className="flex gap-4 items-center">
          <p className="flex items-center gap-2 border bg-blue-200 rounded-full px-2 py-[1px] text-secondary">
            <TimerReset strokeWidth={1.5} size={18} />
            {formattedate}
          </p>
          <p className="flex items-center gap-2 border bg-gray-100 rounded-full px-2 py[1px]">
            {" "}
            <Zap strokeWidth={1.5} className="text-primary" size={18} />
            Be Early
          </p>
          <p
            className="px-1 py-1 flex items-center gap-2 text-sm md:text-xl bg-gray-100 rounded-full"
            onClick={handleclick}
          >
            {Click ? <FaRegBookmark /> : <FaBookmark />}
          </p>
        </div>
      </div>
    </>
  );
};

export default JobPageCard;
