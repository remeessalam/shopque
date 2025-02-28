// import backgroundbg from "../assets/images/imagebg.png";
// import homebackgroundbg from "../assets/images/homebg.png";
// import { Link } from "react-router-dom";
const Banner = ({ bannerDetails }) => {
  const { image } = bannerDetails;
  return (
    <div
      className=" w-full h-[60vh] bg-current bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${image})`,
      }}
    ></div>
  );
};

export default Banner;
