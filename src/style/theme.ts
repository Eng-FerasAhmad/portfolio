import { color, darkThemeColor, lightThemeColor } from './color';

export const themeDark = {
    color: {
        page: {
            backgroundImage: 'url(background-dark.jpg)',
            background: darkThemeColor.customBlack,
            font: darkThemeColor.fontPrimary,
            fontHover: color.dark,
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
        },
        button: {
            background: color.green,
            font: color.light,
        },
    },
};
