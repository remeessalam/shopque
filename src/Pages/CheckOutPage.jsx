import { Link } from "react-router-dom";
import SectionHeader from "../Components/SectionHeader";
import { useCart } from "../Store/CartContext";

function CheckOutPage() {
  const { cartItems } = useCart();
  console.log(cartItems, "asdfsdf");
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
              <Link
                to={"/cartitems"}
                className="text-sm border border-gray-300 rounded px-4 py-2 hover:bg-gray-50"
              >
                Edit Cart
              </Link>
            </div>

            {/* Order Items */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex gap-2">
                {cartItems.map(({ product }, index) => (
                  <div
                    key={product._id || index}
                    className="w-12 h-12 bg-blue-100 rounded-md flex items-center justify-center"
                  >
                    <img
                      src={product.images[0]} // First product image
                      alt={product.name}
                      className="w-10 h-10 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Subtotal:</span>
                <span className="font-medium">
                  ₹ {cartItems.reduce((acc, item) => acc + item.price, 0)}
                </span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Shipping:</span>
                <span className="font-medium text-green-600">Free</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Tax:</span>
                <span className="font-medium">₹ 3.00</span>
              </div>
              <div className="border-t border-gray-200 mt-2 pt-4 mb-6">
                <div className="flex justify-between">
                  <span className="font-medium">Total</span>
                  <span className="font-bold">
                    ₹ {cartItems.reduce((acc, item) => acc + item.price, 0) + 3}
                  </span>
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
