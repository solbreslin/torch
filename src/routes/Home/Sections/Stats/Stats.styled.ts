import styled from 'styled-components';

export const Root = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 4rem;
  max-width: 1200px;

  div {
    align-self: flex-start;
    display: grid;
    gap: 1rem;
    justify-items: center;

    span:first-child {
      color: var(--primary);
      font-size: 8rem;
      font-weight: 700;
      line-height: 1;
    }

    p {
      font-size: 1.25rem;
      line-height: 1.35;
    }
    cite {
      white-space: nowrap;
    }
    cite a {
      font-size: 0.75rem;
      font-style: normal;
      text-decoration: underline;
    }
  }
`;
