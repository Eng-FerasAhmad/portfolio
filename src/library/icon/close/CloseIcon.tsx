import { ReactElement } from 'react';
import IconTemplate from 'src/library/icon-selector/IconTemplate';
import { IconProps } from 'src/library/icon-selector/types';
import { color } from 'style/color';

export default function CloseIcon(props: IconProps): ReactElement {
    return (
        <IconTemplate {...props} viewBox="0 0 24 24">
            <path
                stroke={color.dark}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M18 6L6 18M6 6l12 12"
            ></path>
        </IconTemplate>
    );
}
