import React, {FunctionComponent, useEffect, useState} from 'react';
import {Text, View, Image, ImageBackground, Platform} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../../store';
import {setDoctorRegistrationData, setPatientRegistrationData} from '../../../redux/slices/AuthSlice';

// Custom UI components.
import {TextInput} from '../../../global-components/inputs';
import {SimpleButton} from '../../../global-components/buttons';
import SeiUnPaziente from './sub-components/SeiUnPaziente';

// Custom styles and constants.
import {
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  COLORS,
  STATUS_BAR_HEIGHT,
} from '../../../constants';
import styles from './styles';
import globalStyles from '../../../global-styles';
import {isIphoneXorAbove} from '../../../helpers';

const loginScreenLogo = require('../../../assets/images/login-screen-logo.png');
const loginScreenBackgroundImage = require('../../../assets/images/register-screen-background-image.png');

type Props = {
  navigation: any;
};

const RegisterScreenContainer: FunctionComponent<Props> = function main({
  navigation,
}) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>('Test@gmail.com');
  const [fullName, setFullName] = useState<string>('John Doe');
  const [password, setPassword] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [areaOfOperation, setAreaOfOperation] = useState<string>('');
  /// const [date, setDate] = useState<Date>(new Date());
  // const [open, setOpen] = useState<boolean>(false);
  const setRegistrationDataRedux = () => {
    dispatch(setDoctorRegistrationData(['email', email]));
    dispatch(setDoctorRegistrationData(['name', fullName]));
    dispatch(setDoctorRegistrationData(['password', password]));
    dispatch(setDoctorRegistrationData(['address', address]));
    dispatch(setDoctorRegistrationData(['area', areaOfOperation]));
    navigation.navigate('OnboardingStack');
  };
  useEffect(() => {});
  // TODO: Reverse the order of Scroll view and Image Background below.

  return (
    <ImageBackground
      source={loginScreenBackgroundImage}
      style={styles.register_image_background_styles}
      imageStyle={{
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
      }}>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: Platform.OS === 'ios' ? STATUS_BAR_HEIGHT + 60 : 60,
          paddingBottom: isIphoneXorAbove() ? STATUS_BAR_HEIGHT + 25 : 40,
        }}>
        <View style={styles.register_logo_view}>
          <Image source={loginScreenLogo} style={{width: 220, height: 22}} />
        </View>

        <View style={{marginTop: 41}}>
          <Text style={[globalStyles.title]}>Registrati</Text>
          <Text style={[globalStyles.small, {marginTop: 14}]}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
            eget lacinia odio sem nec elit.
          </Text>
          <TextInput
            value={fullName}
            placeholder="Nome"
            placeholderTextColor={COLORS.white}
            inputHeading="Nome"
            inputParentStyles={{
              marginTop: 59,
            }}
            inputStyles={{
              fontWeight: 'bold',
              width: SCREEN_WIDTH * 0.9,
            }}
            onChangeText={(value: string) => {
              setFullName(value);
            }}
          />

          <TextInput
            value={areaOfOperation}
            placeholder="Siena"
            placeholderTextColor={COLORS.white}
            inputHeading="Area di Operatività"
            inputParentStyles={{
              marginTop: 17,
            }}
            inputStyles={{
              fontWeight: 'bold',
              width: SCREEN_WIDTH * 0.9,
            }}
            onChangeText={(value: string) => {
              setAreaOfOperation(value);
            }}
          />

          <TextInput
            value={address}
            placeholder="Indirizzo"
            placeholderTextColor={COLORS.white}
            inputHeading="Indirizzo"
            inputParentStyles={{
              marginTop: 17,
            }}
            inputStyles={{
              fontWeight: 'bold',
              width: SCREEN_WIDTH * 0.9,
            }}
            onChangeText={(value: string) => {
              setAddress(value);
            }}
          />
          <TextInput
            value={email}
            placeholder="Email"
            placeholderTextColor={COLORS.white}
            inputHeading="Email"
            inputParentStyles={{
              marginTop: 17,
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
          <SimpleButton
            buttonText="Registrati"
            buttonType="PRIMARY"
            onPress={() => {
              setRegistrationDataRedux();
            }}
            buttonStyles={{
              marginTop: 46,
            }}
          />
          <SeiUnPaziente
            onPress={() => {
              navigation.navigate('RegisterPatientScreen');
            }}
          />
        </View>
      </KeyboardAwareScrollView>
    </ImageBackground>
  );
};
export default RegisterScreenContainer;
