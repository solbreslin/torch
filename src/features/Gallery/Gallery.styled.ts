import styled from 'styled-components';

export const GalleryStyled = styled.div`
  // for grid-template-rows would like to do 1fr 1fr 1fr,
  // however in Chrome 1fr is not behaving as expected
  // related issue? https://github.com/w3c/csswg-drafts/issues/1777
  --rows: 3;
  --gap: 0.25rem;
  // Dividing the vertical height by the number of rows, taking into account the grid gap
  --row-size: calc(
    (100% / var(--rows)) - ((var(--gap) * (var(--rows) - 1)) / var(--rows))
  );

  border-radius: 0.375rem;
  display: grid;
  grid-gap: var(--gap);
  grid-template-columns: 2fr 1fr;
  grid-template-rows: var(--row-size) var(--row-size) var(--row-size);
  height: 66vh;
  max-height: 500px;
  overflow: hidden;
  position: relative;

  img {
    cursor: pointer;
    height: 100%;
    object-fit: cover;
    transition: filter var(--or-transition-style);
    width: 100%;

    &:first-child {
      grid-row: 1 / -1;
    }

    &:hover {
      filter: brightness(0.9);
    }
  }

  button {
    bottom: 1rem;
    position: absolute;
    right: 1rem;
  }
`;
