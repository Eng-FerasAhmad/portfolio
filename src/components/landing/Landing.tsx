import { LandingContainer, LandingWrapper, LandingWrapperComminSoon } from './styles';

export default function Landing(): JSX.Element {
  return (
    <LandingContainer data-testid="entry">
      <LandingWrapper>
        <LandingWrapperComminSoon>Portfolio Feras Ahmad</LandingWrapperComminSoon>
        <LandingWrapperComminSoon>Comming soon</LandingWrapperComminSoon>
      </LandingWrapper>
    </LandingContainer>
  );
}
