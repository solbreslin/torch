import styled from 'styled-components';

export const Root = styled.section`
  max-width: 66ch;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 4rem;

  div {
    margin-bottom: 4rem;
  }

  img {
    border-radius: 20px;
  }

  h3 {
    font-weight: bold;
    margin: 1rem 0;
  }
`;
