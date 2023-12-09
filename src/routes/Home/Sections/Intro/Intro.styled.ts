import styled from 'styled-components';

export const IntroStyled = styled.div<{ scroll: number }>`
  background-color: var(--intro-bg-color);
  overflow: hidden;

  section {
    max-width: 1200px;
  }

  h1 {
    display: grid;
    font-family: var(--font-x-sans);
    font-size: 4rem;
    font-weight: 600;
    letter-spacing: -0.01em;
    line-height: 1.1;
    min-height: calc(100vh - var(--header-height));
    place-content: center;
    position: relative;
    text-align: center;

    @media screen and (min-width: 768px) {
      font-size: 8rem;
    }

    span {
      position: relative;
      text-transform: uppercase;
    }

    &:before {
      aspect-ratio: 1/1;
      background-color: var(--primary);
      border-radius: 9999px;
      bottom: 0;
      content: '';
      filter: blur(30px);
      height: 40vmin;
      left: 0;
      margin: auto;
      right: 0;
      top: 0;
      pointer-events: none;
      position: absolute;

      transform: ${({ scroll }) =>
        `translate3d(0, ${scroll / 3}px, 0) scale(${scroll / 300 + 1})`};

      @media screen and (max-width: 800px) {
        transform: ${({ scroll }) =>
          `translate3d(0, ${scroll / 2}px, 0) scale(${scroll / 300 + 1})`};
      }
    }
  }

  div {
    max-width: 60ch;
    padding: 4rem 0 0;
    position: relative;

    p {
      font-weight: 500;
      line-height: 1.25;
      font-size: 2rem;
      margin-bottom: 0.5rem;
    }
  }
`;
