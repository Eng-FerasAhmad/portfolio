import Contact from '../sections/contact/Contact';
import Developer from '../sections/developer/Developer';
import Project from '../sections/project/Project';
import Techstack from '../sections/techstack/Techstack';
import { LandingContainer, LandingWrapper } from './styles';

export default function Landing() {
  return (
    <LandingContainer data-testid="entry">
      <LandingWrapper>
        <Developer />
        <Techstack />
        <Project />
        <Contact />
      </LandingWrapper>
    </LandingContainer>
  );
}
