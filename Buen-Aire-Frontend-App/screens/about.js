import {StyleSheet, View, Text} from "react-native";
import {createStackNavigator} from "@react-navigation/stack";
import {Ionicons} from '@expo/vector-icons';
import * as React from "react";

// This is just a template for the screen. The stuff will go inside this function
function About({ navigation }) {
    return (
        <View style={styles.container}>
        <Text style = {styles.bodyText}>Buen Aire is a
            real-time air quality monitoring tool.
            This tool utilizes data from Purple air to
            produce convenient air quality maps for
            scientists, researchers, and the general public.
        </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',

      justifyContent: 'flex-start',
    },
    bodyText:{
        padding: 15,
        fontSize: 18,
        textAlign: 'auto',
        lineHeight: 35,
        letterSpacing: 2,
        fontFamily:'serif'
    },
  });

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
            headerLeft: () => (
                <Ionicons name='menu' size={30} backgroundColor='dodgerblue' style={{ padding: 10 }} color={'white'} onPress={() =>
                    navigation.openDrawer()}
                />),
        }}/>
    </AboutStack.Navigator>

);


export  default AboutStackScreen;