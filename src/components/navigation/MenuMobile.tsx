import { ReactElement, useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import {
    ItemWrapper,
    MenuMobileContainer,
    MobileNavigationWrapper,
    MobileWrapper,
    TabletContentWrapper,
    TabletWrapper,
} from 'components/navigation/styles';
import useDeveloper from 'components/sections/developer/useDeveloper';
import { ThemeContext } from 'context/ThemeContext';
import { routerPath } from 'router/constant';
import CloseIcon from 'src/library/icon/close/CloseIcon';
import MenuIcon from 'src/library/icon/menu/MenuIcon';
import { color } from 'style/color';

export default function MenuMobile(): ReactElement {
    const { isDarkTheme } = useContext(ThemeContext);
    const { viewModel } = useDeveloper();
    const [show, setShow] = useState<boolean>(false);
    const navigate = useNavigate();
    const location = useLocation();

    const isTechstack = (): boolean =>
        location.pathname === routerPath.techstack;
    const isDeveloper = (): boolean =>
        location.pathname === routerPath.developer ||
        location.pathname === routerPath.home;
    const isBlog = (): boolean => location.pathname === routerPath.blog;
    const isContact = (): boolean => location.pathname === routerPath.contact;

    const handleClick = (pathname: string): void => {
        navigate(pathname);
        setShow(false);
    };

    return (
        <MenuMobileContainer>
            {!show && (
                <MobileWrapper onClick={() => setShow(true)}>
                    <MenuIcon
                        iconWidth={30}
                        iconHeight={30}
                        color={isDarkTheme ? color.light : color.dark}
                    />
                </MobileWrapper>
            )}

            {show && viewModel && (
                <MobileNavigationWrapper>
                    <TabletContentWrapper>
                        <>
                            <TabletWrapper onClick={() => setShow(false)}>
                                <CloseIcon
                                    iconWidth={30}
                                    iconHeight={30}
                                    color={
                                        isDarkTheme ? color.light : color.dark
                                    }
                                />
                            </TabletWrapper>

                            <ItemWrapper
                                border={isDeveloper()}
                                onClick={() =>
                                    handleClick(routerPath.developer)
                                }
                            >
                                {viewModel.pages.developer}
                            </ItemWrapper>
                            <ItemWrapper
                                border={isTechstack()}
                                onClick={() =>
                                    handleClick(routerPath.techstack)
                                }
                            >
                                {viewModel.pages.techstack}
                            </ItemWrapper>
                            <ItemWrapper
                                border={isBlog()}
                                onClick={() => handleClick(routerPath.blog)}
                            >
                                {viewModel.pages.blog}
                            </ItemWrapper>
                            <ItemWrapper
                                border={isContact()}
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
