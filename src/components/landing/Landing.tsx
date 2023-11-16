import {
  LandingContainer,
  LandingWrapper,
  LandingWrapperComminSoon,
} from './styles';
import { IoHeart } from 'react-icons/io5';

export default function Landing() {
  return (
    <LandingContainer data-testid="entry">
      <LandingWrapper>
        <LandingWrapperComminSoon>
          Comming soon <IoHeart />
        </LandingWrapperComminSoon>
      </LandingWrapper>
    </LandingContainer>
  );
}
