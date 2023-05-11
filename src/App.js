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
        className="Website-link"
        href="https://tzkt.io/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h1>Powered by TzKT API</h1>
      </a>
    </div>
  );
}

export default App;
