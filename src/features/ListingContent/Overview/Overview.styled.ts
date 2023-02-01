import styled from 'styled-components';

export const PropertyOverviewStyled = styled.div`
  display: flex;
  gap: 2rem;

  > span {
    align-items: center;
    display: flex;
    gap: 0.4em;

    svg {
      fill: currentColor;
    }
  }
`;
export const AvailabilityOverviewStyled = styled.div`
  border-top: 1px solid hsl(0, 0%, 80%);
  display: grid;
  grid-template-columns: max-content auto;
  gap: 0.5rem 1rem;
  margin-top: 1rem;
  padding-top: 1rem;

  > :nth-child(odd) {
    color: hsl(0, 0%, 50%);
  }
`;
