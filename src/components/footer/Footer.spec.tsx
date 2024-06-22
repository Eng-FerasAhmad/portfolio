import { screen } from '@testing-library/react';
import Footer from 'components/footer/Footer';
import { renderWithTheme } from 'test/test-utils';

describe('<Footer />', () => {
    test('should render component', async () => {
        await renderWithTheme(<Footer />, true);

        expect(screen.getByTestId('footer')).toBeInTheDocument();
    });
});
