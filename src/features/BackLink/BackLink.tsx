import { CaretLeft } from 'phosphor-react';
import { BackLinkStyled } from './BackLink.styled';

const BackLink = () => (
  <BackLinkStyled>
    <a href="#">
      <CaretLeft size={16} /> {ActionText.BACK_LINK}
    </a>
  </BackLinkStyled>
);

export default BackLink;
