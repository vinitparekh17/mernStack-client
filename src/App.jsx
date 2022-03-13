import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from './components/Navbar';
import {Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contect from './components/Contect';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Movies from './components/Movies';
import Neko from './components/Neko';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contect' element={<Contect />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/anime' element={<Neko />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>

    </>
  );
}

export default App;
