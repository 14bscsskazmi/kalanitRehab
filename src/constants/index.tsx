import {Dimensions, Platform} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const SMALL_DEVICE = SCREEN_WIDTH <= 420 && SCREEN_HEIGHT <= 695;

export const STATUS_BAR_HEIGHT = getStatusBarHeight();
export const COLORS = {
  white: '#ffffff',
  full_black: '#000000',
  off_white: '#DDDDDD',
  dark_grey: '#707070',
  light_green: '#7EB929',
  green: '#73BA42',
  default_blue: 'rgba(0, 75, 134,0.95)',
  dark_black: '#071733',
};
export const FONT_STYLES = {
  font: Platform.OS === 'ios' ? 'System' : 'Roboto',
  line_height_16: 16,
  line_height_19: 19,
  line_height_20: 20,
  line_height_22: 22,
  line_height_24: 24,
  line_height_26: 26,
  line_height_29: 29,
  line_height_18: 18,
  line_height_17: 17,
  line_height_41: 41,
  line_height_42: 42,
  line_height_53: 53,
  line_height_36: 36,
  line_height_14: 14,
  line_height_12: 12,
  line_height_32: 32,
  font_size_15: 15,
  font_size_50: 50,
  font_size_44: 44,
  font_size_32: 32,
  font_size_10: 10,
  font_size_14: 14,
  font_size_16: 16,
  font_size_18: 18,
  font_size_20: 20,
  font_size_22: 22,
  font_size_24: 24,
  font_size_34: 34,
  font_size_35: 35,
  font_size_30: 30,
  font_size_12: 12,
  font_size_13: 13,
  font_weight_400: '400',
  font_weight_500: '500',
  font_weight_700: '700',
};
