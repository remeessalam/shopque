// src/App.js
import { FiShoppingCart, FiX } from "react-icons/fi";
import { imagetwo } from "../util/productDetails";
import SectionHeader from "../Components/SectionHeader";

function WishlistPage() {
  return (
    <>
      <SectionHeader section={"Wishlist"} />
      <div className="wrapper my-10">
        <div className="border border-gray-200 rounded">
          <div className="p-4 border-b border-gray-200">
            <h1 className="text-xl font-medium">Wishlist</h1>
          </div>

          <div className="bg-gray-100">
            <div className="grid grid-cols-12 py-3 px-4">
              <div className="col-span-6 font-medium text-gray-700 text-sm">
                PRODUCTS
              </div>
              <div className="col-span-2 font-medium text-gray-700 text-sm">
                PRICE
              </div>
              <div className="col-span-2 font-medium text-gray-700 text-sm">
                STOCK STATUS
              </div>
              <div className="col-span-2 font-medium text-gray-700 text-sm">
                ACTIONS
              </div>
            </div>
          </div>

          <div className="divide-y divide-gray-200">
            {/* Bose Sport Earbuds */}
            <div className="grid grid-cols-12 py-4 px-4 items-center">
              <div className="col-span-6 flex items-center gap-4">
                <div className="w-16 h-16 flex-shrink-0">
                  <img
                    src={imagetwo}
                    alt="Bose Sport Earbuds"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-sm">
                  Bose Sport Earbuds -Wireless Earphones -Bluetooth In Ear
                  Headphones for Workouts and Running, Triple Black
                </div>
              </div>
              <div className="col-span-2">
                <div className="text-sm line-through text-gray-500">$1299</div>
                <div className="font-medium">$999</div>
              </div>
              <div className="col-span-2">
                <div className="text-red-500 text-sm">Unavailable</div>
              </div>
              <div className="col-span-2 flex items-center justify-between">
                <button className="bg-orange-400 text-white px-3 py-2 rounded flex items-center text-sm">
                  ADD TO CARD <FiShoppingCart className="ml-2" />
                </button>
                <button className="text-gray-400 hover:text-gray-600">
                  <FiX size={20} />
                </button>
              </div>
            </div>

            {/* Simple Mobile 5G LTE Galaxy */}
            <div className="grid grid-cols-12 py-4 px-4 items-center">
              <div className="col-span-6 flex items-center gap-4">
                <div className="w-16 h-16 flex-shrink-0">
                  <img
                    src={imagetwo}
                    alt="Simple Mobile 5G LTE Galaxy"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-sm">
                  Simple Mobile 5G LTE Galexy 12 Mini 512GB Gaming Phone
                </div>
              </div>
              <div className="col-span-2">
                <div className="font-medium">$2,300.00</div>
              </div>
              <div className="col-span-2">
                <div className="text-red-500 text-sm">Unavailable</div>
              </div>
              <div className="col-span-2 flex items-center justify-between">
                <button className="bg-orange-400 text-white px-3 py-2 rounded flex items-center text-sm">
                  ADD TO CARD <FiShoppingCart className="ml-2" />
                </button>
                <button className="text-gray-400 hover:text-gray-600">
                  <FiX size={20} />
                </button>
              </div>
            </div>

            {/* Portable Washing Machine */}
            <div className="grid grid-cols-12 py-4 px-4 items-center bg-gray-50">
              <div className="col-span-6 flex items-center gap-4">
                <div className="w-16 h-16 flex-shrink-0">
                  <img
                    src={imagetwo}
                    alt="Portable Washing Machine"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-sm">
                  Portable Wshing Machine, 11lbs capacity Model 18NMF1AM
                </div>
              </div>
              <div className="col-span-2">
                <div className="font-medium">$70.00</div>
              </div>
              <div className="col-span-2">
                <div className="text-red-500 text-sm">Unavailable</div>
              </div>
              <div className="col-span-2 flex items-center justify-between">
                <button className="bg-orange-400 text-white px-3 py-2 rounded flex items-center text-sm">
                  ADD TO CARD <FiShoppingCart className="ml-2" />
                </button>
                <button className="text-gray-400 hover:text-gray-600">
                  <FiX size={20} />
                </button>
              </div>
            </div>

            {/* TOZO T6 True Wireless Earbuds */}
            <div className="grid grid-cols-12 py-4 px-4 items-center">
              <div className="col-span-6 flex items-center gap-4">
                <div className="w-16 h-16 flex-shrink-0">
                  <img
                    src={imagetwo}
                    alt="TOZO T6 True Wireless Earbuds"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-sm">
                  TOZO T6 True Wireless Earbuds Bluetooth Headphones Touch
                  Control with Wireless Charging Case IPX8 Waterproof Stereo
                  Earphones in-Ear
                </div>
              </div>
              <div className="col-span-2">
                <div className="text-sm line-through text-gray-500">
                  $250.00
                </div>
                <div className="font-medium">$220.00</div>
              </div>
              <div className="col-span-2">
                <div className="text-orange-500 text-sm font-medium">
                  OUT OF STOCK
                </div>
              </div>
              <div className="col-span-2 flex items-center justify-between">
                <button className="bg-gray-400 text-white px-3 py-2 rounded flex items-center text-sm">
                  ADD TO CARD <FiShoppingCart className="ml-2" />
                </button>
                <button className="text-gray-400 hover:text-gray-600">
                  <FiX size={20} />
                </button>
              </div>
            </div>

            {/* Wyze Cam Pan v2 */}
            <div className="grid grid-cols-12 py-4 px-4 items-center bg-gray-50">
              <div className="col-span-6 flex items-center gap-4">
                <div className="w-16 h-16 flex-shrink-0">
                  <img
                    src={imagetwo}
                    alt="Wyze Cam Pan v2"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-sm">
                  Wyze Cam Pan v2 1080p Pan/Tilt/Zoom Wi-Fi Indoor Smart Home
                  Camera with Color Night Vision, 2-Way Audio
                </div>
              </div>
              <div className="col-span-2">
                <div className="font-medium">$1,499.99</div>
              </div>
              <div className="col-span-2">
                <div className="text-red-500 text-sm">Unavailable</div>
              </div>
              <div className="col-span-2 flex items-center justify-between">
                <button className="bg-orange-400 text-white px-3 py-2 rounded flex items-center text-sm">
                  ADD TO CARD <FiShoppingCart className="ml-2" />
                </button>
                <button className="text-gray-400 hover:text-gray-600">
                  <FiX size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WishlistPage;
