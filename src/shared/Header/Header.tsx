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
      let height = headerRef?.current?.clientHeight;
      height = Math.round(height);
      headerRef.current.style.height = `${height}px`;

      document.documentElement.style.setProperty(
        '--header-height',
        `${height}px`
      );
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        document.body.style.overflow = 'initial';
      } else {
        document.body.style.overflow = isNavVisible ? 'hidden' : 'initial';
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isNavVisible]);

  return (
    <HeaderStyled ref={headerRef}>
      <NavToggle isNavVisible={isNavVisible} toggleNav={toggleNav} />
      <Brand />
      <Nav isNavVisible={isNavVisible} toggleNav={toggleNav} />
      <Link to={`survey`} className={'mobile-cta primary'}>
        Share your voice
      </Link>
    </HeaderStyled>
  );
};

export default Header;
