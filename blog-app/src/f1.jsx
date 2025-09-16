import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from "./home.jsx";
import About from "./about.jsx";
import Contact from "./contact.jsx";


function F1() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <Link to="/" style={{ padding: "20px" }}>Home</Link>
          <Link to="/about" style={{ padding: "20px" }}>About</Link>
          <Link to="/contact" style={{ padding: "20px" }}>Contact</Link>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default F1;
