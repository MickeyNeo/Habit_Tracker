import React from "react";
import { useState } from 'react';
import {Text,  View ,StyleSheet,Button,TouchableOpacity} from 'react-native';
import Modal from "react-native-modal";
import { FontAwesome5 } from '@expo/vector-icons'; 

export default function Language (params){
    const [lg,setLg] = useState('English')
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
                            <Text style={styles.tilte}>Select Language</Text>
                            {/* 
                            <Text style={styles.text}>English</Text>
                            <Text style={styles.text}>Vietnamese</Text>
                            <Text style={styles.text}>French</Text>
                            <Text style={styles.text}>German</Text>
                            <FontAwesome5 name="check" size={24} color="transparent" /> */}
                            <PreviewLayout
                                values={["English", "Vietnamese", "French", "German"]}
                                selectedValue={lg}
                                setSelectedValue={setLg}
                            />
                        </View>
                        <View style={styles.buttonType}>
                            <Button  title="Confirm" color="white" onPress={() => params.setModalVisible(false)} />
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
    <View>
        {values.map((value) =>(
            <TouchableOpacity
                key={value}
                onPress={() => setSelectedValue(value)}
            >
               <View style={{flexDirection:'row'}}>
                    <Text style={styles.text}>
                        {value}
                    </Text>
                    <View style={styles.iconCheck}>
                        <FontAwesome5  name="check" size={27} color = {(selectedValue === value) ? "pink": "transparent"} /> 
                    </View>
                </View> 
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
    text:{
        flex:1,
        marginLeft: 30,
        fontSize: 15,
        marginTop: 30,

    },
    iconCheck: {
        marginTop: 24,
        AlignItems: 'flex-end',
        marginRight:"8%"
        
    },
    
})
