import LazyWrapper from "./_LazyWrapper";
import getData from "./_getData";
import getFuncName from "./_getFuncName";
import lodash from "./wrapperLodash";

/**
 * Checks if `func` has a lazy counterpart.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
 *  else `false`.
 */
function isLaziable(func) {
  const funcName = getFuncName(func);
  const other = lodash[funcName];

  if (typeof other != "function" || !(funcName in LazyWrapper.prototype)) {
    return false;
  }
  if (func === other) {
    return true;
  }
  const data = getData(other);
  return !!data && func === data[0];
}

export default isLaziable;
