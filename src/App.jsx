import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Home from './Pages/Home';
import Catalogue from './Pages/Catalogue';
import ErrorPage from './Pages/ErrorPage'
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
    <Navbar/>
    <Routes>
<Route path='/' element={Home}/>
<Route path='/Catalogue' element={Catalogue}/>
<Route path='*' element={<ErrorPage name="prova" status={404} />}/>
    </Routes>
    </Router>
  );
}

export default App;
