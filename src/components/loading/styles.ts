import styled from 'styled-components';

import { COLORS } from '../../library/colors';

export const Container = styled.section`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Load = styled.div`
  display: block;
  border: 12px solid ${COLORS.GRAY_LIGHT};
  border-radius: 50%;
  border-top: 12px solid ${COLORS.PRIMARY};
  width: 50px;
  height: 50px;
  -webkit-animation: spin 1s linear infinite;
  animation: spin 1.3s linear infinite;

  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
