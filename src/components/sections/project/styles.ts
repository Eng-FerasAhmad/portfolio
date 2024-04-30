import styled from 'styled-components';
import { color } from '../../../style/color';
import { pixelToRem } from '../../../utils/utils';

export const ProjectContainer = styled.div``;

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
