import React, {FunctionComponent, useEffect} from 'react';
import {View, Image, ImageBackground} from 'react-native';
import {SCREEN_WIDTH, SCREEN_HEIGHT} from '../../../constants';

import styles from './styles';

const splashScreenLogo = require('../../../assets/images/splash-screen-logo.png');
const splashScreenBackgroundImage = require('../../../assets/images/splash-screen-background-image.png');

type Props = {
  navigation: any;
};

const SplashScreenContainer: FunctionComponent<Props> = function main({
  navigation,
}) {
  // const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('WelcomeScreen');
    }, 2500);
  });

  return (
    <View style={styles.main_container}>
      <ImageBackground
        source={splashScreenBackgroundImage}
        style={styles.splash_image_background_styles}
        imageStyle={{
          width: SCREEN_WIDTH,
          height: SCREEN_HEIGHT,
        }}>
        <Image source={splashScreenLogo} style={{width: 220, height: 306}} />
      </ImageBackground>
    </View>
  );
};
export default SplashScreenContainer;
