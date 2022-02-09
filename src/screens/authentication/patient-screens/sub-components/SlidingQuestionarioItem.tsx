import React, {FunctionComponent} from 'react';
import {View, Image, ScrollView, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
// import AutoHeightImage from 'react-native-auto-height-image';
// Custom UI components.
// import {SimpleButton} from '../../../../global-components/buttons';

// Custom styles and constants.
// import {SCREEN_WIDTH, COLORS, SCREEN_HEIGHT} from '../../../../constants';
import globalStyles from '../../../../global-styles';
import styles from './styles';

const whiteCheckMark = require('../../../../assets/images/white-checkmark.png');
const questionarioBackgroundImage = require('../../../../assets/images/questionario-item-background.png');

const SlidingQuestionarioItem: FunctionComponent = function main() {
  const questions = [
    {
      title: 'Il Dolore è Situato',
      text: 'sulle spalle, nel mezzo della schiena o nella parte bassa?',
    },
    {
      title: 'Il DolorePeggiora',
      text: 'quando respiri?',
    },
    {
      title: 'Il Dolore è Situato',
      text: 'sulle spalle, nel mezzo della schiena o nella parte bassa?',
    },
  ];

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{
        marginTop: 47,
      }}>
      {questions.map((item, index) => {
        return (
          <TouchableOpacity
            delayPressIn={0}
            activeOpacity={0.7}
            style={styles.item_main_container}>
            <View style={styles.white_checkmark_parent_view}>
              <View style={styles.white_checkmark_view}>
                <Image
                  source={whiteCheckMark}
                  style={styles.white_checkmark_icon}
                />
              </View>
            </View>
            <Text style={[globalStyles.sub_title, styles.item_title]}>
              {item.title}
            </Text>
            <Text style={[globalStyles.small, {marginTop: 25}]}>
              {item.text}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};
export default SlidingQuestionarioItem;
