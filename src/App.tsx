import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './routes/Home/Home';
import AboutPage from './routes/About/About';
import SurveyPage from './routes/Survey/Survey';

import { Layout } from './shared/Layout/Layout';
import PrivacyPage from './routes/Privacy/Privacy';
import ExperiencesPage from './routes/Experiences/Experiences';

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/survey" element={<SurveyPage />} />
          <Route path={'/experiences'} element={<ExperiencesPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
