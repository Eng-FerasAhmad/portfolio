import styled from 'styled-components';
import { fontSize } from 'style/common';
import { device } from 'style/screenSize';
import { pixelToRem } from 'utils/utils';

export const TechstackContainer = styled.div`
    width: fit-content;
    margin: 0 auto;
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

export const BoxDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: fit-content;
    position: absolute;
    left: 0;
`;
