import { useState } from "react";

function ShippingAddress() {
  const [formData, setFormData] = useState({
    streetAddress: "2436 Naples Avenue",
    city: "Panama City",
    state: "FL",
    zipCode: "32405",
    country: "United States",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to a server
  };

  return (
    <div className="min-h-screen bg-white p-4 md:p-8 w-full">
      <div className="">
        <h1 className="text-xl font-bold mb-6">Shipping Address</h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="streetAddress"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Street Address
            </label>
            <input
              type="text"
              id="streetAddress"
              name="streetAddress"
              value={formData.streetAddress}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
            </div>

            <div>
              <label
                htmlFor="state"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                State
              </label>
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div>
              <label
                htmlFor="zipCode"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Zip Code
              </label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
            </div>

            <div>
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Country
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
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
    </div>
  );
}

export default ShippingAddress;
