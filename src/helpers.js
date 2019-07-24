// Returns a ({cartItem}) ("property") from ({items})
export const getProperty = items => cartItem => prop => {
  const key = cartItem.id;
  return items.hasOwnProperty(key)
    ? items[key][prop] || prop + " doesn't exist"
    : "Item Removed";
};

// Returns a ({cartItem}) subtotal, getting the price from ({items})
export const subTotal = items => cartItem => {
  return getProperty(items)(cartItem)("price") * cartItem.quantity;
};

// Returns ([{cartItems}]) total getting the price from ({items})
export const total = (cartItems, items) => {
  const total = cartItems.reduce((acc, cartItem) => {
    return acc + subTotal(items)(cartItem);
  }, 0);
  return total ? `Total: ${total} $` : "";
};

// Returns a new ([array]) with only unique non-empty values
export const onlyUnique = array =>
  array
    .filter((value, index, array) => array.indexOf(value) === index)
    .filter(Boolean);

// Returns a new sorted ([array]) of objects with descending ("property") values
export const sortAscend = (array, property) =>
  [...array].sort((a, b) => a[property] - b[property]);

// Returns a new sorted ([array]) of objects with ascending ("property") values
export const sortDescend = (array, property) =>
  [...array].sort((a, b) => b[property] - a[property]);

export const getNextKey = obj => {
  const itemsArr = Object.keys(obj).map(key => Number(key) || key);
  const lastIndex = itemsArr[itemsArr.length - 1] || 0;
  return lastIndex + 1;
};

// Returns a new ({Obj}) with all properties that pass the test
// implemented by the provided (callback).
export const filterObject = (obj, callback) =>
  Object.keys(obj)
    .map(key => Number(key) || key)
    .reduce(
      (acc, key) =>
        callback(key)
          ? {
              ...acc,
              [key]: obj[key]
            }
          : acc,
      {}
    );
