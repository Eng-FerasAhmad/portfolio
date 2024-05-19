import styled from 'styled-components';
import { device } from '../../../style/screenSize';
import { pixelToRem } from '../../../utils/utils';

export const GithubIconWrapper = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;

    @media ${device.mobile} {
        margin-top: ${pixelToRem(5)};
        height: ${pixelToRem(40)};
        width: ${pixelToRem(40)};
    }

    @media ${device.tablet} {
        margin-top: ${pixelToRem(0)};
        height: ${pixelToRem(50)};
        width: ${pixelToRem(50)};
    }
`;
