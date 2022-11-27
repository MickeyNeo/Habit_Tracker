import React from "react";
import { useState } from 'react';
import {Text,  View ,StyleSheet} from 'react-native';
import Modal from "react-native-modal";

export default function Language (params){
    return(         
        <View >
            <Modal isVisible={params.myIsmodalVisible} 
                useNativeDriver={true}
                onBackdropPress={() => params.setModalVisible(false)}
                animationIn = 'bounceIn'
                animationInTiming = {500}
                animationOut ="bounceOut"
                animationOutTiming = {500}
                >
                    <View style={{height: '38%', backgroundColor: 'white', borderRadius: 30, borderWidth: 1,justifyContent: 'center'}}>
                        <View style={styles.container}>
                            <Text style={styles.tilte}>Select Language</Text>
                            <Text>English</Text>
                            <Text>Vietnames</Text>
                        </View>
                        
                    </View>
                </Modal>       
            
        </View>
    )

}
const styles=StyleSheet.create({
    container:{
        flex:1
    },
    tilte:{
        marginLeft: 30,
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 20
    },
    text:{
        marginLeft: 30,
        magin: 40,
        fontSize: 15,
        marginTop: 20,

    }
})
