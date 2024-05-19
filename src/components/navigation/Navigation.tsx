import { ReactElement } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { ItemWrapper, NavigationContainer } from 'components/navigation/styles';
import useDeveloper from 'components/sections/developer/useDeveloper';
import { routerPath } from 'router/constant';

export default function Navigation(): ReactElement {
    const { viewModel } = useDeveloper();
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
    };

    return (
        <NavigationContainer>
            {viewModel && (
                <>
                    <ItemWrapper
                        border={isDeveloper()}
                        onClick={() => handleClick(routerPath.developer)}
                    >
                        {viewModel.pages.developer}
                    </ItemWrapper>
                    <ItemWrapper
                        border={isTechstack()}
                        onClick={() => handleClick(routerPath.techstack)}
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
            )}
        </NavigationContainer>
    );
}
