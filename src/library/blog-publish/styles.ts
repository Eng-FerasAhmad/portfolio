import { styled } from 'styled-components';
import { color } from 'style/color';
import { device } from 'style/screenSize';
import { pixelToRem } from 'utils/utils';

export const BlogPublishContainer = styled.div`
    width: 100%;
    height: 100%;

    @media ${device.mobile} {
        font-size: ${pixelToRem(18)};
        margin: auto;
    }

    @media ${device.tablet} {
        font-size: ${pixelToRem(28)};
        margin: ${pixelToRem(40, 20)};
    }
`;

export const TitleWrapper = styled.h3`
    font-weight: 600;
    margin: ${pixelToRem(20)} auto;
`;

export const ArticleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const BlogArticleContainer = styled.div`
    width: 300px;
    height: 200px;
    border: 1px solid ${color.blue};
    border-radius: 20px;
    padding: 16px;
    box-sizing: border-box;
    margin: 20px;

    &:hover {
        cursor: pointer;
    }
`;
