import React from "react";
import { useState } from 'react';
import {Text,  View,StyleSheet,Button, TextInput } from 'react-native';
import Modal from "react-native-modal";
import TimePickerDialog from '@react-native-community/datetimepicker';
export default function DailyNotification (params){
    const [text, setText] = useState("Are your habits completed?");
    return(         
                <View>
                     <Modal isVisible={params.myIsmodalVisible} 
                        useNativeDriver={true}
                        onBackdropPress={() => params.setModalVisible(false)}
                        animationIn = 'bounceIn'
                        animationInTiming = {600}
                        animationOut ='bounceOut'
                        animationOutTiming = {500}
                    >
                    <View style={{height: '50%', backgroundColor: 'white', borderRadius: 30, borderWidth: 1,justifyContent: 'center'}}>
                        <View style={styles.container}>
                            <Text style={styles.tilte}>Daily Motivation</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={(text)=>setText(text)}
                                value={text}
                            />  
                            <Text style={styles.tilte}>Time</Text>
                            <View style={{flex:1}}>
                                <TimePickerDialog style={{alignSelf :'center'}} mode="time" value={new Date()} />
                            </View>
                             
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
        marginLeft: 30,
        fontSize: 25,
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
        
        marginLeft: 30,
        fontSize: 15,
        marginTop: 30,

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
})
