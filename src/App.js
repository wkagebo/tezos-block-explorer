import './App.css';
import StartPage from './pages/start';
import DetailsPage from './pages/details';
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/details" element={<DetailsPage />}/>
      </Routes>
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
