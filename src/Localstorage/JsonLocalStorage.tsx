const JsonLocalStorage = {
  setItem: (key: string, value: string) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  getItem: (key: string) => {
    // @ts-ignore
    return JSON.parse(localStorage.getItem(key));
  },
};

export default JsonLocalStorage;