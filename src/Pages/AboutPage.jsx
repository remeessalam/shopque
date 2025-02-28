import { useState } from "react";
import aboutvideo from "../assets/video/aboutsectionvideo.mp4";
import ReactPlayer from "react-player";
import { FaPlay } from "react-icons/fa";
import aboutuspetsimage from "../assets/images/forgotpageimage.jpeg";
import Banner from "../Components/Banner";
import Experience from "../Components/Experience";
import WhyChooseUs from "../Components/WhyChooseUs";
import OurMission from "../Components/OurMission";
import OurTeam from "../Components/OurTeam";
import categoriesimage from "../assets/images/categoriesimage.png";
const AboutPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };
  const handleVideoEnd = () => {
    setIsPlaying(false);
  };
  const aboutBannerDetails = {
    image: aboutuspetsimage,
    isHome: false,
  };
  return (
    <div>
      <Banner bannerDetails={aboutBannerDetails} />
      <div className="wrapper paddingTop paddingBottom">
        <h2 className="title-heading">About our store</h2>
        <div className="grid md:grid-cols-2 mt-8 md:gap-10 gap-5">
          <p className="">
            Uncompromising Quality We believe in offering only the best for your
            pets. Every product we carry is carefully selected for its quality,
            safety, and effectiveness. From food that nourishes to toys that
            entertain, each item is chosen with your pet’s health and happiness
            in mind.
          </p>
          <p>
            For Every Pet, Big or Small Every pet has its own personality and
            care needs, and we understand that. Whether you’re caring for a
            curious kitten, a playful pup, or a senior pet with special needs,
            our extensive range of products is designed to meet the individual
            needs of your pet at any stage of life.
          </p>
        </div>
      </div>
      <Experience />
      <WhyChooseUs />
      <OurMission />
      {/* <AboutStore /> */}
      <OurTeam />
      <div className="wrapper paddingTop paddingBottom">
        <div className="relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden">
          <ReactPlayer
            url={aboutvideo}
            playing={isPlaying}
            controls={false}
            muted={false}
            width="100%"
            height="100%"
            className="aspect-video"
            onClick={togglePlayPause}
            onEnded={handleVideoEnd}
          />

          {!isPlaying ? (
            <div
              className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/40"
              onClick={togglePlayPause}
            >
              <div className="w-16 h-16 bg-orange-500 rounded-full flex justify-center items-center">
                <FaPlay className="text-white w-8 h-8" />
              </div>
            </div>
          ) : (
            <div
              className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/10"
              onClick={togglePlayPause}
            />
          )}
        </div>
      </div>
      <div className="wrapper">
        <img src={categoriesimage} alt="categoriesimage" />
      </div>
      <div className=" bg-gray-100 !py-[8rem]">
        <div className="wrapper grid md:grid-cols-2">
          <div className="flex flex-col gap-7">
            <h1 className="small-heading">Join Our Newsletter</h1>
            <p>We love to surprise our subscribers with occasional gifts.</p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              className="outline-none w-full h-fit py-[1.5rem] col-span-2 border border-slate-100 pl-4"
            />
            <button className="bg-black w-fit h-fit text-white px-8 py-[1.5rem] rounded-md hover:bg-gray-800 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
