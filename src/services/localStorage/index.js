// @ts-check

/**
 *
 * @param {string} key
 * @returns {any}
 */
export const getFromLocalStorage = (key) => {
  const val = localStorage.getItem(key);
  return val;
};

/**
 *
 * @param {string} key
 */
export const removeFromLocalStorage = (key) => {
  localStorage.removeItem(key);
};

/**
 *
 * @param {string} key
 * @returns {Object} parsed object
 */
export const getParsedValueFromLocalStorage = (key) => {
  const val = localStorage.getItem(key);
  // if we not get value from localStorage returning null
  if (!val) return null;

  try {
    const parsedObject = JSON.parse(val);
    return parsedObject;
  } catch (error) {
    return null;
  }
};

/**
 *
 * @param {string} key
 * @param {any} val
 */
export const setValueToLocalStorage = (key, val) => {
  return localStorage.setItem(key, val);
};
