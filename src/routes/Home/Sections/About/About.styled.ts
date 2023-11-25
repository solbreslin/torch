import styled from 'styled-components';

export const AboutStyled = styled.div`
  background: var(--ghost-white);
  padding: 4rem 0;

  section {
    display: block;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    padding: 0;
  }

  h3 {
    font-family: var(--or-font-sans);
    font-size: 1.5rem;
    letter-spacing: 0.025em;
    line-height: 1.25;
    margin: 0 0 2rem;

    span {
      font-family: var(--or-font-sans-medium);
    }
  }

  p {
    margin-bottom: 1rem;
  }

  .stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 4rem;

    .stat {
      display: grid;
      gap: 1rem;
      justify-items: center;

      span:first-child {
        color: var(--coral);
        font-size: 6rem;
        line-height: 1;
      }
    }
  }
`;
