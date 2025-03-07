import { FiShoppingCart, FiX } from "react-icons/fi";
import SectionHeader from "../Components/SectionHeader";
import { useWishlist } from "../Store/WishlistContext";
import { useCart } from "../Store/CartContext";

function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    // Create a product object with the selected options and quantity
    const productToAdd = {
      ...product,
      quantity: 1, // Add the selected quantity
      // You might want to add selected color/size here if implemented
    };

    addToCart(productToAdd);
  };
  return (
    <>
      <SectionHeader section={"Wishlist"} />
      <div className="wrapper my-10">
        <div className="border border-gray-200 rounded">
          <div className="p-4 border-b border-gray-200">
            <h1 className="text-xl font-medium">Wishlist</h1>
          </div>

          <div className="bg-gray-100 hidden md:block">
            <div className="grid grid-cols-12 py-3 px-4">
              <div className="col-span-6 font-medium text-gray-700 text-sm">
                PRODUCTS
              </div>
              <div className="col-span-2 font-medium text-gray-700 text-sm">
                PRICE
              </div>
              <div className="col-span-2 font-medium text-gray-700 text-sm">
                STOCK STATUS
              </div>
              <div className="col-span-2 font-medium text-gray-700 text-sm">
                ACTIONS
              </div>
            </div>
          </div>

          <div className="divide-y divide-gray-200">
            {wishlist.length === 0 ? (
              <div className="py-8 px-4 text-center text-gray-500">
                Your wishlist is empty
              </div>
            ) : (
              wishlist.map((product, index) => (
                <div
                  key={product.id}
                  className={`grid grid-cols-1 md:grid-cols-12 py-4 px-4 items-center ${
                    index % 2 === 0 ? "" : "bg-gray-50"
                  }`}
                >
                  {/* Product Info - Full width on mobile, 6 cols on desktop */}
                  <div className="col-span-1 md:col-span-6 flex items-center gap-4 mb-4 md:mb-0">
                    <div className="w-16 h-16 flex-shrink-0">
                      <img
                        src={product.images && product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="text-sm">{product.name}</div>
                  </div>

                  {/* Mobile layout for price, stock and actions */}
                  <div className="grid grid-cols-3 md:hidden gap-2 mb-2">
                    <div className="text-xs font-medium text-gray-700">
                      PRICE
                    </div>
                    <div className="text-xs font-medium text-gray-700">
                      STOCK
                    </div>
                    <div className="text-xs font-medium text-gray-700">
                      ACTIONS
                    </div>
                  </div>

                  {/* Price - Desktop layout */}
                  <div className="md:col-span-2 mb-2 md:mb-0">
                    {product.originalPrice && (
                      <div className="text-sm line-through text-gray-500">
                        ${product.originalPrice}
                      </div>
                    )}
                    <div className="font-medium">
                      ${product.price?.toFixed(2) || "N/A"}
                    </div>
                  </div>

                  {/* Stock Status - Desktop layout */}
                  <div className="md:col-span-2 mb-2 md:mb-0">
                    {product.stock ? (
                      <div className="text-green-500 text-sm font-medium">
                        IN STOCK
                      </div>
                    ) : (
                      <div className="text-red-500 text-sm">OUT OF STOCK</div>
                    )}
                  </div>

                  {/* Actions - Desktop layout */}
                  <div className="md:col-span-2 flex items-center justify-between">
                    <button
                      className={`${
                        product.stock
                          ? "bg-orange-400 hover:bg-orange-500"
                          : "bg-gray-400"
                      } text-white px-3 py-2 rounded flex items-center text-sm`}
                      disabled={!product.stock}
                      onClick={() => handleAddToCart(product)}
                    >
                      ADD TO CART <FiShoppingCart className="ml-2" />
                    </button>
                    <button
                      className="text-gray-400 hover:text-gray-600"
                      onClick={() =>
                        removeFromWishlist && removeFromWishlist(product.id)
                      }
                    >
                      <FiX size={20} />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default WishlistPage;
