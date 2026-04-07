import JobPostCard from "../companycards/JobPostCard";
import { useEffect } from "react";
import WorkingMen from "../../../images/workingman.png";
import useAuthStore from "../../../../Store/userAuth";
import useJobStore from "../../../../Store/jobStore";

const DashboardProfilePage = () => {
  const { user, token } = useAuthStore();
  const { jobs, fetchjobs } = useJobStore();

  useEffect(() => {
    if (token) {
      fetchjobs(token);
    }
  }, [token, fetchjobs]);

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
                  <h1>Welcome {user?.user_name} </h1>
                </span>
                <p className="text-[14px]">You had a {10} application today,</p>

                <div className="mt-10">
                  <h1 className="text-2xl font-semibold">
                    {" "}
                    Total posts: {jobs.length}
                  </h1>
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
            {jobs.length > 0 ? (
              jobs.map((item) => {
                return <JobPostCard key={item.job_id || item.id} {...item} />;
              })
            ) : (
              <div className="text-center py-10 text-textcolor2 italic">
                No Job Posted yet. Start adding !
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardProfilePage;
