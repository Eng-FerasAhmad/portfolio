import styled from 'styled-components';
import { device } from 'style/screenSize';
import { pixelToRem } from 'utils/utils';

export const GithubIconWrapper = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;

    @media ${device.mobile} {
        margin-top: ${pixelToRem(15)};
        height: ${pixelToRem(24)};
        width: ${pixelToRem(24)};
    }

    @media ${device.tablet} {
        margin: 0;
        height: ${pixelToRem(50)};
        width: ${pixelToRem(50)};
    }
`;
