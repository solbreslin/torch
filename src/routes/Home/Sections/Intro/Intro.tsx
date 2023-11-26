import React from 'react';
import { IntroStyled } from './Intro.styled';
import useScrollPosition from '../../../../hooks/useScrollPosition';

const IntroSection = () => {
  const scrollPosition = useScrollPosition();
  return (
    <IntroStyled scroll={scrollPosition}>
      <section>
        <h1>
          <span>Collective voices ignite change</span>
        </h1>
        <p>
          We created Torch to show what it’s like to work somewhere. Not just
          for the majority - for <span>everybody</span>
        </p>
      </section>
    </IntroStyled>
  );
};

export default IntroSection;
