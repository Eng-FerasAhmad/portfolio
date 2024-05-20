import { ReactElement, useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import {
    ItemWrapper,
    MenuTabletContainer,
    TabletContentWrapper,
    TabletNavigationWrapper,
    TabletWrapper,
} from 'components/navigation/styles';
import useDeveloper from 'components/sections/developer/useDeveloper';
import { ThemeContext } from 'context/ThemeContext';
import { routerPath } from 'router/constant';
import CloseIcon from 'src/library/icon/close/CloseIcon';
import MenuIcon from 'src/library/icon/menu/MenuIcon';
import { color } from 'style/color';

export default function MenuTablet(): ReactElement {
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
        <MenuTabletContainer>
            {!show && (
                <TabletWrapper onClick={() => setShow(true)}>
                    <MenuIcon
                        iconWidth={30}
                        iconHeight={30}
                        color={isDarkTheme ? color.light : color.dark}
                    />
                </TabletWrapper>
            )}

            {show && (
                <TabletWrapper onClick={() => setShow(false)}>
                    <CloseIcon
                        iconWidth={30}
                        iconHeight={30}
                        color={isDarkTheme ? color.light : color.dark}
                    />
                </TabletWrapper>
            )}

            {show && viewModel && (
                <TabletNavigationWrapper>
                    <TabletContentWrapper>
                        <>
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
                </TabletNavigationWrapper>
            )}
        </MenuTabletContainer>
    );
}
