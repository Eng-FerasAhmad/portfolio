import { styled } from 'styled-components';
import { color } from 'style/color';
import { device } from 'style/screenSize';
import { pixelToRem } from 'utils/utils';

export const BoxBuildContainer = styled.div`
    width: 170px;
    height: 170px;
    border-radius: 10px;
    border-style: solid;
    border-color: ${color.green};
    border-width: 1px;
    padding-top: 20px;
    margin: 20px;
    cursor: pointer;
    background-color: ${(props) => props.theme.color.page.cardBackground};

    @media ${device.mobile} {
        padding: ${pixelToRem(10)};
    }

    @media ${device.tablet} {
        padding: ${pixelToRem(15)};
    }
`;

export const LabelWrapper = styled.div`
    @media ${device.mobile} {
        font-size: ${pixelToRem(18)};
    }

    @media ${device.tablet} {
        font-size: ${pixelToRem(18)};
    }
`;

export const TechsWrapper = styled.div`
    width: 100%;
    margin: auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
`;
