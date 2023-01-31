import styled from 'styled-components';

export const OverviewStyled = styled.div`
  div {
    display: flex;
    gap: 2rem;

    > span {
      align-items: center;
      display: flex;
      gap: 0.4em;

      svg {
        fill: currentColor;
      }
    }

    + div {
      border-top: 1px solid hsl(0, 0%, 80%);
      margin-top: 1rem;
      padding-top: 1rem;
    }
  }
`;
