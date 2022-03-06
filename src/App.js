import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from './components/Navbar';
import {Route, Routes} from 'react-router-dom';
import Home from './components/Contect';
import About from './components/About';
import Contect from './components/Contect';
import Signin from './components/Signin';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contect' element={<Contect />} />
        <Route path='/signin' element={<Signin />} />
      </Routes>

    </>
  );
}

export default App;
