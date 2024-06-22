import { ReactElement } from 'react';
import { FooterWrapper } from './styles';
import ThemeContextProvider from 'context/ThemeContext';

export default function Footer(): ReactElement {
    const currentYear = new Date().getFullYear();

    return (
        <ThemeContextProvider>
            <FooterWrapper data-testid="footer">
                &copy; {currentYear} Feras Ahmad
            </FooterWrapper>
        </ThemeContextProvider>
    );
}
