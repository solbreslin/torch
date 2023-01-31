import React, { ReactNode } from 'react';
import ButtonStyled from './Button.styled';

type Props = { children: ReactNode; onClick: () => void };

const Button: React.FC<Props> = ({ onClick, children }) => {
  return <ButtonStyled onClick={onClick}>{children}</ButtonStyled>;
};

export default Button;
