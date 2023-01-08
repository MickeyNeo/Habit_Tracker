import React from "react";
import { useState } from 'react';
import {Text,  View ,StyleSheet,Button,TouchableOpacity, TextInput} from 'react-native';
import Modal from "react-native-modal";
import { useStore} from "../../Store";
export default function SelectUnit (params){
    return(         
        <View >
            <Modal isVisible={params.myIsmodalVisible} 
                useNativeDriver={true}
                onBackdropPress={() => params.setModalVisible(false)}
                >
                    <View style={{
                                height: '20%',
                                marginTop: 'auto', 
                                backgroundColor: 'white', 
                                borderRadius: 30, 
                                borderWidth: 1}}>
                        <View style={styles.container}>
                            <View style ={{
                                borderRadius: 20, 
                                flex: 1, 
                                justifyContent: 'space-evenly', 
                                }}>
                                <Text style={styles.tilte}>Select Unit</Text>
                                <PreviewLayout
                                    values = {['count','steps','m','km','mile']}
                                    selectedValue={params.unit}
                                    setSelectedValue={params.setunit}
                                />
                                <PreviewLayout
                                    values = {['sec','min','hr','ml','oz']}
                                    selectedValue={params.unit}
                                    setSelectedValue={params.setunit}
                                />
                                <PreviewLayout
                                    values = {['Cal']}
                                    selectedValue={params.unit}
                                    setSelectedValue={params.setunit}
                                />
                            </View>
                        </View>
                    </View>
                </Modal>       
            
        </View>
    )

}
const PreviewLayout =({
    values,
    selectedValue,
    setSelectedValue, 
})=>(
    <View style = {{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        {values.map((value) =>(
            <TouchableOpacity style = {{ 
                borderRadius: 10, 
                width: 40,
                height: 20, 
                alignItems: 'center',
                backgroundColor: 'grey',
                justifyContent: 'center',
            }}
                key={value}
                onPress={() => setSelectedValue(value)}
            >
                <Text style = {{fontSize: 10 }}>
                    {value}
                </Text>
            </TouchableOpacity>
        ))}
    </View>
);
const styles=StyleSheet.create({
    container:{
        flex:1
    },
    tilte:{
        fontSize: 15,
        color: 'black',
        alignSelf: 'center',
    },
    buttonType:{
        textAlign: 'center',
        borderRadius: 10,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 10, 
        paddingVertical: 5,
        backgroundColor: 'pink',
    },
   
})
