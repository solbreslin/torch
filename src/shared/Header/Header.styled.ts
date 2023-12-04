import styled from 'styled-components';

export const HeaderStyled = styled.header`
  align-items: center;
  background-color: var(--header-bg-color);
  display: flex;
  position: relative;

  .mobile-cta {
    margin-left: auto;
    margin-right: 0.5rem;

    @media (min-width: 768px) {
      margin-left: 0.5rem;
    }
  }
`;
