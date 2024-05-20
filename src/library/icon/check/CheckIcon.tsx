import { ReactElement, SVGProps } from 'react';
import { SvgContainer } from './style';
import { color } from 'style/color';

interface Props {
    iconWidth?: number;
    iconHeight?: number;
}

export default function CheckIcon(
    props: SVGProps<SVGSVGElement> & Props
): ReactElement {
    return (
        <SvgContainer
            width="24px"
            height="24px"
            fill="none"
            viewBox="0 0 24 24"
            {...props}
        >
            <circle
                cx="12"
                cy="12"
                r="9"
                fill={color.green}
                fillOpacity="0.25"
                stroke={color.green}
                strokeWidth="1.2"
            ></circle>
            <path
                stroke={color.green}
                strokeWidth="1.2"
                d="M8 12l3 3 5-6"
            ></path>
        </SvgContainer>
    );
}
