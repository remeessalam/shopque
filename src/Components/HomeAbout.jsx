import homeaboutsection from "../assets/images/homeaboutsection.png";
import { Link } from "react-router-dom";
const HomeAbout = () => {
  return (
    <div className="paddingTop paddingBottom">
      <div className="wrapper paddingTop paddingBottom">
        <div className="grid md:grid-cols-2 gap-8">
          <img src={homeaboutsection} alt="" />
          <div className="h-full flex flex-col gap-5 relative z-10">
            <h1 className="title-heading">
              The smarter way to shop for your pet
            </h1>
            <p className="text-gray-600 max-w-md">
              At Shopque Nest LLP, we believe playtime isn&apos;t just fun;
              it&apos;s essential for your pet&apos;s physical and mental
              well-being. That&apos;s why we&apos;ve combined cutting-edge
              technology with irresistible fun to create a range of interactive
              toys and robots designed to engage, excite, and enrich your furry
              friend&apos;s life.
            </p>
            <Link
              to={"/about-us"}
              className="bg-black w-fit text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
