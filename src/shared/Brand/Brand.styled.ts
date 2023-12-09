import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const Root = styled(Link)`
  align-items: center;
  display: inline-flex;
  font-family: var(--font-x-sans);
  font-size: 2rem;
  font-weight: 600;
  gap: 0.5rem;
  letter-spacing: -0.01em;
  line-height: 1;
  padding: 0.9rem 1rem 1rem;
  position: sticky;
  text-decoration: none;
  text-transform: uppercase;
  top: 0;

  img {
    width: 6rem;
  }

  @media (max-width: 768px) {
    padding-left: 0;
  }
`;
