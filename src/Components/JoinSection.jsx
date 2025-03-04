import categoriesimage from "../assets/images/categoriesimage.png";
//eslint-disable-next-line
const JoinSection = ({ isShowCategory }) => {
  return (
    <div>
      {isShowCategory && (
        <div className="wrapper">
          <img src={categoriesimage} alt="categoriesimage" />
        </div>
      )}
      <div className=" bg-gray-100 py-[4rem] md:py-[8rem]">
        <div className="wrapper grid md:grid-cols-2">
          <div className="flex flex-col gap-7">
            <h1 className="small-heading">Join Our Newsletter</h1>
            <p>We love to surprise our subscribers with occasional gifts.</p>
          </div>
          <div className="grid mt-5 md:mt-0  md:grid-cols-3 gap-4">
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

export default JoinSection;
