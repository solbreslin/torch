import styled from 'styled-components';

export const TenantTypesStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  li {
    align-items: center;
    display: flex;
    gap: 0.4em;

    + li {
      margin-top: 0.25rem;
    }
  }
`;
