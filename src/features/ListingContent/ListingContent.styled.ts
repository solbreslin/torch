import styled from 'styled-components';

export const ListingContentStyled = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 300px;
  position: relative;

  > div:last-child {
    align-self: start;
    background: white;
    position: sticky;
    top: 0;
  }
`;
