import styled from 'styled-components';

export const HeaderStyled = styled.header`
  align-items: center;
  background-color: var(--ghost-white);
  display: flex;

  .mobile-cta {
    margin-left: auto;
    margin-right: 0.5rem;
  }

  @media (max-width: 768px) {
    .brand {
      padding-left: 0;
    }
  }
`;
