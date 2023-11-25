import styled from 'styled-components';

export const HeaderStyled = styled.header`
  align-items: center;
  background-color: var(--sky-blue);
  display: flex;

  .brand {
    font-size: 1.25rem;
    font-family: 'future';
    font-weight: 700;
    padding: 1rem;
    text-decoration: none;
  }

  nav {
    display: none;

    a {
      padding: 1rem;
      text-decoration: none;

      &.special {
      }
    }
  }

  .mobile-cta {
    margin-left: auto;
    margin-right: 0.5rem;
  }

  .burger-menu {
    display: none;
    position: relative;
    width: 50px;
    height: 50px;

    &.active {
      span:first-of-type {
        top: 5px;
        transform: rotate(45deg);
      }

      span:last-of-type {
        bottom: 5px;
        transform: rotate(-45deg);
      }
    }

    button {
      border: none;
      background: none;
      cursor: pointer;
      margin: auto;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      width: 22px;
      height: 12px;
    }

    span {
      position: absolute;
      display: block;
      width: 100%;
      height: 2px;
      background-color: var(--onyx);
      border-radius: 1px;
      transition: all 0.2s cubic-bezier(0.1, 0.82, 0.76, 0.965);

      &:first-of-type {
        top: 0;
      }

      &:last-of-type {
        bottom: 0;
      }
    }
  }

  nav {
    &.visible {
      display: flex;
    }
  }

  @media (max-width: 768px) {
    .burger-menu {
      display: block;
    }

    .brand {
      padding-left: 0;
    }

    nav {
      display: none;
      background: var(--ghost-white);
      flex-direction: column;
      left: 0;
      padding: 0.5rem 0;
      position: absolute;
      right: 0;
      top: 70px;

      a {
        padding: 0.5rem;
      }
    }
  }
`;
