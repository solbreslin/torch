import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const Root = styled(Link)`
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
  padding: 0.9rem 1rem 1rem;
  text-decoration: none;

  @media (max-width: 768px) {
    padding-left: 0;
  }
`;
