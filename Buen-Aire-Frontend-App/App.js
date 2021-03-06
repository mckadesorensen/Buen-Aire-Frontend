import * as React from 'react';
import { createDrawerNavigator} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import PurpleAirStackScreen from './screens/purpleair';
import AboutStackScreen from './screens/about';
import {DrawerDetial} from "./screens/drawerDetails";

{/*
This file is the main entry for the whole app.

Although all the current dependencies should be installed for this project, if for some reason
some are missing, be sure to install all of the following:

React Navigation setup: https://reactnavigation.org/docs/getting-started/
React Navigation Drawer: https://reactnavigation.org/docs/drawer-based-navigation/
React Navigation Stack: https://reactnavigation.org/docs/stack-navigator/
Vector Icons: https://www.npmjs.com/package/react-native-vector-icons#iconbutton-component
React Native Map: https://github.com/react-native-maps/react-native-maps/blob/master/docs/installation.md
React Native Paper: https://callstack.github.io/react-native-paper/getting-started.html

*/}

const Drawer = createDrawerNavigator();
export default function App() {
    // Entry point for app
  return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="PurpleAir" drawerContent={props => <DrawerDetial{...props}/>}>
          <Drawer.Screen name="PurpleAir Map" component={PurpleAirStackScreen} />
          <Drawer.Screen name="About" component={AboutStackScreen}/>
        </Drawer.Navigator>
      </NavigationContainer>
  );
}