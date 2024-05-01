import styled from 'styled-components';
import { color } from '../../../style/color';
import { device } from '../../../style/screenSize';
import { pixelToRem } from '../../../utils/utils';

export const ProjectContainer = styled.div`
    width: 80%;

    @media ${device.mobile} {
        margin: 0 auto ${pixelToRem(15)} auto;
    }
    @media ${device.tablet} {
        margin: 0 auto ${pixelToRem(30)} auto;
    }
`;

export const ProjectTitleWrapper = styled.div`
    border: ${pixelToRem(3)} solid ${color.red};
    border-radius: ${pixelToRem(50)};
    padding: ${pixelToRem(5, 0)};

    &:hover {
        background-color: ${color.red};
        color: ${(props) => props.theme.color.page.fontHover};
        cursor: pointer;
    }

    @media ${device.mobile} {
        font-size: ${pixelToRem(26)};
    }
    @media ${device.tablet} {
        font-size: ${pixelToRem(43)};
    }
`;

export const ProjectItemContainer = styled.div`
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
