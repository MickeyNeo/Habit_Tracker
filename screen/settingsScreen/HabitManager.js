import React from "react";
import { useState } from 'react';
import {Text,  View, StyleSheet,ScrollView,TouchableOpacity } from 'react-native';
import { useStore } from "../../Store";
import { FontAwesome5 } from "@expo/vector-icons";
export default function HabitManager (){
    const[state, dispatch] =useStore()

    return(         
        <View style={styles.container}>
           <ScrollView style={styles.scroll} >
                    {state.stateHabitOfDay.map((value,index) =>( 
                        <TouchableOpacity key={index}>
                            <View style={styles.iconTitle}>
                                <FontAwesome5  name={value} size={27} color='crimson' />
                                <View style={styles.viewText}>
                                    <Text style={styles.textName}>
                                        {value}
                                    </Text>
                                    <Text style={styles.textRemind}>
                                        loi nhac
                                    </Text>
                                </View>
                            </View>
                            
                        </TouchableOpacity>
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
        flexDirection: 'column', 
        marginLeft: 30
    },
    textName:{
        fontSize: 20,
        fontWeight: "bold"
    },
    textRemind:{
        fontWeight: '100'
    }
})
