import _ from 'lodash';
import {TextStyle} from 'react-native';

interface Font {
  [key: string]: {[key: string]: string};
}

interface Fonts {
  [key: string]: Font;
}

const Lato = {
  100: {fontFamily: 'Lato-Hairline'},
  '100italic': {fontFamily: 'Lato-HairlineItalic'},
  200: {fontFamily: 'Lato-Light'},
  '200italic': {fontFamily: 'Lato-LightItalic'},
  400: {fontFamily: 'Lato-Regular'},
  '400italic': {fontFamily: 'Lato-Italic'},
  700: {fontFamily: 'Lato-Bold'},
  '700italic': {fontFamily: 'Lato-BoldItalic'},
  800: {fontFamily: 'Lato-Black'},
  '800italic': {fontFamily: 'Lato-BlackItalic'},
};

const FONTS: Fonts = {
  Lato: Lato,
};

/*
  Helper class for cross-platform font styles
*/
class FontHelper {
  static font(fontParams: TextStyle): TextStyle {
    let {fontFamily, fontWeight} = fontParams;
    const {fontStyle} = fontParams;
    fontFamily = fontFamily || 'Lato';
    fontWeight = fontWeight || '400';
    const fontFamilySelection = FONTS[fontFamily] || {};
    const fontSelection =
      fontFamilySelection[fontWeight + (fontStyle || '')] || {};

    const styles = {
      ..._.omit(fontParams, ['fontFamily', 'fontWeight', 'fontStyle']),
      ...fontSelection,
    };

    return styles;
  }
}

export {FontHelper};
