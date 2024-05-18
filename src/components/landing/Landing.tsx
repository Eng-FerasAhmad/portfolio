import ScrollButton from '../../library/scroll-button/ScrollButton';
import { LandingContainer, LandingWrapper } from './styles';
import {Outlet} from 'react-router';

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
