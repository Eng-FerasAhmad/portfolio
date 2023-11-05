import { Dispatch, SetStateAction, createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { themeDark, themeLight } from "../style/theme";

interface ContextValue {
  isDarkTheme: boolean;
  setIsDarkTheme: Dispatch<SetStateAction<boolean>>;
}

export const AppContext = createContext<ContextValue>({
  isDarkTheme: false,
  setIsDarkTheme: () => undefined,
})

interface Props {
  children: React.ReactNode;
}

export default function AppContextProvider({children}: Props): JSX.Element {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

  return (
    <AppContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
      <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
        {children}
      </ThemeProvider>
    </AppContext.Provider >
  )
}
