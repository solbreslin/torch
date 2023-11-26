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
            We created Torch to show what it’s like to work somewhere.
          </p>
          <p>
            Not just for the majority - for <span>everybody.</span>
          </p>
          {/*<p>*/}
          {/*  Data is the foundation for the platform that we are building. A*/}
          {/*  platform that will empower employee decision-making, highlight*/}
          {/*  exceptional companies and give insight into what really matters.*/}
          {/*</p>*/}
        </div>

        {/*<h3>Who we are</h3>*/}
        {/*<p>*/}
        {/*  Torch, founded in 2023 by an all-female team, is dedicated to*/}
        {/*  amplifying diverse voices in the workplace. Torch will be a space*/}
        {/*  dedicated to showing what it really feels like to work at a company*/}
        {/*  regardless of who you are.*/}
        {/*</p>*/}
        {/*<p>*/}
        {/*  {' '}*/}
        {/*  With one-third of the population set to be Generation 2030 the future*/}
        {/*  of the workplace has to change. Tghey are the more racially and*/}
        {/*  ethnically diverse than any previous generation. [75% of*/}
        {/*  Gen-Zers](https://www2.staffingindustry.com/Editorial/Daily-News/75-of-Gen-Z-to-reconsider-applying-at-a-company-with-unsatisfactory-D-I-efforts-63021) would*/}
        {/*  think twice before applying for a job at an organization if they*/}
        {/*  weren't pleased with their efforts to promote diversity and inclusion.*/}
        {/*</p>*/}
      </section>
    </IntroStyled>
  );
};

export default IntroSection;
