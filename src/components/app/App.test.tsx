import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App />', async () => {
  it('Should render the component', async () => {
    render(<App />);

    expect(screen.getByTestId('app')).toBeInTheDocument();
    expect(screen.getByTestId('entry')).toBeInTheDocument();
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });
});
