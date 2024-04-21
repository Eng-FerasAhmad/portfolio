import styled from 'styled-components';
import { pixelToRem } from '../../../utils/utils';

export const TechstackContainer = styled.div``;
export const TechstackItemContainer = styled.div`
    font-size: ${pixelToRem(32)};
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: flex-start;
    margin: ${pixelToRem(30, 0)};
`;
export const ItemWrapper = styled.div`
    width: 100%;
    margin: ${pixelToRem(10, 30)};
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: flex-start;
`;

export const ItemContentWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
`;

export const ItemNameWrapper = styled.div`
    font-size: ${pixelToRem(24)};
    width: ${pixelToRem(200)};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-right: ${pixelToRem(10)};
`;

export const ExpertLabelWrapper = styled.div`
    font-size: ${pixelToRem(18)};
    margin: ${pixelToRem(5, 0, 0, 10)};
`;
