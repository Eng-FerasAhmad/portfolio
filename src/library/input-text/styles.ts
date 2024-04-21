import { styled } from 'styled-components';

export const InputTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between input[type=text] {
        margin: 0;
        width: 100%;
        display: inline-block;
        box-sizing: border-box;
        color: red;
        padding: 10px;
        border-radius: 4px;
        height: 40px;

        border-color: black;
        border-style: solid;
        border-width: thin;
    }

    input:focus-visible,
    select:focus-visible {
        border-color: black;
        border-style: solid;
        border-width: thin;
        outline: none;
    }
`;
