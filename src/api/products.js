import axios from "axios";
import { API_BASE_URL } from "../util/contant";

export const getProducts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products`);
    console.log(response, "asdfsdf");
    return response.data.products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export const getProductById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products/${id}`);
    return response.data.product;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
};
