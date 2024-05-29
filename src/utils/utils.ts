import isPropValid from '@emotion/is-prop-valid';
import { routerPath } from 'router/constant';

type FormatType = '2-digit' | 'numeric';

interface Format {
    hour?: FormatType;
    minute?: FormatType;
    day: FormatType;
    month: FormatType;
    year: FormatType;
}

const exchangeToRem = (pixel: number, base = 16): string =>
    `${pixel / base}rem`;

export const pixelToRem = (...pixel: Array<number>): string =>
    pixel.map((px: number) => exchangeToRem(px)).join(' ');

export const stringNumberPattern = (text: string): boolean => {
    return /^[a-zA-Z0-9_.-]*$/.test(text);
};

export const stringMailPattern = (text: string): boolean => {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(text);
};

export const formatDate = (dateAdded: string, longFormat: boolean): string => {
    const format: Format = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    };

    if (longFormat) {
        format.hour = '2-digit';
        format.minute = '2-digit';
    }

    const date = new Date(dateAdded).toLocaleDateString('de-DE', format);

    return date.toString();
};

export const shouldForwardProp = (
    propName: string,
    target: unknown
): boolean => {
    if (typeof target === 'string') {
        // For HTML elements, forward the prop if it is a valid HTML attribute
        return isPropValid(propName);
    }
    // For other elements, forward all props
    return true;
};

export const isTechstack = (pathname: string): boolean =>
    pathname === routerPath.techstack;
export const isDeveloper = (pathname: string): boolean =>
    pathname === routerPath.developer || pathname === routerPath.home;
export const isBlog = (pathname: string): boolean =>
    pathname === routerPath.blog;
export const isContact = (pathname: string): boolean =>
    pathname === routerPath.contact;

export const scrollToSection = (id: string): void => {
    const divElement = document.getElementById(id);
    divElement!.scrollIntoView({ behavior: 'smooth' });
};
