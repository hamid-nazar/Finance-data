import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Analytics } from './components/Analytics';
import { NewLetter } from './components/NewsLetter';
import { Cards } from './components/Cards';
import { Footer } from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <NewLetter />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
