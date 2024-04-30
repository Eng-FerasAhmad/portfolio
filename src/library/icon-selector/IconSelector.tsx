import { ReactNode, useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { color } from '../../style/color';
import AdobeXdIcon from '../icon/adobe-xd/AdobeXdIcon';
import AngularIcon from '../icon/angular/AngularIcon';
import AzureIcon from '../icon/azure/AzureIcon';
import BabelIcon from '../icon/babel/BabelIcon';
import BitBucketIcon from '../icon/bitbucket/BitBucketIcon';
import BootstrapIcon from '../icon/bootstrap/BootstrapIcon';
import ChaiIcon from '../icon/chai/ChaiIcon';
import ChartJsIcon from '../icon/chartjs/CharJsIcon';
import ConfluenceIcon from '../icon/confluence/ConfluenceIcon';
import CssIcon from '../icon/css/CssIcon';
import CypressIcon from '../icon/cypress/Cypress';
import DockerIcon from '../icon/docker/DockerIcon';
import DrawioIcon from '../icon/drawio/DrawioIcon';
import EsLintIcon from '../icon/eslint/EsLintIcon';
import FigmaIcon from '../icon/figma/FigmaIcon';
import GitIcon from '../icon/git/GitIcon';
import GitBookIcon from '../icon/gitbook/GitBookIcon';
import GitHubIcon from '../icon/github/GithubIcon';
import GitLabIcon from '../icon/gitLab/GitLabIcon';
import HtmlIcon from '../icon/html/HtmlIcon';
import IntellijIcon from '../icon/intellij/IntellijIcon';
import JasmineIcon from '../icon/jasmine/JasmineIcon';
import JavascriptIcon from '../icon/javascript/JavascriptIcon';
import JenkinsIcon from '../icon/jenkins/JenkinsIcon';
import JestIcon from '../icon/jest/JestIcon';
import JiraIcon from '../icon/jira/JiraIcon';
import KanbanIcon from '../icon/kanban/KanbanIcon';
import KarmaIcon from '../icon/karma/KarmaIcon';
import KubernetesIcon from '../icon/kubernetes/KubernetesIcon';
import MaterialIcon from '../icon/material/MaterialIcon';
import MochaIcon from '../icon/mocha/MochaIcon';
import NodeIcon from '../icon/node/NodeIcon';
import NpmIcon from '../icon/npm/NpmIcon';
import PrettierIcon from '../icon/prettier/PrettierIcon';
import ReactIcon from '../icon/react/ReactIcon';
import ReactSuiteIcon from '../icon/react-suite/ReactSuiteIcon';
import ReduxIcon from '../icon/redux/ReduxIcon';
import RollupIcon from '../icon/rollup/RollupIcon';
import SassIcon from '../icon/sass/SassIcon';
import ScrumIcon from '../icon/scrum/ScrumIcon';
import SentryIcon from '../icon/sentry/SentryIcon';
import SlackIcon from '../icon/slack/SlackIcon';
import SonarLintIcon from '../icon/sonar-lint/SonarLintIcon';
import StyleLintIcon from '../icon/style-lint/StyleLintIcon';
import StyledComponentIcon from '../icon/styled-component/StyledComponentIcon';
import SwaggerIcon from '../icon/swagger/SwaggerIcon';
import TailwindIcon from '../icon/tailwind/TailwindIcon';
import TeamsIcon from '../icon/teams/TeamsIcon';
import TestingLibraryIcon from '../icon/testing-library/TestingLibraryIcon';
import TypescriptIcon from '../icon/typescript/TypescriptIcon';
import VisualStudioIcon from '../icon/visual-studio/VisualStudioIcon';
import ViteIcon from '../icon/vite/ViteIcon';
import VsCodeIcon from '../icon/vscode/VsCodeIcon';
import VueIcon from '../icon/vue/VueIcon';
import VuetifyIcon from '../icon/vuetify/VuetifyIcon';
import VuexIcon from '../icon/vuex/VuexIcon';
import WebpackIcon from '../icon/webpack/WebpackIcon';
import YarnIcon from '../icon/yarn/YarnIcon';
import ZeplinIcon from '../icon/zeplin/ZeplinIcon';
import ZoomIcon from '../icon/zoom/ZoomIcon';
import { IconSelectorContainer } from './style';

interface Props {
    iconName: string;
}

export default function IconSelector({ iconName }: Props): JSX.Element {
    const { isDarkTheme } = useContext(ThemeContext);

    const iconSelector = (): ReactNode => {
        switch (iconName) {
            case 'react':
                return <ReactIcon width="50px" height="50px" />;
            case 'vue':
                return <VueIcon width="50px" height="50px" />;
            case 'webpack':
                return <WebpackIcon width="50px" height="50px" />;
            case 'vite':
                return <ViteIcon width="50px" height="50px" />;
            case 'angular':
                return <AngularIcon width="50px" height="50px" />;
            case 'redux':
                return <ReduxIcon width="50px" height="50px" />;
            case 'typescript':
                return <TypescriptIcon width="50px" height="50px" />;
            case 'javascript':
                return <JavascriptIcon width="50px" height="50px" />;
            case 'jest':
                return <JestIcon width="50px" height="50px" />;
            case 'node':
                return <NodeIcon width="50px" height="50px" />;
            case 'tailwind':
                return <TailwindIcon width="50px" height="50px" />;
            case 'rollup':
                return <RollupIcon width="50px" height="50px" />;
            case 'html':
                return <HtmlIcon width="50px" height="50px" />;
            case 'css':
                return <CssIcon width="50px" height="50px" />;
            case 'git':
                return <GitIcon width="50px" height="50px" />;
            case 'github':
                return <GitHubIcon width="50px" height="50px" />;
            case 'gitbook':
                return <GitBookIcon width="50px" height="50px" />;
            case 'gitlab':
                return <GitLabIcon width="50px" height="50px" />;
            case 'jira':
                return <JiraIcon width="50px" height="50px" />;
            case 'azure':
                return <AzureIcon width="50px" height="50px" />;
            case 'bitbucket':
                return <BitBucketIcon width="50px" height="50px" />;
            case 'bootstrap':
                return <BootstrapIcon width="50px" height="50px" />;
            case 'confluence':
                return <ConfluenceIcon width="50px" height="50px" />;
            case 'docker':
                return <DockerIcon width="50px" height="50px" />;
            case 'figma':
                return <FigmaIcon width="50px" height="50px" />;
            case 'intellij':
                return <IntellijIcon width="50px" height="50px" />;
            case 'jenkins':
                return <JenkinsIcon width="50px" height="50px" />;
            case 'kubernetes':
                return <KubernetesIcon width="50px" height="50px" />;
            case 'material':
                return <MaterialIcon width="50px" height="50px" />;
            case 'sass':
                return <SassIcon width="50px" height="50px" />;
            case 'slack':
                return <SlackIcon width="50px" height="50px" />;
            case 'styled-component':
                return <StyledComponentIcon width="50px" height="50px" />;
            case 'teams':
                return <TeamsIcon width="50px" height="50px" />;
            case 'visual-studio':
                return <VisualStudioIcon width="50px" height="50px" />;
            case 'vscode':
                return <VsCodeIcon width="50px" height="50px" />;
            case 'zoom':
                return <ZoomIcon width="50px" height="50px" />;
            case 'chartjs':
                return <ChartJsIcon width="50px" height="50px" />;
            case 'cypress':
                return <CypressIcon width="50px" height="50px" />;
            case 'eslint':
                return <EsLintIcon width="50px" height="50px" />;
            case 'stylelint':
                return (
                    <StyleLintIcon
                        width="50px"
                        height="50px"
                        fill={isDarkTheme ? color.light : color.dark}
                    />
                );
            case 'jasmine':
                return <JasmineIcon width="50px" height="50px" />;
            case 'kanban':
                return <KanbanIcon width="50px" height="50px" />;
            case 'npm':
                return <NpmIcon width="50px" height="50px" />;
            case 'prettier':
                return <PrettierIcon width="50px" height="50px" />;
            case 'scrum':
                return <ScrumIcon width="50px" height="50px" />;
            case 'sentry':
                return <SentryIcon width="50px" height="50px" />;
            case 'sonar-lint':
                return <SonarLintIcon width="50px" height="50px" />;
            case 'swagger':
                return <SwaggerIcon width="50px" height="50px" />;
            case 'testing-library':
                return <TestingLibraryIcon width="50px" height="50px" />;
            case 'yarn':
                return <YarnIcon width="50px" height="50px" />;
            case 'vuetify':
                return <VuetifyIcon width="50px" height="50px" />;
            case 'chai':
                return <ChaiIcon width="50px" height="50px" />;
            case 'mocha':
                return <MochaIcon width="50px" height="50px" />;
            case 'karma':
                return <KarmaIcon width="50px" height="50px" />;
            case 'vuex':
                return <VuexIcon width="50px" height="50px" />;
            case 'zeplin':
                return <ZeplinIcon width="50px" height="50px" />;
            case 'adobeXd':
                return <AdobeXdIcon width="50px" height="50px" />;
            case 'babel':
                return <BabelIcon width="50px" height="50px" />;
            case 'drawio':
                return <DrawioIcon width="50px" height="50px" />;
            case 'react-suite':
                return <ReactSuiteIcon width="50px" height="50px" />;
            default:
                return <></>;
        }
    };
    return <IconSelectorContainer>{iconSelector()}</IconSelectorContainer>;
}
