import {StyleSheet, Dimensions, View, Text,TouchableOpacity, Button} from "react-native";
import MapView, {Callout} from 'react-native-maps';
import {createStackNavigator} from "@react-navigation/stack";
import { Ionicons } from '@expo/vector-icons';
import Modal from "react-native-modal";
import * as React from "react";
import { Table, Row, Rows} from 'react-native-table-component';


// -------------------------------------------------------------------
// class PurpleAirMap

class PurpleAirMap extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            purpleAirMarkers: [], 
            lastRefreshedText: '',
            isModalVisible: false,
            pinName: 'Pin Name', 
            pinPMValue: 0.0, 
            pinLocationType: 'Outside',
            pinColor: 'green',
            pinQuality : 'Good',
            pin30min_avg: '0',
            pin1hour_avg: '0',
            pin1day_avg: '0',
            tableHead: ['Time Interval', 'Average PM2.5'],
            tableData: [
                ['30 min', '0'],
                ['1 hour', '0'],
                ['1 day', '0']
            ]
        };
        this.fetchData();
    }

    _toggleModal = () =>
        this.setState({isModalVisible: !this.state.isModalVisible});

    _setExpandedInfo = (pin, pmValue, locationType, color, quality, pm30min_avg, pm1hour_avg, pm1day_avg) =>
        this.setState({
            pinName:pin, 
            pinPMValue:pmValue, 
            pinLocationType:locationType, 
            pinColor:color, 
            pinQuality:quality,
            tableHead: ['Time Interval', 'Average PM2.5'],
            tableData: [
                ['30 min', pm30min_avg],
                ['1 hour', pm1hour_avg],
                ['1 day', pm1day_avg]
            ] 
        });

    render() {
        console.log('Rendering Purple Air map:', this.state.purpleAirMarkers.length, 'markers');
        return (
            <View>
                <Button
                    // TODO improve button appearance (make it look more like a button, add a refresh icon, etc.)
                    onPress={() => this.fetchData()}
                    title='Refresh data'
                    accessibilityLabel='Refresh data'
                />
                <Text style={[styles.centerText, styles.textPadding]}>{this.state.lastRefreshedText}</Text>
                <MapView
                        style={styles.map}
                        // TODO center on the user's location
                        initialRegion={{latitude: 64, longitude: -151, latitudeDelta: 25, longitudeDelta: 25}}
                        showsUserLocation={true}
                >

                    {this.state.purpleAirMarkers.map((marker, index) => (
                        // TODO use a custom marker icon (to distinguish the purple air markers
                        // from other location markers on the map)
                        <MapView.Marker
                            key={index}
                            coordinate={{latitude: marker.lat, longitude: marker.lon}}
                            pinColor={this.getPinColor(marker)}
                            onCalloutPress={()=>{
                                this._toggleModal(); 
                                this._setExpandedInfo(
                                    marker.name, 
                                    marker['pm_2.5'], 
                                    marker['location_type'], 
                                    this.getPinColor(marker),
                                    this.getPinQuality(marker),
                                    marker['30min_avg'],
                                    marker['1hour_avg'],
                                    marker['1day_avg'])
                            }}
                        >
                            <Callout sytle = {{height: 0, width: 0, padding: 20}}>
                                <Text style ={{fontWeight: 'bold', textAlign: 'center'}}>{marker.name}</Text>
                                <Text style={{textAlign: 'center'}}>{this.getMarkerDescription(marker)}</Text>
                                <Text style={{padding: 5, textAlign: 'center', color: 'dodgerblue', fontWeight: 'bold'}}>Tap to Expand</Text>
                            </Callout>

                        </MapView.Marker>
                    ))}
                </MapView>

                <Modal isVisible={this.state.isModalVisible}
                       animationIn="zoomInDown"
                       animationOut="zoomOutUp"
                       animationInTiming={10}
                       animationOutTiming={10}
                       backdropTransitionInTiming={10}
                       backdropTransitionOutTiming={10}
                       onBackdropPress={this._toggleModal}
                >
                    
                    <View style={styles.container2}>

                        <View style={styles.popupWindow}>
                            
                            <TouchableOpacity 
                                style={styles.closeButton} 
                                onPress={this._toggleModal}>
                                    <Ionicons name = 'close-sharp' size = {30} color = '#4590d1'></Ionicons>
                            </TouchableOpacity>

                            {/*Display pin name*/}
                            <Text style={styles.pinTitle}>{this.state.pinName}</Text>

                            {/*Display pin air quality status*/}
                            <Text style={styles.centerText}>Air Quality: {this.state.pinQuality}</Text>

                            {/*Display pin location type*/}
                            <Text style={styles.centerText}>{this.state.pinLocationType}</Text>
                            
                            {/*Display pin pm2.5 value */}
                            <View style={{
                                margin:10,
                                width: 100,
                                height: 100,
                                justifyContent: 'center',
                                borderRadius: 100 / 2,
                                backgroundColor: this.state.pinColor,
                                alignSelf:'center'
                            }}>
                                <Text style={{
                                    alignSelf: 'center',
                                    fontWeight: 'bold',
                                    color: 'white',
                                    fontSize: 20
                                }}>{this.state.pinPMValue}</Text>

                                <Text style={{alignSelf: 'center', 
                                color: 'white'}}>PM2.5</Text>
                            </View>
                            
                            {/*Display pin's air quality averages */}
                            <View style={styles.tablePadding}>
                                <Table borderStyle={styles.tableStyle}>
                                <Row data={this.state.tableHead} style={{backgroundColor: '#4BA6FF'}} textStyle={styles.tableTitle}/>
                                <Rows data={this.state.tableData} textStyle={styles.tableText}/>
                                </Table>
                            </View>

                            <Text style={{textAlign:'center', fontStyle: 'italic', color: '#696969'}}>{'\n'}Data Pulled from PurpleAir</Text>
                        </View>
                    </View>
                </Modal>

            </View>
        );
    }

    getPinColor(marker){
        let pmValue = Number(marker['pm_2.5']);
        {/*Green*/}
        var color = 'rgb(0, 128, 0)';
        if(pmValue >= 50 && pmValue < 100) {
            {/*yellow but rbg code is gold*/}
            color = 'rgb(255, 215, 0)';
        }
        if(pmValue >= 100 && pmValue < 150) {
            {/*orange but rgb code is darkOrange*/}
            color = 'rgb(255, 140, 0)';
        }
        if(pmValue >= 150) {
            {/*Red*/}
            color = 'rgb(255, 0, 0)';
        }
        return color;
    }
    
    getPinQuality(marker){
        let pmValue = Number(marker['pm_2.5']);
        var quality = 'Good';
        if(pmValue >= 50 && pmValue < 100) {
            quality = 'Moderate';
        }
        if(pmValue >= 100 && pmValue < 150) {
            quality = 'Unhealthy for Sensitive Groups (USG)';
        }
        if(pmValue >= 150) {
            quality = 'Unhealthy';
        }
        return quality;
    }


    getMarkerDescription(marker) {
        return 'PM2.5 value: ' + marker['pm_2.5'];
    }

    fetchData() {
        console.log('Requesting Purple Air data');
        const url = 'https://omp2k4oahe.execute-api.us-west-2.amazonaws.com/default/prod-buen-aire-egress_data';
        fetch(url)
            .then(result => result.json())
            .then(data => {
                let timeStr = this.formatTimestamp(new Date());
                data = data['PurpleAir'];
                console.log('Received Purple Air data:')
                console.log(data);
                this.setState({purpleAirMarkers: data, lastRefreshedText: 'Last refreshed: ' + timeStr});
            })
            .catch(console.error);
    }

    formatTimestamp(date) {
        return date.toDateString() + ', ' + date.toLocaleTimeString();
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
    container2: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    popupWindow: {
        height: '65%', 
        width: 350, 
        backgroundColor:'white', 
        borderRadius: 10, 
        justifyContent: 'flex-start',
    },
    closeButton: {
        padding: 10, 
        alignSelf: 'flex-start'
    },
    pinTitle: {
        padding: 5,
        flexWrap: 'wrap',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center'
    },
    textPadding:{
        padding: 5
    },
    centerText: {
        textAlign: 'center'
    },
    tableTitle: {
        fontWeight: 'bold', 
        padding: 7, 
        color: 'white', 
        textAlign: 'center'
    },
    tableText: {
        padding: 5, 
        textAlign: 'center'
    },
    tableStyle: {
        borderWidth: 2, 
        borderColor: '#4BA6FF'
    },
    tablePadding: {
        paddingTop: 20, 
        paddingLeft: 50, 
        paddingRight: 50
    }

    
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
                    />)
            }
        } />
    </PurpleAirStack.Navigator>

);


export  default PurpleAirStackScreen;