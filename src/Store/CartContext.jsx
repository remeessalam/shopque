import { createContext, useContext, useEffect, useState } from "react";
import { apiCall } from "../api/apiController";

const CartContext = createContext();
//eslint-disable-next-line
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    const fetchCartItems = async () => {
      const response = await apiCall({ path: "/cart", method: "GET" });
      console.log(response.items, "asfasdfasf");
      setCartItems(response.items);
    };
    fetchCartItems();
  }, []);
  const addToCart = (product) => {
    console.log(product, "asdlkfasjfdkjsf");
    setCartItems(product);
    // (prevCart) => {
    //   const existingItem = prevCart.find((item) => item._id === product._id);
    //   if (existingItem) {
    //     return prevCart?.map((item) =>
    //       item.id === product.id
    //         ? { ...item, quantity: item.quantity + 1 }
    //         : item
    //     );
    //   }
    //   return [...prevCart, { ...product, quantity: 1 }];
    // }
  };

  const removeFromCart = (product) => {
    setCartItems(product);
  };

  const updateQuantity = (id, quantity) => {
    setCartItems((prevCart) =>
      prevCart?.map((item) =>
        item.id === id ? { ...item, quantity: Number(quantity) } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
