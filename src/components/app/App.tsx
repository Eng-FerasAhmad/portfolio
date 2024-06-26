import { ReactElement } from 'react';
import { StyleSheetManager } from 'styled-components';
import { AppContainer } from './styles';
import Header from 'components/header/Header';
import Landing from 'components/landing/Landing';
import ThemeContextProvider from 'context/ThemeContext';
import { GlobalStyle } from 'style/global';
import { shouldForwardProp } from 'utils/utils';

export default function App(): ReactElement {
    return (
        <StyleSheetManager shouldForwardProp={shouldForwardProp}>
            <ThemeContextProvider>
                <AppContainer data-testid="app">
                    <GlobalStyle />
                    <Header />
                    <Landing />
                </AppContainer>
            </ThemeContextProvider>
        </StyleSheetManager>
    );
}
