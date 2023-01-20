import React from "react";
import { useState } from 'react';
import {Text,  View, StyleSheet,ScrollView,TouchableOpacity } from 'react-native';
import { useStore } from "../../Store";
import { FontAwesome5,MaterialCommunityIcons } from "@expo/vector-icons";
export default function HabitManager (){
    const[state, dispatch] =useStore()
    const [test, setList] =useState(['Action 1',' Action 2', 'Action 3'])
    return(         
        <View style={styles.container}>
           <ScrollView style={styles.scroll} >
                    {test.map((value,index) =>( 
                        <View key={index}>
                            
                            <View style={styles.iconTitle}>
                                        <View style={styles.viewText}>
                                            <Text style={styles.textName}>
                                                {value}
                                            </Text>
                                            <Text style={styles.textRemind}>
                                                loi nhac
                                            </Text>
                                        </View>
                                        <TouchableOpacity >
                                            <MaterialCommunityIcons style={styles.iconDots} name="dots-horizontal-circle-outline" size={24} color="black" />
                                        </TouchableOpacity>
                            </View>
                            
                       
                        </View>
                       
                    ))}
                </ScrollView>  
        </View>
    );

}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
    },
    scroll:{
        //marginLeft: 5,
        marginTop: -40
    },
    iconTitle:{
        flexDirection:'row', 
        marginLeft: 20,
        marginTop: 50
    },
    viewText:{
        flex:1,
        flexDirection: 'column', 
        marginLeft: 30
    },
    textName:{
        fontSize: 20,
        fontWeight: "bold"
    },
    textRemind:{
        fontWeight: '100'
    },
    iconDots:{
        marginTop: 15,
        AlignItems: 'flex-end',
        marginRight:"8%"
    }
})
