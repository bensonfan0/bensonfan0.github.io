import './App.css';
import Greeting from './pages/Greeting';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/Greetings" element={<Greeting/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
