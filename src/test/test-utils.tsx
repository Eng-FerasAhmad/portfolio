import { render, RenderOptions, waitFor } from '@testing-library/react';
import { ReactElement, ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import ThemeContextProvider from 'context/ThemeContext';
import { themeDark } from 'style/theme';

const AllTheProviders = ({
    children,
}: {
    children: ReactNode;
}): ReactElement => {
    return <>{children}</>;
};

const customRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, 'wrapper'>
    // eslint-disable-next-line
): any => render(ui, { wrapper: AllTheProviders, ...options });

const RenderThemeProvider = (
    { children }: { children: ReactNode },
    withMemoryRouter = false
): ReactElement => {
    if (withMemoryRouter) {
        // store config will be added heir after install redux:
        return (
            <ThemeContextProvider>
                <ThemeProvider theme={themeDark}>
                    <MemoryRouter>{children}</MemoryRouter>
                </ThemeProvider>
            </ThemeContextProvider>
        );
    }
    return (
        <ThemeContextProvider>
            <ThemeProvider theme={themeDark}>{children}</ThemeProvider>
        </ThemeContextProvider>
    );
};

const renderWithTheme = async (
    ui: ReactElement,
    withMemoryRouter?: boolean,
    options?: Omit<RenderOptions, 'wrapper'>
    // eslint-disable-next-line
): Promise<any> =>
    waitFor(() => {
        render(ui, {
            wrapper: withMemoryRouter
                ? RenderThemeProvider.bind(withMemoryRouter)
                : RenderThemeProvider,
            ...options,
        });
    });

export * from '@testing-library/react';
export { customRender as render, renderWithTheme };
