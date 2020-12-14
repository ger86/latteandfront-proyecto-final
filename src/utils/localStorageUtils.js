const localstorageUtils = {
  getItem: (key) => JSON.parse(window.localStorage.getItem(key)),
  setItem: (key, data) => window.localStorage.setItem(key, JSON.stringify(data)),
  removeItem: (key) => window.localStorage.removeItem(key)
};

export default localstorageUtils;
