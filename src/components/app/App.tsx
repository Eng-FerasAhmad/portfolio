import { GlobalStyle } from '../../style/global';
import Entry from '../entry/Entry';
import { AppContainer } from './styles';
import Header from '../header/Header';
import AppContextProvider from '../../context/AppContext';

export default function App(): JSX.Element {
  return (
    <AppContainer data-testid="app">
      <AppContextProvider>
          <GlobalStyle />
          <Header />
          <Entry />
      </AppContextProvider>  
    </AppContainer>
  );
}
