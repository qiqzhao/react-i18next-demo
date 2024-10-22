import { Translation } from 'react-i18next';
import './App.css';

function App() {
  return (
    <Translation>
      {
        t => <h1>{t('Welcome to React')}</h1>
      }
    </Translation>
  );
}

export default App;
