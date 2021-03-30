import {Button, View} from "react-native";
import {createStackNavigator} from "@react-navigation/stack";
import {Ionicons} from '@expo/vector-icons';
import * as React from "react";

function UAFSmoke({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                onPress={() => navigation.navigate('About')}
                title="Go to About"
            />
        </View>
    );
}

const UAFSmokeStack = createStackNavigator();
const UAFSmokeStackScreen=({navigation})=> (

    <UAFSmokeStack.Navigator screenOptions = {{
        headerStyle: {
            backgroundColor: "dodgerblue",

        },
        headerTintColor: 'white',
        headerTitleStyle: {
            fontWeight: "bold"
        },
    }}>
        <UAFSmokeStack.Screen name="UAF Smoke Map" component={UAFSmoke} options={
            {
                headerLeft: () => (
                    <Ionicons name='menu' size={30} backgroundColor='dodgerblue' style={{ padding: 10 }} color={'white'} onPress={() =>
                        navigation.openDrawer()}
                    />),
                headerRight: () => (
                    <Ionicons name='search' size={30} backgroundColor='dodgerblue' style={{ padding: 10 }} color={'white'} />
                )
            }
        } />
    </UAFSmokeStack.Navigator>

);


export  default UAFSmokeStackScreen;