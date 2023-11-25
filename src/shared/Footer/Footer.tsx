import { Link } from 'react-router-dom';
import { FooterStyled } from './Footer.styled';
import React from 'react';
const Footer = () => (
  <FooterStyled>
    <div>
      <div className={'contact'}>
        <h1>Torch</h1>
        <p>
          We are an early-stage startup and are looking for like-minded
          investors who want to make a difference.
        </p>
        <p>
          If that’s you, email us on{' '}
          <a href={'mailto:hello@the-torch.io'}>
            <strong>hello@the-torch.io</strong>
          </a>
        </p>
      </div>
      <nav className={'nav-1'}>
        <h3>Site navigation</h3>
        <Link to={'/about'}>About</Link>
        <Link to={'/privacy'}>Privacy</Link>
      </nav>
      <nav className={'nav-2'}>
        <h3>Follow us</h3>
        <a href="">Instagram</a>
        <a href="">LinkedIn</a>
      </nav>
      <p className={'l'}>Made with 🧡 in London</p>
    </div>
  </FooterStyled>
);

export default Footer;
