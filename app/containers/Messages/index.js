import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FriendList from './FriendList'
const Stack = createStackNavigator();

function MessagesStackNav() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Friend List" component={FriendList}  options={({ navigation }) => ({  headerShown: false})}  />
      </Stack.Navigator>
  );
}

export default MessagesStackNav;