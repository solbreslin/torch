import styled from 'styled-components';

export const Root = styled.div`
  display: none;
  position: relative;
  width: 48px;
  height: 48px;

  &.active {
    span:first-of-type {
      top: 22px;
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
    height: 3px;
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

  @media (max-width: 768px) {
    display: block;
  }
`;
