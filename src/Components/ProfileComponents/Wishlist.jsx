import toast from "react-hot-toast";
import { addToCartAPI } from "../../api/cartApi";
import { useCart } from "../../Store/CartContext";
import { useWishlist } from "../../Store/WishlistContext";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const handleAddToCart = async (productData) => {
    // const productToAdd = {
    //   ...productData,
    //   quantity: quantity,
    // };
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
  // const products = [
  //   {
  //     id: "1",
  //     name: "Raw Black T-Shirt Lineup",
  //     date: "Added on: 27 July 2023",
  //     price: "$70.00",
  //     status: "Processing",
  //     image:
  //       "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
  //   },
  //   {
  //     id: "2",
  //     name: "Monochromatic Wardrobe",
  //     date: "Added on: 27 July 2023",
  //     price: "$27.00",
  //     status: "Completed",
  //     image:
  //       "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
  //   },
  // ];
  return (
    <div className="w-full">
      <div className=" bg-white w-full p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-xl font-bold text-gray-900 mb-8">Wishlist</h1>

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
                  <h2 className="font-medium text-gray-900">{order.name}</h2>
                  {/* <p className="text-sm text-gray-600 mt-1">{order.date}</p> */}
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
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
