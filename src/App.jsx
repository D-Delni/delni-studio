import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Hero from './components/sections/Hero.jsx';
import Models from './components/sections/Models.jsx';
import Pricing from './components/sections/Pricing.jsx';
import Demos from './components/sections/Demos.jsx';
import WhyUs from './components/sections/WhyUs.jsx';
import FAQ from './components/sections/FAQ.jsx';
import Contact from './components/sections/Contact.jsx';
import useFadeIn from './hooks/useFadeIn.js';
import useSmoothScroll from './hooks/useSmoothScroll.js';

export default function App() {
  useFadeIn();
  useSmoothScroll();

  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Models />
        <Pricing />
        <Demos />
        <WhyUs />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
