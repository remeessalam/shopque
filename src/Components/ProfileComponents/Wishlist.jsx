import toast from "react-hot-toast";
import { addToCartAPI } from "../../api/cartApi";
import { useCart } from "../../Store/CartContext";
import { useWishlist } from "../../Store/WishlistContext";
// import { CgShoppingCart } from "react-icons/cg";
// import { Link } from "react-router-dom";
import EmptyProducts from "../EmptyProducts";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const handleAddToCart = async (productData) => {
    console.log(productData._id, "asdfsdfsdfsdf");
    const response = await addToCartAPI(productData._id, 1);
    toast.success("product item added in the cart successfull");
    if (response.status) {
      console.log(response.cart.items, "asdfasdfasdf");
      addToCart(response.cart.items);
      return;
    }
    toast.error("error in adding to cart");
  };
  console.log(wishlist, "asdfasdf");

  return (
    <div className="w-full">
      <div className=" bg-white w-full p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-xl font-bold text-gray-900 mb-8">Wishlist</h1>
          <div>
            {wishlist.length === 0 ? (
              <EmptyProducts title="wishlist" redirect="/products" />
            ) : (
              <div className="space-y-8">
                {wishlist.map((order) => (
                  <div
                    key={order._id}
                    className="flex items-start space-x-4 border-b pb-8"
                  >
                    <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                      <img
                        src={order.images[0]}
                        alt={order.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-grow">
                      <h2 className="font-medium text-gray-900">
                        {order.name}
                      </h2>
                      <p
                        onClick={() => removeFromWishlist(order._id)}
                        className="text-sm cursor-pointer text-gray-900 mt-1"
                      >
                        Remove Item
                      </p>
                    </div>

                    <div className="flex  items-center ">
                      <span className={`text-sm px-3 py-1 rounded-full `}>
                        ₹ {order.price}
                      </span>

                      <button
                        onClick={() => handleAddToCart(order)}
                        className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md text-sm hover:bg-gray-50 transition-colors"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
