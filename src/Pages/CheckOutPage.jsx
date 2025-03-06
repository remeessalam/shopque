import { Link } from "react-router-dom";
import SectionHeader from "../Components/SectionHeader";

function CheckOutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <SectionHeader section="Checkout" />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Column - Shipping Address */}
          <div className="w-full md:w-2/3">
            <h2 className="text-xl font-bold mb-6">Shipping Address</h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="street"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Street Address
                </label>
                <input
                  type="text"
                  id="street"
                  className="w-full border border-gray-300 rounded p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
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
                    className="w-full border border-gray-300 rounded p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    className="w-full border border-gray-300 rounded p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    htmlFor="zip"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Zip Code
                  </label>
                  <input
                    type="text"
                    id="zip"
                    className="w-full border border-gray-300 rounded p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    className="w-full border border-gray-300 rounded p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
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
                    className="w-full border border-gray-300 rounded p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    className="w-full border border-gray-300 rounded p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </form>
          </div>

          {/* Right Column - Order Summary */}
          <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Your Order</h2>
              <button className="text-sm border border-gray-300 rounded px-4 py-2 hover:bg-gray-50">
                Edit Cart
              </button>
            </div>

            {/* Order Items */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex gap-2">
                <div className="w-12 h-12 bg-blue-100 rounded-md flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt="Blue Shoe"
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <div className="w-12 h-12 bg-red-100 rounded-md flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80"
                    alt="Red Shoe"
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <div className="w-12 h-12 bg-blue-50 rounded-md flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
                    alt="Shoe Box"
                    className="w-10 h-10 object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Subtotal:</span>
                <span className="font-medium">$ 75.00</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Shipping:</span>
                <span className="font-medium text-green-600">Free</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Tax:</span>
                <span className="font-medium">$ 3.00</span>
              </div>
              <div className="border-t border-gray-200 mt-2 pt-4 mb-6">
                <div className="flex justify-between">
                  <span className="font-medium">Total</span>
                  <span className="font-bold">$ 78.00</span>
                </div>
              </div>
              <Link to={"/order-success"}>
                <button className="w-full bg-gray-900 text-white py-3 rounded font-medium hover:bg-gray-800 transition-colors">
                  Place Order
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOutPage;
