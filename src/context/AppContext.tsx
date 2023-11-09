import { createContext, useCallback, useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { themeDark, themeLight } from "../style/theme";
import useLocalStorage from "../library/local-storage/useLocalStorage";
import { LocalStorageKey } from "../library/local-storage/types";

interface ContextValue {
  toggleTheme: () => void;
}

export const AppContext = createContext<ContextValue>({
  toggleTheme: () => undefined,
})

interface Props {
  children: React.ReactNode;
}

export default function AppContextProvider({children}: Props): JSX.Element {
  const { getItemToLocalStorage,removeItemToLocalStorage, setItemToLocalStorage } = useLocalStorage<boolean>();
  const [isDarkTheme, setIsDarkTheme] = useState<boolean | undefined>(true);

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
    <AppContext.Provider value={{ toggleTheme }}>
      <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
        {children}
      </ThemeProvider>
    </AppContext.Provider >
  )
}
