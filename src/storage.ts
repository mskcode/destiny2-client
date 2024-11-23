import { useEffect, useState } from "react";

type SetFunction<T> = (value: T) => void;
type StorageFunction = <T>(key: string, initialValue: T) => [T, SetFunction<T>];

export const useLocalStorage: StorageFunction = <T = any>(
  key: string,
  initialValue: T,
) => {
  const [value, setValue] = useState<T>(() => {
    try {
      const itemOrNull = window.localStorage.getItem(key);
      return itemOrNull === null ? initialValue : JSON.parse(itemOrNull);
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  // update local storage when the stored value changes
  useEffect(() => {
    if (!value) {
      window.localStorage.removeItem(key);
    } else {
      try {
        window.localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.error(error);
      }
    }
  }, [key, value]);

  return [value, setValue] as const;
};
