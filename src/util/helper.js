export const checkUserTocken = () => {
  const userToken = localStorage.getItem("userToken");
  if (!userToken) {
    return false;
  }
  return true;
};

export const showNameDP = (name) => {
  const twoLetters = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return twoLetters;
};

export const calcTotalPrice = (cartItems) =>
  cartItems.reduce((acc, item) => acc + item.product.price, 0);
