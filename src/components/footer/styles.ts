import styled from 'styled-components';
import { device } from '../../style/screenSize';
import { pixelToRem } from '../../utils/utils';

export const FooterWrapper = styled.div`
    color: ${(props) => props.theme.color.page.font};
    font-size: ${pixelToRem(16)};
    height: ${pixelToRem(30)};
    padding: ${pixelToRem(16, 40)};
    line-height: ${pixelToRem(32)};
    width: fit-content;

    @media ${device.mobile} {
        margin: auto;
    }

    @media ${device.tablet} {
        margin: 0;
    }
`;
