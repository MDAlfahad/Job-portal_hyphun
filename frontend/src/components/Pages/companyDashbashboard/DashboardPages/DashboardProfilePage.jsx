import CompanyProfileCard from "./CompanyProfileCard"


const DashboardProfilePage = () => {
  return (
    <>
      <div className="mt-16 px-6 py-4 relative w-full h-[90vh] overflow-y-auto">
        <div className="border-b-2">
          <h1 className="text-2xl md:text-4xl font-semibold py-2 ">
           Job and Placement Details
          </h1>
        </div>
        <div className="flex  justify-around my-6">
            <CompanyProfileCard
            heading="Total job Post"
            number="20+"
            text="Total job post this month"
            />
            <CompanyProfileCard
            heading="Total Intership Post"
            number="20+"
            text="Total intership posted this month"
            />
            <CompanyProfileCard
            heading="Total Post"
            number="20+"
            text="Total posts"
            />
        </div>
        <div>
        <h1 className="text-2xl md:text-4xl py-4 font-semibold border-b-2">
            Job posted details
        </h1>


        </div>
      </div>
    </>
  );
};

export default DashboardProfilePage;
