import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import EditPost from '../pages/EditPost';
import NewPost from '../pages/NewPost';

function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = 'document-text-outline';

          if (route.name === 'Home') {
            iconName = focused ? 'document-text-outline' : 'document-outline';
          } else if (route.name === 'NewPost') {
            iconName = focused ? 'receipt-outline' : 'reader-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#483d8b',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="Home"
        options={{ title: 'Postagens' }}
        component={Home}
      />
      <Tab.Screen
        name="NewPost"
        options={{ title: 'Nova Postagem' }}
        component={NewPost}
      />
    </Tab.Navigator>
  );
}

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="EditPost"
          component={EditPost}
          options={{ title: 'Editar Postagem' }}
        />
        <Stack.Screen name="Home" component={Tabs} />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ title: 'Cadastro' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
