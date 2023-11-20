import React from 'react';
import { GlobalHeader } from './features/GlobalHeader/GlobalHeader';
import Home from './sections/Home/Home';
import About from './sections/About/About';
import Survey from './sections/Survey/Survey';
import data from './data/data.json';

function App() {
  return (
    <>
      <GlobalHeader />
      <main>
        <Home />
        <About />
       
      </main>
    </>
  );
}

export default App;
