import {StyleSheet, Platform} from 'react-native';
import {
  SCREEN_WIDTH,
  COLORS,
  STATUS_BAR_HEIGHT,
  SCREEN_HEIGHT,
} from '../../../constants';
import {isIphoneXorAbove} from '../../../helpers';

const styles = StyleSheet.create({
  // Splash Screen Styles
  main_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  splash_image_background_styles: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.dark_black,
  },

  // Login Screen Styles

  login_image_background_styles: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: COLORS.dark_black,
    paddingTop: Platform.OS === 'ios' ? STATUS_BAR_HEIGHT + 60 : 60,
    paddingHorizontal: SCREEN_WIDTH * 0.05,
    paddingBottom: isIphoneXorAbove() ? STATUS_BAR_HEIGHT + 20 : 40,
  },
  login_logo_view: {
    width: SCREEN_WIDTH * 0.9,
    alignItems: 'center',
  },
  forgot_password: {textAlign: 'right', marginTop: 36},

  // Welcome SCreen Styles
  welcome_background_image: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    // justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: COLORS.dark_black,
    paddingTop: Platform.OS === 'ios' ? STATUS_BAR_HEIGHT + 70 : 70,
    paddingHorizontal: SCREEN_WIDTH * 0.05,
    paddingBottom: isIphoneXorAbove() ? STATUS_BAR_HEIGHT + 20 : 20,
  },
});
export default styles;
