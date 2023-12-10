import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Root = styled.nav`
  display: flex;
  background: var(--header-bg-color);
  flex-direction: column;
  height: calc(100vh - var(--header-height));
  left: 0;
  padding: 4rem 0 0 0.5rem;
  position: absolute;
  right: 0;
  top: var(--header-height);
  transition: 0.125s ease-out;
  opacity: 0;
  pointer-events: none;
  z-index: 1;

  &.visible {
    opacity: 1;
    pointer-events: auto;
    transform: none;
  }

  @media (min-width: 768px) {
    background: initial;
    flex-direction: row;
    height: auto;
    margin-left: auto;
    opacity: 1;
    padding: 0;
    pointer-events: auto;
    position: static;
    transform: none;
  }
`;

export const StyledLink = styled(NavLink)<{ index: number }>`
  font-size: 4rem;
  font-family: var(--font-x-sans);
  opacity: 0;
  padding: 0.5rem;
  position: relative;
  text-transform: uppercase;
  transform: translateY(10px);
  transition: transform 0.25s ease-out, opacity 0.25s ease-out;
  transition-delay: 0s;

  &.visible {
    opacity: 1;
    transform: none;
    transition-delay: ${({ index }) => `${index / 4}s`};
  }

  &.active {
    text-decoration: underline;
    text-decoration-thickness: 2px;
  }

  @media (min-width: 768px) {
    font-family: var(--font-sans);
    font-size: 1.25rem;
    font-weight: 400;
    opacity: 1;
    padding: 1rem;
    transform: none;
    transition: none;
    transition-delay: 0s;

    &.is-mobile {
      display: none;
    }
  }
`;
