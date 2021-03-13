import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Icon  from "react-native-vector-icons/Ionicons";
import PurpleAirStackScreen from './screens/purpleair';
import AboutStackScreen from './screens/about';
import UAFSmokeStackScreen from './screens/uafsmoke';
import SavedLocationsStackScreen from './screens/savedLocations';

{/*

Although all the current dependencies should be installed for this project, if for some reason
some are missing, use the links below to see how to install them:

React Navigation setup: https://reactnavigation.org/docs/getting-started/
React Navigation Drawer: https://reactnavigation.org/docs/drawer-based-navigation/
React Navigation Stack: https://reactnavigation.org/docs/stack-navigator/
Vector Icons: https://www.npmjs.com/package/react-native-vector-icons#iconbutton-component

*/
}

const Drawer = createDrawerNavigator();
export default function App() {
    // Entry point for app
  return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="PurpleAir">
          <Drawer.Screen name="PurpleAir Map" component={PurpleAirStackScreen} />
          <Drawer.Screen name= "UAF Smoke Map" component={UAFSmokeStackScreen}/>
          <Drawer.Screen name="Saved Locations" component={SavedLocationsStackScreen}/>
          <Drawer.Screen name="About" component={AboutStackScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
  );
}