import {Button, StyleSheet, Dimensions, View} from "react-native";
import MapView from 'react-native-maps';
import {createStackNavigator} from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Ionicons";
import * as React from "react";


function PurpleAir({ navigation }) {
    getPurpleAirData();
    return (
        <View style={styles.container}>
        <MapView style={styles.map}/>
        </View>
    );
}

function getPurpleAirData() {
    console.log('Requesting Purple Air data');
    const r = new XMLHttpRequest();
    r.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log('Received Purple Air data:')
            // TODO modify backend to remove need for double parse
            const data = JSON.parse(JSON.parse(r.responseText)['PurpleAir']);
            console.log(data);
        }
    }
    // TODO use API endpoint URL
    const url = 'https://doug-buen-aire-data-storage-5864.s3-us-west-2.amazonaws.com/test.json';
    r.open('GET', url);
    r.send();
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
const PurpleAirStack = createStackNavigator();
const PurpleAirStackScreen=({navigation})=> (

    <PurpleAirStack.Navigator screenOptions = {{
        headerStyle: {
            backgroundColor: "dodgerblue",

        },
        headerTintColor: 'white',
        headerTitleStyle: {
            fontWeight: "bold"
        },
    }}>
        <PurpleAirStack.Screen name="PurpleAir Map" component={PurpleAir} options={
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
    </PurpleAirStack.Navigator>

);


export  default PurpleAirStackScreen;