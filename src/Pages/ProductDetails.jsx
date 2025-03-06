"use client";

import { useState } from "react";
import { FiStar, FiHeart, FiShare2, FiMinus, FiPlus } from "react-icons/fi";
import ProductDetailSection from "../Components/ProductDetailSection";
import ProductReviewSection from "../Components/ProductReviewSection";
import JoinSection from "../Components/JoinSection";
import ProductGrid from "../Components/ProductGrid";
import { products } from "../util/productDetails";
import dogfooddispencer from "../assets/images/products/dog-food-dispencer.jpeg";
// import { MdChevronRight } from "react-icons/md";
import SectionHeader from "../Components/SectionHeader";
function ProductDetails() {
  // Product data object with all details
  const productData = {
    name: "Dog Food Dispencer",
    rating: 4.2,
    reviews: 54,
    availability: "Unavailable",
    price: 75.0,
    colors: [
      { name: "Blue", value: "#6B8CDE", selected: true },
      { name: "Beige", value: "#F8D49A", selected: false },
      { name: "Green", value: "#7BAF83", selected: false },
    ],
    sizes: [
      { name: "S", selected: true },
      { name: "M", selected: false },
      { name: "X", selected: false },
      { name: "XL", selected: false },
      { name: "XXL", selected: false },
    ],
    image: dogfooddispencer,
    description:
      "The Automatic Pet Dog Food Dispenser from Shopque Nest LLP is designed to make feeding your furry friend easier, more convenient, and mess-free. Whether you're at home or away, this smart dispenser ensures your pet gets the right amount of food at the right time.",
    keyFeatures: [
      "Automatic Feeding – Set a schedule to dispense food at specific times to maintain a healthy feeding routine.",
      "Adjustable Portion Control – Customize the portion size to prevent overfeeding and maintain your pet's diet.",
      "Large Capacity Storage – Holds a generous amount of dry food, reducing the need for frequent refills.",
      "Anti-Clog Design – Ensures smooth dispensing of kibble without blockages.",
      "Battery & Power Operated – Works with both batteries and an adapter, ensuring uninterrupted functionality.",
      "LCD Screen & Easy Controls – User-friendly interface for easy programming of meal times and portion sizes.",
      "Voice Recording Feature – Record a custom voice message to call your pet for meals.",
      "Transparent Storage Bin – Allows you to monitor food levels and refill when needed.",
      "Durable & Pet-Safe Material – Made from high-quality, BPA-free plastic to ensure safety and longevity.",
    ],
    whyChoose: [
      "Perfect for busy pet owners.",
      "Keeps food fresh and prevents contamination.",
      "Encourages a healthy eating schedule for your dog.",
      "Suitable for small, medium, and large breeds.",
    ],
  };

  // State for quantity
  const [quantity, setQuantity] = useState(1);

  // State for active tab
  const [activeTab, setActiveTab] = useState("details");

  // Function to increase quantity
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  // Function to decrease quantity
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <SectionHeader section={productData.name} />

      {/* <div className="bg-gray-100 py-4 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-sm text-gray-60 flex items-center">
            <span>Ecommerce</span>
            <MdChevronRight className="text-2xl" />
            <span>{productData.name}</span>
          </div>
        </div>
      </div> */}
      <div className="wrapper">
        <div className="flex flex-col md:flex-row gap-8 mt-8">
          {/* Product Image Section */}
          <div className="w-full md:w-1/2 bg-gray-50 p-4 rounded-lg">
            <img
              src={productData.image || "/placeholder.svg"}
              alt="Dog Food Dispenser"
              className="w-full h-auto object-contain"
            />
            <div className="flex justify-center mt-4 gap-2">
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              <div className="w-2 h-2 rounded-full bg-gray-800"></div>
            </div>
          </div>

          {/* Product Details Section */}
          <div className="w-full md:w-1/2">
            <div className="flex justify-between items-start">
              <h1 className="text-2xl font-bold">Dog Food Dispencer</h1>
              <FiShare2 className="w-5 h-5 text-gray-500" />
            </div>

            <div className="flex items-center mt-2 ">
              <div className="flex  bg-gray-200 px-4 items-center py-1 rounded-full">
                <FiStar className="w-4 h-4 fill-current text-gray-700" />
                <span className="ml-1 text-sm text-gray-700">
                  {productData.rating} — {productData.reviews} Reviews
                </span>
              </div>
              <span className="ml-4 text-sm text-red-500 border  px-4 py-1 rounded-full">
                {productData.availability}
              </span>
            </div>

            <div className="mt-6">
              <span className="text-xl font-bold">
                ${productData.price.toFixed(2)}
              </span>
            </div>

            <div className="mt-6">
              <h3 className="text-sm text-gray-500 uppercase">
                Available Colors
              </h3>
              <div className="flex mt-2 gap-2">
                {productData.colors.map((color, index) => (
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
                {productData.sizes.map((size, index) => (
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
              <button className="bg-gray-900 text-white py-3 px-4 rounded w-full">
                Add to cart
              </button>
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
    </>
  );
}

export default ProductDetails;
