import { FaMinus } from "react-icons/fa";

const FaqsPage = () => {
  return (
    <div className="max-w-[1800px] m-auto px-6 md:px-12 py-6">
      <div className="flex flex-col py-4">
        <h1 className="text-xl md:text-3xl font-medium">
          Frequently asked question
        </h1>
        <p className="text-[14px] font-light max-w-[500px]">
          here's is everything you need to know to get started, manage your
          account, and troubleshoot the most frequent issues
        </p>
      </div>

      <div>
        <div className="flex flex-col gap-1 bg-gray-200 p-2 rounded-sm max-w-96">
          <h1 className="flex items-center gap-10">
            What is this platfrom used for <FaMinus />
          </h1>
          <p className="text-[14px] font-light max-w-96">
            This platform is designed to help to get job, internship to user
            with very easy and organised manner.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FaqsPage;
