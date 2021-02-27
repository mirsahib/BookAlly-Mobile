import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Home'
import BrowseByGenre from './BrowseByGenre'
const Stack = createStackNavigator();

function DashboardStackNav() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="BrowseByGenre" component={BrowseByGenre} />
      </Stack.Navigator>
  
  );
}

export default DashboardStackNav;