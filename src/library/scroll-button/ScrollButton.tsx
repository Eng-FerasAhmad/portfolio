import { ReactElement, useContext, useEffect, useState } from 'react';
import TopIcon from '../icon/top-icon/TopIcon';
import { ButtonContainer } from './styles';
import { ThemeContext } from 'context/ThemeContext';
import { color, darkThemeColor } from 'style/color';

export default function ScrollButton(): ReactElement {
    const [showScrollButton, setShowScrollButton] = useState<boolean>(false);
    const { isDarkTheme } = useContext(ThemeContext);

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
                    <TopIcon
                        color={
                            isDarkTheme
                                ? darkThemeColor.fontPrimary
                                : color.dark
                        }
                        iconHeight={33}
                        iconWidth={33}
                    />
                </ButtonContainer>
            )}
        </>
    );
}
