/**
 * returns undefined if all properties specified by params are present
 *  and not empty on obj, otherwise returns array of missing params
 */
export default function (obj, params) {
  const missing = [];
  for (let i = 0; i < params.length; i++) {
    const param = params[i];
    if (obj[param] === undefined || obj[param] === null || obj[param] === ''
        || (obj[param] instanceof Array && obj[param].length === 0)) {
      missing.push(param);
    }
  }
  return Object.keys(missing).length === 0 ? undefined : missing;
}
