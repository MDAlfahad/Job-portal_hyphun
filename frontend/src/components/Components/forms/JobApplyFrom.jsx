import {
  BaggageClaimIcon,
  Calendar,
  History,
  HomeIcon,
  TimerIcon,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { FaRupeeSign, FaSuitcase, FaSuitcaseRolling } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";
import { useParams } from "react-router-dom";
import Button from "../buttons/ButtonComponents";
import { formatDistanceStrict, formatDistanceToNow } from "date-fns";

const JobApplyForm = ({ className, onClose }) => {
  const API_CALL = `http://localhost:4000`;
  const { id } = useParams();
  const [isJobData, setIsJobData] = useState(null);

  useEffect(() => {
    fetch(`${API_CALL}/api/jobdata/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setIsJobData(data);
      })
      .catch((error) => {
        console.log("failed to fetch data", error);
        setIsJobData(null);
      });
  }, [id]);

  if (!isJobData) return <h1>Loading...</h1>;

  //time formatte

  const formattedDate = formatDistanceToNow(
    new Date(isJobData.posted_at.replace(" ", "T")),
    {addSuffix: true},
  )

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/40 backdrop-blur-sm overflow-y-auto z-50">
      <div className="min-h-full flex justify-center items-start pt-10 pb-10 ">
        <div className="flex flex-col gap-2 bg-white w-[1100px] border  rounded-lg overflow-hidden ">
          <div className="flex justify-between py-6 bg-gray-100 border-b p-8 items-center">
            <h1 className="text-xl md:text-3xl text-black ml-60 font-semibold">
              Applying to {isJobData.job_desigination} {isJobData.job_type}
            </h1>
            <X color="black" onClick={onClose} />
          </div>
          <div className="flex flex-col gap-2 p-8">
            <div className="flex     items-center justify-between">
              <div className="flex flex-col ">
                <h1 className="text-gray-800 font-semibold text-xl ">
                  {isJobData.job_desigination}
                </h1>
                <p className="text-sm text-textcolor2">{isJobData.company_name}</p>
              </div>
              <div>
                <p>company logo</p>
              </div>
            </div>
            <div className="flex flex-col gap-2 ">
              <span className="flex items-center gap-2 text-sm text-textcolor2 ">
                <FaRupeeSign className="text-[14px] " />
                {isJobData.job_ctc}
              </span>
              <span className="flex items-center gap-2 text-sm text-textcolor2">
                <HomeIcon size={16} />
                {isJobData.job_preferences}
              </span>
              <span className="flex items-center gap-2 text-sm text-textcolor2">
                <Calendar size={16} />3 months
              </span>
            </div>
            <div className="flex gap-6">
              <span className="flex gap-2 text-sm items-center px-2 py-0.5 bg-green-200 text-green-500 rounded-full">
                <History size={16} strokeWidth={1.5} />{formattedDate}
              </span>
              <span className="flex gap-2 text-sm items-center px-2 py-0.5 bg-orange-200 text-orange-800 rounded-full">
                <FaSuitcase size={16} strokeWidth={1.5} />
                Job Offring upto 6LPA
              </span>
              <span className="flex gap-2 text-sm items-center px-2 py-0.5 rounded-full bg-gray-100 border-0.5">
                {isJobData.job_type}
              </span>
              <span className="flex gap-2 text-sm items-center px-2 py-0.5 rounded-full bg-gray-100 border-0.5">
                vacancies
              </span>
            </div>

            <div className="flex flex-col gap-4 py-4">
              <h1 className="text-lg md:text-xl font-semibold text-black">
                About the intership
              </h1>
              <div>
                <h1 className="text-black font-semibold">Role Overview</h1>
                <p className="text-sm md:text-[16px] text-textcolor2">
                  {isJobData.job_description}
                </p>
              </div>
              <div>
                <h1 className="text-black font-semibold">Requirements</h1>
                <p className="text-sm md:text-[16px] text-textcolor2">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
                  error obcaecati quidem nobis, possimus beatae ipsum aliquam
                  ipsa, enim ullam molestiae quae aspernatur. Odio alias velit
                  doloremque ipsam totam magni!
                </p>
              </div>
              <div className="flex flex-col ">
                <h1 className="text-black font-semibold">
                  Additional Information
                </h1>
                <span className="flex gap-2 items-center text-black font-semibold">
                  Stipend :{" "}
                  <p className=" text-textcolor2">₹ {isJobData.job_ctc}</p>
                </span>
              </div>
              <div className="flex flex-col gap-2 ">
                <h1 className="text-md md:text-xl font-semibold text-black">
                  About {isJobData.company_name}
                </h1>
                <p className="text-textcolor2">{isJobData.about_company}</p>
              </div>
            </div>
          </div>
          <form action="submit" className="flex flex-col gap-2 p-8 border-t">
            <h1 className="text-lg md:text-xl font-semibold text-black">
              Apply Now
            </h1>
            <h1 className="text-sm md:text-[16px] font-semibold text-black">
              Comfirm your avaiability
            </h1>
            <div className="flex flex-col gap-2 border py-4 px-2 rounded-xl bg-gray-200">
              <span className="flex gap-2 items-center text-[16px]">
                <input type="radio" />{" "}
                <p>Yes, Iam avalible to join immediately</p>
              </span>
              <span className="flex gap-2 items-center text-[16px]">
                <input type="radio" />{" "}
                <p>No, talk and select the date of joiing</p>
              </span>
              <span className="flex gap-2 items-center text-[16px]">
                <input type="radio" />{" "}
                <p>other, please specify your avaiability</p>
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-sm md:text-[16px] font-semibold text-black">
                Additional questions
              </h1>
              <p className=" text-[16px]">
                Are you open to travel for fieldwork as part of your
                responsibilities?
              </p>
              <div className="flex flex-col border bg-gray-200 py-4 px-2 rounded-xl">
                <span>
                  <input type="radio" /> Yes
                </span>
                <span>
                  <input type="radio" /> No
                </span>
              </div>
              <div className="flex flex-col gap-2 py-2">
                <p className="text-black font-semibold text-[16px]">
                  How many months of experience do you have
                </p>
                <input
                  type="number"
                  placeholder="Enter numeric value"
                  className="outline-none border p-2 rounded-md w-48"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 border  rounded-xl p-2">
              <h1 className="text-md md:text-lg text-black font-semibold">
                Upload resume
              </h1>
              <div>
                <label
                  htmlFor="file"
                  className="border-2 border-black border-dotted p-2 rounded-md flex items-center md:text-lg font-semibold text-black gap-2 w-48 justify-center"
                >
                  <FiUpload />
                  Upload file
                </label>
                <input type="file" id="file" hidden />
              </div>
            </div>
            <div className="flex py-4 justify-center">
                <Button text="Submit"/>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobApplyForm;
