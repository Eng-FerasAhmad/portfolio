import { Outlet } from 'react-router';
import ScrollButton from '../../library/scroll-button/ScrollButton';
import { LandingContainer, LandingWrapper } from './styles';

export default function Landing(): JSX.Element {
    return (
        <LandingContainer data-testid="landing">
            <LandingWrapper data-testid="landing-wrapper">
                <Outlet />
                <ScrollButton />
            </LandingWrapper>
        </LandingContainer>
    );
}
