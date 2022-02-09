import React, {FunctionComponent} from 'react';
import {Text, View, Image, ImageBackground} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

// Custom UI components.
import {SimpleButton} from '../../../global-components/buttons';
import SlidingQuestionarioItem from './sub-components/SlidingQuestionarioItem';
import SeiUnClinico from './sub-components/SeiUnClinico';

// Custom styles and constants.
import {SCREEN_WIDTH, COLORS, SCREEN_HEIGHT} from '../../../constants';
import styles from './styles';
import globalStyles from '../../../global-styles';

const loginScreenLogo = require('../../../assets/images/login-screen-logo.png');
const questionarioScreenBackgroundImage = require('../../../assets/images/questionario-screen-background-image.png');
const seiClinico = require('../../../assets/images/sei-clinico.png');

type Props = {
  navigation: any;
};

const QuestonarioScreenContainer1: FunctionComponent<Props> = function main({
  navigation,
}) {
  return (
    <View>
      <ImageBackground
        source={questionarioScreenBackgroundImage}
        style={styles.image_background_styles}
        imageStyle={{
          width: SCREEN_WIDTH,
          height: SCREEN_HEIGHT,
        }}>
        <KeyboardAwareScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.questionario_scroll_view}>
          <View style={styles.questionario_logo_view}>
            <Image source={loginScreenLogo} style={{width: 220, height: 22}} />
          </View>

          <View style={styles.questionario_text_view}>
            <View
              style={{
                paddingHorizontal: SCREEN_WIDTH * 0.05,
              }}>
              <Text style={[globalStyles.title, {lineHeight: 60}]}>
                Questionario
              </Text>
              <Text style={[globalStyles.small, styles.questionario_text1]}>
                Rispondi per avere un percorso personalizzato
              </Text>
            </View>
            <View>
              <SlidingQuestionarioItem />
            </View>
            <View style={styles.questionario_footer_buttons_view}>
              <SimpleButton
                buttonText="Accedi"
                buttonType="SECONDARY"
                onPress={() => {
                  navigation.navigate('LoginScreen');
                }}
                buttonStyles={{
                  width: (SCREEN_WIDTH * 0.9) / 2 - 10,
                  marginRight: 20,
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
                onPress={() => {
                  navigation.navigate('RegisterPatientScreen');
                }}
                buttonStyles={{
                  width: (SCREEN_WIDTH * 0.9) / 2 - 10,
                }}
              />
            </View>
            <SeiUnClinico
              onPress={() => {
                navigation.navigate('RegisterDoctorScreen');
              }}
            />
          </View>
        </KeyboardAwareScrollView>
      </ImageBackground>
    </View>
  );
};
export default QuestonarioScreenContainer1;
