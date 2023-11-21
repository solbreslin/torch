import styled from 'styled-components';

export const HeaderStyled = styled.header`
  background: var(--to-blue);
  display: flex;
  justify-content: space-between;

  .brand {
    color: var(--to-red);
    font-size: 1.25rem;
    font-family: var(--or-font-sans-medium);
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 1rem;
    text-decoration: none;
  }

  nav {
    display: flex;

    a {
      color: white;
      padding: 1rem;
      text-decoration: none;

      &.special {
        background: var(--to-red);
        color: white;
      }
    }
  }
`;
