import React from "react";
import { useState } from 'react';
import {Text,  View } from 'react-native';

export default function DailyNotification (params){
    return(         
                <View>
                    <Modal isVisible={params.myIsmodalVisible} 
                        useNativeDriver={true}
                        onBackdropPress={() => setModalVisible(false)}
                        animationIn = 'bounceIn'
                        animationInTiming = {500}
                        animationOut ="bounceOut"
                        animationOutTiming = {500}
                    >
                        <View style={{height: '38%', backgroundColor: 'white', borderRadius: 30, borderWidth: 1,justifyContent: 'center'}}>
                            <Text>Hello!</Text>
                        </View>
                    </Modal>
                </View>
    );

}