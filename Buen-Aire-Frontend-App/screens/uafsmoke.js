import {Button, View} from "react-native";
import {createStackNavigator} from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Ionicons";
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
                headerLeft:() =>(
                    <Icon.Button name = 'menu' size = {30} backgroundColor ='dodgerblue' onPress={()=>
                        navigation.openDrawer()}
                    />),
                headerRight:() =>(
                    <Icon.Button name = 'search' size = {30} backgroundColor = 'dodgerblue'/>
                )

            }
        } />
    </UAFSmokeStack.Navigator>

);


export  default UAFSmokeStackScreen;