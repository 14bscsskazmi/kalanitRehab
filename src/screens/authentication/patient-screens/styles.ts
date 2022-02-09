import {StyleSheet, Platform} from 'react-native';
import {
  SCREEN_WIDTH,
  COLORS,
  STATUS_BAR_HEIGHT,
  SCREEN_HEIGHT,
} from '../../../constants';
import {isIphoneXorAbove} from '../../../helpers';

const styles = StyleSheet.create({
  // Questionario page styles.
  image_background_styles: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: COLORS.dark_black,
  },
  questionario_footer_buttons_view: {
    flexDirection: 'row',
    paddingHorizontal: SCREEN_WIDTH * 0.05,
    marginTop: 30,
  },
  questionario_logo_view: {
    width: SCREEN_WIDTH * 0.9,
    alignItems: 'center',
  },
  questionario_text1: {
    lineHeight: 18,
    marginTop: 14,
  },
  questionario_text_view: {
    flex: 1,
    marginTop: 30,
    justifyContent: 'flex-end',
    // alignItems: 'center',
  },
  questionario_scroll_view: {
    flexGrow: 1,
    paddingBottom: isIphoneXorAbove() ? STATUS_BAR_HEIGHT + 25 : 40,
    paddingTop: Platform.OS === 'ios' ? STATUS_BAR_HEIGHT + 60 : 60,
  },
  questionario_main_view: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    alignItems: 'flex-start',
    backgroundColor: COLORS.dark_black,
    paddingTop: Platform.OS === 'ios' ? STATUS_BAR_HEIGHT + 60 : 60,
    paddingHorizontal: SCREEN_WIDTH * 0.05,
    paddingBottom: isIphoneXorAbove() ? STATUS_BAR_HEIGHT + 20 : 40,
  },

  // Register Screen Styles
  register_image_background_styles: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    // justifyContent: 'space-between',
    // alignItems: 'flex-start',
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
