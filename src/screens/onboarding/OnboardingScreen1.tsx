import React, {FunctionComponent} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Text, View, Image} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AutoHeightImage from 'react-native-auto-height-image';
import AppIntroSlider from 'react-native-app-intro-slider';
import {RootState} from '../../../store';

// Custom UI components.
import {SimpleButton} from '../../global-components/buttons';

// Custom styles and constants.
import {SCREEN_WIDTH, COLORS, SMALL_DEVICE} from '../../constants';
import styles from './styles';
import globalStyles from '../../global-styles';

const loginScreenLogo = require('../../assets/images/login-screen-logo.png');
const onboarding1 = require('../../assets/images/onboarding1.png');
const onboarding2 = require('../../assets/images/onboarding2.png');
const onboarding3 = require('../../assets/images/onboarding3.png');

const OnboardingScreenContainer1: FunctionComponent = function main() {
  const patientData = useSelector((state: RootState) => state.patientData);
  console.log('onboarding: ', patientData);

  const slides = [
    {
      key: 1,
      title: 'Onboarding 01',
      text: 'Vestibulum id ligula porta felis euismod semper.',
      onboarding: onboarding1,
    },
    {
      key: 2,
      title: 'Onboarding 02',
      text: 'Cras justo odio, dapibus ac facilisis in, egestas eget.',
      onboarding: onboarding2,
    },
    {
      key: 3,
      title: 'Onboarding 03',
      text: 'Vivamus sagittis lacus vel augue laoreet rutrum.',
      onboarding: onboarding3,
    },
  ];

  const renderItem = function renderItem({item}) {
    return (
      <View>
        <View style={styles.onboarding_text_view}>
          <Text style={[globalStyles.title, {lineHeight: 60}]}>
            {item.title}
          </Text>
          <Text style={[globalStyles.small, styles.onboarding_text1]}>
            {item.text}
          </Text>
        </View>

        <View
          style={{
            marginTop: SMALL_DEVICE ? 25 : 75,
            alignItems: 'center',
          }}>
          <AutoHeightImage
            source={item.onboarding}
            width={SMALL_DEVICE ? SCREEN_WIDTH * 0.73 : SCREEN_WIDTH * 0.9}
          />
        </View>
      </View>
    );
  };
  const onSlideChange = function onSlideChange( // When a user changes a slide, it gets called.
    currentIndex: number,
    prevIndex: number,
  ) {
    if (currentIndex === 2) {
      // setButtonState(true);
    } else if (currentIndex !== 2) {
      // setButtonState(false);
    }
    if (prevIndex) {
      // console.log(prevIndex);
    }
  };

  return (
    <View style={styles.onboarding_main_view}>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.onboarding_scroll_view}>
        <View style={styles.onboarding_logo_view}>
          <Image source={loginScreenLogo} style={{width: 220, height: 22}} />
        </View>
        <AppIntroSlider
          renderItem={renderItem}
          data={slides}
          onSlideChange={onSlideChange}
          showNextButton={false}
          showDoneButton={false}
          activeDotStyle={{backgroundColor: '#73BA42', marginTop: 50}}
          dotStyle={{backgroundColor: COLORS.dark_grey, marginTop: 50}}
          bottomButton={true}
        />

        <View style={styles.footer_buttons_view}>
          <SimpleButton
            buttonText="Salta Intro"
            buttonType="SECONDARY"
            onPress={() => {}}
            buttonStyles={{
              width: (SCREEN_WIDTH * 0.9) / 2 - 10,
              marginRight: 20,
              justifyContent: 'flex-start',
              paddingLeft: 20,
              // borderWidth: 2,
            }}
            buttonTextStyles={{
              color: COLORS.light_green,
              fontWeight: 'normal',
              fontSize: 15,
              lineHeight: 18,
            }}
          />
          <SimpleButton
            buttonText="Avanti"
            buttonType="PRIMARY"
            onPress={() => {}}
            buttonStyles={{
              width: (SCREEN_WIDTH * 0.9) / 2 - 10,
              // borderWidth: 2,
            }}
          />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};
export default OnboardingScreenContainer1;
