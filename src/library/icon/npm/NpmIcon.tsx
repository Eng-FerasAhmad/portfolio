import { ReactElement, SVGProps } from 'react';
import { SvgTechContainer } from 'src/library/icon-selector/style';

export default function NpmIcon(props: SVGProps<SVGSVGElement>): ReactElement {
    return (
        <SvgTechContainer
            width="24px"
            height="24px"
            viewBox="0 0 32 32"
            fill="none"
            {...props}
        >
            <path d="M0 10V20H9V22H16V20H32V10H0Z" fill="#CB3837" />
            <path
                d="M5.46205 12H2V18H5.46205V13.6111H7.22344V18H8.98482V12H5.46205ZM10.7462 12V20H14.269V18H17.731V12H10.7462ZM15.9696 16.3889H14.269V13.6111H15.9696V16.3889ZM22.9545 12H19.4924V18H22.9545V13.6111H24.7158V18H26.4772V13.6111H28.2386V18H30V12H22.9545Z"
                fill="white"
            />
        </SvgTechContainer>
    );
}
