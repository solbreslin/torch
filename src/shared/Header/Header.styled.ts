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
    width: 48px;
    height: 48px;

    &.active {
      span:first-of-type {
        top: 23px;
        transform: rotate(45deg);
      }

      span:last-of-type {
        bottom: 23px;
        transform: rotate(-45deg);
      }
    }

    button {
      border: none;
      background: none;
      cursor: pointer;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      width: 100%;
      padding: 0;
    }

    span {
      position: absolute;
      display: block;
      width: 22px;
      height: 2px;
      background-color: var(--onyx);
      border-radius: 1px;
      transition: all 0.2s cubic-bezier(0.1, 0.82, 0.76, 0.965);
      left: 0;
      right: 0;
      margin: auto;

      &:first-of-type {
        top: 18px;
      }

      &:last-of-type {
        bottom: 18px;
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
