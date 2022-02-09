/* eslint-disable arrow-parens */
import React, {FunctionComponent, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  Text,
  View,
  Image,
  ImageBackground,
  Platform,
  Alert,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import DatePicker from 'react-native-datepicker';
import {RootState} from '../../../../store';
import {setPatientRegistrationData} from '../../../redux/slices/AuthSlice';

// Custom UI components.
import {TextInput} from '../../../global-components/inputs';
import {SimpleButton} from '../../../global-components/buttons';
import SeiUnClinico from './sub-components/SeiUnClinico';

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
  const [fullName, setFullName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [dateOfBirth, setDateOfBirth] = useState<string>('');
  /// const [date, setDate] = useState<Date>(new Date());
  // const [open, setOpen] = useState<boolean>(false);

  // useEffect(() => {
  //   console.log('updated: ', patientData);

  // }, [patientData]);

  // TODO: Reverse the order of Scroll view and Image Background below.
  const setRegistrationDataRedux = () => {
    dispatch(setPatientRegistrationData(['email', email]));
    dispatch(setPatientRegistrationData(['name', fullName]));
    dispatch(setPatientRegistrationData(['password', password]));
    dispatch(setPatientRegistrationData(['address', address]));
    dispatch(setPatientRegistrationData(['dob', dateOfBirth]));
    Alert.alert(
      'Controlla La Tua Email',
      'Hai ricevuto un’email di verifica. Conferma seguendo il link e attiva il tuo profilo.',
      [{text: 'OK', onPress: () => console.log('OK Pressed')}],
    );
    // navigation.navigate('OnboardingStack');
  };

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
          flexGrow: 1,
          paddingTop: Platform.OS === 'ios' ? STATUS_BAR_HEIGHT + 60 : 60,
          paddingBottom: isIphoneXorAbove() ? STATUS_BAR_HEIGHT + 25 : 45,
        }}>
        <View style={styles.register_logo_view}>
          <Image source={loginScreenLogo} style={{width: 220, height: 22}} />
        </View>

        <View style={{marginTop: 41}}>
          <Text style={[globalStyles.title]}>Registrati</Text>
          <Text style={[globalStyles.small, {marginTop: 14}]}>
            Morbi leo risus, porta ac consectetur acvestibulum at eros.
          </Text>
          <TextInput
            value={fullName}
            placeholder="John Doe"
            placeholderTextColor={COLORS.white}
            inputHeading="Nome e Cognome"
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
          <View
            style={{
              marginTop: 17,
            }}>
            <Text
              style={[
                globalStyles.normal,
                {color: COLORS.dark_grey, fontWeight: 'bold'},
              ]}>
              Data di Nascita
            </Text>
            <DatePicker
              style={{
                width: SCREEN_WIDTH * 0.9,
                marginTop: 11,
              }}
              date={dateOfBirth}
              mode="date"
              placeholderText="DD/MM/YYYY"
              format="DD/MM/YYYY"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              showIcon={false}
              customStyles={{
                dateInput: {
                  borderWidth: 0,
                  borderBottomWidth: 1,
                  borderBottomColor: COLORS.white,
                  width: SCREEN_WIDTH * 0.9,
                  alignItems: 'flex-start',
                },
                dateText: {...globalStyles.normal, fontWeight: 'bold'},
                // ... You can check the source to find the other keys.
              }}
              onDateChange={confirmDate => {
                // console.log(confirmDate);
                setDateOfBirth(confirmDate);
              }}
            />
          </View>

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
            buttonType={
              email.length > 0 &&
              password.length > 0 &&
              address.length > 0 &&
              dateOfBirth.length > 0 &&
              fullName.length > 0
                ? 'PRIMARY'
                : 'DISABLED'
            }
            onPress={() => {
              setRegistrationDataRedux();
            }}
            buttonStyles={{
              marginTop: 46,
            }}
          />
          <SeiUnClinico
            onPress={() => {
              // console.log('asdasd');
              navigation.navigate('RegisterDoctorScreen');
            }}
          />
        </View>
      </KeyboardAwareScrollView>
    </ImageBackground>
  );
};
export default RegisterScreenContainer;
