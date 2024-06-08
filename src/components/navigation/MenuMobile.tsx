import { ReactElement, useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import {
    ItemWrapper,
    MenuMobileContainer,
    MobileContentWrapper,
    MobileNavigationWrapper,
    MobileWrapper,
    TabletWrapper,
    IconsWrapper,
    IconItemsWrapper,
} from 'components/navigation/styles';
import { ThemeContext } from 'context/ThemeContext';
import { routerPath } from 'router/constant';
import CloseIcon from 'src/library/icon/close/CloseIcon';
import LanguageIcon from 'src/library/icon/language/LanguageIcon';
import MenuIcon from 'src/library/icon/menu/MenuIcon';
import ThemeIcon from 'src/library/icon/theme/ThemeIcon';
import { color } from 'style/color';
import { DeveloperViewModel } from 'types/developerTypes';
import { isBlog, isContact, isDeveloper, isTechstack } from 'utils/utils';

export interface Props {
    viewModel: DeveloperViewModel;
    colorSection: string;
}

export default function MenuMobile({
    viewModel,
    colorSection,
}: Props): ReactElement {
    const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = (pathname: string): void => {
        navigate(pathname);
        setShowMobileMenu(false);
    };

    const toggleMenu = (visible: boolean): void => {
        setShowMobileMenu(visible);
    };

    const { toggleTheme, isDarkTheme, toggleLanguage } =
        useContext(ThemeContext);

    const menuColor = isDarkTheme ? color.light : color.dark;
    const menuSize = 30;

    return (
        <MenuMobileContainer data-testid="menu-mobile">
            {!showMobileMenu ? (
                <MobileWrapper onClick={() => toggleMenu(true)}>
                    <MenuIcon
                        iconWidth={menuSize}
                        iconHeight={menuSize}
                        color={menuColor}
                    />
                </MobileWrapper>
            ) : (
                <MobileNavigationWrapper data-testid="mobile-navigation-wrapper">
                    <MobileContentWrapper data-testid="mobile-content-wrapper">
                        <>
                            <TabletWrapper onClick={() => toggleMenu(false)}>
                                <CloseIcon
                                    iconWidth={menuSize}
                                    iconHeight={menuSize}
                                    color={menuColor}
                                />
                            </TabletWrapper>

                            <ItemWrapper
                                border={isDeveloper(location.pathname)}
                                colorSection={colorSection}
                                onClick={() =>
                                    handleClick(routerPath.developer)
                                }
                            >
                                {viewModel.pages.developer}
                            </ItemWrapper>
                            <ItemWrapper
                                border={isTechstack(location.pathname)}
                                colorSection={colorSection}
                                onClick={() =>
                                    handleClick(routerPath.techstack)
                                }
                            >
                                {viewModel.pages.techstack}
                            </ItemWrapper>
                            <ItemWrapper
                                border={isBlog(location.pathname)}
                                colorSection={colorSection}
                                onClick={() => handleClick(routerPath.blog)}
                            >
                                {viewModel.pages.blog}
                            </ItemWrapper>
                            <ItemWrapper
                                border={isContact(location.pathname)}
                                colorSection={colorSection}
                                onClick={() => handleClick(routerPath.contact)}
                            >
                                {viewModel.pages.contact}
                            </ItemWrapper>
                        </>

                        {viewModel && (
                            <IconsWrapper data-testid="menu-mobile-header-icons">
                                <IconItemsWrapper onClick={() => toggleTheme()}>
                                    <ThemeIcon
                                        isDark={isDarkTheme!}
                                        clickHandler={() => undefined}
                                    />
                                    <div>{viewModel.common.theme}</div>
                                </IconItemsWrapper>

                                <IconItemsWrapper
                                    onClick={() => toggleLanguage()}
                                >
                                    <LanguageIcon
                                        isDark={isDarkTheme!}
                                        clickHandler={() => undefined}
                                    />
                                    <div>{viewModel.common.language}</div>
                                </IconItemsWrapper>
                            </IconsWrapper>
                        )}
                    </MobileContentWrapper>
                </MobileNavigationWrapper>
            )}
        </MenuMobileContainer>
    );
}
