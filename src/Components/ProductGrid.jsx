import { AiOutlineHeart } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useWishlist } from "../Store/WishlistContext";
//eslint-disable-next-line
const ProductGrid = ({ products, cardslength }) => {
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

  const toggleWishlist = (product) => {
    if (wishlist.some((item) => item._id === product._id)) {
      removeFromWishlist(product._id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div className="wrapper paddingTop paddingBottom">
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${cardslength} gap-6`}
      >
        {
          //eslint-disable-next-line
          products?.map((product) => (
            <div
              key={product.id}
              className="group relative border rounded-lg overflow-hidden"
            >
              <Link to={`/product-details/${product._id}`}>
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.images[0] || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium text-sm line-clamp-2">
                      {product.name}
                    </h3>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        toggleWishlist(product);
                      }}
                      className="z-10 px-2 mb-auto rounded-full hover:bg-white/80"
                    >
                      {wishlist.some((item) => item._id === product._id) ? (
                        <FaHeart className="w-5 h-5 text-red-500" />
                      ) : (
                        <AiOutlineHeart className="w-5 h-5 text-gray-600 hover:text-orange-500" />
                      )}
                    </button>
                  </div>
                  <div
                    className={`flex h-full items-center mt-2 ${
                      !product.stock ? `justify-between` : `justify-end`
                    }`}
                  >
                    {!product.stock && (
                      <p className=" border px-3 py-1 rounded-full text-red-500">
                        Unavailable
                      </p>
                    )}
                    <p>{`₹` + product.price}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default ProductGrid;
