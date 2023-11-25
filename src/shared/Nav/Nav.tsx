import React from 'react';
import { Link } from 'react-router-dom';
import { Root } from './Nav.styled';

interface NavProps {
  isNavVisible: boolean;
  toggleNav: () => void;
}

const Nav: React.FC<NavProps> = ({ isNavVisible, toggleNav }) => (
  <Root className={isNavVisible ? 'visible' : ''}>
    <Link to={`about`} onClick={toggleNav}>
      About
    </Link>
    <Link to={`survey`} className={'special'} onClick={toggleNav}>
      Lead the way
    </Link>
  </Root>
);

export default Nav;
