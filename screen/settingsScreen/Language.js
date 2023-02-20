import React from "react";
import { useState } from 'react';
import {Text,  View ,StyleSheet,Button,TouchableOpacity} from 'react-native';
import Modal from "react-native-modal";
import { FontAwesome5 } from '@expo/vector-icons'; 
import { useStore,setLanguage } from "../../Store";
export default function Language (params){
    const[state, dispatch] =useStore()
    const {currentTheme} =state
    const [lg,setLg] = useState(state.stateLanguage)
    // const handleLanguage =()=>{
    //     dispatch(setLanguage(lg))
    // }
    
    // console.log(state)
    //console.log(setLanguage(lg))
    
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
                    <View style={{height: '44%', backgroundColor: 'white', borderRadius: 30, borderWidth: 1,justifyContent: 'center',backgroundColor: currentTheme.backgroundColor}}>
                        <View style={styles.container}>
                            <Text style={[styles.tilte,{color: currentTheme.color}]}>Select Language</Text>
                            <PreviewLayout
                                values={["English", "Vietnamese", "French", "German"]}
                                selectedValue={lg}
                                setSelectedValue={setLg}
                                color={currentTheme.color}
                            />
                        </View>
                        <View style={styles.buttonType}>
                            <Button  title="Confirm" color={currentTheme.color} onPress={() => {params.setModalVisible(false);dispatch((setLanguage(lg)))}} />
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
    color,
})=>(
    <View>
        {values.map((value) =>(
            <TouchableOpacity
                key={value}
                onPress={() => setSelectedValue(value)}
            >
               <View style={{flexDirection:'row'}}>
                    <Text style={[styles.text,{color:color}]}>
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
        marginTop: '3%',

    },
    iconCheck: {
        marginTop: '3%',
        AlignItems: 'flex-end',
        marginRight:"8%"
        
    },
    modalContainer: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 5,
        alignItems: 'center',
    },
    
})
