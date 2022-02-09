import {StyleSheet, Platform} from 'react-native';
import {COLORS, FONT_STYLES, SCREEN_WIDTH} from '../constants';

const styles = StyleSheet.create({
  title: {
    fontSize: FONT_STYLES.font_size_50,
    // lineHeight: FONT_STYLES.line_height_42,
    fontWeight: 'bold',
    fontFamily: FONT_STYLES.font,
    color: COLORS.white,
  },
  sub_title: {
    fontSize: FONT_STYLES.font_size_32,
    lineHeight: FONT_STYLES.line_height_32,
    fontWeight: 'bold',
    fontFamily: FONT_STYLES.font,
    color: COLORS.white,
  },
  small: {
    fontSize: FONT_STYLES.font_size_15,
    // lineHeight: FONT_STYLES.line_height_42,
    fontWeight: 'normal',
    fontFamily: FONT_STYLES.font,
    color: COLORS.white,
  },
  normal: {
    fontSize: FONT_STYLES.font_size_20,
    lineHeight: FONT_STYLES.line_height_24,
    fontWeight: 'normal',
    fontFamily: FONT_STYLES.font,
    color: COLORS.white,
  },
  ios_padding_top: {
    paddingTop: Platform.OS === 'ios' ? 0 : null,
    backgroundColor: COLORS.white,
  },
  default_horizontal_padding: {
    paddingHorizontal: SCREEN_WIDTH * 0.05,
  },
  align_items_center: {
    alignItems: 'center',
  },
  justify_content_center: {
    justifyContent: 'center',
  },
  flex_1: {
    flex: 1,
  },
  flex_row: {
    flexDirection: 'row',
  },
  bold: {
    fontWeight: 'bold',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default styles;
