import { ReactElement, SVGProps } from 'react';
import { SvgTechContainer } from 'src/library/icon-selector/style';

interface Props {
    iconWidth?: number;
    iconHeight?: number;
    color?: string;
}

export default function CloseIcon(
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
                strokeLinejoin="round"
                strokeWidth="2"
                d="M18 6L6 18M6 6l12 12"
            ></path>
        </SvgTechContainer>
    );
}
