import { createContext, useCallback, useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { themeDark, themeLight } from '../style/theme';
import useLocalStorage from '../library/local-storage/useLocalStorage';
import { LocalStorageKey } from '../library/local-storage/types';
import { Language } from '../service/types';

interface ContextValue {
  toggleTheme: () => void;
  isDarkTheme: boolean | undefined;
  language: Language | undefined;
  toggleLanguage: () => void;
}

export const  ThemeContext = createContext<ContextValue>({
  toggleTheme: () => undefined,
  isDarkTheme: undefined,
  language: undefined,
  toggleLanguage: () => undefined,
});

interface Props {
  children: React.ReactNode;
}

export default function ThemeContextProvider({ children }: Props): JSX.Element {
  const {
    getItemToLocalStorage,
    removeItemToLocalStorage,
    setItemToLocalStorage,
  } = useLocalStorage();
  const [isDarkTheme, setIsDarkTheme] = useState<boolean | undefined>(
    undefined
  );
  const [language, setLanguage] = useState<Language | undefined>(undefined);

  const toggleTheme = useCallback(() => {
    const darkTheme = getItemToLocalStorage<boolean>(
      LocalStorageKey.PAGE_THEME_DARK
    );
    removeItemToLocalStorage(LocalStorageKey.PAGE_THEME_DARK);
    setItemToLocalStorage<boolean>(LocalStorageKey.PAGE_THEME_DARK, !darkTheme);

    setIsDarkTheme(!darkTheme);
  }, [setItemToLocalStorage, removeItemToLocalStorage, getItemToLocalStorage]);

  const toggleLanguage = useCallback(() => {
    const lang =
      getItemToLocalStorage<Language>(LocalStorageKey.LANGUAGE) === Language.DE
        ? Language.EN
        : Language.DE;
    removeItemToLocalStorage(LocalStorageKey.LANGUAGE);
    setItemToLocalStorage<Language>(LocalStorageKey.LANGUAGE, lang);
    setLanguage(lang);
  }, [setItemToLocalStorage, removeItemToLocalStorage, getItemToLocalStorage]);

  useEffect(() => {
    setIsDarkTheme(
      getItemToLocalStorage<boolean>(LocalStorageKey.PAGE_THEME_DARK)
    );
    setLanguage(getItemToLocalStorage<Language>(LocalStorageKey.LANGUAGE));
  }, [getItemToLocalStorage]);

  return (
    <ThemeContext.Provider
      value={{ toggleTheme, isDarkTheme, language, toggleLanguage }}
    >
      {isDarkTheme !== undefined && (
        <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
          {children}
        </ThemeProvider>
      )}
    </ThemeContext.Provider>
  );
}
