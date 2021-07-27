import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';

import {
  Container,
  ViewLabel,
  Input,
  LoginButton,
  ViewButton,
  TextButton,
  TextCreateAccount,
  ButtonCreateAccount,
} from './styles';

interface LoginProps {
  navigation: StackNavigationProp<any, any>;
}

const Login: React.FC<LoginProps> = ({ navigation }) => {
  return (
    <Container>
      <ViewLabel>
        <Input placeholder="E-mail" />
      </ViewLabel>
      <ViewLabel>
        <Input placeholder="Senha" />
      </ViewLabel>
      <ViewButton>
        <LoginButton onPress={() => {}}>
          <TextButton>Login</TextButton>
        </LoginButton>
      </ViewButton>
      <ViewButton>
        <ButtonCreateAccount
          onPress={() => {
            navigation.navigate('');
          }}>
          <TextCreateAccount>Criar conta</TextCreateAccount>
        </ButtonCreateAccount>
      </ViewButton>
    </Container>
  );
};

export default Login;
