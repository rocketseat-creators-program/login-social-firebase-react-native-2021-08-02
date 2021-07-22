import React from 'react';
import {StatusBar, Image} from 'react-native';
import {Button, Input, Divider, Text} from '@ui-kitten/components';
import {useNavigation} from '@react-navigation/native';

import appleLogo from '../../assets/images/apple-logo.png';
import {CustomIcon} from '../../components/Icon';
import {Container, Row, ButtonContainer} from './styles';

const Login: React.FC = () => {
  const navigation = useNavigation();

  const handleSignIn = () => {
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
      <Row>
        <ButtonContainer onPress={() => handleSignIn()}>
          <CustomIcon name="facebook" />
        </ButtonContainer>
        <ButtonContainer onPress={() => handleSignIn()}>
          <CustomIcon name="google" />
        </ButtonContainer>
        <ButtonContainer onPress={() => handleSignIn()}>
          <Image source={appleLogo} />
        </ButtonContainer>
      </Row>
    </Container>
  );
};
export default Login;
