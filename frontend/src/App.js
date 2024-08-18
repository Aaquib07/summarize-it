import { Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/home/Home';
import Summary from './pages/summary/Summary';
import About from './pages/about/About';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/summarize' element={<Summary />} />
    </Routes>
  );
}

export default App;
