import styled from 'styled-components';

const ContentBlockStyled = styled.div`
  padding: 1rem 0 3rem;

  &:not(:last-child) {
    border-bottom: 1px solid hsl(0, 0%, 80%);
  }

  > h3:first-child {
    margin-bottom: 1rem;
  }
`;

export default ContentBlockStyled;
