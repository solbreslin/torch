import React from 'react';
import { Root } from './NavToggle.styled';

interface NavToggleProps {
  isNavVisible: boolean;
  toggleNav: () => void;
}

const NavToggle: React.FC<NavToggleProps> = ({ isNavVisible, toggleNav }) => (
  <Root className={`${isNavVisible ? 'active' : ''}`}>
    <button onClick={toggleNav}>
      <span></span>
      <span></span>
    </button>
  </Root>
);

export default NavToggle;
