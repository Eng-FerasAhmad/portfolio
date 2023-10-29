import { styled } from 'styled-components';

export const ButtonContainer = styled.div`
  background-color:white;
  border-color: blue;
  border-style: solid;
  border-width: thin;
  width: 100%;
  color: black;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: white;
  }
`;

