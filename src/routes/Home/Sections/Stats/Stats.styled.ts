import styled from 'styled-components';

export const Root = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 4rem;
  max-width: 1000px;

  div {
    align-self: flex-start;
    display: grid;
    gap: 1rem;
    justify-items: center;

    span:first-child {
      color: var(--primary);
      font-size: 6rem;
      line-height: 1;
    }
  }
`;
