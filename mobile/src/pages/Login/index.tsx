import React, { useState } from 'react';
import { ActivityIndicator, Alert } from 'react-native';
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
  const [loadingCreate, setLoadingCreate] = useState(false);
  const [loadingLogin, setLoadingLogin] = useState(false);

  const handleLogin = useCallback(async () => {
    if (loadingLogin) {
      return;
    }

    setLoadingLogin(true);

    try {
      const { data } = await api.post('users/login', { email, password });
      api.defaults.headers.common.Authorization = `Bearer ${data.token}`;
      setLoadingLogin(false);
    } catch (err) {
      showErrors(err);
      setLoadingLogin(false);
    }
  }, [email, password, loadingLogin]);

  const handleCreateAccount = useCallback(async () => {
    if (loadingCreate) {
      return;
    }

    setLoadingCreate(true);
    try {
      await api.post('users/signup', { email, password });
      Alert.alert('Cadastro realizado com sucesso');
    } catch (err) {
      showErrors(err);
    }
    setLoadingCreate(false);
  }, [email, password, loadingCreate]);

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
          <TextButton>
            {loadingLogin ? <ActivityIndicator color="#fff" /> : 'Login'}
          </TextButton>
        </LoginButton>
      </ViewButton>
      <ViewButton>
        <ButtonCreateAccount onPress={handleCreateAccount}>
          <TextCreateAccount>
            {loadingCreate ? <ActivityIndicator color="#fff" /> : 'Criar conta'}
          </TextCreateAccount>
        </ButtonCreateAccount>
      </ViewButton>
    </Container>
  );
};

export default Login;
