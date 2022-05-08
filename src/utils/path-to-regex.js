/**
 * Convert a path string into RegExp
 * @param {string} path
 * @returns {RegExp} regular expression for path matching; parameters will
 *     be matched by named capturing groups
 */
export function pathToRegex(path) {
  // the capturing group contains the parameter name, which is used to 
  // specify the named capturing group in the RegExp
  return new RegExp(`^${path.replace(/:(\w+)/g, '(?<$1>\\w+)')}$`);
}
