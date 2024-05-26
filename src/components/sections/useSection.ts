import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { color } from 'style/color';
import { isBlog, isContact, isDeveloper, isTechstack } from 'utils/utils';

interface UseSection {
    colorSection: string;
}

export default function useSection(): UseSection {
    const location = useLocation();
    const [colorSection, setColorSection] = useState<string>('');

    const getSectionColor = (): void => {
        if (isDeveloper(location.pathname)) setColorSection(color.redDark);
        if (isTechstack(location.pathname)) setColorSection(color.green);
        if (isBlog(location.pathname)) setColorSection(color.blue);
        if (isContact(location.pathname)) setColorSection(color.yellow);
    };

    useEffect(() => {
        getSectionColor();
    }, [getSectionColor]);

    return { colorSection };
}
