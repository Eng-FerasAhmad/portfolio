import { ReactElement, useContext } from 'react';

import { useNavigate } from 'react-router';
import {
    HeaderContainer,
    NavbarWrapper,
    LogoWrapper,
    IconsWrapper,
} from './styles';
import useHeader from 'components/header/useHeader';
import MenuMobile from 'components/navigation/MenuMobile';
import MenuTablet from 'components/navigation/MenuTablet';
import Navigation from 'components/navigation/Navigation';
import useSection from 'components/sections/useSection';
import { ThemeContext } from 'context/ThemeContext';
import { routerPath } from 'router/constant';
import GithubNavigation from 'src/library/action-icons/github-navigation/GithubNavigation';

import LanguageIcon from 'src/library/action-icons/language/LanguageIcon';
import LogoIcon from 'src/library/action-icons/logo/LogoIcon';
import ThemeIcon from 'src/library/action-icons/theme/ThemeIcon';

export default function Header(): ReactElement {
    const navigate = useNavigate();
    const { colorSection } = useSection();
    const { viewModel } = useHeader();
    const { toggleTheme, isDarkTheme, toggleLanguage } =
        useContext(ThemeContext);

    const clickHandler = (): void => {
        navigate(routerPath.home);
    };

    return (
        <HeaderContainer data-testid="header">
            <NavbarWrapper data-testid="header-navbar">
                <LogoWrapper onClick={clickHandler}>
                    <LogoIcon color={colorSection} />
                </LogoWrapper>

                <Navigation
                    colorSection={colorSection}
                    viewModel={viewModel!}
                />
                <MenuTablet
                    colorSection={colorSection}
                    viewModel={viewModel!}
                    isDarkTheme={isDarkTheme!}
                />
                <MenuMobile
                    colorSection={colorSection}
                    viewModel={viewModel!}
                />
                <IconsWrapper data-testid="header-icons">
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
