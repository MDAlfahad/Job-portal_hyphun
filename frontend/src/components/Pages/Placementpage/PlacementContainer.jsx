import { Search, SlidersHorizontal, X } from "lucide-react";
import { useState } from "react";
import PlacementContainerCard from "./PlacementContainerCard";
import Citydata from "../../../API/cities.json";
import Underline from "../../images/arrow.png";
import FooterContainer from "../HeroContaner/FooterContainer";

const PlacementContainer = () => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <>
      <div className="w-full max-w-[1800px] m-auto py-6 md:py-[4rem] noselect">
        
       

        {/* DESKTOP FILTER */}
        <div className="hidden md:flex items-center border-b px-12 py-4 justify-between fixed bg-white w-full max-w-[1800px] z-50">
          
          <div className="flex items-center gap-2 border rounded-md px-2">
            <input
              type="search"
              placeholder="e.g Data Analyst"
              className="px-2 py-2 outline-none"
            />
            <Search size={20} />
          </div>

          <select className="border px-3 py-2 rounded-md">
            <option>Position</option>
            <option>Frontend Developer</option>
            <option>Backend Developer</option>
            <option>Marketing</option>
          </select>

          <select className="border px-3 py-2 rounded-md">
            <option>Location</option>
            {Citydata?.cities.map((item, i) => (
              <option key={i}>{item.City}</option>
            ))}
          </select>
        </div>

  
        <div className="flex md:hidden items-center justify-between px-4 py-3 fixed bg-white w-full z-50 border-b">
          
        
          <div className="flex items-center gap-2 border rounded-md px-2 w-full mr-2">
            <input
              type="search"
              placeholder="Search jobs..."
              className="px-2 py-2 outline-none w-full"
            />
            <Search size={20} />
          </div>

          
          <button
            onClick={() => setShowFilters(true)}
            className="p-2 border rounded-md"
          >
            <SlidersHorizontal size={22} />
          </button>
        </div>

        {/* ================ MOBILE FILTER DRAWER ================= */}
        {showFilters && (
          <div className="fixed inset-0 bg-black/40 z-50 flex items-end md:hidden">
            
            <div className="bg-white w-full rounded-t-2xl p-5 animate-slideUp">
              
              {/* Header */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Filters</h2>
                <X
                  className="cursor-pointer"
                  onClick={() => setShowFilters(false)}
                />
              </div>

              {/* Filters */}
              <div className="flex flex-col gap-4">
                
                <select className="border px-3 py-2 rounded-md">
                  <option>Position</option>
                  <option>Frontend Developer</option>
                  <option>Backend Developer</option>
                  <option>Marketing</option>
                </select>

                <select className="border px-3 py-2 rounded-md">
                  <option>Location</option>
                  {Citydata?.cities.map((item, i) => (
                    <option key={i}>{item.City}</option>
                  ))}
                </select>

                <button
                  onClick={() => setShowFilters(false)}
                  className="bg-secondary text-white py-2 rounded-md"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ================= CONTENT ================= */}
        <div className="mt-20 md:mt-28 px-4 md:px-12 py-10 flex flex-col gap-10">
          
          {/* Heading */}
          <div className="flex flex-col items-center">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-center">
              <span className="text-secondary">Your Opportunity</span> Get Placed
            </h1>
            <img
              className="hidden md:block w-40 h-6 mt-2"
              src={Underline}
              alt=""
            />
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <PlacementContainerCard />
            <PlacementContainerCard />
            <PlacementContainerCard />
            <PlacementContainerCard />
          </div>
        </div>
      </div>

      <FooterContainer />
    </>
  );
};

export default PlacementContainer;