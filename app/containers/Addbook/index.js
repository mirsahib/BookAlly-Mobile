import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NewBook from './NewBook'
const Stack = createStackNavigator();

function AddBookStackNav() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="New Book " component={NewBook}  options={({ navigation }) => ({  headerShown: false})}  />
      </Stack.Navigator>
  );
}

export default AddBookStackNav;