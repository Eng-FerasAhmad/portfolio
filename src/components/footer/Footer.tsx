import { ReactElement } from 'react';
import { useLocation } from 'react-router';
import { FooterContentWrapper, FooterWrapper } from './styles';
import { isDeveloper } from 'utils/utils';

export default function Footer(): ReactElement | null {
    const location = useLocation();
    const currentYear = new Date().getFullYear();

    if (isDeveloper(location.pathname)) return null;

    return (
        <FooterWrapper data-testid="footer">
            <FooterContentWrapper>
                &copy; {currentYear} Feras Ahmad, All rights reserved.
                <div></div>
            </FooterContentWrapper>
        </FooterWrapper>
    );
}
