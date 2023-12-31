import Contact from '../sections/contact/Contact';
import Developer from '../sections/developer/Developer';
import Project from '../sections/project/Project';
import Techstack from '../sections/techstack/Techstack';
import { LandingContainer, LandingWrapper } from './styles';

export default function Landing() {
  return (
    <LandingContainer data-testid="landing">
      <LandingWrapper data-testid="landing-wrapper">
        <Developer />
        <Techstack />
        <Project />
        <Contact />
      </LandingWrapper>
    </LandingContainer>
  );
}
