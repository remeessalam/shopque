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

export const checkWishlist = (items, productId) => {
  return items.some((item) => item._id === productId);
};

export const showDateTime = (dateandtime) => {
  const date = new Date(dateandtime);
  const day = date.getDate();
  const month = date
    .toLocaleString("default", {
      month: "long",
    })
    .toLowerCase();
  const year = date.getFullYear();
  const time = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  return `${day}-${month}-${year}, ${time}`;
};
