import { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import ReactIcon from '../react/ReactIcon';
import ViteIcon from '../vite/ViteIcon';
import VueIcon from '../vue/VueIcon';
import WebpackIcon from '../webpack/WebpackIcon';

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
        default:
            return <></>
    }
}
