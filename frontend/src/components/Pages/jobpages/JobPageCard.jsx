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
import { useNavigate } from "react-router-dom";

const JobPageCard = () => {
  const navigate = useNavigate();

    const [Click, setClick] = useState(true);
    const handleclick= ()=>{
      setClick(!Click)
    }
  return (
    <>
      <div className="w-full flex flex-col gap-4 p-4 shadow-xl rounded-xl border bg-white" onClick={()=>navigate("/jobpageroute")}>
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl md:text-3xl font-semibold ">
              Frontend Developer
            </h1>
            <div className="flex items-center md:gap-10 gap-2">
              <p className="text-textcolor2">Comapny Name</p>
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
        <div className="flex flex-col gap-2">
          <div className="flex gap-4 items-center">
            <p className="text-[14px] text-textcolor flex gap-2 items-center">
              <MapPin strokeWidth={1.5} size={16} />
              Location
            </p>
            <p className="text-[14px] text-textcolor flex gap-2 items-center">
              <IndianRupee strokeWidth={1.5} size={16} />
              CTC
            </p>
            <p className="text-[14px] text-textcolor flex gap-2 items-center">
              <BriefcaseBusiness strokeWidth={1.5} size={16} />
              experience
            </p>
          </div>
          <p className="text-textcolor line-clamp-1">
            Key Responsiblities: Identifying potential clients through market
            research, cold calling, networking,
          </p>
          <p className="text-md text-textcolor2">Skills</p>
          <p className="line-clamp-2">Languages</p>
        </div>

        <div className="flex gap-4 items-center">
          <p className="flex items-center gap-2 border bg-blue-200 rounded-full px-2 py-[1px] text-secondary">
            <TimerReset strokeWidth={1.5} size={18} />
            Posted at
          </p>
          <p className="flex items-center gap-2 border bg-gray-100 rounded-full px-2 py[1px]">
            {" "}
            <Zap strokeWidth={1.5} className="text-primary" size={18} />
            Be Early
          </p>
          <p className="px-1 py-1 flex items-center gap-2 text-sm md:text-xl bg-gray-100 rounded-full" onClick={handleclick}>
            {Click ? <FaRegBookmark /> : <FaBookmark />}
              
          </p>
        </div>
      </div>
    </>
  );
};

export default JobPageCard;
