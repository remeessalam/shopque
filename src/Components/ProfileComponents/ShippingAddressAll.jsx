import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineHome } from "react-icons/ai";
import { BsFileEarmarkText } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { LuWalletCards } from "react-icons/lu";
import { RiDeleteBin5Line } from "react-icons/ri";
import { addAddress, deleteAddress, getAddAddress } from "../../api/addressApi";
import toast from "react-hot-toast";
/* eslint-disable */
function ShippingAddressAll({
  onAddressSelect,
  selectedAddress,
  onContinue,
  activeStep,
  setActiveStep,
}) {
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    const fetchAddresses = async () => {
      const response = await getAddAddress();
      if (response.status) {
        setAddresses(response.address);
      }
    };
    fetchAddresses();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await addAddress(data);
      if (!response.status) {
        toast.error("Failed to add address please try again");
        return;
      }
      toast.success("Address added successfully");
      setAddresses(response.address);
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteAddress = async (id) => {
    try {
      const response = await deleteAddress(id);
      if (!response.status) {
        toast.error("Failed to remove address please try again");
        return;
      }
      toast.success("Successfully address removed");

      // Refresh addresses
      const updatedAddresses = await getAddAddress();
      if (updatedAddresses.status) {
        setAddresses(updatedAddresses.address);
      }

      // If deleted address was selected, clear selection
      if (selectedAddress && selectedAddress._id === id) {
        onAddressSelect(null);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelect = (address) => {
    onAddressSelect(address);
  };

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-2xl font-medium mb-6">Shipping Address</h1>
      <div className="">
        {/* Progress Steps */}
        <div className="flex justify-between items-center relative mb-8">
          <div className="w-[92%] border border-gray-400 border-dashed absolute bottom-10 left-4" />
          <div className="flex flex-col items-center z-10">
            <div
              className={`w-10 h-10 ${
                activeStep >= 1 ? "bg-black text-white" : "bg-gray-100"
              } rounded-xl flex items-center justify-center`}
            >
              <AiOutlineHome />
            </div>
            <span className="text-sm mt-1">Address</span>
          </div>
          <div className="flex flex-col items-center z-10">
            <div
              className={`w-10 h-10 ${
                activeStep >= 2 ? "bg-black text-white" : "bg-gray-100"
              } rounded-xl flex items-center justify-center`}
            >
              <LuWalletCards />
            </div>
            <span className="text-sm mt-1">Payment Method</span>
          </div>
          <div className="flex flex-col items-center z-10">
            <div
              className={`w-10 h-10 ${
                activeStep >= 3 ? "bg-black text-white" : "bg-gray-100"
              } rounded-xl flex items-center justify-center`}
            >
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
            Is the address you&apos;d like to use displayed below? If so, click
            the corresponding address to select it. Or you can enter a new
            delivery address.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {!addresses?.length > 0 ? (
              <div className="text-3xl font-bold text-center col-span-1-1 md:col-span-2 py-4">
                Add Address
              </div>
            ) : (
              addresses?.map((item) => (
                <div
                  key={item._id}
                  className={`bg-gray-100 p-4 relative cursor-pointer ${
                    selectedAddress?._id === item?._id
                      ? "border-2 border-black"
                      : ""
                  }`}
                  onClick={() => handleSelect(item)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">{item.name}</h3>
                    <input
                      type="checkbox"
                      className="mr-2 accent-black h-4 w-4"
                      checked={selectedAddress?._id === item?._id}
                      onChange={() => handleSelect(item)}
                    />
                  </div>
                  <p className="text-sm text-gray-600 my-3">{item.address}</p>
                  <p className="text-sm text-gray-600 my-1">{item.area}</p>
                  <p className="text-sm text-gray-600 my-1">
                    {item.city}, {item.state} {item.zip}
                  </p>
                  <p className="text-sm text-gray-600 my-1">
                    Mobile: {item.mobile}
                  </p>
                  <div className="mt-4 w-full grid grid-cols-2">
                    <div className="flex opacity-35 cursor-not-allowed justify-center items-center mr-4 bg-gray-200 py-1 rounded-md">
                      <FiEdit />
                      <span className="text-xs ml-1">Edit</span>
                    </div>
                    <div
                      className="flex items-center justify-center bg-red-100 py-1 rounded-md cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteAddress(item._id);
                      }}
                    >
                      <RiDeleteBin5Line className="text-red-500" />
                      <span className="text-xs ml-1 text-red-500">Delete</span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {addresses?.length > 0 && (
            <button
              className="bg-black text-white py-3 px-6 rounded-md w-full md:w-auto"
              onClick={onContinue}
              disabled={!selectedAddress}
            >
              Continue to Payment
            </button>
          )}
        </div>
      </div>

      {/* Add New Address Form */}
      <div>
        <h2 className="text-lg font-medium mb-4">Add a new address</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-sm mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="w-full border border-gray-300 rounded-md p-2"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm mb-1">Mobile Number</label>
            <input
              type="text"
              placeholder="Enter Mobile Number"
              className="w-full border border-gray-300 rounded-md p-2"
              {...register("mobile", {
                required: "Mobile number is required",
              })}
            />
            {errors.mobile && (
              <p className="text-red-500 text-sm">{errors.mobile.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm mb-1">
              Flat, House no., Building, Company, Apartment
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-2"
              {...register("address", { required: "Address is required" })}
            />
            {errors.address && (
              <p className="text-red-500 text-sm">{errors.address.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm mb-1">
              Area, Colony, Street, Sector, Village
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-2"
              {...register("area", { required: "Area is required" })}
            />
            {errors.area && (
              <p className="text-red-500 text-sm">{errors.area.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm mb-1">City</label>
            <select
              className="w-full border border-gray-300 rounded-md p-2 appearance-none"
              {...register("city", { required: "City is required" })}
            >
              <option value="">Select City</option>
              <option value="New York">New York</option>
              <option value="Los Angeles">Los Angeles</option>
            </select>
            {errors.city && (
              <p className="text-red-500 text-sm">{errors.city.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm mb-1">Zip Code</label>
            <input
              type="text"
              placeholder="Enter Zip Code"
              className="w-full border border-gray-300 rounded-md p-2"
              {...register("zip", { required: "Zip code is required" })}
            />
            {errors.zip && (
              <p className="text-red-500 text-sm">{errors.zip.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm mb-1">State</label>
            <select
              className="w-full border border-gray-300 rounded-md p-2 appearance-none"
              {...register("state", { required: "State is required" })}
            >
              <option value="">Select State</option>
              <option value="California">California</option>
              <option value="Texas">Texas</option>
            </select>
            {errors.state && (
              <p className="text-red-500 text-sm">{errors.state.message}</p>
            )}
          </div>

          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              className="mr-2 accent-black h-4 w-4"
              {...register("defaultAddress")}
            />
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
  );
}

export default ShippingAddressAll;
