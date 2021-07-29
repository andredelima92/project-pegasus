import React, { useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import api from '../../services/api';
import { showErrors } from '../../utils';

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
  const [loadingLogin, setLoadingLogin] = useState(false);

  const handleLogin = useCallback(async () => {
    if (loadingLogin) {
      return;
    }

    setLoadingLogin(true);

    try {
      const {
        data: { token },
      } = await api.post('users/login', { email, password });

      api.defaults.headers.common.Authorization = `Bearer ${token}`;

      setLoadingLogin(false);
    } catch (err) {
      showErrors(err);
      setLoadingLogin(false);
    }
  }, [email, password, loadingLogin]);

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
          secureTextEntry={true}
        />
      </ViewLabel>
      <ViewButton>
        <LoginButton onPress={handleLogin}>
          <TextButton>
            {loadingLogin ? <ActivityIndicator color="#fff" /> : 'Login'}
          </TextButton>
        </LoginButton>
      </ViewButton>
      <ViewButton>
        <ButtonCreateAccount onPress={() => navigation.navigate('SignUp')}>
          <TextCreateAccount>Criar conta</TextCreateAccount>
        </ButtonCreateAccount>
      </ViewButton>
    </Container>
  );
};

export default Login;
