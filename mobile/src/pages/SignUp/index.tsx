import React, { useState, useCallback } from 'react';
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
} from './styles';

interface SignUpRequest {
  navigation: StackNavigationProp<any, any>;
}

const SignUp: React.FC<SignUpRequest> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loadingCreate, setLoadingCreate] = useState(false);

  const handleCreateAccount = useCallback(async () => {
    if (loadingCreate) {
      return;
    }

    setLoadingCreate(true);
    try {
      await api.post('users/signup', { email, password, name });
      Alert.alert('Cadastro realizado com sucesso');
      navigation.navigate('Login');
    } catch (err) {
      showErrors(err);
    }
    setLoadingCreate(false);
  }, [email, password, loadingCreate, navigation, name]);

  return (
    <Container>
      <ViewLabel>
        <Input placeholder="Nomel" value={name} onChangeText={setName} />
      </ViewLabel>
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
        <LoginButton onPress={handleCreateAccount}>
          <TextButton>
            {loadingCreate ? <ActivityIndicator color="#fff" /> : 'Cadastrar'}
          </TextButton>
        </LoginButton>
      </ViewButton>
    </Container>
  );
};

export default SignUp;
