import { Button } from "@heroui/react";
import BannerImg from "../../../public/slider.png";

const Banner = () => {
  return (
    <div className="w-full h-auto rounded-lg shadow-2xl overflow-hidden bg-gray-900">
      <div
        className="w-full aspect-[16/9] md:aspect-auto md:h-[60vh] bg-contain md:bg-cover bg-no-repeat bg-center flex items-center"
        style={{ backgroundImage: `url(${BannerImg.src})` }}
      >
      
       
      </div>
    </div>
  );
};

export default Banner;