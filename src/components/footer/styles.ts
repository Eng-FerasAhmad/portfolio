import styled from 'styled-components';
import { pixelToRem } from '../../utils/utils';

export const FooterWrapper = styled.div`
    color: ${(props) => props.theme.color.page.font};
    font-size: ${pixelToRem(16)};
    height: ${pixelToRem(80)};
    padding: ${pixelToRem(16, 40)};
    line-height: ${pixelToRem(32)};
    bottom: 0;
    width: -webkit-fill-available;
`;
