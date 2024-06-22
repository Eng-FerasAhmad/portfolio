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
import LanguageIcon from 'src/library/action-icons/language/LanguageIcon';
import MenuIcon from 'src/library/action-icons/menu/MenuIcon';
import ThemeIcon from 'src/library/action-icons/theme/ThemeIcon';
import CloseIcon from 'src/library/icon/close/CloseIcon';
import { color } from 'style/color';
import { CommonViewModel } from 'types/common';
import { isContact, isDeveloper, isTechstack } from 'utils/utils';

export interface Props {
    viewModel: CommonViewModel;
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

    return (
        <MenuMobileContainer data-testid="menu-mobile">
            {!showMobileMenu ? (
                <MobileWrapper onClick={() => toggleMenu(true)}>
                    <MenuIcon color={menuColor} />
                </MobileWrapper>
            ) : (
                <MobileNavigationWrapper data-testid="mobile-navigation-wrapper">
                    <MobileContentWrapper data-testid="mobile-content-wrapper">
                        <>
                            <TabletWrapper onClick={() => toggleMenu(false)}>
                                <CloseIcon color={menuColor} />
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
                                    <div>{viewModel.theme}</div>
                                </IconItemsWrapper>

                                <IconItemsWrapper
                                    onClick={() => toggleLanguage()}
                                >
                                    <LanguageIcon
                                        isDark={isDarkTheme!}
                                        clickHandler={() => undefined}
                                    />
                                    <div>{viewModel.language}</div>
                                </IconItemsWrapper>
                            </IconsWrapper>
                        )}
                    </MobileContentWrapper>
                </MobileNavigationWrapper>
            )}
        </MenuMobileContainer>
    );
}
