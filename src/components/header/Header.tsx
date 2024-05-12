import { useContext } from 'react';

import { ThemeContext } from '../../context/ThemeContext';
import GithubNavigation from '../../library/icon/github-navigation/GithubNavigation';
import LanguageIcon from '../../library/icon/language/LanguageIcon';
import LogoIcon from '../../library/icon/logo/LogoIcon';
import ThemeIcon from '../../library/icon/theme/ThemeIcon';
import {
    HeaderContainer,
    NavbarWrapper,
    LogoWrapper,
    NavigationWrapper,
    NameWrapper,
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
                <LogoWrapper onClick={clickHandler}>
                    <LogoIcon width={25} height={32} />
                    <NameWrapper>Feras Ahmad</NameWrapper>
                </LogoWrapper>
                <NavigationWrapper>
                    <GithubNavigation isDark={isDarkTheme!} />
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
