import { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import AngularIcon from '../angular/AngularIcon';
import AzureIcon from '../azure/AzureIcon';
import BitBucketIcon from '../bitbucket/BitBucketIcon';
import BootstrapIcon from '../bootstrap/BootstrapIcon';
import ConfluenceIcon from '../confluence/ConfluenceIcon';
import CssIcon from '../css/CssIcon';
import DockerIcon from '../docker/DockerIcon';
import FigmaIcon from '../figma/FigmaIcon';
import GitIcon from '../git/GitIcon';
import GitBookIcon from '../gitbook/GitBookIcon';
import GitLabIcon from '../gitLab/GitLabIcon';
import HtmlIcon from '../html/HtmlIcon';
import IntellijIcon from '../intellij/IntellijIcon';
import JavascriptIcon from '../javascript/TypescriptIcon';
import JenkinsIcon from '../jenkins/JenkinsIcon';
import JestIcon from '../jest/JestIcon';
import JiraIcon from '../jira/JiraIcon';
import KubernetesIcon from '../kubernetes/KubernetesIcon';
import MaterialIcon from '../material/MaterialIcon';
import NodeIcon from '../node/NodeIcon';
import ReactIcon from '../react/ReactIcon';
import ReduxIcon from '../redux/ReduxIcon';
import RollupIcon from '../rollup/RollupIcon';
import SassIcon from '../sass/SassIcon';
import SlackIcon from '../slack/SlackIcon';
import StyledComponentIcon from '../styled-component/StyledComponentIcon';
import TailwindIcon from '../tailwind/TailwindIcon';
import TeamsIcon from '../teams/TeamsIcon';
import TypescriptIcon from '../typescript/TypescriptIcon';
import VisualStudioIcon from '../visual-studio/VisualStudioIcon';
import ViteIcon from '../vite/ViteIcon';
import VsCodeIcon from '../vscode/VsCodeIcon';
import VueIcon from '../vue/VueIcon';
import WebpackIcon from '../webpack/WebpackIcon';
import ZoomIcon from '../zoom/ZoomIcon';

interface Props {
    iconName: string;
    color: string;
}

export default function IconSelector({ iconName, color }: Props): JSX.Element {
    const { isDarkTheme } = useContext(ThemeContext);

    switch (iconName) {
        case 'react':
            return <ReactIcon fill={isDarkTheme ? color : ''} />;
        case 'vue':
            return <VueIcon fill={isDarkTheme ? color : ''} />;
        case 'webpack':
            return <WebpackIcon fill={isDarkTheme ? color : ''} />;
        case 'vite':
            return <ViteIcon fill={isDarkTheme ? color : ''} />;
        case 'angular':
            return <AngularIcon fill={isDarkTheme ? color : ''} />;
        case 'redux':
            return <ReduxIcon fill={isDarkTheme ? color : ''} />;
        case 'typescript':
            return <TypescriptIcon fill={isDarkTheme ? color : ''} />;
        case 'javascript':
            return <JavascriptIcon fill={isDarkTheme ? color : ''} />;
        case 'jest':
            return <JestIcon fill={isDarkTheme ? color : ''} />;
        case 'node':
            return <NodeIcon fill={isDarkTheme ? color : ''} />;
        case 'tailwind':
            return <TailwindIcon fill={isDarkTheme ? color : ''} />;
        case 'rollup':
            return <RollupIcon fill={isDarkTheme ? color : ''} />;
        case 'html':
            return <HtmlIcon fill={isDarkTheme ? color : ''} />;
        case 'css':
            return <CssIcon fill={isDarkTheme ? color : ''} />;
        case 'git':
            return <GitIcon fill={isDarkTheme ? color : ''} />;
        case 'gitbook':
            return <GitBookIcon fill={isDarkTheme ? color : ''} />;
        case 'gitlab':
            return <GitLabIcon fill={isDarkTheme ? color : ''} />;
        case 'jira':
            return <JiraIcon fill={isDarkTheme ? color : ''} />;
        case 'azure':
            return <AzureIcon fill={isDarkTheme ? color : ''} />;
        case 'bitbucket':
            return <BitBucketIcon fill={isDarkTheme ? color : ''} />;
        case 'bootstrap':
            return <BootstrapIcon fill={isDarkTheme ? color : ''} />;
        case 'confluence':
            return <ConfluenceIcon fill={isDarkTheme ? color : ''} />;
        case 'docker':
            return <DockerIcon fill={isDarkTheme ? color : ''} />;
        case 'figma':
            return <FigmaIcon fill={isDarkTheme ? color : ''} />;
        case 'intellij':
            return <IntellijIcon fill={isDarkTheme ? color : ''} />;
        case 'jenkins':
            return <JenkinsIcon fill={isDarkTheme ? color : ''} />;
        case 'kubernetes':
            return <KubernetesIcon fill={isDarkTheme ? color : ''} />;
        case 'material':
            return <MaterialIcon fill={isDarkTheme ? color : ''} />;
        case 'sass':
            return <SassIcon fill={isDarkTheme ? color : ''} />;
        case 'slack':
            return <SlackIcon fill={isDarkTheme ? color : ''} />;
        case 'styled-component':
            return <StyledComponentIcon fill={isDarkTheme ? color : ''} />;
        case 'teams':
            return <TeamsIcon fill={isDarkTheme ? color : ''} />;
        case 'visual-studio':
            return <VisualStudioIcon fill={isDarkTheme ? color : ''} />;
        case 'vscode':
            return <VsCodeIcon fill={isDarkTheme ? color : ''} />;
        case 'zoom':
            return <ZoomIcon fill={isDarkTheme ? color : ''} />;
        default:
            return <></>;
    }
}
