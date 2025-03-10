"use client";

import { useState } from "react";
import { FiStar, FiHeart, FiShare2, FiMinus, FiPlus } from "react-icons/fi";
import ProductDetailSection from "../Components/ProductDetailSection";
import ProductReviewSection from "../Components/ProductReviewSection";
import JoinSection from "../Components/JoinSection";
import ProductGrid from "../Components/ProductGrid";
import { products } from "../util/productDetails";
// import dogfooddispencer from "../assets/images/products/dog-food-dispencer.jpeg";
// import { MdChevronRight } from "react-icons/md";
import SectionHeader from "../Components/SectionHeader";
import ShareModal from "../Components/ShareModal";
import { Link, useParams } from "react-router-dom";
import ImageCarousal from "../Components/ImageCarousal";
import { useCart } from "../Store/CartContext";
function ProductDetails() {
  // Product data object with all details
  const [showShare, setShowShare] = useState(false);
  const { addToCart, cartItems } = useCart();

  const { id } = useParams(); // Get the product ID from the route
  const productData = products.find((product) => product.id === parseInt(id));
  console.log(productData, "asdfjaksdflajshdf");

  const [quantity, setQuantity] = useState(1);

  const [activeTab, setActiveTab] = useState("details");

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleAddToCart = () => {
    const productToAdd = {
      ...productData,
      quantity: quantity,
    };

    addToCart(productToAdd);
  };
  console.log(showShare, "asdfsadfsdf");
  const isInCart = cartItems.some((item) => item.id === productData?.id);

  return (
    <>
      <ShareModal showShare={showShare} setShowShare={setShowShare} />

      <SectionHeader section={productData?.name} />

      <div className="wrapper">
        <div className=" grid md:grid-cols-2 gap-8 mt-8">
          {/* Product Image Section */}
          <ImageCarousal productData={productData} />
          {/* Product Details Section */}
          <div className="w-full h-full">
            <div className="flex justify-between items-start">
              <h1 className="text-2xl font-bold">{productData?.name}</h1>
              <FiShare2
                className="w-5 h-5 text-gray-500"
                onClick={() => setShowShare(!showShare)}
              />
            </div>

            <div className="flex items-center mt-2 ">
              <div className="flex  bg-gray-200 px-4 items-center py-1 rounded-full">
                <FiStar className="w-4 h-4 fill-current text-gray-700" />
                <span className="ml-1 text-sm text-gray-700">
                  {productData?.rating} — {productData?.reviews} Reviews
                </span>
              </div>
              <span
                className={`ml-4 text-sm ${
                  productData?.stock ? `text-green-500` : `text-red-500`
                } border  px-4 py-1 rounded-full`}
              >
                {productData?.stock ? "Available" : "UnAvailable"}
              </span>
            </div>

            <div className="mt-6">
              <span className="text-xl font-bold">
                ${productData?.actualPrice?.toFixed(2)}
              </span>
            </div>

            <div className="mt-6">
              <h3 className="text-sm text-gray-500 uppercase">
                Available Colors
              </h3>
              <div className="flex mt-2 gap-2">
                {productData?.colors?.map((color, index) => (
                  <div
                    key={index}
                    className={`w-8 h-8 rounded-full cursor-pointer ${
                      color.selected ? "ring-2 ring-gray-400" : ""
                    }`}
                    style={{ backgroundColor: color.value }}
                  ></div>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-sm text-gray-500 uppercase">Select Size</h3>
              <div className="flex mt-2 gap-2">
                {productData?.sizes?.map((size, index) => (
                  <div
                    key={index}
                    className={`w-10 h-10 flex items-center justify-center border rounded-md cursor-pointer ${
                      size.selected ? "bg-gray-100" : ""
                    }`}
                  >
                    {size.name}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-sm text-gray-500 uppercase">Quantity</h3>
              <div className="flex mt-2 items-center">
                <button
                  className="w-10 h-10 border rounded-md flex items-center justify-center"
                  onClick={decreaseQuantity}
                >
                  <FiMinus className="w-4 h-4" />
                </button>
                <div className="w-10 h-10 border-t border-b flex items-center justify-center">
                  {quantity}
                </div>
                <button
                  className="w-10 h-10 border rounded-md flex items-center justify-center"
                  onClick={increaseQuantity}
                >
                  <FiPlus className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="mt-6 flex gap-2">
              {isInCart ? (
                <Link
                  to={"/cartitems"}
                  className="bg-gray-900 text-white text-center py-3 px-4 rounded w-full"
                >
                  Go To Cart
                </Link>
              ) : (
                <button
                  onClick={handleAddToCart}
                  className="bg-gray-900 text-white py-3 px-4 rounded w-full"
                >
                  Add to cart
                </button>
              )}
              <button className="border border-gray-300 p-3 rounded">
                <FiHeart className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-4 text-sm text-gray-500 flex items-center">
              <span>— FREE SHIPPING ON ORDERS $100+</span>
            </div>
          </div>
        </div>

        {/* Detail Section */}
        <div className="grid md:grid-cols-3 md:gap-5">
          {/* Tabs */}
          <div className="mt-12  w-full ">
            <div className="border-b md:border-none w-full">
              <div className="flex md:flex-col">
                <button
                  className={`py-2 px-4 flex items-center ${
                    activeTab === "details"
                      ? "border-b-2 md:border-none border-gray-900 md:bg-gray-100 md:rounded-lg font-semibold"
                      : ""
                  }`}
                  onClick={() => setActiveTab("details")}
                >
                  Details
                </button>
                <button
                  className={`py-2 px-4 flex items-center ${
                    activeTab === "reviews"
                      ? "border-b-2 md:border-none border-gray-900 md:bg-gray-100 md:rounded-lg font-semibold"
                      : ""
                  }`}
                  onClick={() => setActiveTab("reviews")}
                >
                  <FiStar className="w-4 h-4 mr-2" />
                  Reviews
                </button>
              </div>
            </div>
          </div>
          {activeTab === "details" ? (
            <ProductDetailSection productData={productData} />
          ) : (
            <ProductReviewSection productData={productData} />
          )}
        </div>
      </div>
      <div>
        <div className="wrapper">
          <h1 className="title-heading">You might also like</h1>
          <p className="font-light text-gray-500 mt-4">SIMILAR PRODUCTS</p>
        </div>
        <ProductGrid products={products.slice(0, 4)} cardslength={4} />
      </div>
      <JoinSection isShowCategory={true} />
      {/* {showShare && ( */}
      {/* )} */}
    </>
  );
}

export default ProductDetails;
