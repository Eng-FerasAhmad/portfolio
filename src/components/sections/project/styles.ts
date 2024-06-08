import styled from 'styled-components';
import { color } from 'style/color';
import { fontSize } from 'style/common';
import { device } from 'style/screenSize';
import { pixelToRem } from 'utils/utils';

export const ProjectContainer = styled.div`
    width: 80%;

    @media ${device.mobile} {
        font-size: ${pixelToRem(fontSize.normalMobileText)};
        margin: 0 auto ${pixelToRem(15)} auto;
    }

    @media ${device.tablet} {
        font-size: ${pixelToRem(fontSize.normalText)};
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
`;

export const ProjectItemContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: ${pixelToRem(30, 0, 70, 0)};
`;
