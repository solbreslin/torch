import React from 'react';
import { Root } from './Brand.styled';

import logo from './../../assets/images/logo.svg';

const Brand = () => (
  <Root to={`/`}>
    <span className={'sr-only'}>Torch</span>
    <img src={logo} alt={'Torch'} />
  </Root>
);

export default Brand;
