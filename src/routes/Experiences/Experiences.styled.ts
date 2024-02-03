import styled from 'styled-components';

export const Root = styled.div`
  padding-top: 4rem;

  > div {
    margin: 0 auto 2rem;
    max-width: 60ch;
  }

  form {
    margin: 0 auto;
    max-width: 60ch;
    min-height: 50vh;

    > div {
      + div {
        margin-top: 1.5rem;
      }
    }
  }

  label {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    > span {
      font-weight: 500;

      > span {
        display: block;
        font-size: 0.875rem;
        font-weight: 400;
      }
    }
  }

  input,
  textarea {
    border: 2px solid hsla(0, 0%, 0%, 0.25);
    border-radius: 4px;
    padding: 0.5rem;
    resize: vertical;

    &:focus-within {
      outline: none;
      border-color: var(--primary);
    }
  }

  button {
    background-color: var(--primary);
  }
`;
