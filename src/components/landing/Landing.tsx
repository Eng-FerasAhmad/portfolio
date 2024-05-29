import { ReactElement } from 'react';
import { Outlet } from 'react-router';
import { LandingContainer, LandingWrapper } from './styles';

export default function Landing(): ReactElement {
    return (
        <LandingContainer data-testid="landing">
            <LandingWrapper data-testid="landing-wrapper">
                <Outlet />
            </LandingWrapper>
        </LandingContainer>
    );
}
