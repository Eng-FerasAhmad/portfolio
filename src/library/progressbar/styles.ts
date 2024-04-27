import styled from 'styled-components';
import { pixelToRem } from '../../utils/utils';

export const ProgressContainer = styled.div`
    padding-top: ${pixelToRem(8)};
    display: flex;
    justify-content: center;
    flex-direction: column;
`;
