import { Link } from 'react-router-dom';
import { HeaderStyled } from './Header.styled';

const Header = () => (
  <HeaderStyled>
   <Link className='brand' to={`/`}>Torch</Link>
    <nav>
      <Link to={`about`}>About</Link>

      <a className={'special'} href={'#'}>
        Lead the way
      </a>
    </nav>
  </HeaderStyled>
);

export default Header