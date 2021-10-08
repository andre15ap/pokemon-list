import { COLORS } from '../library/colors';

export const getTypeColor = (type: string) => {
  switch(type.toLocaleLowerCase()) {
    case 'grass': {
      return {
        backgroundColor: COLORS.GREEN_LIGHT,
        textColor: COLORS.BLACK
      }
    }
    case 'poison': {
      return {
        backgroundColor: COLORS.PURPLE,
        textColor: COLORS.WHITE
      }
    }
    case 'fire': {
      return {
        backgroundColor: COLORS.ORANGE,
        textColor: COLORS.WHITE
      }
    }
    case 'water': {
      return {
        backgroundColor: COLORS.BLUE_LIGHT,
        textColor: COLORS.BLACK
      }
    }
    case 'electric': {
      return {
        backgroundColor: COLORS.BLUE,
        textColor: COLORS.WHITE
      }
    }
    case 'bug': {
      return {
        backgroundColor: COLORS.GREEN,
        textColor: COLORS.WHITE
      }
    }
    case 'ground': {
      return {
        backgroundColor: COLORS.BROW,
        textColor: COLORS.WHITE
      }
    }
    case 'flying': {
      return {
        backgroundColor: COLORS.YELLOW,
        textColor: COLORS.BLACK
      }
    }
    default: {
      return {
        backgroundColor: COLORS.GRAY,
        textColor: COLORS.WHITE
      }
    }
  }
}