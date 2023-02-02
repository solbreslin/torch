import React, { ReactNode } from 'react';
import {
  IconButtonStyled,
  LinkButtonStyled,
  PrimaryButtonStyled,
  SecondaryButtonStyled,
} from './Button.styled';

export type variant = 'primary' | 'secondary' | 'icon' | 'link';

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
  if (variant === 'secondary') {
    return (
      <SecondaryButtonStyled onClick={onClick} hasShadow={hasShadow}>
        {children}
      </SecondaryButtonStyled>
    );
  }

  if (variant === 'icon') {
    return (
      <IconButtonStyled onClick={onClick} hasShadow={hasShadow}>
        {children}
      </IconButtonStyled>
    );
  }

  if (variant === 'link') {
    return (
      <LinkButtonStyled onClick={onClick} hasShadow={hasShadow}>
        {children}
      </LinkButtonStyled>
    );
  }

  return (
    <PrimaryButtonStyled onClick={onClick} hasShadow={hasShadow}>
      {children}
    </PrimaryButtonStyled>
  );
};

export default Button;
