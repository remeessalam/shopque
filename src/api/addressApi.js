import { apiCall } from "./apiController";

export const addAddress = async (address) => {
  try {
    const response = await apiCall({
      path: "/addresses",
      method: "POST",
      data: { address },
    });

    return response;
  } catch (error) {
    console.error("Error adding product to cart:", error);
    throw error;
  }
};

export const getAddAddress = async () => {
  try {
    const response = await apiCall({
      path: "/addresses/address",
      method: "GET",
    });

    return response;
  } catch (error) {
    console.error("Error adding product to cart:", error);
    throw error;
  }
};
export const deleteAddress = async (id) => {
  try {
    const response = await apiCall({
      path: `/addresses/delete-address/${id}`,
      method: "DELETE",
    });

    return response;
  } catch (error) {
    console.error("Error adding product to cart:", error);
    throw error;
  }
};
