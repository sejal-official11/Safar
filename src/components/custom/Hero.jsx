import "react";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className="flex items-center mx-56 gap-9 flex-col">
      <h1 className="font-extrabold text-[60px] text-center mt-16">
        <span className="text-[#f56551]">Discover your next adventure with AI: </span>Personalizes
        itineraries at Your Fingertips
        
      </h1>
      <p className="text-xl text-gray-500 text-center">Your personal trip planner and travel curator, creating custom itineraries tailored to your interastes and budget</p>

      <Button>Get Started, It's Free</Button>
    </div>
  );
};

export default Hero;
