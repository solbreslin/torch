import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HeaderStyled } from './Header.styled';

const Header = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <HeaderStyled>
      <div className={`burger-menu ${isNavVisible ? 'active' : ''}`}>
        <button onClick={toggleNav}>
          <span></span>
          <span></span>
        </button>
      </div>
      <Link className="brand" to={`/`}>
        Torch
      </Link>
      <nav className={isNavVisible ? 'visible' : ''}>
        <Link to={`about`} onClick={toggleNav}>
          About
        </Link>
        <Link to={`survey`} className={'special'} onClick={toggleNav}>
          Lead the way
        </Link>
      </nav>
      <Link to={`survey`} className={'mobile-cta primary'}>
        Lead the way
      </Link>
    </HeaderStyled>
  );
};

export default Header;
