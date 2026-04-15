import { useState, useEffect } from "react";
import { MoveLeft, MoveRight } from "lucide-react";
import CrauselCard from "../../Components/Cards/CrauselCard";

const CrauselContainer = () => {
  const API_CALL = `http://localhost:4000`;

  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // responsive cards count
  const [visibleCards, setVisibleCards] = useState(3);

  // 🔥 Responsive logic
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVisibleCards(1); // mobile
      else if (window.innerWidth < 1024) setVisibleCards(2); // tablet
      else setVisibleCards(3); // desktop
    };

    handleResize(); // run on load
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = data.length - visibleCards;

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  // 🔥 Fetch API
  useEffect(() => {
    fetch(`${API_CALL}/api/jobdata`)
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="max-w-[1800px] m-auto px-4 md:px-12 py-10">
      
      {/* Heading */}
      <h1 className="text-2xl md:text-5xl font-semibold text-center mb-8">
        <span className="text-secondary">Apply now,</span> to start your career
      </h1>

      <div className="flex items-center justify-center w-full max-w-7xl mx-auto">
        
        {/* LEFT BUTTON */}
        <button
          onClick={prevSlide}
          className="hidden sm:block p-3 bg-gray-200 rounded-full mx-2 hover:bg-secondary hover:text-white transition"
        >
          <MoveLeft size={24} />
        </button>

        {/* CAROUSEL */}
        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500 ease-in-out gap-4"
            style={{
              transform: `translateX(-${
                currentIndex * (100 / visibleCards)
              }%)`,
            }}
          >
            {data.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3"
              >
                <CrauselCard {...item} />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT BUTTON */}
        <button
          onClick={nextSlide}
          className="hidden sm:block p-3 bg-gray-200 rounded-full mx-2 hover:bg-secondary hover:text-white transition"
        >
          <MoveRight size={24} />
        </button>
      </div>

      {/* MOBILE DOTS */}
      <div className="flex justify-center mt-6 gap-2 sm:hidden">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-2 h-2 rounded-full cursor-pointer ${
              currentIndex === i ? "bg-secondary" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CrauselContainer;