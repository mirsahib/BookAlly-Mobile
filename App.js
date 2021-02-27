import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from "react";
import DraweNav from './app/drawer/index'
export default function App() {
  return (
        <NavigationContainer> 
           <DraweNav/>
        </NavigationContainer>
  );
}



