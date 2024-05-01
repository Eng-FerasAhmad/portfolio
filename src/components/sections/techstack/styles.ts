import styled from 'styled-components';
import { color } from '../../../style/color';
import { pixelToRem } from '../../../utils/utils';
import {device} from '../../../style/screenSize';

export const TechstackContainer = styled.div`
        width: 80%;
        
    @media ${device.mobile} {
        margin: 0 auto  ${pixelToRem(15)} auto;

    }
    @media ${device.tablet} {
        margin: 0 auto  ${pixelToRem(30)} auto;
    }
`;

export const TechstackTitleWrapper = styled.div`
    border: ${pixelToRem(3)} solid ${color.green};
    border-radius: ${pixelToRem(50)};
    padding: ${pixelToRem(5, 0)};

    @media ${device.mobile} {
        font-size: ${pixelToRem(26)};
    }
    @media ${device.tablet} {
        font-size: ${pixelToRem(43)};
    }

    &:hover {
        background-color: ${color.green};
        color: ${(props) => props.theme.color.page.fontHover};
        cursor: pointer;
    }
`;

export const TechstackItemContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: ${pixelToRem(30, 0, 70, 0)};

    @media ${device.mobile} {
        font-size: ${pixelToRem(26)};
    }
    @media ${device.tablet} {
        font-size: ${pixelToRem(32)};
    }
`;
export const ItemWrapper = styled.div`
    width: ${pixelToRem(140)};
    padding: ${pixelToRem(20, 0)};

    @media ${device.mobile} {
        font-size: ${pixelToRem(18)};
    }
    @media ${device.tablet} {
        font-size: ${pixelToRem(24)};
    }
`;

export const ItemsGroupTitleWrapper = styled.div`
    padding-bottom: ${pixelToRem(8)};
    margin: ${pixelToRem(20)} auto;
`;

export const ItemsGroupWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap-reverse;
`;
