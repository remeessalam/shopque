import { useState } from "react";
import { BiChevronRight, BiMinus, BiPlus, BiX } from "react-icons/bi";

// Sample product images from Unsplash
const productImages = {
  dogFood:
    "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
  petFood:
    "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
};

function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: "1",
      name: "Dog Food Dispenser",
      price: 75.0,
      quantity: 1,
      color: "Color:",
      size: "Size: M",
      image: productImages.dogFood,
    },
    {
      id: "2",
      name: "Rotatable Pet Food",
      price: 22.0,
      quantity: 1,
      color: "Color:",
      size: "Size: M",
      image: productImages.petFood,
    },
  ]);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const tax = 3.0;
  const total = subtotal + tax;
  const shipping = "Free";

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;

    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900">Cart</h1>
          <div className="flex items-center mt-2 text-sm text-gray-600">
            <span>Ecommerce</span>
            <BiChevronRight className="h-4 w-4 mx-1" />
            <span>Cart</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-8">
            <h2 className="text-lg font-medium text-gray-900 mb-6">
              Your cart
            </h2>
            <div className="border-t border-gray-200">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="py-6 flex items-center border-b border-gray-200"
                >
                  <div className="flex-shrink-0 w-24 h-24 rounded-md overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="flex justify-between">
                      <h3 className="text-base font-medium text-gray-900">
                        {item.name}
                      </h3>
                      <p className="text-base font-medium text-gray-900">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">
                      {item.color} {item.size}
                    </p>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center border border-gray-300 rounded-md">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="p-2 text-gray-600 hover:text-gray-500"
                        >
                          <BiMinus className="h-4 w-4" />
                        </button>
                        <span className="px-4 py-1 text-gray-900">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="p-2 text-gray-600 hover:text-gray-500"
                        >
                          <BiPlus className="h-4 w-4" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 text-gray-400 hover:text-gray-500 rounded-md"
                      >
                        <BiX className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="mt-16 lg:mt-0 lg:col-span-4">
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-6">
                Order Summary
              </h2>
              <div className="flow-root">
                <dl className="text-sm">
                  <div className="py-4 flex items-center justify-between">
                    <dt className="text-gray-600">Subtotal</dt>
                    <dd className="font-medium text-gray-900">
                      $ {subtotal.toFixed(2)}
                    </dd>
                  </div>
                  <div className="py-4 flex items-center justify-between border-t border-gray-200">
                    <dt className="text-gray-600">Shipping:</dt>
                    <dd className="font-medium text-gray-900">{shipping}</dd>
                  </div>
                  <div className="py-4 flex items-center justify-between border-t border-gray-200">
                    <dt className="text-gray-600">Tax:</dt>
                    <dd className="font-medium text-gray-900">
                      $ {tax.toFixed(2)}
                    </dd>
                  </div>
                  <div className="py-4 flex items-center justify-between border-t border-gray-200">
                    <dt className="text-base font-medium text-gray-900">
                      Total
                    </dt>
                    <dd className="text-base font-medium text-gray-900">
                      $ {total.toFixed(2)}
                    </dd>
                  </div>
                </dl>
                <div className="mt-6">
                  <button
                    type="button"
                    className="w-full bg-gray-900 border border-transparent rounded-md py-3 px-4 text-base font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    Checkout
                  </button>
                </div>
                <div className="mt-6 text-center">
                  <button
                    type="button"
                    className="text-sm font-medium text-gray-600 hover:text-gray-500"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
