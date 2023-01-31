import styled from 'styled-components';

export const ListingContentStyled = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr 320px;
  position: relative;

  h1 {
    margin: 1rem 0 0;
  }

  > div:last-child {
    align-self: start;
    background: white;
    position: sticky;
    top: 0;
  }
`;
