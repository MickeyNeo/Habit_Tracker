import React from "react";
import { useState } from 'react';
import {Text,  View } from 'react-native';
import Modal from "react-native-modal";

export default function UsageTips (params){
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
                        <Text>UsageTips</Text>
                    </View>
                </Modal>       
            
        </View>
    );

}