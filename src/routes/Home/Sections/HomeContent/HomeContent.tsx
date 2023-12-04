import { HomeContentStyled } from './HomeContent.styled';
import React from 'react';
import { Link } from 'react-router-dom';
import Stats from '../Stats/Stats';

const HomeContentSection = () => (
  <HomeContentStyled>
    <div style={{ padding: '6rem 0 4rem' }}>
      <Stats />
    </div>
    <div style={{ background: 'var(--uranian-blue)', padding: '4rem 0' }}>
      <section className={'las'} style={{ maxWidth: '66ch' }}>
        <p style={{ fontSize: '2rem', lineHeight: 1.35 }}>
          We are looking to validate our belief that people have a desire to
          share their experiences and that from these experiences new data can
          be uncovered.
        </p>
        <p style={{ fontSize: '1.25rem', lineHeight: 1.45 }}>
          Your story matters. Take our survey and share your experience
        </p>
        <p>
          <Link to={'/survey'} className={'primary'}>
            Share your voice
          </Link>
        </p>
      </section>
    </div>
  </HomeContentStyled>
);

export default HomeContentSection;
