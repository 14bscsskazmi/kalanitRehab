import {Platform, StyleSheet} from 'react-native';
import {SCREEN_WIDTH, COLORS} from '../../constants';

const styles = StyleSheet.create({
  input_parent_container: {
    width: SCREEN_WIDTH * 0.9,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.off_white,
    height: 71,
    paddingBottom: 9,
    backgroundColor: 'transparent',
    flexDirection: 'row',
  },
  input_parent_shadow: {
    shadowColor: COLORS.full_black,
    shadowOpacity: 0.07,
    shadowRadius: 16,
    shadowOffset: {
      height: 7,
      width: 0,
    },
    elevation: Platform.OS === 'android' ? 5 : 0,
  },
  input_container: {
    color: COLORS.white,
    paddingTop: 11,
  },
});
export default styles;
