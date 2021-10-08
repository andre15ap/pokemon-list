import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;

  > img {
    width: 4rem;
    height: 4rem;
    cursor: pointer;
  }

  > h2 {
    font-size: 4rem;
  }

`;

 export const Title = styled.strong`
  font-size: 3rem;
 `