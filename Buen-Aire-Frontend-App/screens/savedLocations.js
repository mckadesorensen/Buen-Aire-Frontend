import {Button, View, StyleSheet} from "react-native";
import {createStackNavigator} from "@react-navigation/stack";
import {Ionicons} from '@expo/vector-icons';
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
                headerLeft: () => (
                    <Ionicons name='menu' size={30} backgroundColor='dodgerblue' style={{ padding: 10 }} color={'white'} onPress={() =>
                        navigation.openDrawer()}
                    />)
            }
        } />
    </SavedLocationsStack.Navigator>

);

export  default SavedLocationsStackScreen;