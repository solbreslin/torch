import styled from 'styled-components';

export const DescriptionStyled = styled.div<{ hasFade: boolean }>`
  position: relative;

  p {
    margin-bottom: 0.75em;
  }

  &:after {
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), white);
    bottom: 0;
    content: ${({ hasFade }) => (hasFade ? '""' : 'none')};
    height: 8rem;
    left: 0;
    position: absolute;
    right: 0;
    z-index: 1;
  }

  button {
    position: relative;
    z-index: 2;
  }
`;
