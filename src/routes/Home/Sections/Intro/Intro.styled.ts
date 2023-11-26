import styled from 'styled-components';

export const IntroStyled = styled.div<{ scroll: number }>`
  align-items: flex-end;
  background-color: var(--intro-bg-color);
  display: flex;
  min-height: 70vh;
  overflow: hidden;

  position: relative;

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
      `translate3d(0, calc(${scroll / 3}px - var(--header-height)), 0) scale(${
        scroll / 100 + 1
      })`};
  }

  section {
    max-width: 70ch;
    position: relative;
  }

  h1 {
    font-size: 3rem;
    font-weight: 500;
    line-height: 1.1;
    margin: 0 0 2rem;
  }

  p {
    max-width: 45ch;
    font-size: 1.25rem;
    line-height: 1.3;
  }
`;

export const BackgroundImage = styled.div`
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;

  &:after {
    content: '';
    background: linear-gradient(
      0deg,
      hsla(240, 26%, 35%, 0.5),
      var(--federal-blue)
    );
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }

  img {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }
`;
