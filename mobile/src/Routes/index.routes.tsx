import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Login" component={Login} />
    </Tab.Navigator>
  );
}

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
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
