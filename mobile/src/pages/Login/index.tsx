import React, { useState } from 'react';
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
import { useCallback } from 'react';

interface LoginProps {
  navigation: StackNavigationProp<any, any>;
}

const Login: React.FC<LoginProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = useCallback(() => {
    console.log(email);
  }, [email]);

  return (
    <Container>
      <ViewLabel>
        <Input placeholder="E-mail" value={email} onChangeText={setEmail} />
      </ViewLabel>
      <ViewLabel>
        <Input
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
        />
      </ViewLabel>
      <ViewButton>
        <LoginButton onPress={handleLogin}>
          <TextButton>Login</TextButton>
        </LoginButton>
      </ViewButton>
      <ViewButton>
        <ButtonCreateAccount
          onPress={() => {
            navigation.navigate('SignUp');
          }}>
          <TextCreateAccount>Criar conta</TextCreateAccount>
        </ButtonCreateAccount>
      </ViewButton>
    </Container>
  );
};

export default Login;
