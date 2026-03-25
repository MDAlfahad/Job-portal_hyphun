import { MapPin, TrendingUp } from "lucide-react";
import Button from "../../../Components/buttons/ButtonComponents";
import { FaLocationArrow, FaMapPin } from "react-icons/fa";

const JobPageRoute = () => {
  return (
    <div className="w-full max-w-[1800px] m-auto flex flex-col items-center pt-20 text-textcolor2">
      <h1 className="text-2xl md:text-4xl font-semibold pt-20 text-black">Designation</h1>

      <div className="border w-[1000px] p-6 rounded-md flex flex-col gap-4 ">
        <div className="border rounded-sm px-2 py-1 w-40 flex gap-2 items-center justify-center">
            <TrendingUp strokeWidth={1.5} size={20} className="text-secondary"/>
          <p className="text-md">actively hiring</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col ">
            <h1 className="text-gray-800 font-semibold text-xl ">Designation</h1>
            <p>company name</p>
          </div>
          <div>
            <p>company logo</p>
          </div>
        </div>
        
        <div className="flex gap-2 items-center">
            <MapPin strokeWidth={1.5}/>
          <h1>Bhilai, Chhattisgarh</h1>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h1>Start Date</h1>
            <p>12/05/26</p>
          </div>
          <div>
            <h1>CTC (annual)</h1>
            <p>10000-200000</p>
          </div>
          <div>
            <h1>Experience</h1>
            <p>1 years</p>
          </div>
          <div>
            <h1>Apply by</h1>
            <p>23 apr 26</p>
          </div>
        </div>
        <div>
          <span>
            <p>posted 1 week age</p>
          </span>
          <span>Job</span>
        </div>
        <div>
          <p>Be the early applicant</p>
          <div>
            <Button text="Apply now" />
          </div>
        </div>
        <div>
          <h1>About this job</h1>
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
          <h1>Skills required</h1>
          <p>vibe coding etc</p>
        </div>
        <div>
          <h1>earn certificates in this skills </h1>
        </div>
        <div>
          <h1>Who can apply</h1>
          <p>
            Only those candidates can apply who: 1. have minimum 1 years of
            experience
          </p>
          <div>
            <h1>Salary</h1>
            <p>
              Annual CTC: ₹ 2,10,000 - 2,20,000 /year Annual CTC breakup: 1.
              Fixed pay: ₹ 2,00,000 /year 2. Variable pay: ₹ 10,000 /year
            </p>
          </div>
          <div>
            <h1>Number of opening</h1>
            <p>10</p>
          </div>
        </div>
        <div>
          <h1>About (company name)</h1>
        </div>
        <div>
          <Button text="Apply Now" />
        </div>
      </div>
    </div>
  );
};
export default JobPageRoute;
