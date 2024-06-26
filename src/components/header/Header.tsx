import { ReactElement, useContext } from 'react';

import { useNavigate } from 'react-router';
import {
    HeaderContainer,
    NavbarWrapper,
    LogoWrapper,
    IconsWrapper,
} from './styles';
import MenuMobile from 'components/navigation/MenuMobile';
import MenuTablet from 'components/navigation/MenuTablet';
import Navigation from 'components/navigation/Navigation';
import useDeveloper from 'components/sections/developer/useDeveloper';
import useSection from 'components/sections/useSection';
import { ThemeContext } from 'context/ThemeContext';
import { routerPath } from 'router/constant';
import GithubNavigation from 'src/library/icon/github-navigation/GithubNavigation';

import LanguageIcon from 'src/library/icon/language/LanguageIcon';
import LogoIcon from 'src/library/icon/logo/LogoIcon';
import ThemeIcon from 'src/library/icon/theme/ThemeIcon';

export default function Header(): ReactElement {
    const navigate = useNavigate();
    const { colorSection } = useSection();
    const { viewModel } = useDeveloper();
    const { toggleTheme, isDarkTheme, toggleLanguage } =
        useContext(ThemeContext);

    const clickHandler = (): void => {
        navigate(routerPath.home);
    };

    return (
        <HeaderContainer data-testid="header">
            <NavbarWrapper data-testid="header-navbar">
                <LogoWrapper onClick={clickHandler}>
                    <LogoIcon width={20} height={28} color={colorSection} />
                </LogoWrapper>

                <Navigation colorSection={colorSection} />
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
