import { FooterWrapper } from './styles';

export default function Footer(): JSX.Element {
    const currentYear = new Date().getFullYear();

    return <FooterWrapper>&copy; {currentYear} Feras Ahmad</FooterWrapper>;
}
