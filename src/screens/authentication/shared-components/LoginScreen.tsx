import React, {FunctionComponent, useEffect, useState} from 'react';
import {Text, View, Image, ImageBackground} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
// Custom UI components.
import {TextInput} from '../../../global-components/inputs';
import {SimpleButton} from '../../../global-components/buttons';

// Custom styles and constants.
import {SCREEN_WIDTH, SCREEN_HEIGHT, COLORS} from '../../../constants';
import styles from './styles';
import globalStyles from '../../../global-styles';

const loginScreenLogo = require('../../../assets/images/login-screen-logo.png');
const loginScreenBackgroundImage = require('../../../assets/images/login-screen-background-image.png');

type Props = {
  navigation: any;
};

const LoginScreenContainer: FunctionComponent<Props> = function main({
  navigation,
}) {
  const [email, setEmail] = useState<string>('Test@gmail.com');
  const [password, setPassword] = useState<string>('');

  useEffect(() => {});

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
        <ImageBackground
          source={loginScreenBackgroundImage}
          style={styles.login_image_background_styles}
          imageStyle={{
            width: SCREEN_WIDTH,
            height: SCREEN_HEIGHT,
          }}>
          <View style={styles.login_logo_view}>
            <Image source={loginScreenLogo} style={{width: 220, height: 22}} />
          </View>

          <View
            style={
              {
                // marginTop: 150,
              }
            }>
            <Text style={[globalStyles.title]}>Accedi</Text>
            <Text style={[globalStyles.small, {marginTop: 14}]}>
              Scrivi la tua email e password per continuare il tuo cammino verso
              una vita felice
            </Text>
            <TextInput
              value={email}
              placeholder="Email"
              placeholderTextColor={COLORS.white}
              inputHeading="Email"
              inputParentStyles={{
                marginTop: 59,
              }}
              inputStyles={{
                fontWeight: 'bold',
                width: SCREEN_WIDTH * 0.9,
              }}
              onChangeText={(value: string) => {
                setEmail(value);
              }}
            />
            <TextInput
              value={password}
              placeholder="Password"
              placeholderTextColor={COLORS.white}
              inputHeading="Password"
              inputParentStyles={{
                marginTop: 17,
              }}
              inputStyles={{
                fontWeight: 'bold',
                width: SCREEN_WIDTH * 0.9,
              }}
              secureTextEntry={true}
              onChangeText={(value: string) => {
                setPassword(value);
              }}
            />
            <Text
              style={[globalStyles.small, styles.forgot_password]}
              onPress={() => {
                // console.log('asdasd')
              }}>
              Hai dimenticato la password?
            </Text>
            <SimpleButton
              buttonText="Accedi"
              buttonType="PRIMARY"
              onPress={() => {
                navigation.navigate('OnboardingStack');
              }}
              buttonStyles={{
                marginTop: 46,
              }}
            />
            <SimpleButton
              buttonText="Registrati"
              buttonType="SECONDARY"
              onPress={() => {
                navigation.navigate('QuestionarioScreen');
              }}
              buttonStyles={{
                marginTop: 22,
                borderColor: COLORS.light_green,
                borderWidth: 1,
              }}
            />
          </View>
        </ImageBackground>
      </KeyboardAwareScrollView>
    </View>
  );
};
export default LoginScreenContainer;
