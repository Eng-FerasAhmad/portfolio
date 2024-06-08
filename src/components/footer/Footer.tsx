import { ReactElement } from 'react';
import { FooterWrapper } from './styles';

export default function Footer(): ReactElement {
    const currentYear = new Date().getFullYear();

    return <FooterWrapper>&copy; {currentYear} Feras Ahmad</FooterWrapper>;
}
