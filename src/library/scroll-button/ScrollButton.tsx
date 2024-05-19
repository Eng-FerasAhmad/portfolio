import { ReactElement, useEffect, useState } from 'react';
import TopIcon from '../icon/top-icon/TopIcon';
import { ButtonContainer } from './styles';

export default function ScrollButton(): ReactElement {
    const [showScrollButton, setShowScrollButton] = useState<boolean>(false);

    useEffect(() => {
        const triggerWindowScroll = (): void => {
            if (window.scrollY > 600) {
                setShowScrollButton(true);
            } else {
                setShowScrollButton(false);
            }
        };
        window.addEventListener('scroll', triggerWindowScroll);

        return () => {
            window.removeEventListener('scroll', triggerWindowScroll);
        };
    }, []);

    const scrollToTop = (): void => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            {showScrollButton && (
                <ButtonContainer onClick={scrollToTop} title="Scroll to Top">
                    <TopIcon />
                </ButtonContainer>
            )}
        </>
    );
}
