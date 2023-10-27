import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import Entry from './Entry';

describe('<Entry />', () => {
  test('Should render the comonent', () => {
    render(<Entry />);

    expect(screen.getByTestId('entry')).toBeInTheDocument();
  });
});
