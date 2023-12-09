import { Link } from 'react-router-dom';
import { FooterStyled } from './Footer.styled';
import React from 'react';
const Footer = () => (
  <FooterStyled>
    <div>
      <div className={'contact'}>
        <h1>Torch</h1>
        <p>
          If you believe in what we are building and are interested in
          supporting us, reach out at{' '}
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

        <a
          href="https://www.linkedin.com/company/torch-io"
          target={'_blank'}
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          href={'https://instagram.com/thetorch.io?igshid=YzAwZjE1ZTI0Zg=='}
          target={'_blank'}
          rel="noreferrer"
        >
          Instagram
        </a>
      </nav>
      <p className={'l'}>Made with 🧡 in London</p>
    </div>
  </FooterStyled>
);

export default Footer;
