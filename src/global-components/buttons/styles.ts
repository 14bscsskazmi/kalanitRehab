import {StyleSheet, Platform} from 'react-native';
import {SCREEN_WIDTH, COLORS} from '../../constants';

const styles = StyleSheet.create({
  button_container: {
    width: SCREEN_WIDTH * 0.9,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    flexDirection: 'row',
  },
  button_shadow: {
    shadowColor: COLORS.full_black,
    shadowOpacity: 0.16,
    shadowRadius: 10,
    shadowOffset: {
      height: 5,
      width: 0,
    },
    elevation: Platform.OS === 'android' ? 5 : 0,
  },

  social_button: {
    marginTop: 15,
    height: 45,
    borderRadius: 16,
    shadowColor: COLORS.full_black,
    shadowOpacity: 0.07,
    shadowRadius: 16,
    shadowOffset: {
      height: 7,
      width: 2,
    },
    elevation: Platform.OS === 'android' ? 5 : 0,
  },
});
export default styles;
