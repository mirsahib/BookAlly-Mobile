import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from "./Registration";
import Login from "../Login/index";
const Stack = createStackNavigator();

function RegistractionStackNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Registration"
        component={RegistrationScreen}
        options={({ navigation }) => ({ headerShown: false })}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={({ navigation }) => ({ headerShown: false })}
      />
    </Stack.Navigator>
  );
}

export default RegistractionStackNav;
