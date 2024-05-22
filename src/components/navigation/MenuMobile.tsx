import { ReactElement, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import {
    ItemWrapper,
    MenuMobileContainer,
    MobileNavigationWrapper,
    MobileWrapper,
    TabletContentWrapper,
    TabletWrapper,
} from 'components/navigation/styles';
import { routerPath } from 'router/constant';
import CloseIcon from 'src/library/icon/close/CloseIcon';
import MenuIcon from 'src/library/icon/menu/MenuIcon';
import { color } from 'style/color';
import { DeveloperViewModel } from 'types/developerTypes';
import { isBlog, isContact, isDeveloper, isTechstack } from 'utils/utils';

export interface Props {
    viewModel: DeveloperViewModel;
    isDarkTheme: boolean;
}

export default function MenuMobile({
    viewModel,
    isDarkTheme,
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

    const menuColor = isDarkTheme ? color.light : color.dark;
    const menuSize = 30;

    return (
        <MenuMobileContainer>
            {!showMobileMenu ? (
                <MobileWrapper onClick={() => toggleMenu(true)}>
                    <MenuIcon
                        iconWidth={menuSize}
                        iconHeight={menuSize}
                        color={menuColor}
                    />
                </MobileWrapper>
            ) : (
                <MobileNavigationWrapper>
                    <TabletContentWrapper>
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
                                onClick={() =>
                                    handleClick(routerPath.developer)
                                }
                            >
                                {viewModel.pages.developer}
                            </ItemWrapper>
                            <ItemWrapper
                                border={isTechstack(location.pathname)}
                                onClick={() =>
                                    handleClick(routerPath.techstack)
                                }
                            >
                                {viewModel.pages.techstack}
                            </ItemWrapper>
                            <ItemWrapper
                                border={isBlog(location.pathname)}
                                onClick={() => handleClick(routerPath.blog)}
                            >
                                {viewModel.pages.blog}
                            </ItemWrapper>
                            <ItemWrapper
                                border={isContact(location.pathname)}
                                onClick={() => handleClick(routerPath.contact)}
                            >
                                {viewModel.pages.contact}
                            </ItemWrapper>
                        </>
                    </TabletContentWrapper>
                </MobileNavigationWrapper>
            )}
        </MenuMobileContainer>
    );
}
