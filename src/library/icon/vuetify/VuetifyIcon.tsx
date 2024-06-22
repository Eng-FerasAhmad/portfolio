import { ReactElement } from 'react';
import IconTemplate from 'src/library/icon-selector/IconTemplate';
import { IconProps } from 'src/library/icon-selector/types';

export default function VuetifyIcon(props: IconProps): ReactElement {
    return (
        <IconTemplate {...props} viewBox="-18.5 0 293 293">
            <g>
                <polyline fill="#1697F6" points="128 0 68 0 128 141.816367" />
                <polyline fill="#1867C0" points="128 0 188 0 128 141.816367" />
                <polyline
                    fill="#7BC6FF"
                    points="128 182.743732 128 292.459439 0 42.5575194 67.0490402 42.5575194"
                />
                <polyline
                    fill="#AEDDFF"
                    points="128 182.746214 128 292.461921 256 42.5600014 188.95096 42.5600014"
                />
            </g>
        </IconTemplate>
    );
}
