import { styled } from 'styled-components';

export const BackgroundStars = styled.div`
    /*@import compass


    // n is number of stars required
    @function multiple-box-shadow ($n)
    $value: '#{random(2000)}px #{random(2000)}px #FFF'
    @for $i from 2 through $n
    $value: '#{$value} , #{random(2000)}px #{random(2000)}px #FFF'

    @return unquote($value)

    $shadows-small:  multiple-box-shadow(700)
    $shadows-medium: multiple-box-shadow(200)
    $shadows-big:    multiple-box-shadow(100)
*/

    height: 100vh;
    background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
    overflow: hidden;

    &span {
        background: -webkit-linear-gradient(white, #38495a);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    @keyframes animStar {
        0% {
            transform: translateY(0px);
        }
        100% {
            transform: translateY(-2000px);
        }
    }
`;

export const Stars1 = styled.div`
    width: 1px;
    height: 1px;
    background: transparent;
    box-shadow: $shadows-small;
    animation: animStar 50s linear infinite;

    &:after {
        content: ' ';
        position: absolute;
        top: 2000px;
        width: 1px;
        height: 1px;
        background: transparent;
        box-shadow: $shadows-small;
    }
`;

export const Stars2 = styled.div`
    width: 2px;
    height: 2px;
    background: transparent;
    box-shadow: $shadows-medium;
    animation: animStar 100s linear infinite;

    &:after {
        content: ' ';
        position: absolute;
        top: 2000px;
        width: 2px;
        height: 2px;
        background: transparent;
        box-shadow: $shadows-medium;
    }
`;

export const Stars3 = styled.div`
    width: 3px;
    height: 3px;
    background: transparent;
    box-shadow: $shadows-big;
    animation: animStar 150s linear infinite;

    &:after {
        content: ' ';
        position: absolute;
        top: 2000px;
        width: 3px;
        height: 3px;
        background: transparent;
        box-shadow: $shadows-big;
    }
`;
