import {StyleSheet, Dimensions, View} from "react-native";
import MapView from 'react-native-maps';
import {createStackNavigator} from "@react-navigation/stack";
import { Ionicons } from '@expo/vector-icons';
import * as React from "react";


// -------------------------------------------------------------------
// class PurpleAirMap

class PurpleAirMap extends React.Component {

    constructor(props) {
        super(props);
        this.state = {purpleAirMarkers: []};
        this.fetchData();
    }

    render() {
        console.log('Rendering Purple Air map:', this.state.purpleAirMarkers.length, 'markers');
        return (
            <View style={styles.container}>
                <MapView
                        style={styles.map}
                        // TODO center on the user's location
                        initialRegion={{latitude: 64, longitude: -151, latitudeDelta: 25, longitudeDelta: 25}}>

                    {this.state.purpleAirMarkers.map((marker, index) => (
                        // TODO use a custom marker icon (to distinguish the purple air markers
                        // from other location markers on the map)
                        <MapView.Marker
                            key={index}
                            coordinate={{latitude: marker.lat, longitude: marker.lon}}
                            title={marker.name}
                            pinColor={this.getPinColor(marker)}
                            description={this.getMarkerDescription(marker)}
                        />
                    ))}
                </MapView>
            </View>
        );
    }

    getPinColor(marker){
        let pmValue = Number(marker['pm_2.5']);
        var color = 'green';
        if(pmValue >= 50 && pmValue < 100) {
            color = 'yellow';
        }
        if(pmValue >= 100 && pmValue < 150) {
            color = 'orange';
        }
        if(pmValue >= 150) {
            color = 'red';
        }
        return color;
    }

    getMarkerDescription(marker) {
        // TODO include all relevant data (see the markers on the official purple air map for ideas)
        return 'PM2.5 value: ' + marker['pm_2.5'];
    }

    fetchData() {
        console.log('Requesting Purple Air data');
        const url = 'https://omp2k4oahe.execute-api.us-west-2.amazonaws.com/default/prod-buen-aire-egress_data';
        fetch(url)
            .then(result => result.json())
            .then(data => {
                data = data['PurpleAir'];
                console.log('Received Purple Air data:')
                console.log(data);
                this.setState({purpleAirMarkers: data});
            })
            .catch(console.error);
    }
}

// end of class PurpleAirMap
// -------------------------------------------------------------------


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
        <PurpleAirStack.Screen name="PurpleAir Map" component={PurpleAirMap} options={
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
    </PurpleAirStack.Navigator>

);


export  default PurpleAirStackScreen;