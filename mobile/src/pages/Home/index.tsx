import React, { useEffect, useState, useCallback, Fragment } from 'react';
import { ActivityIndicator, Alert, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';
import api from '../../services/api';

import {
  Container,
  ViewLogin,
  Page,
  Content,
  Name,
  DateView,
  Description,
  Date,
  ViewButtons,
  DeleteText,
  EditText,
} from './styles';
import { showErrors } from '../../utils';
interface HomeProps {
  navigation: StackNavigationProp<any, any>;
}

interface User {
  name: string;
  email: string;
  user_id: number;
}

type Post = {
  description: string;
  post_id: number;
  user: User;
  created_at: string;
};

type EditPost = {
  user_id: number;
  post_id: number;
};

const Home: React.FC<HomeProps> = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const isFocused = useIsFocused();

  const loadData = async () => {
    const storageUser = await AsyncStorage.getItem('@user');
    if (storageUser) {
      const parsedUser = JSON.parse(storageUser);
      setUser(parsedUser);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const listPosts = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await api.get<Post[]>('posts');
      setPosts(data);
    } catch (err) {
      navigation.navigate('Login');
    }
    setLoading(false);
  }, [navigation]);

  useEffect(() => {
    isFocused && listPosts();
  }, [listPosts, isFocused]);

  const editPost = async ({ user_id, post_id }: EditPost) => {
    if (user_id !== user?.user_id) {
      return Alert.alert('Você não pode editar essa postagem');
    }

    navigation.navigate('EditPost', { post_id });
  };

  const removePost = async ({ user_id, post_id }: EditPost) => {
    if (user_id !== user?.user_id) {
      return Alert.alert('Você não pode excluir essa postagem');
    }

    try {
      await api.delete(`posts/${post_id}`);
      setPosts(posts.filter(post => post.post_id != post_id));
    } catch (err) {
      showErrors(err);
    }
  };

  return (
    <Container>
      {loading ? (
        <ViewLogin>
          <ActivityIndicator color="#cc99ff" size="large" />
        </ViewLogin>
      ) : (
        <Page>
          {posts.map(({ description, user, created_at, post_id }) => (
            <Fragment key={post_id}>
              <Content>
                <Name>{user.name}</Name>
                <Description>{description}</Description>
                <DateView>
                  <Date>{created_at}</Date>
                </DateView>
              </Content>
              <ViewButtons>
                <TouchableOpacity
                  onPress={() => editPost({ user_id: user.user_id, post_id })}>
                  <EditText>Editar</EditText>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    removePost({ user_id: user.user_id, post_id })
                  }>
                  <DeleteText>Excluir</DeleteText>
                </TouchableOpacity>
              </ViewButtons>
            </Fragment>
          ))}
        </Page>
      )}
    </Container>
  );
};

export default Home;
