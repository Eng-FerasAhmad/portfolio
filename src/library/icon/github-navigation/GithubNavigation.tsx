import { IoLogoGithub } from 'react-icons/io5';
import { color } from '../../../style/color';
import { GithubIconWrapper } from './styles';

interface Props {
    isDark: boolean;
}

export default function GithubNavigation({ isDark }: Props): JSX.Element {
    const clickHandler = (): void => {
        window.open('https://github.com/Eng-FerasAhmad/portfolio', '_blank');
    };

    return (
        <GithubIconWrapper onClick={clickHandler}>
            <IoLogoGithub size={24} color={isDark ? color.light : color.dark} />
        </GithubIconWrapper>
    );
}
