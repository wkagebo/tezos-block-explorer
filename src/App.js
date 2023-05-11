import logo from './logo.svg';
import './App.css';
import StartPage from './pages/start';
import { getCurrentBlockHeight, getData, formatData } from './pages/start/data';

function App() {
  return (
    <div className="App">
        <StartPage/>
        <a
          className="App-link"
          href="https://tzkt.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by TzKT API
        </a>
    </div>
  );
}

export default App;
