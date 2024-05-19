import { ReactElement, SVGProps } from 'react';
import { SvgTechContainer } from 'src/library/icon-selector/style';

interface Props {
    iconWidth?: number;
    iconHeight?: number;
    color?: string;
}

export default function LangIcon(
    props: SVGProps<SVGSVGElement> & Props
): ReactElement {
    return (
        <SvgTechContainer
            width="24"
            height="24"
            iconHeight={props.iconWidth}
            iconWidth={props.iconWidth}
            fill="none"
            viewBox="0 0 24 24"
            {...props}
        >
            <circle
                cx="12"
                cy="12"
                r="8"
                stroke={props.color}
                strokeWidth="2"
            ></circle>
            <ellipse
                cx="12"
                cy="12"
                stroke={props.color}
                strokeWidth="2"
                rx="3"
                ry="8"
            ></ellipse>
            <path
                stroke={props.color}
                strokeLinecap="round"
                strokeWidth="2"
                d="M4 12h16"
            ></path>
        </SvgTechContainer>
    );
}
