import styled from 'styled-components';

import { COLORS } from '../../library/colors';

type Props =  {
  typeColors: {
    backgroundColor: string,
    textColor: string
  };
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${COLORS.GRAY_LIGHT};
  border-radius: 0.5rem;
  justify-content: space-between;
  box-shadow: 2px 2px 6px -3px ${COLORS.OPACITY};
  max-width: 23rem;

  @media (max-width: 425px) {
    max-width: 100%;
  }
`;

export const ContentImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 15rem;

  > img {
    width: 100%;
    height: 100%;
    padding: 1rem;
    cursor: pointer;
    transition: 0.5s;

    :hover {
      padding: 0;
    }
  }
`;

export const ContentBody = styled.div`
  display: flex;
  flex-direction: column;

  > span {
    color: ${COLORS.GRAY};
    width: 65%;
    background: ${COLORS.WHITE};
    font-weight: 700;
    border-top-right-radius: 1rem;
    padding-left: 0.5rem;
    padding-top: 0.2rem;
    margin-bottom: -0.5rem;
    z-index: 10;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${COLORS.WHITE};
  padding-left: 0.5rem;
  padding-bottom: 0.8rem;
  border-bottom-right-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;

  > h2 {
    padding: 1rem 0;
    margin-top: 0.5rem;
  }

  > div {
    display: flex;
  }
`;

export const Type = styled.span`
  min-width: 5rem;
  font-size: 0.8rem;
  text-align: center;
  border-radius: 0.3rem;
  background:  ${(props: Props) => props.typeColors.backgroundColor};
  padding: 0.2rem 0.3rem;
  color: ${(props: Props) => props.typeColors.textColor};
  margin-right: 0.3rem;
`;
