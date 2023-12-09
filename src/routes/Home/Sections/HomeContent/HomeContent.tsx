import { HomeContentStyled } from './HomeContent.styled';
import React from 'react';
import { Link } from 'react-router-dom';
import Stats from '../Stats/Stats';

const HomeContentSection = () => (
  <HomeContentStyled>
    <div style={{ padding: '6rem 0 2rem' }}>
      <Stats />
    </div>
    <div
      style={{
        background: 'var(--platinum)',
        padding: '4rem 0',
      }}
    >
      <section className={'las'} style={{ maxWidth: '1200px' }}>
        <div style={{ maxWidth: '60ch' }}>
          <p
            style={{
              fontSize: '3rem',
              fontWeight: 600,
              lineHeight: 1,
              marginBottom: '2rem',
              fontFamily: 'var(--font-x-sans)',
            }}
          >
            Share your experience now, and together, our voices can ignite
            change.{' '}
          </p>
          <p>
            <Link to={'/survey'} className={'primary'}>
              Share your voice
            </Link>
          </p>
        </div>
      </section>
    </div>
  </HomeContentStyled>
);

export default HomeContentSection;
