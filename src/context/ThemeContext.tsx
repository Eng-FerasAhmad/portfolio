import { createContext, useCallback, useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { themeDark, themeLight } from '../style/theme';
import useLocalStorage from '../library/local-storage/useLocalStorage';
import { LocalStorageKey } from '../library/local-storage/types';

interface ContextValue {
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ContextValue>({
  toggleTheme: () => undefined,
});

interface Props {
  children: React.ReactNode;
}

export default function ThemeContextProvider({ children }: Props): JSX.Element {
  const {
    getItemToLocalStorage,
    removeItemToLocalStorage,
    setItemToLocalStorage,
  } = useLocalStorage<boolean>();
  const [isDarkTheme, setIsDarkTheme] = useState<boolean | undefined>(
    undefined
  );

  const toggleTheme = useCallback(() => {
    const darkTheme = getItemToLocalStorage(LocalStorageKey.PAGE_THEME_DARK);
    removeItemToLocalStorage(LocalStorageKey.PAGE_THEME_DARK);
    setItemToLocalStorage(LocalStorageKey.PAGE_THEME_DARK, !darkTheme);

    setIsDarkTheme(!darkTheme);
  }, [setItemToLocalStorage, removeItemToLocalStorage, getItemToLocalStorage]);

  useEffect(() => {
    setIsDarkTheme(getItemToLocalStorage(LocalStorageKey.PAGE_THEME_DARK));
  }, [getItemToLocalStorage]);

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      {isDarkTheme !== undefined && (
        <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
          {children}
        </ThemeProvider>
      )}
    </ThemeContext.Provider>
  );
}
