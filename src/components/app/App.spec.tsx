import { screen } from '@testing-library/react';
import App from 'components/app/App';
import blogData from 'test/__mocks__/blog.json';
import contactData from 'test/__mocks__/contact.json';
import developerData from 'test/__mocks__/developer.json';
import techstack from 'test/__mocks__/techstack.json';
import { renderWithTheme } from 'test/test-utils';

describe('<App />', () => {
    beforeEach(() => {
        fetchMock.resetMocks();
    });

    test('should render component', async () => {
        fetchMock.mockResponseOnce(JSON.stringify(developerData));
        fetchMock.mockResponseOnce(JSON.stringify(contactData));
        fetchMock.mockResponseOnce(JSON.stringify(blogData));
        fetchMock.mockResponseOnce(JSON.stringify(techstack));

        await renderWithTheme(<App />, true);

        expect(screen.getByTestId('app')).toBeInTheDocument();
    });
});
