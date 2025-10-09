import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './views/Home.jsx'
import Contact from './views/Contact.jsx'
import About from './views/About.jsx'


function App() {
  return (
    <BrowserRouter>
      { Navigation }
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>

      { Routes }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}