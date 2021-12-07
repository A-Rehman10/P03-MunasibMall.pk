export const COLOR = {
  PRIMARY: '#0F73EE',
  WARNING: '#F5969B',
  BLACK: '#000000',
  BLACK_BLUE: '#020433',
  BLUE_GREY: '#404B69',
  BLUE: {
    90: '#F1F6FE',
    100: '#E7F1Fd',
    300: '#1DAFE8',
    400: '#1378ED',
    500: '#007AFF',
  },
  GREY: {
    100: '#F0F0F0',
    150: '#E7E7E7',
    200: '#E3E3E8',
    600: '#B5B5B5',
    700: '#979797',
    800: '#8B999F',
    DARK: '#9F9F9F',
    MUTED: '#DDDDDD',
  },
  RED: {
    100: '#FBE9E9',
    200: '#F5969B',
    300: '#FC494D',
    400: '#FB4546',
    500: '#D30000',
    TOMATO: '#FC2F39',
  },
  TRANSPARENT: 'transparent',
  WHITE: '#FFFFFF',
  TEXT_INPUT_DISABLED: '#EFEFEF90',
};

export const GRADIENT = {
  DISABLED: [COLOR.GREY.DARK, COLOR.GREY.MUTED],
  PRIMARY: [COLOR.PRIMARY, COLOR.BLUE[300]],
};
