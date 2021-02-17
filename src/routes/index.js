import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import Home from '../screens/Home';
import Login from '../screens/Login';

const Stack = createStackNavigator();

export default function Root() {
  const { logged } = useSelector((state) => state.auth);

  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode={{ show: false }}
        initialRouteName={logged ? 'Home' : 'Login'}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
