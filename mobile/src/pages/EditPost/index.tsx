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
import { useEffect } from 'react';
import { useState } from 'react';
import api from '../../services/api';
import { showErrors } from '../../utils';

interface Params {
  params: {
    post_id?: number;
  };
}

interface EditProps {
  navigation: StackNavigationProp<any, any>;
  route: Params;
}

interface Post {
  post_id: number;
  description: string;
  user_id: number;
}

const EditPost: React.FC<EditProps> = ({ navigation, route }) => {
  const [post, setPost] = useState<Post | null>();
  const [loading, setLoading] = useState(false);
  const post_id = route.params.post_id;

  useEffect(() => {
    (async () => {
      if (!post_id) {
        navigation.goBack();
      }

      try {
        const { data } = await api.get(`posts/${post_id}`);
        setPost(data);
      } catch (err) {
        navigation.goBack();
      }
    })();
  }, [post_id, navigation]);

  const changeDescription = (text: string) => {
    if (!post) {
      return;
    }

    post.description = text;

    setPost({ ...post });
  };

  const editPost = async () => {
    setLoading(true);
    try {
      await api.put(`posts/${post_id}`, { description: post?.description });
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
          value={post?.description}
          onChangeText={changeDescription}
        />
      </TextAreaView>
      <ButtonView>
        <EditButton onPress={editPost}>
          <TextButton>
            {loading ? <ActivityIndicator color="#fff" /> : 'Salvar'}
          </TextButton>
        </EditButton>
      </ButtonView>
    </Container>
  );
};

export default EditPost;
