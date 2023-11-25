import styled from 'styled-components';

export const Root = styled.nav`
  display: flex;

  &.visible {
    opacity: 1;
    pointer-events: auto;
    transform: none;
  }

  a {
    padding: 1rem;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    background: var(--ghost-white);
    flex-direction: column;
    left: 0;
    padding: 0.5rem 0;
    position: absolute;
    right: 0;
    top: calc(var(--header-height) - 1px);
    transition: 0.125s ease-out;

    opacity: 0;
    pointer-events: none;
    transform: translateY(-10px);

    a {
      padding: 0.5rem;
    }
  }
`;
