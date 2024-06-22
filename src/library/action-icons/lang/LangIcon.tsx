import { ReactElement } from 'react';
import IconTemplate from 'src/library/icon-selector/IconTemplate';

interface Props {
    width: number;
    height: number;
    color?: string;
    fill?: string;
}

export default function LangIcon(props: Props): ReactElement {
    return (
        <IconTemplate
            width={props.width}
            height={props.height}
            fill={props.fill}
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
        </IconTemplate>
    );
}
