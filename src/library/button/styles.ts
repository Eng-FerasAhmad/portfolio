import { styled } from 'styled-components';

export const ButtonContainer = styled.div`
  background-color: ${props => props.theme.color.page.background};
  border-color: blue;
  border-style: solid;
  border-width: thin;
  width: 100%;
  color: ${props => props.theme.color.button.font};
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background-color:${props => props.theme.color.button.font};
    color: ${props => props.theme.color.button.background};
  }
`;

