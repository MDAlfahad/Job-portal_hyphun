import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const FaqsCard = ({question, answer}) => {
  const [show, setShow] = useState(false);

  const handleshow = () => {
    setShow(!show);
  };
  return (
    <div className="flex flex-col gap-1 bg-gray-200 p-2 rounded-sm min-w-[400px]">
      <h1 className="flex items-center justify-between" onClick={handleshow}>
       {question}
        {!show ? (
          <FaPlus className="font-medium transition duration-200" />
        ) : (
          <FaMinus className="font-medium transition duration-300"/>
        )}
      </h1>
      {show && (
        <p className="text-[14px] font-light max-w-96 transition duration-300">
          {answer}
        </p>
      )}
    </div>
  );
};

export default FaqsCard;
