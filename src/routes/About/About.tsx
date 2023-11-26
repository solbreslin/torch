import React from 'react';
import { Root } from './About.styled';
import Team from './Team/Team';
import Vision from './Vision/Vision';

const AboutPage = () => (
  <Root>
    <Vision />
    <Team />
  </Root>
);

export default AboutPage;
