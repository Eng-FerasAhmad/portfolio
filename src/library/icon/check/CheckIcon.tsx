import { ReactElement } from 'react';
import {
    Check,
    Checkmark,
    Circle,
    SvgContainer,
} from 'src/library/icon/check/style';

export default function CheckIcon(): ReactElement {
    return (
        <SvgContainer>
            <Checkmark xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                <Circle cx="26" cy="26" r="25" fill="none" />
                <Check fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
            </Checkmark>
        </SvgContainer>
    );
}
