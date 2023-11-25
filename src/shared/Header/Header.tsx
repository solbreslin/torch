import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { HeaderStyled } from './Header.styled';
import Nav from '../Nav/Nav';
import NavToggle from '../NavToggle/NavToggle';
import Brand from '../Brand/Brand';

const Header = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  useEffect(() => {
    if (headerRef.current) {
      const height = headerRef?.current?.clientHeight;
      document.documentElement.style.setProperty(
        '--header-height',
        `${height}px`
      );
    }
  }, []);

  return (
    <HeaderStyled ref={headerRef}>
      <NavToggle isNavVisible={isNavVisible} toggleNav={toggleNav} />
      <Brand />
      <Nav isNavVisible={isNavVisible} toggleNav={toggleNav} />
      <Link to={`survey`} className={'mobile-cta primary'}>
        Lead the way
      </Link>
    </HeaderStyled>
  );
};

export default Header;
