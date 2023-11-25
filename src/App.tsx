import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './routes/Home/Home';
import AboutPage from './routes/About/About';

import { Layout } from './shared/Layout/Layout';

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
