import { ReactElement } from 'react';
import { GithubIconWrapper } from './styles';
import GitHubIcon from 'src/library/icon/github/GithubIcon';
import { color } from 'style/color';

interface Props {
    isDark: boolean;
}

export default function GithubNavigation({ isDark }: Props): ReactElement {
    const clickHandler = (): void => {
        window.open('https://github.com/Eng-FerasAhmad', '_blank');
    };

    return (
        <GithubIconWrapper onClick={clickHandler}>
            <GitHubIcon
                width={24}
                height={24}
                color={isDark ? color.light : color.dark}
            />
        </GithubIconWrapper>
    );
}
