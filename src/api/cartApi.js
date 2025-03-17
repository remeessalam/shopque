import { apiCall } from "./apiController";

export const addToCartAPI = async (productId, quantity = 1) => {
  try {
    const response = await apiCall({
      path: "/cart/add",
      method: "POST",
      data: { productId, quantity },
    });

    return response;
  } catch (error) {
    console.error("Error adding product to cart:", error);
    throw error;
  }
};
export const removeFromCartAPI = async (productId) => {
  try {
    const response = await apiCall({
      path: `/cart/remove/${productId}`,
      method: "DELETE",
    });

    return response;
  } catch (error) {
    console.error("Error adding product to cart:", error);
    throw error;
  }
};
