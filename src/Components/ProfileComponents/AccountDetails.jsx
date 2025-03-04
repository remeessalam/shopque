import { useState } from "react";

const AccountDetails = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
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
        <h1 className="text-xl font-bold mb-6">Account Details</h1>
        <div className="w-24 h-24 bg-blue-100 rounded-full flex justify-center items-center text-2xl text-blue-600">
          AN
        </div>
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="">
              <label
                htmlFor="streetAddress"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full name
              </label>
              <input
                type="text"
                id="full name"
                name="full name"
                value={formData.streetAddress}
                onChange={handleChange}
                className="w-full  p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
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
};

export default AccountDetails;
