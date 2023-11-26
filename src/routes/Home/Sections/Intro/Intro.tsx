import React from 'react';
import { BackgroundImage, IntroStyled } from './Intro.styled';

const generateSrcset = () => {
  const base = 'https://res.cloudinary.com/sbreslin/image/upload';
  const path = 'v1700992372/rw_aruf4b.jpg';
  const sizes = [320, 480, 640, 960, 1280, 1600];

  return sizes.map((s) => `${base}/f_auto,q_70,w_${s}/${path} ${s}w`).join(',');
};

const srcSet = generateSrcset();
const IntroSection = () => (
  <IntroStyled>
    <BackgroundImage>
      <img srcSet={srcSet} alt={'Abstract image of a data center'} />
    </BackgroundImage>
    <section>
      <h1>Collective voices ignite change</h1>
      <p>
        We created Torch to show what it’s like to work somewhere.
        <br />
        Not just for the majority - <strong>for everybody</strong>.
      </p>
    </section>
  </IntroStyled>
);

export default IntroSection;
