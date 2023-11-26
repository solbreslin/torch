import styled from 'styled-components';
import img from '@/assets/images/rw.jpg';

export const IntroStyled = styled.div`
  background: linear-gradient(
      0deg,
      hsla(240, 26%, 35%, 0.5),
      var(--federal-blue)
    ),
    url(${img});
  align-items: flex-end;
  display: flex;

  min-height: 50vh;
  padding-bottom: 4rem;

  section {
    padding: 0;
  }

  h1 {
    font-size: 2rem;
    margin: 0;
    display: none;
  }

  p {
    color: white;
    max-width: 45ch;
    font-size: 1.45rem;
    line-height: 1.3;
  }
`;
