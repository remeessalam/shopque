import axios from "axios";
import { getToken } from "../util/auth";
import { API_BASE_URL } from "../util/contant";

const defaultHeaders = () => {
  const token = getToken();
  return {
    Authorization: token ? `Bearer ${token}` : "",
    "Content-Type": "application/json",
  };
};

/**
 * Central API calling controller.
 *
 * @param {Object} options - Options for the API call.
 * @param {string} options.path - API endpoint path (e.g., "/cart/add").
 * @param {string} [options.method="GET"] - HTTP method (GET, POST, PUT, DELETE).
 * @param {Object} [options.data={}] - Request payload.
 *
 * @returns {Promise} - The API response data.
 */
export const apiCall = async ({ path, method = "GET", data = {} }) => {
  try {
    const response = await axios({
      method,
      url: `${API_BASE_URL}${path}`,
      headers: defaultHeaders(),
      ...(method.toUpperCase() === "GET" ? { params: data } : { data: data }),
    });
    return response.data;
  } catch (error) {
    console.error("Error calling API:", error);
    throw error;
  }
};
