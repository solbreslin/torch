import styled from 'styled-components';
import img from '@/assets/images/rw.jpg';

export const IntroStyled = styled.div`
  // background: linear-gradient(0deg, var(--sky-blue), var(--sky-blue)),
  //   url(${img});
  align-items: flex-end;
  background-color: var(--sky-blue);
  display: flex;

  min-height: 60vh;
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
    max-width: 45ch;
    font-size: 1.45rem;
    line-height: 1.3;
  }
`;
