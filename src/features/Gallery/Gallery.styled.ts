import styled from 'styled-components';

export const GalleryStyled = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  height: 66vh;
  max-height: 500px;
  position: relative;

  img {
    height: 100%;
    object-fit: cover;
    width: 100%;

    &:first-child {
      grid-row: 1 / -1;
    }
  }

  button {
    bottom: 1rem;
    position: absolute;
    right: 1rem;
  }
`;
