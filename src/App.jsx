import './App.css'; 
import Hero from './components/hero';
import Gallery from './components/Gallery';
import CTA from './components/CTA';

function App() {
  return (
    <div className="app-container">
      <header className="fixed-header">
        <nav>
          <a href="#intro">Intro</a>

          <a href="#gallery">Gallery</a>
          <a href="#cta">CTA</a>
        </nav>
      </header>
      
      {/* Sections */}
      <section id="intro">
        <Hero />
      </section>

      <section id="gallery">
        <Gallery />
      </section>

      <section id="cta">
        <CTA />
      </section>
    </div>
  );
}

export default App;