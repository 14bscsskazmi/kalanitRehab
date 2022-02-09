import React, {FunctionComponent} from 'react';
import {Text, Image, TouchableOpacity} from 'react-native';

// Custom styles and constants.
import {COLORS} from '../../../../constants';
import styles from './styles';
import globalStyles from '../../../../global-styles';

const seiClinico = require('../../../../assets/images/sei-clinico.png');

type Props = {
  onPress: () => void;
};

const SeiUnClinico: FunctionComponent<Props> = function main(props) {
  const {onPress} = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      delayPressIn={0}
      activeOpacity={0.7}
      style={{
        flexDirection: 'row',
        marginTop: 26,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image source={seiClinico} style={styles.sei_un_clinico_image} />
      <Text
        style={[
          globalStyles.small,
          {lineHeight: 18, marginLeft: 14, color: COLORS.green},
        ]}>
        Sei un clinico?
      </Text>
    </TouchableOpacity>
  );
};
export default SeiUnClinico;
