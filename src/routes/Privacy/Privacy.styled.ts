import styled from 'styled-components';

export const Root = styled.section`
  max-width: 60ch;
  padding-top: 2rem;

  @media screen and (min-width: 768px) {
    padding-top: 4rem;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.2;
    margin-bottom: 0.25rem;
  }

  .m-4 {
    margin-bottom: 1.5rem;
  }

  h3 {
    font-weight: 500;
    line-height: 1.2;
    margin-bottom: 0.5rem;
    margin-top: 1.5rem;
  }

  p {
    margin-bottom: 0.5rem;
  }

  ul {
    list-style-type: disc;
    padding-left: 1rem;
  }

  li {
    margin-bottom: 0.5rem;
  }

  strong {
    font-weight: 500;
  }

  a {
    text-decoration: underline;
  }
`;
