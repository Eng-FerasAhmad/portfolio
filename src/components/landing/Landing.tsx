import { ReactElement } from 'react';
import { Outlet } from 'react-router';
import { LandingContainer } from './styles';

export default function Landing(): ReactElement {
    return (
        <LandingContainer data-testid="landing">
            <Outlet />
        </LandingContainer>
    );
}
