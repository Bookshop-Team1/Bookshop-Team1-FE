// @ts-check

// import { LOGGED_IN_USER_INFO } from "./constants";
// import { getParsedValueFromLocalStorage } from "./services/localStorage";

/**
 * @function componentLazyLoader
 * @param {Function} lazyComponent
 * @param {Number} attemptsLeft
 * @returns Promise
 */

export const componentLazyLoader = (lazyComponent, attemptsLeft) => {
  return new Promise((resolve, reject) => {
    // check if the window has already been refreshed
    const hasRefreshed = JSON.parse(
      window.sessionStorage.getItem("retry-lazy-refreshed") || "false",
    );
    lazyComponent()
      .then((/** @type {any} */ component) => {
        window.sessionStorage.setItem("retry-lazy-refreshed", "false");
        resolve(component);
      })
      .catch((/** @type {any} */ error) => {
        if (!hasRefreshed && attemptsLeft === 1) {
          // not been refreshed yet
          window.sessionStorage.setItem("retry-lazy-refreshed", "true"); // we are now going to refresh
          return window.location.reload(); // refresh the page
        }
        // let us retry after 1500 ms
        setTimeout(() => {
          if (attemptsLeft === 1) {
            reject(error);
            return;
          }
          componentLazyLoader(lazyComponent, attemptsLeft - 1).then(resolve, reject);
        }, 1500);
        return null;
      });
  });
};

/**
 * @function isLogin
 * check whether local storage has access and refresh token or not
 * @returns Boolean
 */
export const isLogin = () => {
  // Need to implement this

  // const userInfo = getParsedValueFromLocalStorage(LOGGED_IN_USER_INFO);
  // return !!(userInfo && userInfo.accessToken && userInfo.refreshToken);
  return true;
};
