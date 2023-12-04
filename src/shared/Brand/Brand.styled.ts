import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const Root = styled(Link)`
  font-size: 1.75rem;
  font-weight: 900;
  letter-spacing: -0.05em;
  line-height: 1;
  padding: 0.9rem 1rem 1rem;
  position: sticky;
  text-decoration: none;
  text-transform: uppercase;
  top: 0;

  @media (max-width: 768px) {
    padding-left: 0;
  }
`;
