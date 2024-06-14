import { useState } from "react";
import { CiCircleQuestion } from "react-icons/ci";

const HoverButton = ({ text, size }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="relative inline-block max-w-full">
      <button
        className="hover:text-white"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}>
        <CiCircleQuestion size={size} />
      </button>
      {isHover && (
        <div className="absolute p-4 max-w-64 min-w-44 bg-gray-200 rounded shadow-lg text-sm transform xs:right-2">
          {text}
        </div>
      )}
    </div>
  );
};

export default HoverButton;
