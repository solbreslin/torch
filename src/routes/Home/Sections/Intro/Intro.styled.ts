import styled from 'styled-components';

export const IntroStyled = styled.div<{ scroll: number }>`
  background-color: var(--intro-bg-color);
  overflow: hidden;

  section {
    max-width: 70ch;
  }

  h1 {
    display: grid;
    font-size: 3rem;
    font-weight: 500;
    line-height: 1.1;
    min-height: 70vh;
    place-content: center;
    position: relative;
    text-align: center;

    span {
      position: relative;
    }

    &:before {
      aspect-ratio: 1/1;
      background-color: var(--primary);
      border-radius: 9999px;
      bottom: 0;
      content: '';
      filter: blur(30px);
      height: 30vmin;
      left: 0;
      margin: auto;
      right: 0;
      top: 0;
      pointer-events: none;
      position: absolute;
      transform: ${({ scroll }) =>
        `translate3d(0, ${scroll / 3}px, 0) scale(${scroll / 750 + 1})`};
    }
  }

  div {
    padding: 6rem 0;
    position: relative;

    p:first-child {
      line-height: 1.35;
      font-size: 2rem;
      margin-bottom: 2rem;
    }

    p:last-child {
      font-size: 1.25rem;
      line-height: 1.45;
    }
  }
`;
