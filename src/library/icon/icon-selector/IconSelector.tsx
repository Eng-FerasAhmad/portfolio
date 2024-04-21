import { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import ReactIcon from '../react/ReactIcon';
import ViteIcon from '../vite/ViteIcon';
import VueIcon from '../vue/VueIcon';
import WebpackIcon from '../webpack/WebpackIcon';
import AngularIcon from '../angular/AngularIcon';
import ReduxIcon from '../redux/ReduxIcon';
import TypescriptIcon from '../typescript/TypescriptIcon';
import JavascriptIcon from '../javascript/TypescriptIcon';
import JestIcon from '../jest/JestIcon';

interface Props {
    iconName: string;
    color: string;
}

export default function IconSelector({ iconName, color }: Props): JSX.Element {
    const { isDarkTheme } = useContext(ThemeContext);

    switch (iconName) {
        case 'react': 
            return <ReactIcon fill={isDarkTheme ? color : ''} />
        case 'vue': 
            return <VueIcon fill={isDarkTheme ? color : ''} />
        case 'webpack': 
            return <WebpackIcon fill={isDarkTheme ? color : ''} />
        case 'vite': 
            return <ViteIcon fill={isDarkTheme ? color : ''} />
        case 'angular': 
            return <AngularIcon fill={isDarkTheme ? color : ''} />
        case 'redux': 
            return <ReduxIcon fill={isDarkTheme ? color : ''} />
        case 'typescript': 
            return <TypescriptIcon fill={isDarkTheme ? color : ''} />
        case 'javascript': 
            return <JavascriptIcon fill={isDarkTheme ? color : ''} />
        case 'jest': 
            return <JestIcon fill={isDarkTheme ? color : ''} />
        default:
            return <></>
    }
}
