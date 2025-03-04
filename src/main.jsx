import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppRouter from "./App";
import { RouterProvider } from "react-router-dom";
import { CartProvider } from "./Store/cartContext";
import { WishlistProvider } from "./Store/wishlistContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartProvider>
      <WishlistProvider>
        <RouterProvider router={AppRouter} />
      </WishlistProvider>
    </CartProvider>
  </React.StrictMode>
);
