import { GlobalStyle } from '../../style/global';
import Entry from '../entry/Entry';
import { AppContainer } from './styles';

export default function App(): JSX.Element {
  return (
    <AppContainer data-testid="app">
      <GlobalStyle />
      <Entry />
    </AppContainer>
  );
}
