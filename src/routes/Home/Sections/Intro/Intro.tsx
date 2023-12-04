import React from 'react';
import { IntroStyled } from './Intro.styled';
import useScrollPosition from '../../../../hooks/useScrollPosition';

const IntroSection = () => {
  const scrollPosition = useScrollPosition();
  return (
    <IntroStyled scroll={scrollPosition}>
      <section>
        <h1>
          <span>Our voices ignite change</span>
        </h1>

        <div>
          <p className={'text-l'}>
            Torch is dedicated to showing what it really feels like to work at a
            company, regardless of who you are.
          </p>
        </div>
      </section>
    </IntroStyled>
  );
};

export default IntroSection;
