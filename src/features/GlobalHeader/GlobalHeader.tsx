import { GlobalHeaderStyled } from './GlobalHeader.styled';

export const GlobalHeader = () => (
  <GlobalHeaderStyled>
    <a className={'brand'} href={'#'}>
      Torch
    </a>
    <nav>
      <a href={'#about'}>About</a>
      <a href={'#contact'}>Contact</a>
      <a className={'special'} href={'#'}>
        Lead the way
      </a>
    </nav>
  </GlobalHeaderStyled>
);
