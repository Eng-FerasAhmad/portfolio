import styled from 'styled-components';
import { fontSize } from '../../style/common';
import { device } from '../../style/screenSize';
import { pixelToRem } from '../../utils/utils';

export const FooterWrapper = styled.div`
    color: ${(props) => props.theme.color.page.font};
    line-height: ${pixelToRem(32)};
    width: fit-content;

    @media ${device.mobile} {
        margin: auto;
        font-size: ${pixelToRem(fontSize.footerMobileText)};
        padding: ${pixelToRem(10, 20)};
    }

    @media ${device.tablet} {
        margin: 0;
        font-size: ${pixelToRem(fontSize.footerDesktopText)};
        padding: ${pixelToRem(16, 40)};
    }
`;
