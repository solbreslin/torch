import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './routes/Home/Home';
import AboutPage from './routes/About/About';
import SurveyPage from './routes/Survey/Survey';

import { Layout } from './shared/Layout/Layout';

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/survey" element={<SurveyPage />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
