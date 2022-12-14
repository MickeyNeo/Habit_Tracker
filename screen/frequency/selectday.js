import React from "react";
import { useState } from 'react';
import {Text,  View ,StyleSheet,Button,TouchableOpacity} from 'react-native';
import Modal from "react-native-modal";
import { FontAwesome5 } from '@expo/vector-icons'; 
import { useStore,setLanguage } from "../../Store";
export default function SelectFreq (params){
    const[state, dispatch] = useStore()
    const [lg,setLg] = useState('Monday')
    console.log(state)
    return(         
        <View >
            <Modal isVisible={params.myIsmodalVisible} 
                useNativeDriver={true}
                onBackdropPress={() => params.setModalVisible(false)}
                animationIn = 'bounceIn'
                animationInTiming = {600}
                animationOut ='bounceOut'
                animationOutTiming = {500}
                >
                    <View style={{height: '38%', backgroundColor: 'white', borderRadius: 30, borderWidth: 1,justifyContent: 'center'}}>
                        <View style={styles.container}>
                            <Text style={styles.tilte}>Track Habit on</Text>
                            <PreviewLayout
                                values = {['MON','TUE','WED','THU','FRI','SAT','SUN']}
                                selectedValue={lg}
                                setSelectedValue={setLg}
                            />
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
    <View style = {{flexDirection: 'row', flex: 1}}>
        {values.map((value) =>(
            <TouchableOpacity style = {{ 
                borderRadius: 10, 
                width: 45,
                height: 20, 
                alignItems: 'center',
                backgroundColor: 'green',
                justifyContent: 'space-between',
            }}
                key={value}
                onPress={() => setSelectedValue(value)}
            >
                <Text >
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
        marginLeft: 30,
        fontSize: 30,
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
   
})
