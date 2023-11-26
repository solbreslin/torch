import styled from 'styled-components';

export const IntroStyled = styled.div<{ scroll: number }>`
  background-color: var(--intro-bg-color);
  overflow: hidden;

  section {
    max-width: 1200px;
  }

  h1 {
    display: grid;
    font-size: 3rem;
    font-weight: 500;
    line-height: 1.1;
    min-height: calc(100vh - var(--header-height));
    place-content: center;
    position: relative;
    text-align: center;

    @media screen and (min-width: 768px) {
      font-size: 5rem;
    }

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
    max-width: 60ch;
    padding: 6rem 0 0;
    position: relative;

    p {
      font-family: 'soehne kraftig';
      line-height: 1.35;
      font-size: 2rem;
      margin-bottom: 0.5rem;
    }
  }
`;
