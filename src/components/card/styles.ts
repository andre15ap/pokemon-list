import styled from 'styled-components';

import { COLORS } from '../../library/colors';

const getTypeColor = (type: string) => {
  switch(type) {
    case 'Grass': {
      return COLORS.GREEN;
    }
    case 'Poison': {
      return COLORS.PURPLE;
    }
    case 'Fire': {
      return COLORS.ORANGE;
    }
    case 'Water': {
      return COLORS.BLUE;
    }
    default: {
      return COLORS.GRAY;
    }
  }
}

type Props =  {
  type: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${COLORS.GRAY_LIGHT};
  border-radius: 0.5rem;
  justify-content: space-between;
  box-shadow: 4px 4px 8px -3px ${COLORS.OPACITY};
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
    width: 70%;
    background: ${COLORS.WHITE};
    font-weight: 700;
    border-top-right-radius: 0.3rem;
    padding-left: 0.5rem;
    padding-top: 0.2rem;
    margin-bottom: -0.2rem;
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
  }

  > div {
    display: flex;
  }
`;

export const Type = styled.span`
  font-size: 0.8rem;
  border-radius: 0.3rem;
  background:  ${(props: Props) => getTypeColor(props.type)};
  padding: 0.1rem 0.3rem;
  color: ${COLORS.WHITE};
  margin-right: 0.3rem;
`;
