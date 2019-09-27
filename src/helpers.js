// Returns a ({cartItem}) ("property") from ({items})
export const getProperty = items => cartItem => prop => {
  const key = cartItem.id;
  return items.hasOwnProperty(key)
    ? items[key][prop] || prop + " doesn't exist"
    : "Item Removed";
};

// Returns a ({cartItem}) subtotal, getting the price from ({items})
export const subTotal = items => cartItem =>
  getProperty(items)(cartItem)("price") * cartItem.quantity;

// Returns ([{cartItems}]) total getting the price from ({items})
export const total = (cartItems, items) => {
  const total = cartItems.reduce((acc, cartItem) => {
    return acc + subTotal(items)(cartItem);
  }, 0);
  return total ? `Total: ${total} $` : "";
};

// Returns a new ([array]) with only unique non-empty values
export const onlyUnique = array =>
  array.filter(
    (value, index, array) => value && array.indexOf(value) === index
  );

// Returns a new sorted ([array]) of objects with descending ("property") values
export const sortAscend = (array, property) =>
  [...array].sort((a, b) => a[property] - b[property]);

// Returns a new sorted ([array]) of objects with ascending ("property") values
export const sortDescend = (array, property) =>
  [...array].sort((a, b) => b[property] - a[property]);

export const getNextKey = obj => {
  const keysArr = Object.keys(obj).map(key => Number(key) || key);
  const nextKey = (keysArr[keysArr.length - 1] || 0) + 1;
  return nextKey;
};

// Returns a new ({Obj}) with all properties that pass the test
// implemented by the provided (callback).
export const filterObject = (obj, callback) =>
  Object.keys(obj)
    .map(key => Number(key) || key)
    .reduce(
      (acc, key) => (callback(key) ? { ...acc, [key]: obj[key] } : acc),
      {}
    );

export const sanitizeString = string =>
  string.replace(/[^a-z0-9áéíóúñü .,_-]/gim, "").trim() || "";

export const formatPropertyValue = string =>
  string === "true" ? true : string === "false" ? false : string.trim();

export const formatProperties = obj =>
  obj.hasOwnProperty("category")
    ? { ...obj, category: obj.category.toLowerCase() }
    : obj;
