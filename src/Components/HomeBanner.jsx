import { LuArrowRight } from "react-icons/lu";
import homebanner from "../assets/images/homebanner.png";
import backgroundimage from "../assets/images/backgroundimage.png";

const HomeBanner = () => {
  return (
    <div className="bg-bgColor h-[50vh]">
      <div className="wrapper h-full grid md:grid-cols-2">
        <div className="h-full flex flex-col justify-evenly">
          <div className="flex flex-col gap-9">
            <h1 className="small-heading">Fresh Arrivals Online</h1>
            <p className="font-light">Discover Our Newest Collection Today.</p>
          </div>
          <button className="primaryButton flex items-center gap-2">
            View Collection <LuArrowRight />
          </button>
        </div>
        <div
          className=" bg-no-repeat bg-contain h-full bg-bottom flex flex-col justify-end"
          style={{ backgroundImage: `url(${backgroundimage})` }}
        >
          <img src={homebanner} alt="banner-image" />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
