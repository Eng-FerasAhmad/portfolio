import styled from 'styled-components';
import { color } from '../../../style/color';
import { pixelToRem } from '../../../utils/utils';

export const ContactContainer = styled.div``;

export const ContactTitleWrapper = styled.div`
    border: ${pixelToRem(3)} solid ${color.blue};
    border-radius: ${pixelToRem(50)};
    margin: ${pixelToRem(50, 0)};
`;
