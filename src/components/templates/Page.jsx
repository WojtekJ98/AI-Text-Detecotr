import Engine from "../organisms/Engine";
import Hero from "../organisms/Hero";

const Page = () => {
  return (
    <div
      className="w-full flex justify-center items-center flex-col 
    ">
      <Hero />
      <Engine />
    </div>
  );
};

export default Page;
