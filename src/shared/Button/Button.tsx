import React, { ReactNode } from 'react';
import ButtonStyled from './Button.styled';

export type variant = 'primary' | 'secondary' | 'icon';

type Props = {
  children: ReactNode;
  onClick: () => void;
  variant?: variant;
  hasShadow?: boolean;
};

const Button: React.FC<Props> = ({
  onClick,
  hasShadow = false,
  variant = 'primary',
  children,
}) => {
  return (
    <ButtonStyled onClick={onClick} variant={variant} hasShadow={hasShadow}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
