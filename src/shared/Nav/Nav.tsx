import React from 'react';
import { Root, StyledLink } from './Nav.styled';

interface NavProps {
  isNavVisible: boolean;
  toggleNav: () => void;
}

const Nav: React.FC<NavProps> = ({ isNavVisible, toggleNav }) => (
  <Root className={isNavVisible ? 'visible' : ''}>
    <StyledLink
      to={`experiences`}
      onClick={toggleNav}
      index={1}
      className={isNavVisible ? 'visible' : ''}
    >
      Experiences
    </StyledLink>
    <StyledLink
      to={`privacy`}
      onClick={toggleNav}
      className={`is-mobile ${isNavVisible ? 'visible' : ''}`}
      index={2}
    >
      Privacy policy
    </StyledLink>
  </Root>
);

export default Nav;
