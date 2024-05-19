import { styled } from 'styled-components';
import { color } from 'style/color';
import { fontSize } from 'style/common';
import { device } from 'style/screenSize';
import { pixelToRem } from 'utils/utils';

interface Props {
    border: boolean;
}

export const NavigationContainer = styled.div`
    width: fit-content;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const ItemWrapper = styled.div<Props>`
    width: fit-content;
    height: fit-content;
    color: ${(props) => props.theme.color.page.font};
    ${(props) => (props.border ? pixelToRem(2) : 0)};
    border-bottom: ${(props) => (props.border ? pixelToRem(2) : 0)} solid ${color.yellowDark};

    @media ${device.mobile} {
        display: none;
    }

    @media ${device.tablet} {
        display: none;
    }

    @media ${device.desktop} {
        display: block;
        padding: ${pixelToRem(0, 15)};
        font-size: ${pixelToRem(fontSize.iconLabel)};
    }

    &:hover {
        height: fit-content;
        border-bottom: ${pixelToRem(2)} solid
            ${(props) => props.theme.color.page.font};
        cursor: pointer;
    }
`;
