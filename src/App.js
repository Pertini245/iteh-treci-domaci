import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import KontaktStrana from './components/KontaktStrana'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kontakt" element={<KontaktStrana />} />
        </Routes>
      </Router >
    </div>
  );
}

export default App;
