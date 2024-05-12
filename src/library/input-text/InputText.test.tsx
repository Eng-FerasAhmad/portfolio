import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test, vitest } from 'vitest';
import InputText from './InputText';

describe('<Input />', () => {
    test('Should render the component', async () => {
        const changeHandlerSpy = vitest.fn();
        render(
            <InputText
                label="label"
                placeholder="placeholder"
                changeHandler={changeHandlerSpy}
            />
        );

        const input = screen.getByRole('textbox');
        expect(input).toBeInTheDocument();

        fireEvent.change(input, {
            target: {
                value: 'Max',
            },
        });

        expect(changeHandlerSpy).toBeCalled();
        expect(screen.getByRole('textbox')).toHaveValue('Max');
    });

    test('Should handle empty value', async () => {
        const changeHandlerSpy = vitest.fn();
        render(
            <InputText
                label="label"
                placeholder="placeholder"
                changeHandler={changeHandlerSpy}
            />
        );

        const input = screen.getByRole('textbox');
        expect(input).toBeInTheDocument();

        fireEvent.change(input, {
            target: {
                value: '',
            },
        });

        expect(changeHandlerSpy).not.toBeCalled();
        expect(screen.getByRole('textbox')).toHaveValue('');
    });
});
