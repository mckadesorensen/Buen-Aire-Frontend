import React from "react";
import {View, Text, StyleSheet, Image} from "react-native"
import {Drawer} from "react-native-paper"
import {DrawerItem} from "@react-navigation/drawer";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

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
                <Text style={styles.imageText}> BUEN AIRE </Text>
            </View>
            <View style = {{flex:2}}>

                {/* Controls the navigation labels and icons*/}
            <Drawer.Section >
                <DrawerItem label={"PurpleAir Map"} labelStyle={styles.labelStyle}
                            onPress={()=>{props.navigation.navigate("PurpleAir Map")}}
                            icon={({size}) => (<Icon name ='cloud-outline' color={'purple'} size={size}/>)}
                />
            </Drawer.Section>

            <Drawer.Section>
                <DrawerItem label={"UAF Smoke Map"} labelStyle={styles.labelStyle}
                            onPress={()=>{props.navigation.navigate("UAF Smoke Map")}}
                            icon={({size}) => (<Icon name ='cloud-outline' color={'blue'} size={size}/>)}
                />
            </Drawer.Section>

            <Drawer.Section>
                <DrawerItem label={"Saved Locations"} labelStyle={styles.labelStyle}
                            onPress={()=>{props.navigation.navigate("Saved Locations")}}
                            icon={({size}) => (<Icon name ='star-outline' color={'black'} size={size}/>)}
                />
            </Drawer.Section>

            <Drawer.Section>
                <DrawerItem label={"About"} labelStyle={styles.labelStyle}
                            onPress={()=>{props.navigation.navigate("About")}}
                            icon={({size}) => (<Icon name ='information' color={'black'} size={size}/>)}
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
    },
    image:{
        flexDirection:'row',
        height:'100%',
        width:"80%",
    },
    imageText:{
        fontWeight:'bold',
        position:'absolute',
        top:'85%',
        fontSize:24,
        color:'white',
    },
    labelStyle:{
        color: 'dodgerblue',
        fontWeight: 'bold',
    }
});