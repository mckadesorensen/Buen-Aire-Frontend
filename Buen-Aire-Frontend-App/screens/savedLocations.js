import {Button, View, StyleSheet} from "react-native";
import {createStackNavigator} from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Ionicons";
import * as React from "react";

// This is just a template for the screen. The stuff will go inside this function
function SavedLocations({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                onPress={() => navigation.navigate('About')}
                title="Go to About"
            />
        </View>
    );
}

// Create a stack template, which will use to navigate, with
// the drawser navigation.
const SavedLocationsStack = createStackNavigator();
const SavedLocationsStackScreen=({navigation})=> (

    <SavedLocationsStack.Navigator screenOptions = {{
        headerStyle: {
            backgroundColor: "dodgerblue",

        },
        headerTintColor: 'white',
        headerTitleStyle: {
            fontWeight: "bold"
        },
    }}>
        <SavedLocationsStack.Screen name="Saved Locations" component={SavedLocations} options={
            {
                headerLeft:() =>(
                    <Icon.Button name = 'menu' size = {30} backgroundColor ='dodgerblue' onPress={()=>
                        navigation.openDrawer()}
                    />),
                headerRight:() =>(
                    <Icon.Button name = 'search' size = {30} backgroundColor = 'dodgerblue'/>
                    )
            }
        } />
    </SavedLocationsStack.Navigator>

);

export  default SavedLocationsStackScreen;