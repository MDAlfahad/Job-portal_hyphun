import {
  Bookmark,
  Briefcase,
  CalendarClock,
  IndianRupee,
  MapPin,
  Share2,
  TimerReset,
  TrendingUp,
  Zap,
} from "lucide-react";
import Button from "../../../Components/buttons/ButtonComponents";
import { IoBookmark, IoBookmarkOutline } from "react-icons/io5";
import Footer from "../../HeroContaner/FooterContainer"
import { useState } from "react";

const JobPageRoute = () => {

  const [ischange, setischange] = useState(true);

 
  return (
    <div className="w-full max-w-[1800px] m-auto flex flex-col items-center pt-20 text-textcolor2">
      <h1 className="text-2xl md:text-4xl font-semibold pt-10 text-black ">
        Designation
      </h1>

      <div className="border w-[1000px] p-6 rounded-md flex flex-col gap-4 my-20 ">
        <div className="border rounded-sm px-2 py-1 w-40 flex gap-2 items-center justify-center">
          <TrendingUp strokeWidth={1.5} size={16} className="text-secondary" />
          <p className="text-md">Actively hiring</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col ">
            <h1 className="text-gray-800 font-semibold text-xl ">
              Designation
            </h1>
            <p className="text-sm">company name</p>
          </div>
          <div>
            <p>company logo</p>
          </div>
        </div>

        <div className="flex gap-1 items-center">
          <MapPin strokeWidth={1.5} size={16} />
          <h1>Bhilai, Chhattisgarh</h1>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-center">
            <span className="flex items-center gap-1">
              <CalendarClock strokeWidth={1.5} size={16} />
              <h1> Start Date</h1>
            </span>
            <p>12/05/26</p>
          </div>
          <div className="text-center">
            <span className="flex items-center gap-1">
              <IndianRupee strokeWidth={1.5} size={16} />
              <h1>CTC (annual)</h1>
            </span>
            <p>₹10000-20000</p>
          </div>
          <div className="text-center">
            <span className="flex items-center gap-1">
              <Briefcase strokeWidth={1.5} size={16} />
              <h1>Experience</h1>
            </span>
            <p>1 years</p>
          </div>
          <div className="text-center">
            <span className="flex items-center gap-1">
              <CalendarClock strokeWidth={1.5} size={16} />
              <h1>Apply by</h1>
            </span>
            <p>23 apr 26</p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <span className="bg-gray-200 px-4 py-0.5 rounded-full flex items-center gap-1">
            <TimerReset strokeWidth={1.5} size={16} />
            <p>posted 1 week age</p>
          </span>
          <span className="bg-gray-200 px-4 py-0.5 rounded-full">Job</span>
        </div>
        <div className="flex justify-between items-center ">
          <div className="flex gap-2 items-center">
            <span className="p-0.5 rounded-full bg-orange-500">
              <Zap strokeWidth={2} size={16} />
            </span>
            <p>Be the early applicant</p>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex gap-4 items-center">
              <Share2 strokeWidth={1.5} />
              <p onClick={()=>setischange(!ischange)}>
                {
                  ischange?   <IoBookmarkOutline size={22} />: <IoBookmark size={22} className="text-secondary"/>
                }
              </p>
             
            </div>
            <Button text="Apply now" />
          </div>
        </div>
        <hr />
        <div className="flex flex-col gap-2 ">
          <h1 className="text-xl font-semibold text-black">About this job</h1>
          <p>Key Responsibilities</p>
          <div>
            1. Sales & Lead Generation: Identify potential clients and generate
            leads through various calling methods. Present, promote, and sell
            products/services to prospective customers. Develop and implement
            effective sales strategies to achieve and exceed assigned targets
            while maintaining a strong pipeline of prospects. 2. Customer
            Relationship Management: Build and maintain long-term relationships
            with new and existing clients. Understand customer needs, provide
            suitable solutions, and ensure a high level of customer
            satisfaction. Offer professional after-sales support and promptly
            address inquiries or concerns to strengthen client trust and
            retention. 3. Financial & Market Awareness: Demonstrate basic
            knowledge of the stock market and financial products. Stay updated
            with current market trends and industry developments to better
            assist clients. Help customers understand fundamental investment
            concepts and guide them in making informed financial decisions.
          </div>
        </div>
        <div>
          <h1 className="text-md font-semibold text-black">Skills required</h1>
          <p>vibe coding etc</p>
        </div>
        <div className="flex flex-col gap-2">
          <h1>Earn certificates in this skills </h1>
          <div className="flex items-center gap-4">
            <span className="border px-2 py-0.5 bg-gray-200 rounded-full text-sm text-secondary font-semibold">
              <h1>Learn Business Communication</h1>
            </span>
            <span className="border px-2 py-0.5 bg-gray-200 rounded-full text-sm text-secondary font-semibold">
              <h1>Learn Digital Marketing</h1>
            </span>
            <span
              className="border px-2 py-0.5 bg-gray-200 rounded-full text-sm text-secondary font-semibold"
            >
              <h1>Learn Business Analytics</h1>
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-black">Who can apply</h1>
          <p>
            Only those candidates can apply who: 1. have minimum 1 years of
            experience
          </p>
          <div>
            <h1 className="text-black font-semibold">Salary</h1>
            <p>
              Annual CTC: ₹ 2,10,000 - 2,20,000 /year 
              <br />Annual CTC breakup: 
              <br />1.Fixed pay: ₹ 2,00,000 /year 
              <br />2. Variable pay: ₹ 10,000 /year
            </p>
          </div>
          <div>
            <h1 className="text-black font-semibold">Number of opening</h1>
            <p>10</p>
          </div>
        </div>
        <div>
          <h1 className="text-black font-semibold">About (company name)</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, nemo nihil, sint aut esse ipsam autem sit cum necessitatibus excepturi laudantium rerum cumque impedit sequi consectetur ea error odit vero.
          </p>
        </div>
        <div className="flex justify-center">
          <Button text="Apply Now" />
        </div>
      </div>
      <Footer/>
    </div>
  );
};
export default JobPageRoute;
