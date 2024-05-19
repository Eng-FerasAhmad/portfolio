import { ReactElement, ReactNode, useContext } from 'react';
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
import FrontendMastersIcon from '../icon/frontend-masters/FrontendMastersIcon';
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
import LinkedInIcon from '../icon/linkedin/LinkedinIcon';
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

export default function IconSelector({ iconName }: Props): ReactElement {
    const { isDarkTheme } = useContext(ThemeContext);

    const iconSelector = (): ReactNode => {
        switch (iconName) {
            case 'react':
                return <ReactIcon />;
            case 'vue':
                return <VueIcon />;
            case 'webpack':
                return <WebpackIcon />;
            case 'vite':
                return <ViteIcon />;
            case 'angular':
                return <AngularIcon />;
            case 'redux':
                return <ReduxIcon />;
            case 'typescript':
                return <TypescriptIcon />;
            case 'javascript':
                return <JavascriptIcon />;
            case 'jest':
                return <JestIcon />;
            case 'node':
                return <NodeIcon />;
            case 'tailwind':
                return <TailwindIcon />;
            case 'rollup':
                return <RollupIcon />;
            case 'html':
                return <HtmlIcon />;
            case 'css':
                return <CssIcon />;
            case 'git':
                return <GitIcon />;
            case 'github':
                return <GitHubIcon />;
            case 'gitbook':
                return <GitBookIcon />;
            case 'gitlab':
                return <GitLabIcon />;
            case 'jira':
                return <JiraIcon />;
            case 'azure':
                return <AzureIcon />;
            case 'bitbucket':
                return <BitBucketIcon />;
            case 'bootstrap':
                return <BootstrapIcon />;
            case 'confluence':
                return <ConfluenceIcon />;
            case 'docker':
                return <DockerIcon />;
            case 'figma':
                return <FigmaIcon />;
            case 'intellij':
                return <IntellijIcon />;
            case 'jenkins':
                return <JenkinsIcon />;
            case 'kubernetes':
                return <KubernetesIcon />;
            case 'material':
                return <MaterialIcon />;
            case 'sass':
                return <SassIcon />;
            case 'slack':
                return <SlackIcon />;
            case 'styled-component':
                return <StyledComponentIcon />;
            case 'teams':
                return <TeamsIcon />;
            case 'visual-studio':
                return <VisualStudioIcon />;
            case 'vscode':
                return <VsCodeIcon />;
            case 'zoom':
                return <ZoomIcon />;
            case 'chartjs':
                return <ChartJsIcon />;
            case 'cypress':
                return <CypressIcon />;
            case 'eslint':
                return <EsLintIcon />;
            case 'stylelint':
                return (
                    <StyleLintIcon
                        fill={isDarkTheme ? color.light : color.dark}
                    />
                );
            case 'jasmine':
                return <JasmineIcon />;
            case 'kanban':
                return <KanbanIcon />;
            case 'npm':
                return <NpmIcon />;
            case 'prettier':
                return <PrettierIcon />;
            case 'scrum':
                return <ScrumIcon />;
            case 'sentry':
                return <SentryIcon />;
            case 'sonar-lint':
                return <SonarLintIcon />;
            case 'swagger':
                return <SwaggerIcon />;
            case 'testing-library':
                return <TestingLibraryIcon />;
            case 'yarn':
                return <YarnIcon />;
            case 'vuetify':
                return <VuetifyIcon />;
            case 'chai':
                return <ChaiIcon />;
            case 'mocha':
                return <MochaIcon />;
            case 'karma':
                return <KarmaIcon />;
            case 'vuex':
                return <VuexIcon />;
            case 'zeplin':
                return <ZeplinIcon />;
            case 'adobeXd':
                return <AdobeXdIcon />;
            case 'babel':
                return <BabelIcon />;
            case 'drawio':
                return <DrawioIcon />;
            case 'react-suite':
                return <ReactSuiteIcon />;

            case 'linked-in':
                return <LinkedInIcon />;

            case 'frontend-masters':
                return <FrontendMastersIcon />;
            default:
                return <></>;
        }
    };
    return <IconSelectorContainer>{iconSelector()}</IconSelectorContainer>;
}
