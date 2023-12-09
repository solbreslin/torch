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
            Torch's mission is to show what it feels like to work at a company -
            regardless of who you are.
          </p>
        </div>
      </section>
    </IntroStyled>
  );
};

export default IntroSection;
