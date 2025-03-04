import { BiChevronRight } from "react-icons/bi";

//eslint-disable-next-line
const SectionHeader = ({ section, bgcolor }) => {
  return (
    <div
      className={`${
        bgcolor ? bgcolor : `bg-[#F6F6F6]`
      } py-10 px-4 md:px-8 shadow-sm`}
    >
      <div className="wrapper">
        <h1 className="text-2xl font-bold text-gray-900">{section}</h1>
        <div className="flex items-center text-sm mt-2 text-gray-600">
          <span>Ecommerce</span>
          <BiChevronRight className="h-4 w-4 mx-1" />
          <span className="font-medium">{section}</span>
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;
