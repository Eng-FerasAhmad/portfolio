import styled from 'styled-components';
import { color } from '../../../style/color';
import { fontSize } from '../../../style/common';
import { device } from '../../../style/screenSize';
import { pixelToRem } from '../../../utils/utils';

export const ArticleContainer = styled.div`
    width: fit-content;
    padding: ${pixelToRem(0, 30)};

    @media ${device.mobile} {
        font-size: ${pixelToRem(fontSize.normalMobileText)};
        margin: 0 auto ${pixelToRem(15)} auto;
    }

    @media ${device.tablet} {
        font-size: ${pixelToRem(fontSize.normalText)};
        margin: 0 auto ${pixelToRem(30)} auto;
    }
`;

export const ArticleTitleWrapper = styled.div`
    border-bottom: ${pixelToRem(3)} solid ${color.blue};
    padding: ${pixelToRem(5, 0)};
`;

export const ArticleItemContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: ${pixelToRem(30, 0, 70, 0)};
`;
