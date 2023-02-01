import styled from 'styled-components';
import { variant } from './Button';

const ButtonStyled = styled.button<{ hasShadow: boolean; variant: variant }>`
  align-items: center;
  background-color: ${({ variant }) =>
    variant === 'primary'
      ? 'var(--or-color-primary)'
      : variant === 'secondary'
      ? 'white'
      : 'rgba(0, 0, 0, 0)'};
  border: none;
  border-bottom: ${({ variant }) =>
    variant === 'link' ? '1px solid currentColor' : 'none'};
  border-radius: ${({ variant }) => (variant === 'link' ? '0' : '0.375em')};
  ${({ hasShadow }) => (hasShadow ? 'box-shadow: var(--or-elevation)' : '')};
  color: ${({ variant }) =>
    variant === 'primary' ? 'white' : 'current-color'};
  cursor: pointer;
  display: inline-flex;
  font: inherit;
  font-weight: ${({ variant }) => (variant === 'link' ? '500' : 'inherit')};
  line-height: 1;
  gap: 0.4em;
  justify-content: center;
  padding: ${({ variant }) => (variant === 'link' ? '0' : '0.7em 1.5em .75em')};
`;

export default ButtonStyled;
