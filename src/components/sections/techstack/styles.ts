import styled from 'styled-components';
import { color } from '../../../style/color';
import { pixelToRem } from '../../../utils/utils';

export const TechstackContainer = styled.div``;

export const TechstackTitleWrapper = styled.div`
    border: ${pixelToRem(3)} solid ${color.green};
    border-radius: ${pixelToRem(50)};
`;

export const TechstackItemContainer = styled.div`
    font-size: ${pixelToRem(32)};
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: ${pixelToRem(30, 0, 70, 0)};
`;
export const ItemWrapper = styled.div`
    width: ${pixelToRem(215)};
    font-size: ${pixelToRem(24)};
    padding: ${pixelToRem(20, 0)};
`;

export const ItemsGroupTitleWrapper = styled.div`
    padding-bottom: ${pixelToRem(8)};
    width: ${pixelToRem(400)};
    margin: ${pixelToRem(20)} auto;
`;

export const ItemsGroupWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap-reverse;
`;
