import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./SplashScreen";

const Stack = createStackNavigator();

export default function SplashScreenNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={({ navigation }) => ({ headerShown: false })}
      />
    </Stack.Navigator>
  );
}
