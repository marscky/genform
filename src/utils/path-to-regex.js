/**
 * Convert a path string into regex 
 * Parameters are specified by prefixing the paramter name with a colon 
 * @param {string} path
 * @returns {RegExp} regular expression for path matching, parameters will
 *                   be matched by named capturing groups
 */
export function pathToRegex(path) {
  return new RegExp(`^${path.replace(/:(\w+)/g, '(?<$1>\\w+)')}$`);
}
