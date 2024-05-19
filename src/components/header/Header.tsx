import { ReactElement, useContext } from 'react';

import { useNavigate } from 'react-router';
import { ThemeContext } from '../../context/ThemeContext';
import GithubNavigation from '../../library/icon/github-navigation/GithubNavigation';
import LanguageIcon from '../../library/icon/language/LanguageIcon';
import LogoIcon from '../../library/icon/logo/LogoIcon';
import ThemeIcon from '../../library/icon/theme/ThemeIcon';
import { routerPath } from '../../router/constant';
import {
    HeaderContainer,
    NavbarWrapper,
    LogoWrapper,
    NavigationWrapper,
    NameWrapper,
} from './styles';

export default function Header(): ReactElement {
    const navigate = useNavigate();

    const { toggleTheme, isDarkTheme, toggleLanguage } =
        useContext(ThemeContext);

    const clickHandler = (): void => {
        navigate(routerPath.home);
    };

    return (
        <HeaderContainer data-testid="header">
            <NavbarWrapper>
                <LogoWrapper onClick={clickHandler}>
                    <LogoIcon width={20} height={28} />
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
