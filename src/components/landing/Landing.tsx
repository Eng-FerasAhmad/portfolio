import { LandingContainer, LandingWrapper, LandingWrapperComminSoon } from './styles';
import { IoHeart } from "react-icons/io5";

export default function Landing(): JSX.Element {
  return (
    <LandingContainer data-testid="entry">
      <LandingWrapper>
        <div>Portfolio Feras Ahmad</div>
        <LandingWrapperComminSoon>Comming soon <IoHeart /></LandingWrapperComminSoon>
      </LandingWrapper>
    </LandingContainer>
  );
}
