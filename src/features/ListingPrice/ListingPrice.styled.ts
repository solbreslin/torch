import styled from 'styled-components';

export const ListingPriceStyled = styled.div`
  box-shadow: var(--or-elevation);
  border-radius: 0.375em;
  display: grid;
  margin-top: 1rem;
  padding: 1.5rem;

  hr {
    border: none;
    background-color: hsl(0, 0%, 80%);
    display: block;
    height: 1px;
    margin: 1rem 0;
    width: 100%;
  }

  button {
    margin-top: 1rem;
  }
`;

export const AmountStyled = styled.div`
  h2 {
    margin-bottom: 0.25rem;

    small {
      font-weight: normal;
      font-size: 0.6em;
    }
  }
`;

export const AdditionalInfoStyled = styled.div`
  p {
    align-items: center;
    display: flex;
    gap: 0.4em;
    margin: 0.25rem 0;
  }
`;

export const FeesStyled = styled.div`
  p {
    align-items: center;
    display: flex;
    gap: 0.4em;
    margin: 0.25rem 0;
  }
`;
