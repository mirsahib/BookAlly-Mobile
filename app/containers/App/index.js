import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Dashboard from "../Dashboard/index";
import Login from "../Login/index";

const Drawer = createDrawerNavigator();

export default function DrawerNav() {
  return (
    <Drawer.Navigator initialRouteName="Dashboard">
      <Drawer.Screen name="Dashboard" component={Dashboard} />
      <Drawer.Screen name="Login" component={Login} />
    </Drawer.Navigator>
  );
}
