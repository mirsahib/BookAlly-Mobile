import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import DraweNav from "./DrawerNav";
export default function AppContainer() {
  return (
    <NavigationContainer>
      <DraweNav />
    </NavigationContainer>
  );
}
