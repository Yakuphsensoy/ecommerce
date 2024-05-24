import './App.css';
import { ContextProvider } from './ContextProvider'
import Home from './pages/Home';
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import Login from './pages/Login';
import Product from './pages/Product';
import Policies from './pages/Policies';
import Support from './pages/Support';
import SignUp from './pages/SignUp';


function App() {
  return (
    <ContextProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/product' element={<Product />} />
        <Route path='/policies' element={<Policies />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/support' element={<Support />} />
      </Routes>
    </ContextProvider>
  );
}

export default App;
