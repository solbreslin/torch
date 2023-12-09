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
          <p style={{ fontSize: '1.5rem', lineHeight: 1.35 }}>
            We believe that every experience in the workplace holds the power to
            unveil new insights and drive meaningful change. By sharing your
            experiences you contribute to us building a greater understanding
            that will transform workplaces for the better.
          </p>
          <p
            style={{
              fontSize: '1.5rem',
              lineHeight: 1.35,
              marginBottom: '2rem',
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
