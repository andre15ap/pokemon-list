import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 80%;

  > div {
    align-self: center;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
    grid-gap: 1.2rem;
    padding: 2rem 0;
  }

  @media (max-width: 720px) {
    max-width: 95%;
  }
`;

export const Empty = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
