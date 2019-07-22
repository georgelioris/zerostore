// Returns a (cartItem) (property) from (itemsObj)
export const getProperty = items => cartItem => prop => {
  const key = cartItem.id;
  return items.hasOwnProperty(key)
    ? items[key][prop] || prop + " doesn't exist"
    : "Item Removed";
};

// Returns a (cartItem) subtotal, getting the price from (itemsObj)
export const subTotal = items => cartItem => {
  return getProperty(items)(cartItem)("price") * cartItem.quantity;
};

// Returns [cartItems] total getting the price from (itemsObj)
export const total = (cartItems, items) => {
  const total = cartItems.reduce((acc, cartItem) => {
    return acc + subTotal(items)(cartItem);
  }, 0);
  return total ? `Total: ${total} $` : "";
};

// Returns only unique non-empty values from an array
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

export const getNextKey = obj => {
  const itemsArr = Object.keys(obj);
  const lastIndex = Number(itemsArr[itemsArr.length - 1]);
  return itemsArr.length !== 0 ? lastIndex + 1 : 1;
};
