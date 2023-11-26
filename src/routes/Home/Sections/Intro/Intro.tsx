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
            We created Torch to show what it’s like to work somewhere. Not just
            for the majority - for <span>everybody</span>
          </p>
          <p>
            Data is the foundation for the platform that we are building. A
            platform that will empower employee decision-making, highlight
            exceptional companies and give insight into what really matters.
          </p>
        </div>
      </section>
    </IntroStyled>
  );
};

export default IntroSection;
