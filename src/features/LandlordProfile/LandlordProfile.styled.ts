import styled from 'styled-components';

export const LandlordProfileStyled = styled.div`
  align-items: center;
  display: inline-grid;
  grid-template-columns: min-content auto;
  grid-gap: 1rem 0rem;

  button {
    grid-column: 1/-1;
    justify-self: start;
  }
`;

export const LandlordAvatarStyled = styled.div`
  background-color: hsl(0, 0%, 80%);
  border-radius: 9999px;
  color: rgba(0, 0, 0, 0);
  height: 3.6rem;
  width: 3.6rem;

  img {
    object-fit: cover;
  }
`;

export const LandlordNameStyled = styled.h4`
  align-items: center;
  display: flex;
  gap: 0.4em;
`;

export const LandlordResponseStyled = styled.div`
  display: grid;
  grid-column: 1 / -1;
  grid-gap: 0.5rem 1rem;

  grid-template-columns: max-content auto;

  > :nth-child(odd) {
    color: hsl(0, 0%, 40%);
  }
`;
