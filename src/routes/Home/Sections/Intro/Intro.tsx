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
          <p>
            Our mission: Transparency, inclusivity and diversity for every
            industry, one workplace at a time.
          </p>
          <p>
            Whether you&apos;re seeking a workplace that aligns with your
            values, or you&apos;re a company looking to create a fair and
            equitable environment for all employees, Torch will illuminate what
            it is truly like to work somewhere.
          </p>
        </div>
      </section>
    </IntroStyled>
  );
};

export default IntroSection;
