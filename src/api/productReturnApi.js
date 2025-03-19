import { apiCall } from "./apiController";

export const submitReturnRequest = async (returnOrderDetails) => {
  return apiCall({
    path: "/returns",
    method: "POST",
    data: returnOrderDetails,
  });
};
