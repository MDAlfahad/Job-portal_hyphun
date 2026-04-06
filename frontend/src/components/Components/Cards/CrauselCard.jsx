import { ArrowRight } from "lucide-react";

const CrauselCard = ({
  company_name,
  job_ctc,
  job_description,
  job_skills,
}) => {
  return (
    <>
      <div className="md:w-96 px-6 py-6 h-auto flex flex-col gap-2 bg-white border rounded-xl shadow-xl">
        <div>
          <h1 className="text-lg md:text-2xl font-semibold md:font-bold capitalize">
            {company_name}
          </h1>
        </div>
        <div>
          <p className="font-semibold text-textcolor2"> ₹{job_ctc}</p>
        </div>
        <div>
          <p className="text-sm md:text-[16px] text-textcolor line-clamp-3 capitalize">
            {job_description}
          </p>
        </div>
        <div className="text-sm md:text-[16px] lowercase text-textcolor2">
          {job_skills}
        </div>
        <div className="flex gap-5">
          <a className="mt-auto text-secondary" href="#">
            Learn More{" "}
          </a>
          <ArrowRight className="text-secondary" strokeWidth={1.5} />
        </div>
      </div>
    </>
  );
};

export default CrauselCard;
