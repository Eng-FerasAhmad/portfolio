import { ReactElement } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { ItemWrapper, NavigationContainer } from 'components/navigation/styles';
import { routerPath } from 'router/constant';
import { CommonViewModel } from 'types/common';

interface Props {
    viewModel: CommonViewModel;
    colorSection: string;
}

export default function Navigation({
    viewModel,
    colorSection,
}: Props): ReactElement {
    const navigate = useNavigate();
    const location = useLocation();

    const isTechstack = (): boolean =>
        location.pathname === routerPath.techstack;
    const isDeveloper = (): boolean =>
        location.pathname === routerPath.developer ||
        location.pathname === routerPath.home;
    const isContact = (): boolean => location.pathname === routerPath.contact;

    const handleClick = (pathname: string): void => {
        navigate(pathname);
    };

    return (
        <NavigationContainer data-testid="navigation">
            {viewModel && (
                <>
                    <ItemWrapper
                        border={isDeveloper()}
                        colorSection={colorSection}
                        onClick={() => handleClick(routerPath.developer)}
                    >
                        {viewModel.pages.developer}
                    </ItemWrapper>
                    <ItemWrapper
                        border={isTechstack()}
                        colorSection={colorSection}
                        onClick={() => handleClick(routerPath.techstack)}
                    >
                        {viewModel.pages.techstack}
                    </ItemWrapper>
                    <ItemWrapper
                        border={isContact()}
                        colorSection={colorSection}
                        onClick={() => handleClick(routerPath.contact)}
                    >
                        {viewModel.pages.contact}
                    </ItemWrapper>
                </>
            )}
        </NavigationContainer>
    );
}
