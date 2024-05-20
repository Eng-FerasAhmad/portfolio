import styled from 'styled-components';
import { color } from 'style/color';
import { fontSize } from 'style/common';
import { device } from 'style/screenSize';
import { pixelToRem } from 'utils/utils';

export const TechstackContainer = styled.div`
    width: fit-content;
    padding: ${pixelToRem(0, 30)};

    @media ${device.mobile} {
        margin: 0 auto ${pixelToRem(15)} auto;
    }

    @media ${device.tablet} {
        margin: 0 auto ${pixelToRem(30)} auto;
    }
`;

export const TechstackItemContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: ${pixelToRem(0, 0, 70, 0)};

    @media ${device.mobile} {
        font-size: ${pixelToRem(fontSize.normalMobileText)};
    }

    @media ${device.tablet} {
        font-size: ${pixelToRem(fontSize.normalText)};
    }
`;
export const ItemWrapper = styled.div`
    width: ${pixelToRem(140)};
    padding: ${pixelToRem(20, 0)};

    @media ${device.mobile} {
        font-size: ${pixelToRem(fontSize.iconMobileLabel)};
    }

    @media ${device.tablet} {
        font-size: ${pixelToRem(fontSize.iconLabel)};
    }
`;

export const ItemsGroupTitleWrapper = styled.div`
    padding-bottom: ${pixelToRem(8)};
    margin: ${pixelToRem(20)} auto;
    border-bottom: ${pixelToRem(3)} solid ${color.green};
`;

export const ItemsGroupWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap-reverse;
`;

export const WorksWrapper = styled.div`
    max-width: fit-content;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    margin: 20px;
`;
