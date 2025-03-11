import { useForm } from "react-hook-form";
import axios from "axios";

function ShippingAddress() {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      streetAddress: "2436 Naples Avenue",
      city: "Panama City",
      state: "FL",
      zipCode: "32405",
      country: "United States",
    },
  });

  const onSubmit = async (data) => {
    try {
      const userId = "USER_ID_HERE"; // Replace with actual user ID
      const response = await axios.post("http://localhost:5000/addresses", {
        userId,
        ...data,
      });
      console.log("Address saved:", response.data);
      reset();
    } catch (error) {
      console.error("Error saving address:", error);
    }
  };

  return (
    <div className="min-h-screen bg-white p-4 md:p-8 w-full">
      <h1 className="text-xl font-bold mb-6">Shipping Address</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Street Address
          </label>
          <input
            {...register("streetAddress")}
            className="w-full p-2 border border-gray-300 rounded focus:ring-1 focus:ring-gray-400"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              City
            </label>
            <input
              {...register("city")}
              className="w-full p-2 border border-gray-300 rounded focus:ring-1 focus:ring-gray-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              State
            </label>
            <input
              {...register("state")}
              className="w-full p-2 border border-gray-300 rounded focus:ring-1 focus:ring-gray-400"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Zip Code
            </label>
            <input
              {...register("zipCode")}
              className="w-full p-2 border border-gray-300 rounded focus:ring-1 focus:ring-gray-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Country
            </label>
            <input
              {...register("country")}
              className="w-full p-2 border border-gray-300 rounded focus:ring-1 focus:ring-gray-400"
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-gray-900 text-white px-6 py-3 rounded font-medium hover:bg-gray-800 transition-colors"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default ShippingAddress;
