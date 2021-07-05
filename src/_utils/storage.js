// eslint-disable-next-line import/prefer-default-export
export const storage = {
  getItem: (key) => localStorage.getItem(key),

  setItem: (key, value) => localStorage.setItem(key, value),

  removeItem: (key) => localStorage.removeItem(key),

  clear: () => localStorage.clear(),
};
