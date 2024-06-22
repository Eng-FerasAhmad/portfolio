import { ReactElement } from 'react';
import { SvgContainer } from 'src/library/action-icons/sun/style';
import { IconProps } from 'src/library/icon-selector/types';

export default function SunIcon(props: IconProps): ReactElement {
    return (
        <SvgContainer
            width={props.width}
            height={props.height}
            fill="none"
            viewBox="0 0 24 24"
        >
            <circle cx="12" cy="12" r="4" fill="#fff"></circle>
            <path
                stroke="#fff"
                strokeLinecap="round"
                strokeWidth="2"
                d="M12 5V3M12 21v-2M16.95 7.05l1.414-1.414M5.636 18.364L7.05 16.95M19 12h2M3 12h2M16.95 16.95l1.414 1.414M5.636 5.636L7.05 7.05"
            ></path>
        </SvgContainer>
    );
}
