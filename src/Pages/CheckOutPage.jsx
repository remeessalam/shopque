import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SectionHeader from "../Components/SectionHeader";
import { useCart } from "../Store/CartContext";
import { calcTotalPrice } from "../util/helper";
import ShippingAddressAll from "../Components/ProfileComponents/ShippingAddressAll";
import { cancelOrderAPI, createOrder, verifyPayment } from "../api/orderApi";
import toast from "react-hot-toast";

function CheckOutPage() {
  const { cartItems, clearCart } = useCart();
  console.log(cartItems, "adfasdfasdfasdfasdfsfs");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [activeStep, setActiveStep] = useState(1);

  const tax = 18;
  const totalPrice = calcTotalPrice(cartItems);
  const finalAmount = totalPrice + (totalPrice * tax) / 100;

  const handleAddressSelect = (address) => {
    setSelectedAddress(address);
  };

  const handleContinueToPayment = () => {
    if (!selectedAddress) {
      toast.error("Please select a delivery address");
      return;
    }
    setActiveStep(2);
  };

  const handlePlaceOrder = async () => {
    if (!selectedAddress) {
      toast.error("Please select a delivery address");
      return;
    }

    try {
      setIsLoading(true);

      const orderData = {
        totalAmount: Math.round(finalAmount), // exepting paisa
        currency: "INR",
        shippingAddress: selectedAddress._id,
        products: cartItems.map((item) => ({
          productId: item.product._id,
          quantity: item.quantity,
          price: item.product.price,
        })),
      };

      const orderResponse = await createOrder(orderData);
      if (!orderResponse.status) {
        toast.error(orderResponse.message || "Failed to create order");
        const response = await cancelOrderAPI();
        console.log(response, "responsiveasdfsdfs");
        navigate("/order-failed");
        return;
      }

      if (!window.Razorpay) {
        toast.error("Razorpay SDK not loaded. Please try again.");
        const response = await cancelOrderAPI();
        console.log(response, "responsiveasdfsdfs");
        navigate("/order-failed");

        return;
      }
      console.log(orderResponse.data.totalAmount, "asdfasdfasdfasdfsd");
      const options = {
        // key: "rzp_live_OVypg2kuZcNJKa",
        key: "rzp_test_CTdQH1trOpQlIY",
        amount: orderResponse.data.totalAmount,
        currency: "INR",
        name: "Your Store Name",
        description: "Order Payment",
        order_id: orderResponse.data.razorpayOrder.id,
        handler: async function (response) {
          try {
            console.log(
              orderResponse.data.totalAmount,
              orderResponse.data.orderId,
              orderResponse,
              response,
              "asdfasdfasdfwjernsdf"
            );
            const verifyResponse = await verifyPayment({
              paymentId: response.razorpay_payment_id,
              razorpayOrderId: response.razorpay_order_id,
              signature: response.razorpay_signature,
              orderId: orderResponse.data._id,
            });

            if (verifyResponse.status) {
              toast.success("Payment successful! Order placed.");
              clearCart();
              navigate("/order-success");
            } else {
              toast.error(
                verifyResponse.message || "Payment verification failed"
              );
              const response = await cancelOrderAPI();
              console.log(response, "responsiveasdfsdfs");
              navigate("/order-failed");
            }
          } catch (error) {
            console.error(error);
            toast.error("Payment verification failed");
            const response = await cancelOrderAPI();
            console.log(response, "responsiveasdfsdfs");
            navigate("/order-failed");
          }
        },
        prefill: {
          name: selectedAddress.name,
          contact: selectedAddress.mobile,
        },
        theme: { color: "#000000" },
        modal: {
          ondismiss: async () => {
            setIsLoading(false);
            await cancelOrderAPI(orderResponse.data._id);
            toast.error("Order cancelled due to payment modal dismissal");
            navigate("/order-failed");
          },
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error(error);

      toast.error("Failed to place order");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SectionHeader section="Checkout" />
      <div className="max-w-6xl mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-2/3">
            <ShippingAddressAll
              onAddressSelect={handleAddressSelect}
              selectedAddress={selectedAddress}
              onContinue={handleContinueToPayment}
              activeStep={activeStep}
              setActiveStep={setActiveStep}
            />
          </div>
          <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Your Order</h2>
              <Link
                to={"/cartitems"}
                className="text-sm border px-4 py-2 hover:bg-gray-50"
              >
                Edit Cart
              </Link>
            </div>
            <div className="flex items-center gap-4 mb-6">
              {cartItems.map(({ product }, index) => (
                <div
                  key={product._id || index}
                  className="w-12 h-12 bg-blue-100 rounded-md overflow-hidden"
                >
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Subtotal:</span>
                <span className="font-medium">₹ {totalPrice}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Shipping:</span>
                <span className="font-medium text-green-600">Free</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Tax:</span>
                <span className="font-medium">{tax} %</span>
              </div>
              <div className="border-t border-gray-200 mt-2 pt-4 mb-6">
                <div className="flex justify-between">
                  <span className="font-medium">Total</span>
                  <span className="font-bold">₹ {finalAmount.toFixed(2)}</span>
                </div>
              </div>
              {activeStep > 1 && (
                <button
                  className="w-full bg-gray-900 text-white py-3 rounded font-medium hover:bg-gray-800"
                  onClick={handlePlaceOrder}
                  disabled={isLoading}
                >
                  {isLoading ? "Processing..." : "Place Order"}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOutPage;
