import { color, darkThemeColor, lightThemeColor } from './color';

export const themeDark = {
    color: {
        page: {
            backgroundImage: 'url(background-dark.jpg)',
            background:
                'radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)',
            backgroundHeader: 'lineal-gradient(#1b2735 0%, #090a0f 30%)',
            font: darkThemeColor.fontPrimary,
            fontHover: color.dark,
            border: color.greenDark,
        },
        button: {
            background: color.green,
            font: color.dark,
        },
    },
};

export const themeLight = {
    color: {
        page: {
            backgroundImage: 'url(background.jpg)',
            background: lightThemeColor.customWhite,
            font: lightThemeColor.fontPrimary,
            fontHover: color.light,
            border: color.greenDark,
        },
        button: {
            background: color.green,
            font: color.light,
        },
    },
};
