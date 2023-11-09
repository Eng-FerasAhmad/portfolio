import { styled } from 'styled-components';

export const ButtonContainer = styled.div`
  background-color: ${(props) => props.theme.color.page.background};
  border-color: ${(props) => props.theme.color.page.background};
  border-style: solid;
  border-width: thin;
  color: ${(props) => props.theme.color.button.font};
  text-transform: uppercase;
  cursor: pointer;
  margin: 0;

  &:hover {
    background-color: ${(props) => props.theme.color.button.font};
    color: ${(props) => props.theme.color.button.background};
  }
`;
