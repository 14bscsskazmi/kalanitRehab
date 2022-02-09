import React, {FunctionComponent, useEffect} from 'react';
import {Text, View, Image, ImageBackground} from 'react-native';
// Custom UI components.
import {SimpleButton} from '../../../global-components/buttons';
import {useGetPokemonByNameQuery} from '../../../network';

// Custom styles and constants.
import styles from './styles';
import globalStyles from '../../../global-styles';
import {TouchableOpacity} from 'react-native-gesture-handler';

const loginScreenLogo = require('../../../assets/images/login-screen-logo.png');
const welcomeScreenBackgroundImage = require('../../../assets/images/welcome-screen-background-image.png');
const cambiaLingua = require('../../../assets/images/cambia-lingua.png');

type Props = {
  navigation: any;
};
const WelcomeScreenContainer: FunctionComponent<Props> = function main({
  navigation,
}) {
  const {data, error, isLoading} = useGetPokemonByNameQuery('bulbasaur');
  useEffect(() => {
    if (error) {
      //
    } else if (isLoading === false) {
      console.log('data:  ', data);
    }
  }, [isLoading]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ImageBackground
        source={welcomeScreenBackgroundImage}
        style={styles.welcome_background_image}>
        <View style={styles.login_logo_view}>
          <Image source={loginScreenLogo} style={{width: 220, height: 22}} />
        </View>

        <View
          style={{
            // marginTop: 150,
            flex: 1,
            justifyContent: 'flex-end',
          }}>
          <Text style={[globalStyles.title]}>Benvenuto</Text>
          <Text style={[globalStyles.small, {marginTop: 14}]}>
            Allenati e vivi la nuova esperienza di vivere senza dolore
          </Text>
          <SimpleButton
            buttonText="Registrati"
            buttonType="PRIMARY"
            onPress={() => {
              navigation.navigate('QuestionarioScreen');
            }}
            buttonStyles={{
              marginTop: 150,
            }}
          />
          <SimpleButton
            buttonText="Accedi"
            buttonType="TRANSPARENT_WHITE"
            onPress={() => {
              navigation.navigate('LoginScreen');
            }}
            buttonStyles={{
              marginTop: 22,
            }}
          />
          <TouchableOpacity
            style={{
              marginTop: 53,
              alignItems: 'center',
            }}>
            <Image
              source={cambiaLingua}
              style={{
                width: 145,
                height: 36,
              }}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};
export default WelcomeScreenContainer;
