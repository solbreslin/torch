import styled from 'styled-components';

export const ListingContentStyled = styled.div`
  display: grid;
  grid-gap: 2rem;
  position: relative;

  @media screen and (min-width: 880px) {
    grid-template-columns: 1fr 320px;
  }

  h1 {
    margin: 1rem 0 0;
  }

  > div:last-child {
    align-self: start;
    background: white;
    position: sticky;
    top: 0;

    > a {
      justify-content: center;
      margin-top: 2rem;
    }
  }
`;
