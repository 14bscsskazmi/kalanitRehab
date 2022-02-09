import {StyleSheet, Platform} from 'react-native';
import {
  SCREEN_WIDTH,
  COLORS,
  STATUS_BAR_HEIGHT,
  SCREEN_HEIGHT,
} from '../../../constants';
import {isIphoneXorAbove} from '../../../helpers';

const styles = StyleSheet.create({
  // Register Screen Styles
  register_image_background_styles: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    // justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: COLORS.dark_black,
    paddingHorizontal: SCREEN_WIDTH * 0.05,
    // paddingBottom: isIphoneXorAbove() ? STATUS_BAR_HEIGHT + 20 : 20,
  },
  register_logo_view: {
    width: SCREEN_WIDTH * 0.9,
    alignItems: 'center',
  },
});
export default styles;
