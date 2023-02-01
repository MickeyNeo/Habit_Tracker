import React from "react";
import { useState } from 'react';
import {Text,  View ,StyleSheet, ScrollView} from 'react-native';
import Modal from "react-native-modal";
import { getAllMemmo } from "../../Store/database";
import { useStore } from "../../Store";


export default function More (params){
    const[state, dispatch] = useStore()
    getAllMemmo(params.habit)
    // console.log(state.listMemo)
    // console.log(state.listMemoDate)
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
                    <View style={{height: '38%', backgroundColor: '#BDD6D0', borderRadius: 30, borderWidth: 1,justifyContent: 'center'}}>
                        <ScrollView style = {{ margin: '4%'}}>
                            {state.listMemo.map((memo,index) =>(
                                <View style={{flexDirection: 'row', margin: '3%', justifyContent: 'space-between'}}>
                                    <Text key={index}
                                        style = {{fontSize: 16, fontStyle: 'italic'}}>
                                            {memo}
                                    </Text>
                                    <Text key={index}
                                        style = {{fontSize: 12, marginTop: '1.5%'}}>
                                        {state.listMemoDate[index]}
                                    </Text>
                                    
                                </View>
                            ))}
                        </ScrollView>

                    </View>
            </Modal>       
            
        </View>
    )

}
