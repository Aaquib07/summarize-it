import { Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/home/Home';
import Summary from './pages/summary/Summary';
import About from './pages/about/About';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import ProtectedRoute from './pages/protectedRoute/ProtectedRoute';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<ProtectedRoute />}>
        <Route path='dashboard' element={<Summary />} />
      </Route>
    </Routes>
  );
}

export default App;
