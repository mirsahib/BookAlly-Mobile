import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../Dashboard/index'
import AddBook from '../Addbook/index'
import Messages from '../Messages/index'
const Tab = createBottomTabNavigator();

export default function TabNav() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Dashboard" component={Dashboard} />
        <Tab.Screen name="AddBook" component={AddBook} />
        <Tab.Screen name="Messages" component={Messages} />
      </Tab.Navigator>
  );
}
