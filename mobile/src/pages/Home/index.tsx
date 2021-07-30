import React, { useEffect, useState, useCallback } from 'react';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
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

interface HomeProps {
  navigation: StackNavigationProp<any, any>;
}

interface User {
  name: string;
}

type Post = {
  description: string;
  post_id: number;
  user: User;
  created_at: string;
};

const Home: React.FC<HomeProps> = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<Post[]>([]);

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
    listPosts();
  }, [listPosts]);

  return (
    <Container>
      {loading ? (
        <ViewLogin>
          <ActivityIndicator color="#cc99ff" size="large" />
        </ViewLogin>
      ) : (
        <Page>
          {posts.map(({ description, user, created_at }) => (
            <>
              <Content>
                <Name>{user.name}</Name>
                <Description>{description}</Description>
                <DateView>
                  <Date>{created_at}</Date>
                </DateView>
              </Content>
              <ViewButtons>
                <TouchableOpacity>
                  <EditText>Editar</EditText>
                </TouchableOpacity>
                <TouchableOpacity>
                  <DeleteText>Excluir</DeleteText>
                </TouchableOpacity>
              </ViewButtons>
            </>
          ))}
        </Page>
      )}
    </Container>
  );
};

export default Home;
