import { logo } from "../../assets";

import HoverButton from "../atoms/HoverButton";

const Hero = () => {
  return (
    <header
      className="w-full flex justify-center items-center flex-col 
    ">
      <nav className="flex  justify-between items-center w-full  mb-10 pt-4">
        <img className="w-16 object-contain" src={logo} alt="Logo of sumz" />
        <div className="flex gap-8">
          <button
            onClick={() =>
              window.open("https://github.com/WojtekJ98/AI-Text-Detecotr")
            }
            className="GitHub_btn">
            GitHub
          </button>
          <HoverButton
            text="This is an application where you can check if your text was written by a human or generated by AI"
            size={40}
          />
        </div>
      </nav>
      <h1 className="mt-5 text-5xl text-center font-extrabold sm:text-6xl text-black  ">
        Check your Text with <br />{" "}
        <span className="bg-gradient-to-r mt-8 from-gray-700  via-gray-900 to-gray-200 bg-clip-text text-transparent">
          AI Content Detector
        </span>
      </h1>
    </header>
  );
};

export default Hero;