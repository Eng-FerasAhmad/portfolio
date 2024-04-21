import { useContext } from 'react';

import { ThemeContext } from '../../context/ThemeContext';
import GithubIcon from '../../library/icon/github/GithubIcon';
import LanguageIcon from '../../library/icon/language/LanguageIcon';
import ThemeIcon from '../../library/icon/theme/ThemeIcon';
import {
    HeaderContainer,
    NavbarWrapper,
    LogoWrapper,
    NavigationWrapper,
} from './styles';

export default function Header(): JSX.Element {
    const { toggleTheme, isDarkTheme, toggleLanguage } =
        useContext(ThemeContext);

    const clickHandler = (): void => {
        window.open('https://github.com/Eng-FerasAhmad', '_blank');
    };

    return (
        <HeaderContainer data-testid="header">
            <NavbarWrapper>
                <LogoWrapper onClick={clickHandler}>Feras Ahmad</LogoWrapper>
                <NavigationWrapper>
                    <GithubIcon isDark={isDarkTheme!} />
                    <ThemeIcon
                        isDark={isDarkTheme!}
                        clickHandler={() => toggleTheme()}
                    />
                    <LanguageIcon
                        isDark={isDarkTheme!}
                        clickHandler={() => toggleLanguage()}
                    />
                </NavigationWrapper>
            </NavbarWrapper>
        </HeaderContainer>
    );
}
