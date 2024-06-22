import styled from 'styled-components';
import { fontSize } from 'style/common';
import { device } from 'style/screenSize';
import { pixelToRem } from 'utils/utils';

export const BlogContainer = styled.div`
    position: absolute;
    top: 70px;
    left: 0;
    width: 100vw;

    @media ${device.mobile} {
        font-size: ${pixelToRem(fontSize.normalMobileText)};
    }

    @media ${device.tablet} {
        font-size: ${pixelToRem(fontSize.normalText)};
    }
`;

export const ArticleItemContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
