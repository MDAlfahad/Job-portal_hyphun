import { useState } from "react";
import { LuPlus, LuMinus } from "react-icons/lu";

const FaqsCard = ({question, answer}) => {
  const [show, setShow] = useState(false);

  const handleshow = () => {
    setShow(!show);
  };
  return (
    <div className="flex flex-col gap-1 bg-gray-200 p-2 rounded-sm min-w-[350px] transition-all duration-300">
      <h1 className="flex items-center justify-between" onClick={handleshow}>
       {question}
        {!show ? (
          <LuPlus />
        ) : (
          <LuMinus />
        )}
      </h1>
      {show && (
        <p className="text-[14px] font-light max-w-96 ">
          {answer}
        </p>
      )}
    </div>
  );
};

export default FaqsCard;
