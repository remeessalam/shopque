import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppRouter from "./App";
import { RouterProvider } from "react-router-dom";
import { CartProvider } from "./Store/CartContext";
import { WishlistProvider } from "./Store/WishlistContext";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Toaster
      position="top-center"
      toastOptions={{
        style: {
          background: "#010C2A",
          color: "#ffffff",
        },
      }}
    />
    <CartProvider>
      <WishlistProvider>
        <RouterProvider router={AppRouter} />
      </WishlistProvider>
    </CartProvider>
  </React.StrictMode>
);
