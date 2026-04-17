import { ArrowRight } from "lucide-react";

const CrauselCard = ({
  company_name,
  job_ctc,
  job_description,
  job_skills,
}) => {
  return (
    <>
      <div className="md:w-96 px-6 py-12  h-auto flex flex-col gap-2 bg-white border rounded-xl ">
        <div>
          <h1 className="text-lg md:text-xl text-textcolor font-semibold md:font-bold capitalize line-clamp-1">
            {company_name}
          </h1>
        </div>
        <div>
          <p className="font-semibold text-[14px] text-textcolor"> ₹{job_ctc}</p>
        </div>
        <div>
          <p className="text-sm md:text-[14px] text-textcolor line-clamp-3 capitalize">
            {job_description}
          </p>
        </div>
        <div className="text-sm md:text-[14px] lowercase text-textcolor2">
          {job_skills}
        </div>
        <div className="flex gap-5 items-center text-secondary hover:text-textcolor transition scale-100 duration-300">
          <a className="mt-auto " href="#">
            Learn More{" "}
          </a>
          <ArrowRight strokeWidth={1.5} size={20}/>
        </div>
      </div>
    </>
  );
};

export default CrauselCard;
