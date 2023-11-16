import { GlobalStyle } from '../../style/global';
import Landing from '../landing/Landing';
import { AppContainer } from './styles';
import Header from '../header/Header';
import ThemeContextProvider from '../../context/ThemeContext';
import Footer from '../footer/Footer';

export default function App() {
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
