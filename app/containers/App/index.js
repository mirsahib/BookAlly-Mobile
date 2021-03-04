import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Dashboard from "../Dashboard/index";
import Login from "../Login/index";
import SplashScreen from "../SplashScreen/index";

const Drawer = createDrawerNavigator();

export default function DrawerNav() {
  return (
    <Drawer.Navigator initialRouteName="SplashScreen">
      <Drawer.Screen name="SplashScreen" component={SplashScreen} />
      <Drawer.Screen name="Dashboard" component={Dashboard} />
      <Drawer.Screen name="Login" component={Login} />
    </Drawer.Navigator>
  );
}
