import styled from 'styled-components';
import { variant } from './Button';

const ButtonStyled = styled.button<{ hasShadow: boolean; variant: variant }>`
  align-items: center;
  background-color: ${({ variant }) =>
    variant === 'primary'
      ? 'var(--color-primary)'
      : variant === 'secondary'
      ? 'white'
      : 'rgba(0, 0, 0, 0)'};
  border: none;
  border-radius: 0.375em;
  ${({ hasShadow }) => (hasShadow ? 'box-shadow: var(--elevation)' : '')};
  color: ${({ variant }) =>
    variant === 'primary' ? 'white' : 'current-color'};
  cursor: pointer;
  display: inline-flex;
  font: inherit;
  gap: 0.4em;
  padding: 0.5em 1em;
`;

export default ButtonStyled;
