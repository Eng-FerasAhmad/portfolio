import Entry from '../entry/Entry';
import './app.scss';

export default function App(): JSX.Element {
  return (
    <div className="app" data-testid="app">
      <Entry />
    </div>
  );
}
