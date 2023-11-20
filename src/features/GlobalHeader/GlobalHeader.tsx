import { Link } from 'react-router-dom';
import { GlobalHeaderStyled } from './GlobalHeader.styled';

export const GlobalHeader = () => (
  <GlobalHeaderStyled>
   <Link className='brand' to={`/`}>Torch</Link>
    <nav>
      <Link to={`about`}>About</Link>

      <a className={'special'} href={'#'}>
        Lead the way
      </a>
    </nav>
  </GlobalHeaderStyled>
);
