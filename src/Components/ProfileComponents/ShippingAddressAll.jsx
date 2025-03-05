import { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsFileEarmarkText } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { LuWalletCards } from "react-icons/lu";
import { RiDeleteBin5Line } from "react-icons/ri";

function ShippingAddressAll() {
  const [selectedAddress, setSelectedAddress] = useState(null);

  const addresses = [
    {
      id: 1,
      name: "Robert Fox",
      address: "4517 Washington Ave, Manchester, Kentucky 39495",
    },
    {
      id: 2,
      name: "John Willions",
      address: "3891 Ranchview Dr, Richardson, California 62639",
    },
  ];

  const handleSelect = (id) => {
    setSelectedAddress(id);
  };

  return (
    <div className="wrapper py-8 w-full">
      <div className="flex flex-col gap-8">
        <h1 className="text-2xl font-medium mb-6">ShippingAddress</h1>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="col-span-2">
            {/* Progress Steps */}
            <div className="flex justify-between items-center relative mb-8">
              <div className="w-[92%] border border-gray-400 border-dashed absolute bottom-10  left-4" />
              <div className="flex flex-col items-center z-10">
                <div className="w-10 h-10 bg-black text-white rounded-xl flex items-center justify-center">
                  <AiOutlineHome />
                </div>
                <span className="text-sm mt-1">Address</span>
              </div>
              <div className="flex flex-col items-center z-10">
                <div className="w-10 h-10 border  bg-gray-100 rounded-xl flex items-center justify-center">
                  <LuWalletCards />
                </div>
                <span className="text-sm mt-1">Payment Method</span>
              </div>
              <div className="flex flex-col items-center z-10">
                <div className="w-10 h-10 border bg-gray-100 rounded-xl flex items-center justify-center">
                  <BsFileEarmarkText />
                </div>
                <span className="text-sm mt-1">Review</span>
              </div>
            </div>
            {/* Select Delivery Address */}
            <div className="mb-8">
              <h2 className="text-lg font-medium mb-2">
                Select a delivery address
              </h2>
              <p className="text-sm text-gray-500 mb-4">
                Is the address you&apos;d like to use displayed below? If so,
                click the corresponding &quot;Deliver to this address&quot;
                button. Or you can enter a new delivery address.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {addresses.map((item) => (
                  <div key={item.id} className="bg-gray-100 p-4 relative">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium">{item.name}</h3>
                      <input
                        type="checkbox"
                        className="mr-2 accent-black h-4 w-4"
                        checked={selectedAddress === item.id}
                        onChange={() => handleSelect(item.id)}
                      />
                    </div>
                    <p className="text-sm text-gray-600 my-3">{item.address}</p>
                    <div className="mt-4 w-full grid grid-cols-2">
                      <div className="flex justify-center items-center mr-4 bg-gray-200 py-1 rounded-md cursor-pointer">
                        <FiEdit />
                        <span className="text-xs ml-1">Edit</span>
                      </div>
                      <div className="flex items-center justify-center bg-red-100 py-1 rounded-md cursor-pointer">
                        <RiDeleteBin5Line className="text-red-500" />
                        <span className="text-xs ml-1 text-red-500">
                          Delete
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button className="bg-black text-white py-3 px-6 rounded-md w-full md:w-auto">
                Deliver Here
              </button>
            </div>
          </div>
          {/* Order Summary */}
          <div className="w-full ">
            <div className="border border-gray-200 rounded-md p-4">
              <div className="flex justify-between mb-4">
                <span>Subtotal</span>
                <span className="font-medium">$200.00</span>
              </div>

              <div className="mb-4">
                <div className="flex">
                  <input
                    type="text"
                    placeholder="FLAT50"
                    className="border border-gray-300 rounded-l-md p-2 flex-grow max-w-[10rem]"
                  />
                  <button className="bg-black text-white px-4 py-2 rounded-r-md">
                    Apply
                  </button>
                </div>
              </div>

              <div className="flex justify-between mb-4">
                <span>Delivery Charge</span>
                <span className="font-medium">$5.00</span>
              </div>

              <div className="border-t border-gray-200 pt-4 flex justify-between">
                <span className="font-medium">Grand Total</span>
                <span className="font-medium">$205.00</span>
              </div>
            </div>
          </div>
        </div>
        {/* Add New Address Form */}
        <div>
          <h2 className="text-lg font-medium mb-4">Add a new address</h2>
          <form>
            <div className="mb-4">
              <label className="block text-sm mb-1">Name</label>
              <input
                type="text"
                placeholder="Enter Name"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm mb-1">Mobile Number</label>
              <input
                type="text"
                placeholder="Enter Mobile Number"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm mb-1">
                Flat, House no., Building, Company, Apartment
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm mb-1">
                Area, Colony, Street, Sector, Village
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm mb-1">City</label>
              <div className="relative">
                <select className="w-full border border-gray-300 rounded-md p-2 appearance-none">
                  <option>Select City</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <i className="fas fa-chevron-down text-gray-400"></i>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm mb-1">Zip Code</label>
              <input
                type="text"
                placeholder="Enter Zip Code"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm mb-1">State</label>
              <div className="relative">
                <select className="w-full border border-gray-300 rounded-md p-2 appearance-none">
                  <option>Select State</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <i className="fas fa-chevron-down text-gray-400"></i>
                </div>
              </div>
            </div>

            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                className="mr-2 accent-black h-4 w-4"
                // checked={selectedAddress === item.id}
                // onChange={() => handleSelect(item.id)}
              />{" "}
              <span className="text-sm">Save as my default address</span>
            </div>

            <button
              type="submit"
              className="bg-black text-white py-3 px-6 rounded-md w-full md:w-auto"
            >
              Save Address
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default ShippingAddressAll;
