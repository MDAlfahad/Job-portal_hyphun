import { Search } from "lucide-react";
import PlacementContainerCard from "./PlacementContainerCard";
import Citydata from "../../../API/cities.json";
import Underline  from "../../images/arrow.png";
import FooterContainer from "../HeroContaner/FooterContainer";

const PlacementContainer = () => {
  return (
    <>
      <div className="w-full  max-w-[1800px] m-auto  py-6 md:py-[4rem] z-50 noselect">
        {/* ------------------------------------filter bar--------------------------------------- */}
        <div className="md:flex items-center  border-b-2 px-4 md:px-12 my-12 md:my-0 py-4 justify-between fixed bg-white w-full  max-w-[1800px] m-auto">
          <div className="flex px-1 items-center gap-2 border rounded-md">
            <input
              type="search"
              placeholder="e.g Data Anylisis"
              className="px-4 outline-none w-full py-2"
            />
            <Search strokeWidth={2} size={20} />
          </div>
          <div>
            <select
              name=""
              id="position"
              className="border outline-none px-2 py-2 rounded-md w-full my-2"
            >
              <option value="select">e.g Data anylist</option>
              <option value="frontenddev">Frontend Developer</option>
              <option value="frontenddev">Backend Developer</option>
              <option value="frontenddev">Marketing</option>
              <option value="frontenddev">Social Media</option>
              <option value="frontenddev">Cyber Security</option>
              <option value="frontenddev">Data Anaylist</option>
              <option value="frontenddev">Corporate</option>
            </select>
          </div>
          <div>
            <select
              name="location"
              id="location"
              className="w-full px-2 py-2 outline-none border  rounded-md truncate"
            >
              <option value="select">e.g Bhilai</option>
              {Citydata &&
                Citydata.cities.map((item, index) => (
                  <option key={index} value={item.City} className="px-2 py-4">
                    {item.City}
                  </option>
                ))}
            </select>
          </div>
        </div>

        {/* ------------------------placement list---------------------------- */}
        <div className="mt-20 px-4 md:px-12 py-10 flex flex-col gap-10">
            <div className=" flex flex-col items-center">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-center"><span className="text-secondary">Your Oppourtunity</span> Your Selection Get Placed</h1>
                <img className="mr-96 w-40 h-6 hidden md:flex"src={Underline} alt="" />
            </div>
          <div className="flex flex-wrap justify-between gap-10 ">
            <PlacementContainerCard />
            <PlacementContainerCard />
            <PlacementContainerCard />
            <PlacementContainerCard />
          </div>
        </div>
      </div>
      <FooterContainer/>
    </>
  );
};

export default PlacementContainer;
