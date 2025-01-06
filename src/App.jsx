import React from 'react'; // Type rafce for React snippet
import Navbar from './components/navbar';
import Hero from './components/Hero';
import About from './components/About';
import Tech from './components/Tech';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      {/* Background Layer */}
      <div className="fixed top-0 left-0 h-full w-full -z-10 bg-neutral-950">
        <div className="absolute top-0 left-0 h-full w-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] bg-cover"></div>
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto px-8 z-10">
        <Navbar />
        <Hero />
        <About />
        <Tech />
        <Experience />
        <Projects />
        <Contact />

      </div>
    </div>
  );
};

export default App;

//classname which has absolute first denotes the background snippets from https://bg.ibelick.com/ maja site