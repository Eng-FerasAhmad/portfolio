import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import flushPromises from 'flush-promises';
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

    waitFor(() => {
      flushPromises();
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

    waitFor(() => {
      flushPromises();
    });

    expect(changeHandlerSpy).not.toBeCalled();
    expect(screen.getByRole('textbox')).toHaveValue('');
  });
});
