import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { ActivityIndicator } from 'react-native';

import {
  Container,
  TextArea,
  TextAreaView,
  EditButton,
  TextButton,
  ButtonView,
} from './styles';
import { useState } from 'react';
import api from '../../services/api';
import { showErrors } from '../../utils';

interface NewProps {
  navigation: StackNavigationProp<any, any>;
}

const NewPost: React.FC<NewProps> = ({ navigation }) => {
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  const store = async () => {
    setLoading(true);
    try {
      await api.post('posts', { description });
      setLoading(false);
      navigation.navigate('Home');
    } catch (err) {
      showErrors(err);
      setLoading(false);
    }
  };

  return (
    <Container>
      <TextAreaView>
        <TextArea
          multiline={true}
          numberOfLines={12}
          value={description}
          onChangeText={setDescription}
          placeholder="Compartilhe sua idéia aqui..."
        />
      </TextAreaView>
      <ButtonView>
        <EditButton onPress={store}>
          <TextButton>
            {loading ? <ActivityIndicator color="#fff" /> : 'Cadastrar'}
          </TextButton>
        </EditButton>
      </ButtonView>
    </Container>
  );
};

export default NewPost;
