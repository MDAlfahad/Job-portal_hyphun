import JobPostCard from "../companycards/JobPostCard";
import CompanyDashboard from "../CompanyDashboard";
import CompanyProfileCard from "./CompanyProfileCard";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import WorkingMen from "../../../images/workingman.png";

const DashboardProfilePage = () => {
  const API_CALL = `http://localhost:4000`;
  const [job, setJobs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(`${API_CALL}/api/jobpostdata`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setJobs(res.data);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchData();
  }, []);
  const count = job.length;

  return (
    <>
      <div className="mt-16 px-6 py-4 relative w-full h-[90vh] overflow-y-auto">
        <div className="border-b-2">
          <h1 className="text-2xl md:text-4xl font-semibold py-2 ">
            Job and Placement Details
          </h1>
        </div>
        <div className="flex  justify-around my-6">
          <div className="w-full h-52 bg-secondary rounded-xl text-white px-12 py-2">
      
              <div className="flex justify-between">
                <div>
                  <span className="text-xl md:text-3xl font-semibold flex gap-1">
                    <h1>Welcome</h1>
                  </span>
                  <p className="text-[14px]">You had a {10} application today,</p>

                  <div className="mt-10">
                    <h1 className="text-2xl font-semibold"> Total posts: {job.length}</h1>
                  </div>
                </div>
                <div>
                  <img src={WorkingMen} className="w-56" alt="" />
                </div>
              </div>

            <div></div>
          </div>
        </div>
        <div>
          <h1 className="text-2xl md:text-4xl py-4 font-semibold">
            Job posted details
          </h1>

          <div className="border border-0.5 rounded-xl mt-4 p-4 flex flex-col  gap-4 ">
            {job.map((item) => {
              return <JobPostCard key={item.id} {...item} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardProfilePage;
