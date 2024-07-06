import styled from 'styled-components';
import { fontSize } from '../../style/common';
import { device } from '../../style/screenSize';
import { pixelToRem } from '../../utils/utils';
import { color } from 'style/color';

export const FooterWrapper = styled.div`
    color: ${(props) => props.theme.color.page.font};
    line-height: ${pixelToRem(32)};
    width: 100%;
    box-sizing: border-box;
    border-top: 1px solid ${color.border};
    display: flex;
    justify-content: center;

    @media ${device.mobile} {
        margin: 0 auto;
        font-size: ${pixelToRem(fontSize.footerMobileText)};
        padding: ${pixelToRem(10, 20)};
        min-height: ${pixelToRem(170)};
    }

    @media ${device.tablet} {
        margin: 100px 0 0;
        font-size: ${pixelToRem(fontSize.footerDesktopText)};
        padding: ${pixelToRem(16, 40)};
        min-height: ${pixelToRem(170)};
    }
`;

export const FooterContentWrapper = styled.div`
    width: fit-content;
    height: fit-content;
    margin: auto;
`;
