
export const getStore = <T>(key: string): T | undefined => {
  try {
    const persisted = localStorage.getItem(key);
    if (persisted) {
      return JSON.parse(persisted);
    }
  } catch (err: unknown) {
    console.error((err as Error).message);
  }
};

export const setStore = <T>(key: string, items: T) => {
  try {
    localStorage.setItem(key, JSON.stringify(items));
  } catch (err: unknown) {
    console.error((err as Error).message);
  }
};