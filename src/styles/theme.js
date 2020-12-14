import {blue, green, gray, red, text} from './parts/colors';
import {fontSize, fontFamily} from './parts/fonts';
import breakpoints from './parts/breakpoints';

export default {
  colors: {
    blue,
    green,
    red,
    gray,
  },
  primary: blue,
  shape: {
    borderColor: gray[300],
    borderRadius: '0.25rem'
  },
  fontSize,
  fontFamily,
  fontColor: {
    body: text
  },
  breakpoints,
  button: {
    primary: {
      normal: {
        backgroundColor: blue.normal,
        borderColor: blue.normal,
        text: 'white'
      },
      hover: {
        backgroundColor: blue.dark,
        borderColor: blue.dark,
        text: 'white'
      },
      active: {
        backgroundColor: blue.dark,
        borderColor: blue.dark,
        text: 'white'
      },
      disabled: {
        backgroundColor: blue.normal,
        borderColor: blue.normal,
        text: 'white'
      }
    }
  }
};
