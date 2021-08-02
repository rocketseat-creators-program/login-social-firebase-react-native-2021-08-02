import React from 'react';
import {StatusBar, Alert} from 'react-native';
import {Button, Input, Divider, Text} from '@ui-kitten/components';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

import {CustomIcon} from '../../components/Icon';
import {Container, Row, ButtonContainer} from './styles';

const Login: React.FC = () => {
  const navigation = useNavigation();

  const handleSignIn = () => {
    navigation.navigate('Dashboard');
  };

  const handleFacebookLogin = async () => {
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);

    if (result.isCancelled) {
      Alert.alert('Login Cancelado');
      return;
    }
    const fbAccessToken = await AccessToken.getCurrentAccessToken();

    if (!fbAccessToken) {
      Alert.alert('Algo deu errado ao obter o token de acesso');
    }

    const facebookCredential = auth.FacebookAuthProvider.credential(
      fbAccessToken?.accessToken || '',
    );

    await auth().signInWithCredential(facebookCredential);

    navigation.navigate('Dashboard');
  };

  const onGoogleButtonPress = async () => {
    const {idToken} = await GoogleSignin.signIn();

    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    await auth().signInWithCredential(googleCredential);

    navigation.navigate('Dashboard');
  };

  return (
    <Container level="1">
      <StatusBar barStyle="light-content" />
      <Row align="center">
        <CustomIcon name="lock" width={92} height={92} />
      </Row>
      <Row>
        <Input placeholder="Usúario" style={{flex: 1}} />
      </Row>
      <Row>
        <Input placeholder="Senha" secureTextEntry={true} style={{flex: 1}} />
      </Row>
      <Row>
        <Button
          onPress={handleSignIn}
          status="primary"
          style={{flex: 1}}
          appearance="outline">
          Entrar
        </Button>
      </Row>
      <Row align="center">
        <Text category="h6">Ou entre utilizando</Text>
        <Divider />
      </Row>
      <Row align="center">
        <ButtonContainer onPress={handleFacebookLogin}>
          <CustomIcon name="facebook" />
        </ButtonContainer>
        <ButtonContainer onPress={onGoogleButtonPress}>
          <CustomIcon name="google" />
        </ButtonContainer>
      </Row>
    </Container>
  );
};
export default Login;
