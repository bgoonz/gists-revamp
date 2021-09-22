import baseGet from "./_baseGet";

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return object => {
    return baseGet(object, path);
  };
}

export default basePropertyDeep;
