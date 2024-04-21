import ThemeContextProvider from '../../context/ThemeContext';
import { GlobalStyle } from '../../style/global';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Landing from '../landing/Landing';
import { AppContainer } from './styles';

export default function App(): JSX.Element {
    return (
        <AppContainer data-testid="app">
            <ThemeContextProvider>
                <GlobalStyle />
                <Header />
                <Landing />
                <Footer />
            </ThemeContextProvider>
        </AppContainer>
    );
}
