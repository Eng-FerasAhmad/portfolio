import { ReactElement, SVGProps } from 'react';
import { SvgTechContainer } from 'src/library/icon-selector/style';

interface Props {
    iconWidth?: number;
    iconHeight?: number;
    color?: string;
}

export default function MenuIcon(
    props: SVGProps<SVGSVGElement> & Props
): ReactElement {
    return (
        <SvgTechContainer
            iconHeight={props.iconWidth}
            iconWidth={props.iconWidth}
            fill="none"
            viewBox="0 0 24 24"
            {...props}
        >
            <path
                stroke={props.color}
                strokeLinecap="round"
                strokeWidth="2"
                d="M5 7h14M5 12h14M5 17h14"
            ></path>
        </SvgTechContainer>
    );
}
