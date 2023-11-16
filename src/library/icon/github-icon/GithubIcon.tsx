import { IoLogoGithub } from 'react-icons/io5';
import { GithubIconWrapper } from './styles';
import { color } from '../../../style/color';

interface Props {
  isDark: boolean;
}

export default function GithubIcon({ isDark }: Props) {
  const clickHandler = () => {
    window.open('https://github.com/Eng-FerasAhmad', '_blank');
  };

  return (
    <GithubIconWrapper onClick={clickHandler}>
      <IoLogoGithub size={24} color={isDark ? color.light : color.dark} />
    </GithubIconWrapper>
  );
}
