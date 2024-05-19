import { ReactElement } from 'react';
import { Outlet } from 'react-router';
import ScrollButton from '../../library/scroll-button/ScrollButton';
import { LandingContainer, LandingWrapper } from './styles';

export default function Landing(): ReactElement {
    return (
        <LandingContainer data-testid="landing">
            <LandingWrapper data-testid="landing-wrapper">
                <Outlet />
                <ScrollButton />
            </LandingWrapper>
        </LandingContainer>
    );
}
