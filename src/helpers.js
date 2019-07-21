export const subTotal = items => cartItem => {
  return getProperty(items)(cartItem, "price") * cartItem.quantity;
};

export const getProperty = items => (cartItem, prop) => {
  const key = cartItem.id;
  return items.hasOwnProperty(key) ? items[key][prop] : "Item Removed";
};

export const total = (cartItems, items) => {
  const total = cartItems.reduce((acc, cartItem) => {
    return acc + subTotal(items)(cartItem);
  }, 0);
  return total ? `Total: ${total} $` : "";
};
// Return only unique entires that are not empty strings
export const onlyUnique = array => [
  ...array
    .filter((value, index, array) => array.indexOf(value) === index)
    .filter(Boolean)
];

export const sortHigh = array => property => [
  ...array.sort((a, b) => a[property] - b[property])
];

export const sortLow = array => property => [
  ...array.sort((a, b) => b[property] - a[property])
];
