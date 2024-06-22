import { ReactElement } from 'react';
import IconTemplate from 'src/library/icon-selector/IconTemplate';
import { IconProps } from 'src/library/icon-selector/types';

export default function LearnIcon(props: IconProps): ReactElement {
    return (
        <IconTemplate {...props}>
            <g id="SVGRepo_iconCarrier">
                <path d="M23 28c-1.1 0-2.1-.7-2.5-1.8 0-.1 0-.2-.1-.2h-8.9c0 .1 0 .2-.1.2-.3 1.1-1.3 1.8-2.4 1.8-.6 0-1 .4-1 1s.4 1 1 1h14c.6 0 1-.4 1-1s-.4-1-1-1zM27 3H5C3.3 3 2 4.3 2 6v15c0 1.7 1.3 3 3 3h22c1.7 0 3-1.3 3-3V6c0-1.7-1.3-3-3-3z" />
                <path
                    d="M15 20V10c0-1.7-1.3-3-3-3H7c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h5c1.7 0 3 1.3 3 3M17 20V10c0-1.7 1.3-3 3-3h5c.6 0 1 .4 1 1v8c0 .6-.4 1-1 1h-5c-1.7 0-3 1.3-3 3"
                    fill="#fff"
                />
            </g>
        </IconTemplate>
    );
}
