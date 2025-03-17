// src/api/orderApi.js

import axios from "axios";
import { getToken } from "../util/auth";
import { API_BASE_URL } from "../util/contant";

// Create a new order
export const createOrder = async (orderData) => {
  try {
    const token = getToken();
    const response = await axios.post(
      `${API_BASE_URL}/orders/create`,
      orderData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating order:", error);
    return {
      status: false,
      message: error.response?.data?.message || "Failed to create order",
    };
  }
};

// Verify Razorpay payment
export const verifyPayment = async (paymentData) => {
  try {
    const token = getToken();
    const response = await axios.post(
      `${API_BASE_URL}/orders/verify-payment`,
      paymentData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error verifying payment:", error);
    return {
      status: false,
      message: error.response?.data?.message || "Payment verification failed",
    };
  }
};

// Get user orders
export const getUserOrders = async () => {
  try {
    const token = getToken();
    const response = await axios.get(`${API_BASE_URL}/orders/user-orders`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching user orders:", error);
    return {
      status: false,
      message: error.response?.data?.message || "Failed to fetch orders",
    };
  }
};

// Get order details by ID
export const getOrderById = async (orderId) => {
  try {
    const token = getToken();
    const response = await axios.get(`${API_BASE_URL}/orders/${orderId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching order details:", error);
    return {
      status: false,
      message: error.response?.data?.message || "Failed to fetch order details",
    };
  }
};
