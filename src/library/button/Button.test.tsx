import { act, render, screen } from "@testing-library/react";
import { describe, expect, test, vitest } from "vitest";
import userEvent from '@testing-library/user-event';
import Button from "./Button";

describe('<Button />', () => {
  test('Should render the component', () => {
    const clickHandlerSpy = vitest.fn();
    render(<Button label="mock label" clickHandler={clickHandlerSpy} />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(screen.getByText('mock label')).toBeInTheDocument();
  });

  test('Should handle click button', async () => {
    const clickHandlerSpy = vitest.fn();
    render(<Button label="mock label" clickHandler={clickHandlerSpy} />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

    await act(async () => {
      await userEvent.click(button);
    });

    expect(clickHandlerSpy).toHaveBeenCalled();
  });
});
