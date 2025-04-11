import NavBar from './components/NavBar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';
import { Routes, Route } from 'react-router';
import Testimonials from './components/pages/Testimonials';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  return (
    <>
      <NavBar />
      <ScrollToTopButton />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
        <Route path="testimonials" element={<Testimonials />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
