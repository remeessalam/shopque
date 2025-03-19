import { BiX } from "react-icons/bi";
import SectionHeader from "../Components/SectionHeader";
import { Link } from "react-router-dom";
import { useCart } from "../Store/CartContext";
import { removeFromCartAPI } from "../api/cartApi";
import toast from "react-hot-toast";
import { useState } from "react";
import CircularLoading from "../Components/CircleLoading";
import EmptyProducts from "../Components/EmptyProducts";

function CartPage() {
  const [loading, setLoading] = useState(false);
  const { cartItems, removeFromCart } = useCart();
  console.log(cartItems, "asdfasdfasdf");

  // Calculate subtotal using product.price and cart item quantity safely with optional chaining
  const subtotal = cartItems.reduce(
    (total, item) =>
      total + (item.product?.price ? item.product.price * item.quantity : 0),
    0
  );
  const tax = 3.0;
  const total = subtotal + tax;
  const shipping = "Free";

  const removeCartItemApi = async (id) => {
    setLoading(true);
    const response = await removeFromCartAPI(id);
    console.log(response, "asdfasdasdfsadffasdf");
    if (!response.status) {
      toast.error("Request failed");
      setLoading(false);
      return;
    }
    toast.success("Item removed from cart");
    removeFromCart(response.cart.items);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <SectionHeader section="Cart" />

      {/* Main Content */}
      <div className="wrapper pb-24 mt-5">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-8">
            <h2 className="text-lg font-medium text-gray-900 mb-6">
              Your cart
            </h2>
            {!cartItems.length ? (
              <EmptyProducts title="cart" redirect="/products" />
            ) : (
              <div className="border-t border-gray-200">
                {cartItems.map((item) => (
                  <div
                    key={item._id}
                    className="py-6 flex items-center border-b border-gray-200"
                  >
                    <div className="flex-shrink-0 w-24 h-24 rounded-md overflow-hidden">
                      <img
                        src={item.product?.images[0] || ""}
                        alt={item.product?.name || "Product image"}
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                    <div className="ml-4 flex-1">
                      <div className="flex justify-between">
                        <h3 className="text-base font-medium text-gray-900">
                          {item.product?.name || "Product not available"}
                        </h3>
                        <p className="text-base font-medium text-gray-900">
                          ₹{" "}
                          {item.product?.price
                            ? item.product.price.toFixed(2)
                            : "0.00"}
                        </p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">
                        {item.product?.color || ""} {item.product?.size || ""}
                      </p>
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center border border-gray-300 rounded-md">
                          <span className="px-4 py-1 text-gray-900">
                            {item.quantity}
                          </span>
                        </div>
                        <button
                          disabled={loading}
                          onClick={() =>
                            removeCartItemApi(item.product?._id || item._id)
                          }
                          className="p-2 text-gray-400 hover:text-gray-500 rounded-md"
                        >
                          {loading ? (
                            <CircularLoading />
                          ) : (
                            <BiX className="h-5 w-5" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
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
                      ₹ {subtotal.toFixed(2)}
                    </dd>
                  </div>
                  <div className="py-4 flex items-center justify-between border-t border-gray-200">
                    <dt className="text-gray-600">Shipping:</dt>
                    <dd className="font-medium text-gray-900">{shipping}</dd>
                  </div>
                  <div className="py-4 flex items-center justify-between border-t border-gray-200">
                    <dt className="text-gray-600">Tax:</dt>
                    <dd className="font-medium text-gray-900">
                      ₹ {tax.toFixed(2)}
                    </dd>
                  </div>
                  <div className="py-4 flex items-center justify-between border-t border-gray-200">
                    <dt className="text-base font-medium text-gray-900">
                      Total
                    </dt>
                    <dd className="text-base font-medium text-gray-900">
                      ₹ {total.toFixed(2)}
                    </dd>
                  </div>
                </dl>
                <div className="mt-6">
                  <Link to={"/checkout"}>
                    <button
                      disabled={!cartItems.length}
                      type="button"
                      className={`w-full ${
                        cartItems.length
                          ? `bg-gray-900 text-white hover:bg-gray-800`
                          : `bg-gray-400 text-slate-500 cursor-not-allowed`
                      } border border-transparent rounded-md py-3 px-4 text-base font-medium  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500`}
                    >
                      Checkout
                    </button>
                  </Link>
                </div>
                <div className="mt-6 text-center">
                  <Link
                    to={"/products"}
                    type="button"
                    className="text-sm font-medium text-gray-600 hover:text-gray-500"
                  >
                    Continue Shopping
                  </Link>
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
