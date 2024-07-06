import { ReactElement } from 'react';
import IconTemplate from 'src/library/icon-selector/IconTemplate';
import { IconProps } from 'src/library/icon-selector/types';

export default function TopIcon(props: IconProps): ReactElement {
    return (
        <IconTemplate {...props} data-testid="top-icon">
            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
            <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
                <g fill="none" fillRule="evenodd">
                    <path d="m0 0h32v32h-32z" />
                    <path
                        d="m16 0c8.836556 0 16 7.163444 16 16s-7.163444 16-16 16-16-7.163444-16-16 7.163444-16 16-16zm0 2c-7.7319865 0-14 6.2680135-14 14s6.2680135 14 14 14 14-6.2680135 14-14-6.2680135-14-14-14zm.0790314 9.1650801c.2359046.0138648.4678334.1109182.6480754.2911601l5.6568542 5.6568543c.3905243.3905243.3905243 1.0236893 0 1.4142135-.3905243.3905243-1.0236892.3905243-1.4142135 0l-4.9708933-4.9712279-4.9717474 4.9712279c-.3905243.3905243-1.0236893.3905243-1.41421358 0-.39052429-.3905242-.39052429-1.0236892 0-1.4142135l5.65685428-5.6568543c.1802419-.1802419.4121707-.2772953.6480754-.2911601z"
                        fill={props.color}
                        fillRule="nonzero"
                    />
                </g>
            </g>
        </IconTemplate>
    );
}
