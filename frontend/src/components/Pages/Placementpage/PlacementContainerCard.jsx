import { BriefcaseBusiness, IndianRupee, MapPin, TimerReset, TrendingUp, Zap } from "lucide-react";
import Logo from "../../images/jio.png";

const PlacementContainerCard =()=>{
    return(

    <>
      <div className="max-w-96 flex flex-col gap-4 p-4 shadow-xl rounded-xl">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl md:text-1xl font-semibold ">
              Frontend Developer
            </h1>
            <div className="flex items-center md:gap-10 gap-1">
              <p className="text-textcolor2 text-sm">Comapny Name</p>
              
            </div>
          </div>
          <div className="cover overflow-hidden">
            <p className="px-2 py-[2px] border border-secondary rounded-full flex items-center gap-2 text-sm">
                <TrendingUp strokeWidth={1.5} size={14} />Actively hiring
              </p>
            <img src={Logo} className="w-[100px] h-[80px] object-cover" alt="" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-4 items-center">
            <p className="text-[14px] text-textcolor flex gap-2 items-center">
              <MapPin strokeWidth={1.5} size={16}/>
              Location
            </p>
            <p className="text-[14px] text-textcolor flex gap-2 items-center">
              <IndianRupee strokeWidth={1.5} size={16}/>
              CTC
            </p>
            <p className="text-[14px] text-textcolor flex gap-2 items-center">
              <BriefcaseBusiness strokeWidth={1.5} size={16}/>
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
          <p className="flex items-center gap-2 border text-sm bg-pink-100 rounded-full px-2 py-[1px] text-secondary"><TimerReset strokeWidth={1.5} size={18}/>Posted at</p>
          <p className="flex items-center gap-2 border text-sm bg-gray-100 rounded-full px-2 py[1px]"> <Zap strokeWidth={1.5} className="text-primary" size={18}/>Be Early</p>
        </div>
      </div>
    </>
  );
};


export default PlacementContainerCard; 