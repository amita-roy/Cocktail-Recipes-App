export default (coctail, key) => Object.entries(coctail)
  .filter((keyValue) => keyValue[0].match(key))
  .filter(([, value]) => value !== null && value !== '')
  .map(([, value]) => value);
