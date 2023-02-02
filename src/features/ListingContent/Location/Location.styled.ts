import styled from 'styled-components';

export const LocationStyled = styled.div``;

export const LocalTransportStyled = styled.div`
  padding-top: 1rem;
`;

export const TransportOptionsStyled = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr 1fr;
  grid-gap: 0.5rem 1rem;
  padding: 1rem 0 0;
`;

export const TransportOptionStyled = styled.div`
  display: contents;

  span {
    display: flex;
    gap: 0.4em;
  }

  svg {
    width: 1em;
  }
`;
