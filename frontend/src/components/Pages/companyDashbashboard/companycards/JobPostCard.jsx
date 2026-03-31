import { useState } from "react";
import { TfiArrowCircleDown, TfiArrowCircleRight } from "react-icons/tfi";
const JobPostCard = () => {
  const [isShow, setIsShow] = useState(false);

  const toggleShow = () => {
    setIsShow((prev) => !prev);
  };

  return (
    <>
      <div className="w-full h-auto py-4 px-2">
        <div className="w-full  border rounded-md overflow-hidden text-white  ">
          <div className="border-b-2 w-full px-12 py-4  flex justify-between bg-secondary">
            <div>
              <h1 className="text-xl font-semibold">Frontend developer</h1>
              <p className="text-sm font-semibold">job type</p>
              <p className="text-lg font-semibold">location</p>
            </div>
            <div className="flex  items-center gap-12">
              <div>
                <p className="text-lg font-semibold">start date</p>
                <p className="text-lg font-semibold">end date</p>
              </div>
              <p onClick={toggleShow}>
                {!isShow ? (
                  <TfiArrowCircleRight className="text-2xl" />
                ) : (
                 <TfiArrowCircleDown className="text-2xl" />
                )}
              </p>
            </div>
          </div>

          {isShow && (
            <div className=" text-textcolor px-12 py-4 w-full flex flex-col gap-2">
              <h1 className="px-2 py-2 bg-gray-100 rounded-md">Company name</h1>
              <h1 className="px-2 py-2 bg-gray-100 rounded-md">select type</h1>
              <h1 className="px-2 py-2 bg-gray-100 rounded-md">annual ctc</h1>
              <h1 className="px-2 py-2 bg-gray-100 rounded-md">experience</h1>
              <h1 className="px-2 py-2 bg-gray-100 rounded-md">applied by</h1>
              <h1 className="px-2 py-2 bg-gray-100 rounded-md">
                about this job
              </h1>
              <h1 className="px-2 py-2 bg-gray-100 rounded-md">
                skills required
              </h1>
              <h1 className="px-2 py-2 bg-gray-100 rounded-md">
                about this company
              </h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default JobPostCard;
