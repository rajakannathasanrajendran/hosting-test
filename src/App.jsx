import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Menu from './pages/menu/menu';
import About from './pages/about/about';
import Contact from './pages/contact/contact';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
