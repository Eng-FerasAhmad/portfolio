import { ReactElement, useContext } from 'react';

import { useNavigate } from 'react-router';
import {
    HeaderContainer,
    NavbarWrapper,
    LogoWrapper,
    NameWrapper,
    IconsWrapper,
} from './styles';
import Navigation from 'components/navigation/Navigation';
import { ThemeContext } from 'context/ThemeContext';
import { routerPath } from 'router/constant';
import GithubNavigation from 'src/library/icon/github-navigation/GithubNavigation';

import LanguageIcon from 'src/library/icon/language/LanguageIcon';
import LogoIcon from 'src/library/icon/logo/LogoIcon';
import ThemeIcon from 'src/library/icon/theme/ThemeIcon';

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

                <Navigation />

                <IconsWrapper>
                    <GithubNavigation isDark={isDarkTheme!} />
                    <ThemeIcon
                        isDark={isDarkTheme!}
                        clickHandler={() => toggleTheme()}
                    />
                    <LanguageIcon
                        isDark={isDarkTheme!}
                        clickHandler={() => toggleLanguage()}
                    />
                </IconsWrapper>
            </NavbarWrapper>
        </HeaderContainer>
    );
}
