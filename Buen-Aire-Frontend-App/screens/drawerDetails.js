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
        <View style = {{ flex:1, justifyContent:'center', alignContent:'center'}}>
            {/* Control the logo image*/}
            <View style={styles.topContent}>
                <Image source={require('../assets/Buen-Aire-Logo.png')} style={styles.image}/>
                <Text style={styles.imageText}> BUEN AIRE {'\n'}{'\n'}</Text>
            </View>

            <View style={styles.indexScale}>
                <Text style = {styles.title}>Air Quality Scale Index{'\n'}</Text>
                <Table borderStyle={styles.table}>
                <Row data={goodRange} style={styles.green} textStyle={styles.whiteText}/>
                <Row data={moderateRange} style={styles.yellow} textStyle={styles.blackText}/>
                <Row data={USGRange} style={styles.orange} textStyle={styles.blackText}/>
                <Row data={unhealthyRange} style={styles.red} textStyle={styles.whiteText}/>
                </Table>
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
        alignItems: "center",
        paddingBottom:20
    },
    indexScale: {
        paddingTop: 10, 
        paddingBottom: 10
    },  
    image:{
        flexDirection:'row',
        height:'100%',
        width: "80%",
    },
    imageText:{
        fontWeight:'bold',
        position:'absolute',
        top:'92%',
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