import styled from 'styled-components';
import img from "@/assets/images/rw.jpg"

export const IntroStyled = styled.div`
  background:linear-gradient(0deg, rgba(41, 62, 145, .9), rgba(41, 62, 145, .9)),url(${img});
  background-size: cover;
  background-color: black;
  align-items: center;
  display: flex;
  justify-content: space-between;
  min-height: 70vh;

  section {

    padding: 0;
  }

  h1 {
    color: white;
    font-family: var(--or-font-sans-medium);
    font-size: 3rem;
    letter-spacing: 0.025em;
    line-height: 1;
    margin: 0;
    text-transform: uppercase;

    span {
      color: white;
    }
  }
`;
