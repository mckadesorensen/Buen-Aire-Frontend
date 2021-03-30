import {StyleSheet, Dimensions, View} from "react-native";
import MapView from 'react-native-maps';
import {createStackNavigator} from "@react-navigation/stack";
import {Ionicons} from '@expo/vector-icons';
import * as React from "react";

// This is just a template for the screen. The stuff will go inside this function
function About({ navigation }) {
    return (
        <View style={styles.container}>
        <MapView style={styles.map} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
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