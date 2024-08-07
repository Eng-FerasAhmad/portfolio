import { ReactElement, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import {
    ItemWrapper,
    MenuTabletContainer,
    TabletContentWrapper,
    TabletNavigationWrapper,
    TabletWrapper,
} from 'components/navigation/styles';

import { routerPath } from 'router/constant';
import MenuIcon from 'src/library/action-icons/menu/MenuIcon';
import CloseIcon from 'src/library/icon/close/CloseIcon';
import { color } from 'style/color';
import { CommonViewModel } from 'types/common';
import { isContact, isDeveloper, isTechstack } from 'utils/utils';

export interface Props {
    viewModel: CommonViewModel;
    isDarkTheme: boolean;
    colorSection: string;
}

export default function MenuTablet({
    viewModel,
    isDarkTheme,
    colorSection,
}: Props): ReactElement {
    const [showTabletMenu, setShowTabletMenu] = useState<boolean>(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = (pathname: string): void => {
        navigate(pathname);
        setShowTabletMenu(false);
    };

    const toggleMenu = (visible: boolean): void => {
        setShowTabletMenu(visible);
    };

    const menuColor = isDarkTheme ? color.light : color.dark;

    return (
        <MenuTabletContainer data-testid="menu-tablet">
            {!showTabletMenu ? (
                <TabletWrapper onClick={() => toggleMenu(true)}>
                    <MenuIcon color={menuColor} />
                </TabletWrapper>
            ) : (
                <TabletWrapper onClick={() => toggleMenu(false)}>
                    <CloseIcon color={menuColor} />
                </TabletWrapper>
            )}

            {showTabletMenu && (
                <TabletNavigationWrapper>
                    <TabletContentWrapper>
                        <>
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
                    </TabletContentWrapper>
                </TabletNavigationWrapper>
            )}
        </MenuTabletContainer>
    );
}
