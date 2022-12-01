import React from "react";
import { useState } from 'react';
import {Text,  View, StyleSheet, ScrollView} from 'react-native';


export default function Theme (){
    return(         
        <View style={styles.container}>
            
            <ScrollView>
                <Text style={styles.text}>Habit Bar Style</Text>
                <Text style={styles.text}>Date Bar Style</Text>
                <Text style={styles.text}>Appearance</Text>
                <Text style={styles.text}>Habit Bar size</Text>
                <Text style={styles.text}>Streaks on Bar</Text>
                <Text style={styles.text}>Theme Color</Text>
            </ScrollView>    
            
        </View>
    );

}
const styles=StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'flex-start',
    },
    text:{   
        marginLeft: 30,
        fontSize: 20,
        marginTop: 30,
    }
})
