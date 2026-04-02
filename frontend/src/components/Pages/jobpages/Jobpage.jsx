import { Funnel, Search } from "lucide-react";
import Citydata from "../../../API/cities.json";
import Button from "../../Components/buttons/ButtonComponents";
import JobPageCard from "./JobPageCard";
import FooterContainer from "../HeroContaner/FooterContainer";
import { useState } from "react";
import { useEffect } from "react";

const JobPage = () => {
  const API_CALL = `http://localhost:4000`

  const[isData, setIsData] = useState([]);

  useEffect(()=>{
    fetch(`${API_CALL}/api/jobdata`)
    .then(res=>res.json())
    .then(result =>{
      setIsData(result)
      console.log(result)
    });
  },[])
  return (
    <>
      <div className="w-full max-w-[1800px] m-auto py-20 px-4 md:px-20 noselect">
        <div className="md:flex ">
          {/* -----------------------search filtered area-------------------------- */}
          <div className=" flex flex-col gap-5 items-center overflow-hidden w-full max-w-[400px]  border px-4 py-4 rounded-xl md:h-screen max-h-[80vh] mt-20">
            <h1 className="flex items-center gap-2 text-xl ">
              <Funnel strokeWidth={1.5} className="text-secondary" />
              Filter
            </h1>
            <div className="flex items-center w-full border overflow-hidden">
              <input className="w-full px-2 py-2 outline-none "type="search" placeholder="e.g Frontend Developer, Bhilai" />
              <Search strokeWidth={2} size={23} className="bg-secondary h-full w-10 p-2 text-white"/>
            </div>
            <div>
              <div className="flex flex-col ">
                <label htmlFor="position">Profile</label>
                <select
                  name=""
                  id="position"
                  className="border outline-none px-2 py-2 rounded-md"
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
              <div className="flex flex-col">
                <label htmlFor="location">Location</label>
                <select
                  name="location"
                  id="location"
                  className="w-full px-2 py-2 outline-none border max-w-sm rounded-md truncate"
                >
                  <option value="select">e.g Bhilai</option>
                  {Citydata &&
                    Citydata.cities.map((item, index) => (
                      <option
                        key={index}
                        value={item.City}
                        className="px-2 py-4"
                      >
                        {item.City}
                      </option>
                    ))}
                </select>
              </div>
              <div className="flex flex-col py-4 gap-4">
                <h1 className="text-lg font-semibold">
                  Annual Salary (in lakhs)
                </h1>
                <div className="flex w-full justify-between items-center">
                  <p>0</p>
                  <p>2</p>
                  <p>5</p>
                  <p>8</p>
                  <p>10</p>
                </div>
                <input type="range" className="" />
              </div>
              <div className="mt-auto">
                <Button text="Clear All" />
              </div>
            </div>
          </div>
          {/* --------------------job posted area--------------------------- */}
          <div className="flex flex-col md:px-10 items-center w-full overflow-y-auto h-[80vh] md:h-screen">
            <div className="text-center py-6">
              <h1 className="text-2xl md:text-3xl font-semibold"> 100+ Job posted</h1>
              <p className="text-sm md:text-lg">
                Search and Apply to Latest Job Vacancies & Openings in India
              </p>
            </div>
            <div className="w-full flex flex-col gap-4">
                {
                  isData.map((card)=>(
                    <JobPageCard key={card} {...card} />
                  ))
                }
            </div>
          </div>
        </div>
        
      </div>
      <FooterContainer/>
    </>
  );
};

export default JobPage;
