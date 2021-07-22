import React from 'react';
import {StatusBar} from 'react-native';
import {Button} from '@ui-kitten/components';
import {useNavigation} from '@react-navigation/native';

import {Container, Row, NameText, EmailText, Avatar} from './styles';

const Dashboard: React.FC = () => {
  const navigation = useNavigation();

  const handleLogoff = () => {
    navigation.goBack();
  };

  return (
    <Container level="1">
      <StatusBar barStyle="light-content" />
      <Row align="center">
        <Avatar source={{uri: 'https://i.pravatar.cc/120'}} />
      </Row>
      <Row align="center">
        <NameText>Pablo</NameText>
      </Row>
      <Row align="center">
        <EmailText>pablohdev@outlook.com</EmailText>
      </Row>
      <Row>
        <Button
          onPress={handleLogoff}
          status="primary"
          style={{flex: 1}}
          appearance="outline">
          Sair
        </Button>
      </Row>
    </Container>
  );
};
export default Dashboard;
