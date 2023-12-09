import styled from 'styled-components';

export const FooterStyled = styled.footer`
  background-color: var(--rich-black);
  color: white;

  > div {
    margin: 0 auto;
    max-width: 1200px;
    padding: 2rem 0 2rem;
    width: calc(100% - 2rem);
    display: grid;
    grid-gap: 1rem;
    grid-template-areas: 'contact' 'nav1' 'nav2' 'l';

    @media screen and (min-width: 800px) {
      grid-template-areas: 'contact contact' 'nav1 nav2' 'l l';
      grid-template-columns: 1fr 1fr;
    }

    @media screen and (min-width: 1000px) {
      grid-template-areas: 'contact nav1 nav2' 'l l l';
      grid-template-columns: 2fr 1fr 1fr;
    }
  }

  .contact {
    grid-area: contact;
    margin-bottom: 1rem;
    max-width: 30ch;

    a {
      white-space: nowrap;
    }
  }

  nav {
    a {
      padding: 0.25rem 0;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  .nav-1 {
    grid-area: nav1;
  }

  .nav-2 {
    grid-area: nav2;
  }

  .l {
    grid-area: l;
  }

  h1 {
    font-family: var(--font-x-sans);
    font-size: 1.75rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }

  nav {
    display: flex;
    flex-direction: column;
    margin: 0 0 1rem;

    h3 {
      font-weight: 500;
      line-height: 2;
      margin-bottom: 0.25rem;
    }
  }

  .l {
    text-align: center;
  }
`;
