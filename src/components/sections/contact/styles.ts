import styled from 'styled-components';
import { color } from '../../../style/color';
import { pixelToRem } from '../../../utils/utils';
import {device} from '../../../style/screenSize';

export const ContactContainer = styled.div`
        width: 80%;
        

    @media ${device.mobile} {
        margin: 0 auto  ${pixelToRem(15)} auto;

    }
    @media ${device.tablet} {
        margin: 0 auto  ${pixelToRem(30)} auto;
    }
`;

export const ContactTitleWrapper = styled.div`
    border: ${pixelToRem(3)} solid ${color.blue};
    border-radius: ${pixelToRem(50)};
    padding: ${pixelToRem(5, 0)};

    &:hover {
        background-color: ${color.blue};
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
