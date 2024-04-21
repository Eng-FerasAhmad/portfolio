import styled from 'styled-components';
import { pixelToRem } from '../../../utils/utils';

export const GithubIconWrapper = styled.div`
  height: ${pixelToRem(50)};
  width: ${pixelToRem(50)};
  cursor: pointer;
  display: flex;
  align-items: center;
`;
