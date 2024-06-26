import {
    createContext,
    useCallback,
    useState,
    useEffect,
    ReactNode,
} from 'react';
import { ThemeProvider } from 'styled-components';
import { LocalStorageKey } from '../library/local-storage/types';
import useLocalStorage from '../library/local-storage/useLocalStorage';
import { Language } from '../service/types';
import { themeDark, themeLight } from '../style/theme';

interface ContextValue {
    toggleTheme: () => void;
    isDarkTheme: boolean | undefined;
    language: Language;
    isSmallScreen: boolean;
    toggleLanguage: () => void;
}

export const ThemeContext = createContext<ContextValue>({
    toggleTheme: () => undefined,
    isDarkTheme: undefined,
    isSmallScreen: false,
    language: Language.EN,
    toggleLanguage: () => undefined,
});

interface Props {
    children: ReactNode;
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
    const [language, setLanguage] = useState<Language>(Language.EN);

    const toggleTheme = useCallback(() => {
        const darkTheme = getItemToLocalStorage<boolean>(
            LocalStorageKey.PAGE_THEME_DARK
        );
        removeItemToLocalStorage(LocalStorageKey.PAGE_THEME_DARK);
        setItemToLocalStorage<boolean>(
            LocalStorageKey.PAGE_THEME_DARK,
            !darkTheme
        );

        setIsDarkTheme(!darkTheme);
    }, [
        setItemToLocalStorage,
        removeItemToLocalStorage,
        getItemToLocalStorage,
    ]);

    const toggleLanguage = useCallback(() => {
        const lang =
            getItemToLocalStorage<Language>(LocalStorageKey.LANGUAGE) ===
            Language.DE
                ? Language.EN
                : Language.DE;
        removeItemToLocalStorage(LocalStorageKey.LANGUAGE);
        setItemToLocalStorage<Language>(LocalStorageKey.LANGUAGE, lang);
        setLanguage(lang);
    }, [
        setItemToLocalStorage,
        removeItemToLocalStorage,
        getItemToLocalStorage,
    ]);

    useEffect(() => {
        setIsDarkTheme(
            getItemToLocalStorage<boolean>(LocalStorageKey.PAGE_THEME_DARK)
        );

        const lng = getItemToLocalStorage<Language>(LocalStorageKey.LANGUAGE);
        setLanguage(lng === undefined ? Language.EN : lng);
    }, [getItemToLocalStorage]);

    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 600px)');

        const handleMediaChange = (
            event: MediaQueryListEvent | MediaQueryList
        ): void => {
            setIsSmallScreen(event.matches);
        };

        // Register the event listener
        mediaQuery.addEventListener('change', handleMediaChange);

        // Initial check
        handleMediaChange(mediaQuery);

        // Cleanup listener on component unmount
        return () => {
            mediaQuery.removeEventListener('change', handleMediaChange);
        };
    }, []);

    return (
        <ThemeContext.Provider
            value={{
                toggleTheme,
                isDarkTheme,
                language,
                toggleLanguage,
                isSmallScreen,
            }}
        >
            {isDarkTheme !== undefined && (
                <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
                    {children}
                </ThemeProvider>
            )}
        </ThemeContext.Provider>
    );
}
