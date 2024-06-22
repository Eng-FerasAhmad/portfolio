import { screen } from '@testing-library/react';
import Header from 'components/header/Header';
import commonData from 'test/__mocks__/common.json';
import { renderWithTheme } from 'test/test-utils';

describe('<Header />', () => {
    beforeEach(() => {
        fetchMock.resetMocks();
    });

    test('should render component', async () => {
        fetchMock.mockResponseOnce(JSON.stringify(commonData));
        await renderWithTheme(<Header />, true);

        expect(screen.getByTestId('header')).toBeInTheDocument();
    });
});
