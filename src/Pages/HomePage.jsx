import { LuArrowRight } from "react-icons/lu";
import HomeBanner from "../Components/HomeBanner";
import ProductGrid from "../Components/ProductGrid";
import { features } from "../util/contant";
// import { products } from "../util/productDetails";
import petimage from "../assets/images/petimage.jpeg";
import HomeAbout from "../Components/HomeAbout";
import { useEffect, useState } from "react";
import Testimonials from "../Components/Testimonials";
// import Blogs from "../Components/Blogs";
import JoinSection from "../Components/JoinSection";
import { Link } from "react-router-dom";
import { getProducts } from "../api/productsApi";
import ShimmerLoadingEffect from "../Components/ShimmerLoadingEffect";
const Homepage = () => {
  const [isFeatured, setIsFeatured] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
      console.log(data, "askdlfjsldkf");
    };

    fetchProducts();
  }, []);

  if (!products.length) {
    return <ShimmerLoadingEffect />;
  }
  const toggleProducts = () => {
    setIsFeatured(!isFeatured);
  };
  return (
    <div>
      <HomeBanner />
      <div className="paddingTop paddingBottom">
        <div className="wrapper grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {features.map((obj) => (
            <div key={obj.id} className="flex flex-col gap-3">
              <img src={obj.icon} alt={obj.title} className="w-10 h-10" />
              <h1 className="softTitle">{obj.title}</h1>
              <p className="text-desccolor">{obj.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h1 className="title-heading text-center">Best selling </h1>
        <ProductGrid products={products.slice(0, 4)} cardslength={3} />
      </div>
      <div className="bg-bgColor md:max-h-[22rem]  md:pt-0 pt-[3rem] md:pb-0 pb-[3rem]">
        <div className="wrapper  grid md:grid-cols-2 gap-5">
          <div className=" flex flex-col justify-evenly">
            <div className="flex flex-col gap-9">
              <h1 className="small-heading">Browse Our Unique Paradise!</h1>
              <p className="font-light">
                Step into a world of style and explore our diverse collection of
                Pet Products categories.{" "}
              </p>
            </div>
            <Link
              to={"/products"}
              className="primaryButton flex items-center gap-2 md:mt-0 mt-2"
            >
              Start Browsing <LuArrowRight />
            </Link>
          </div>
          <div className=" bg-no-repeat bg-contain bg-bottom flex flex-col justify-end">
            <img
              src={petimage}
              alt="banner-image"
              className="rounded-3xl md:max-h-[22rem] object-cover"
            />
          </div>
        </div>
      </div>
      <HomeAbout />
      <div>
        <div className="flex justify-center items-center gap-5">
          <h1
            className={`transition-all duration-300 ${
              isFeatured
                ? `text-lg font-semibold bg-bgColor px-4 py-1 rounded-full`
                : `text-lg`
            } text-center`}
            onClick={toggleProducts}
          >
            Featured
          </h1>

          <h1
            className={` transition-all duration-300 ${
              !isFeatured
                ? `text-lg font-semibold bg-bgColor px-4 py-1 rounded-full`
                : `text-lg`
            } text-center`}
            onClick={toggleProducts}
          >
            Latest
          </h1>
        </div>
        <ProductGrid products={products.slice(0, 8)} cardslength={3} />
      </div>
      <Testimonials />
      {/* <Blogs /> */}
      <JoinSection isShowCategory={true} />
    </div>
  );
};

export default Homepage;
