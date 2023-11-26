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

        <div>
          <p className={'text-l'}>
            Torch, founded in 2023, is dedicated to amplifying diverse voices in
            the workplace. Torch will be a space dedicated to showing what it
            really feels like to work at a company, regardless of who you are.
          </p>
        </div>
      </section>
    </IntroStyled>
  );
};

export default IntroSection;
