import React from "react";
import {View, Text, StyleSheet, Image} from "react-native"
import {Drawer} from "react-native-paper"
import {DrawerItem} from "@react-navigation/drawer";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Table, Row, Rows, Col, Cols} from 'react-native-table-component';

let goodRange = ['0 - 50', 'Good'];
let moderateRange = ['51 - 100', 'Moderate'];
let USGRange = ['101 - 150', 'Unhealthy for Sensitive Groups (USG)'];
let unhealthyRange = ['151 - 200', 'Unhealthy'];

{/*
This file contain the details for the drawer navigation. It defines how the
drawer looks.
*/}
export function DrawerDetial(props){
    return(
        <View style = {{flex: 1, flexDirection: 'column', justifyContent:'center', alignContent:'center'}}>
            {/* Control the logo image*/}
            <View style={styles.topContent}>
                <Image source={require('../assets/Buen-Aire-Logo.png')} style={styles.image}/>
                <Text style={styles.imageText}> BUEN AIRE {'\n'}{'\n'}</Text>
            </View>

            <View>
                <Text style={{paddingTop: 10, textAlign: 'center',textAlign: 'center',  color:'black', fontWeight: 'bold'}}>Air Quality Index Scale</Text>
                <Text style={{padding: 10, justifyContent: 'center', fontSize: 12}}>
                    PM 2.5 our primary measure of air quality. It refers to a category of particulate pollutant that is 2.5 microns or smaller in size.
                    </Text>
                <Text style={{paddingLeft: 10, paddingRight: 10, paddingBottom: 10, justifyContent: 'center', fontSize: 12}}>
                    The scale below shows color-coded tiers of air quality in terms of a pin's PM2.5 value. Each pin on the map changes color depending on its PM2.5 value.
                </Text>
            </View>

            <View style={{justifyContent:'center', padding: 10, alignItems: 'center', backgroundColor: 'rgb(0, 128, 0)', borderTopLeftRadius: 10, borderTopRightRadius: 10, marginLeft: 20, marginRight: 20}}>
                <Text style = {{fontSize: 13, color:'white', fontWeight: 'bold'}}>GOOD{'\n'}</Text>
                <Text style = {{margin: '-5%', color:'white', fontSize: 12}}>0 - 50 PM2.5{'\n'}</Text>
            </View>

            <View style={{justifyContent:'center', padding: 10, alignItems: 'center', backgroundColor: 'rgb(255, 215, 0)', marginLeft: 20, marginRight: 20}}>
                <Text style = {{fontSize: 13, color:'black', fontWeight: 'bold'}}>MODERATE{'\n'}</Text>
                <Text style = {{margin: '-5%', color:'black', fontSize: 12}}>51 - 100 PM2.5{'\n'}</Text>
            </View>

            <View style={{justifyContent:'center', padding: 10, alignItems: 'center', backgroundColor: 'rgb(255, 140, 0)', marginLeft: 20, marginRight: 20}}>
                <Text style = {{fontSize: 13, textAlign: 'center' ,color:'black', fontWeight: 'bold'}}>UNHEALTHY FOR SENSITIVE GROUPS{'\n'}</Text>
                <Text style = {{margin: '-5%', color:'black', fontSize: 12}}>101 - 150 PM2.5{'\n'}</Text>
            </View>

            <View style={{justifyContent:'center', padding: 10, alignItems: 'center', backgroundColor: 'rgb(255, 0, 0)', borderBottomLeftRadius: 10, borderBottomRightRadius: 10, marginBottom: 10, marginLeft: 20, marginRight: 20}}>
                <Text style = {{fontSize: 13, color:'white', fontWeight: 'bold'}}>UNHEALTHY{'\n'}</Text>
                <Text style = {{margin: '-5%', color:'white', fontSize: 12}}>151 - 200 PM2.5{'\n'}</Text>
            </View>
            

            <View style = {{flex:2}}>
                {/* Controls the navigation labels and icons*/}
                <Drawer.Section >
                    <DrawerItem label={"PurpleAir Map"} labelStyle={styles.labelStyle}
                                onPress={()=>{props.navigation.navigate("PurpleAir Map")}}
                            icon={({ size }) => (<MaterialCommunityIcons name ='cloud-outline' color={'purple'} size={size}/>)}
                    />
                </Drawer.Section>
                <Drawer.Section>
                    <DrawerItem label={"About"} labelStyle={styles.labelStyle}
                                onPress={()=>{props.navigation.navigate("About")}}
                            icon={({ size }) => (<MaterialCommunityIcons name ='information' color={'black'} size={size}/>)}
                    />
                </Drawer.Section>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    topContent: {
        flex:1,
        backgroundColor: "dodgerblue",
        alignItems:"center",
        paddingTop: 20,
        paddingBottom: 40,
    },
    indexScale: {
        paddingTop: 20, 
        paddingBottom: 20
    },  
    image:{
        flexDirection:'row',
        height:'100%',
        width:'70%',
    },
    imageText:{
        fontWeight:'bold',
        fontSize:24,
        color:'white',
        textAlign: 'center'
    },
    labelStyle:{
        color: 'dodgerblue',
        fontWeight: 'bold',
    },
    title:{
        textAlign: 'center', 
        fontWeight: 'bold', 
        fontSize: 15
    },
    table:{
        borderWidth: 2, borderColor: 'white'
    },
    green: {
        backgroundColor: 'green'
    },
    yellow: {
        backgroundColor: 'yellow'
    },
    orange: {
        backgroundColor: 'orange'
    },
    red: {
        backgroundColor: 'red',
    },
    blackText: {
        padding: 7, 
        color: 'black', 
        textAlign: 'center'
    },
    whiteText: {
        padding: 7, 
        color: 'white', 
        textAlign: 'center'
    }
});