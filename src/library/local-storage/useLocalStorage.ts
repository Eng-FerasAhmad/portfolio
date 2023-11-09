import { useCallback } from 'react';
import { LocalStorageKey } from './types';

interface UseLocalStorage<T> {
  setItemToLocalStorage: (key: LocalStorageKey, value: T) => void;
  removeItemToLocalStorage: (key: LocalStorageKey) => void;
  getItemToLocalStorage: (key: LocalStorageKey) => T | undefined;
}

export default function useLocalStorage<T>(): UseLocalStorage<T> {
  const setItemToLocalStorage = useCallback(
    <U>(key: LocalStorageKey, value: U) => {
      const item = JSON.stringify(value);
      localStorage.setItem(key, item);
    },
    []
  );

  const removeItemToLocalStorage = useCallback((key: LocalStorageKey) => {
    localStorage.removeItem(key);
  }, []);

  const getItemToLocalStorage = useCallback(
    <U>(key: LocalStorageKey): U | undefined => {
      const item: U = localStorage.getItem
        ? JSON.parse(localStorage.getItem(key)!)
        : undefined;
      return item;
    },
    []
  );

  return {
    setItemToLocalStorage,
    removeItemToLocalStorage,
    getItemToLocalStorage,
  };
}
