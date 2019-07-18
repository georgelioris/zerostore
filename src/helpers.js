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
