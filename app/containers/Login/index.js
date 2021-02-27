import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './LogIn'
const Stack = createStackNavigator();

function LoginStackNav() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
  );
}

export default LoginStackNav;