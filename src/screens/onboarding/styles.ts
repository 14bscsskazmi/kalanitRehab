import {StyleSheet} from 'react-native';
import {Platform} from 'react-native'
import {SCREEN_WIDTH, COLORS, STATUS_BAR_HEIGHT, SCREEN_HEIGHT} from '../../constants';
import {isIphoneXorAbove} from '../../helpers';

const styles = StyleSheet.create({
  // Login Screen Styles
  onboarding_main_view: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    alignItems: 'flex-start',
    backgroundColor: COLORS.dark_black,
    paddingTop: Platform.OS === 'ios' ? STATUS_BAR_HEIGHT + 60 : 60,
    paddingHorizontal: SCREEN_WIDTH * 0.05,
    paddingBottom: isIphoneXorAbove() ? STATUS_BAR_HEIGHT + 30 : 30,
  },
  onboarding_logo_view: {
    width: SCREEN_WIDTH * 0.9, 
    alignItems: 'center',
  },
  // Welcome Screen Styles
  onboarding_text1: {
    lineHeight: 18,
    marginTop: 14,
  },
  onboarding_text_view: {
    marginTop: 30,
    alignItems: 'center',
  },
  footer_buttons_view: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    // borderWidth: 1
    // marginTop: 50,
  },
  onboarding_scroll_view: {
    flexGrow: 1,
  },
});
export default styles;