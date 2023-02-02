import styled from 'styled-components';

const ButtonStyled = styled.button<{ hasShadow: boolean }>`
  align-items: center;
  background: none;
  border: none;
  border-radius: 0.375em;
  cursor: pointer;
  display: inline-flex;
  font: inherit;
  line-height: 1;
  gap: 0.4em;
  justify-content: center;
  padding: 0.7em 1.5em 0.75em;
  ${({ hasShadow }) => (hasShadow ? 'box-shadow: var(--or-elevation)' : '')};

  &:focus-visible {
    outline: 2px dashed var(--or-color-primary);
  }
`;

export const PrimaryButtonStyled = styled(ButtonStyled)`
  background-color: var(--or-color-primary);
  color: white;
  transition: background-color var(--or-transition-style);

  &:hover {
    background-color: var(--or-color-primary-dark);
  }
`;

export const SecondaryButtonStyled = styled(ButtonStyled)`
  background-color: white;
  transition: outline var(--or-transition-style);

  &:hover {
    outline: 2px solid var(--or-color-primary);
  }
`;

export const IconButtonStyled = styled(ButtonStyled)`
  background-color: rgba(0, 0, 0, 0);
`;

export const LinkButtonStyled = styled(ButtonStyled)`
  background-color: rgba(0, 0, 0, 0);
  border-bottom: 1px solid currentColor;
  border-radius: 0;
  font-family: var(--or-font-sans-medium);
  padding: 0;
`;
