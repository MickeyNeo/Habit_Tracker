import React from "react";
import { useState } from 'react';
import {Text,  View,StyleSheet,Button } from 'react-native';
import Modal from "react-native-modal";

export default function VactionMode (params){
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
                        <View style={{height: '50%', backgroundColor: 'white', borderRadius: 30, borderWidth: 1,justifyContent: 'center'}}>
                            <View style={styles.container}>
                                <Text style={styles.tilte}>Do you want to turn vacation mode on?</Text>
                                <Text style={styles.text}>Start Date</Text>
                                <Text style={styles.text}>End Date</Text>
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
        
        textAlign: 'center',
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
