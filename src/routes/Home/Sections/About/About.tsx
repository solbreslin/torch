import { AboutStyled } from './About.styled';
import React from 'react';
import { Link } from 'react-router-dom';

const AboutSection = () => (
  <AboutStyled>
    <section>
      <h3>
        We transform your workplace experiences into robust, undeniable data:{' '}
        <span>The good, the bad and the nuanced</span>
      </h3>
      <div>
        <p>
          Data is the foundation for the platform that we are building. A
          platform that will empower employee decision-making, highlight
          exceptional companies and give insight into what really matters.
        </p>
      </div>

      <div className={'stats'}>
        <div className={'stat'}>
          <span>46%</span>
          <span>
            of workers experience discrimination and harassment each year
          </span>
        </div>
        <div className={'stat'}>
          <span>75%</span>
          <span>
            of companies are more likely to have a CEO named David than a CEO
            who is a woman.
          </span>
        </div>
        <div className={'stat'}>
          <span>70%</span>
          <span>of Google’s global workforce is male</span>
        </div>
      </div>

      <div>
        <p>
          We are looking to validate our belief that people have a desire to
          share their experiences and that from these experiences new data can
          be uncovered.
        </p>
        <p>Complete our survey to join us…..</p>
        <p>
          <Link to={'/survey'} className={'primary'}>
            Lead the way
          </Link>
        </p>
      </div>
    </section>
  </AboutStyled>
);

export default AboutSection;
