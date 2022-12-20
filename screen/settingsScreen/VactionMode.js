import React from "react";
import { useState } from 'react';
import {Text,  View,StyleSheet,Button,ScrollView,TouchableOpacity   } from 'react-native';
import Modal from "react-native-modal";
import TimePickerDialog from '@react-native-community/datetimepicker';
import { FontAwesome5 } from "@expo/vector-icons";
import { useStore } from "../../Store";
export default function VactionMode (params){
    const[state, dispatch] =useStore()
    return(         
                <View>
                    <Modal isVisible={params.myIsmodalVisible} 
                        useNativeDriver={true}
                        onBackdropPress={() => params.setModalVisible(false)}
                        animationIn = 'bounceIn'
                        animationInTiming = {500}
                        animationOut ="bounceOut"
                        animationOutTiming = {500}
                    >
                        <View style={{height: '60%', backgroundColor: 'white', borderRadius: 30, borderWidth: 1,justifyContent: 'center'}}>
                            <View style={styles.container}>
                                <Text style={styles.tilte}>Do you want to turn vacation mode on?</Text>
                                <View style={{flex:0.5,flexDirection:'row'}}>
                                    <View style={styles.startEnd}>
                                        <Text style={styles.text}>Start</Text>
                                        <TimePickerDialog style={{alignSelf :'center'}} mode="date" value={new Date()} />
                                    </View>
                                    <View  style={styles.startEnd}>
                                        <Text style={styles.text}>End</Text>
                                        <TimePickerDialog style={{alignSelf :'center'}} mode="date" value={new Date()} />
                                    </View>  
                                </View>
                                <ScrollView>
                                    {state.stateHabitOfDay.map((value,index) =>( 
                                        <TouchableOpacity key={index}>
                                        <View style={styles.iconTitle}>
                                            <FontAwesome5  name={value} size={27} color='crimson' />
                                        </View>
                                        </TouchableOpacity>
                                    ))}
                                </ScrollView>
                                
                            </View>
                        <View style={styles.buttonType}>
                            <Button  title="Confirm" color="white" onPress={() => params.setModalVisible(false)} />
                        </View>
                        </View>
                    </Modal>
                </View>
    );

}
const styles=StyleSheet.create({
    container:{
        flex:1
    },
    tilte:{
        marginLeft: 20,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 20
    },
    buttonType:{
        textAlign: 'center',
        borderRadius: 10,
        //paddingHorizontal: 5,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 10, 
        paddingVertical: 5,
        backgroundColor: 'pink',
    },
    text:{
        
        //textAlign: 'center',
        fontSize: 15,

    },
    input: {
        backgroundColor: '#e9e2e2',
        height: 60,
        marginLeft: 30,
        marginTop: 20,
        marginRight: 30,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
    },
    startEnd:{
        flex:1,
        flexDirection:'column',
        marginTop: '4%',
        margin: '20%',
        
    },
    iconTitle:{
        flexDirection:'row', 
        marginLeft: 20,
        marginTop: '5%'
    },
})
