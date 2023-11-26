import styled from 'styled-components';

export const IntroStyled = styled.div`
  align-items: flex-end;
  display: flex;
  min-height: 50vh;
  padding-bottom: 4rem;
  position: relative;

  section {
    position: relative;
  }

  h1 {
    color: white;
    font-size: 2rem;
    font-weight: 700;
    margin: 0;
  }

  p {
    display: none;
    color: white;
    max-width: 45ch;
    font-size: 1.45rem;
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
