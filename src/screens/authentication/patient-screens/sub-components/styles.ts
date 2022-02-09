import {StyleSheet} from 'react-native';
import {SCREEN_WIDTH, COLORS} from '../../../../constants';

const styles = StyleSheet.create({
  // Questionario page styles.
  item_main_container: {
    width: 195,
    height: 250,
    paddingTop: 24,
    paddingBottom: 30,
    paddingHorizontal: 24,
    borderRadius: 20,
    backgroundColor: 'rgba(23, 55, 122,0.75)',
    marginLeft: SCREEN_WIDTH * 0.05,
  },
  white_checkmark_view: {
    width: 34,
    height: 34,
    borderRadius: 34 / 2,
    backgroundColor: COLORS.light_green,
    alignItems: 'center',
    justifyContent: 'center',
  },
  white_checkmark_parent_view: {
    alignItems: 'flex-end',
    flex: 1,
  },
  white_checkmark_icon: {
    width: 11.7,
    height: 8.51,
  },
  item_title: {
    color: COLORS.green,
    marginTop: 23,
  },

  // Sei un clinico styles.
  sei_un_clinico_image: {
    width: 36,
    height: 36,
    borderRadius: 36 / 2,
  },
});
export default styles;
