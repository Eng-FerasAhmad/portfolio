import { ReactElement } from 'react';
import IconTemplate from 'src/library/icon-selector/IconTemplate';

interface Props {
    width?: number;
    height?: number;
    color?: string;
}

export default function MenuIcon(props: Props): ReactElement {
    return (
        <IconTemplate width={props.width} height={props.height}>
            <path
                stroke={props.color}
                strokeLinecap="round"
                strokeWidth="2"
                d="M5 7h14M5 12h14M5 17h14"
            ></path>
        </IconTemplate>
    );
}
