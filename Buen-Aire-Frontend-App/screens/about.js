import {Button, View} from "react-native";
import {createStackNavigator} from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Ionicons";
import * as React from "react";

// This is just a template for the screen. The stuff will go inside this function
function About({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => navigation.goBack()} title="Go back Purple Air" />
        </View>
    );
}

// Create a stack template, which will use to navigate, with
// the drawser navigation.
const AboutStack = createStackNavigator();
const AboutStackScreen=({navigation})=> (

    <AboutStack.Navigator screenOptions = {{
        headerStyle: {
            backgroundColor: "dodgerblue",

        },
        headerTintColor: 'white',
        headerTitleStyle:{
            fontWeight:"bold"
        },

    }}>
        <AboutStack.Screen name="About" component={About} options={{
            headerLeft:() =>(
                <Icon.Button name = 'menu' size = {30} backgroundColor ='dodgerblue' onPress={()=>
                    navigation.openDrawer()}
                /> ),


        }
        }/>
    </AboutStack.Navigator>

);


export  default AboutStackScreen;