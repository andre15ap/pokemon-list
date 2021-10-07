import styled from 'styled-components';

import { COLORS } from '../../library/colors';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${COLORS.PRIMARY};
  width: 100%;
  min-height: 8rem;
`;

export const Content = styled.div`
  min-width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > img {
    width: 5rem;
    height: 5rem;
  }

  > div {
    display: flex;

    > input {
      padding-left: 0.5rem;
      font-size: 1.2rem;
      height: 3rem;
      border-radius: 0.2rem;
    }

    > button {
      font-size: 1rem;
      height: 3rem;
      width: 3rem;
      border-radius: 0.3rem;
      color: ${COLORS.WHITE};
      margin-left: 0.5rem;
      background: ${COLORS.SECONDARY};
      line-height: 0;
    }
  }

  @media (max-width: 450px) {
    min-width: 95%;

    > img {
      width: 3rem;
      height: 3rem;
    }

    > div {
        > input {
        font-size: 1rem;
      }
    }
  }
`;