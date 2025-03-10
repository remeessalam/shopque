export const checkUserTocken = () => {
  const userToken = localStorage.getItem("userToken");
  if (!userToken) {
    return false;
  }
  return true;
};
