import BannerImg from "../../../public/slider.png";

const Banner = () => {
  return (
    <div className="w-full aspect-[1200/400] md:aspect-[3/1] rounded-lg shadow-2xl overflow-hidden bg-blue-50">
      <div
        className="w-full h-full bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${BannerImg.src})` }}
      ></div>
    </div>
  );
};

export default Banner;