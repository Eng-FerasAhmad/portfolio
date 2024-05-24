import { ReactElement } from 'react';
import {
    BackgroundStars,
    Stars1,
    Stars2,
    Stars3,
} from 'style/background-stars';

export default function Background(): ReactElement {
    return (
        <BackgroundStars>
            <Stars1></Stars1>
            <Stars2></Stars2>
            <Stars3></Stars3>
        </BackgroundStars>
    );
}
