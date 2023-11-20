import styled from 'styled-components';

export const SurveyStyled = styled.div`
  background: hsl(0, 0%, 90%);
  align-items: center;
  display: flex;
  justify-content: space-between;
  min-height: 70vh;

  section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    padding: 0;
  }

  h3 {
    font-family: var(--or-font-sans);
    font-size: 1.5rem;
    letter-spacing: 0.025em;
    line-height: 1.25;
    margin: 0;

    span {
      font-family: var(--or-font-sans-medium);
    }
  }

  p {
    margin-bottom: 1rem;
  }
`;
