export const getToken = () => {
  const userToken = localStorage.getItem("userToken");
  return userToken;
};
