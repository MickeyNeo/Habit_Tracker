import React from "react";
import { useState } from 'react';
import {Text,  View, StyleSheet,Button, Switch } from 'react-native';
import Modal from "react-native-modal";
import { useStore,setHabitStat} from "../../Store";
import { updateHabitStat } from "../../Store/database";

export default function TabBar (params){
    const [state, dispatch] =useStore()
    const {stateHabitStat,currentTheme} =state
    const [isEnabledSwitch, setIsEnabledSwitch] =useState(stateHabitStat)
    const toggleSwitch = () => {setIsEnabledSwitch(previousState => !previousState), updateHabitStat(!isEnabledSwitch)};
    
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
                    <View style={{height: '38%', backgroundColor: 'white', borderRadius: 30, borderWidth: 1,justifyContent: 'center',backgroundColor: currentTheme.backgroundColor}}>
                        <View style={styles.container}>
                                <Text style={[styles.tilte,{color: currentTheme.color}]}>Tab Bar</Text> 
                                <View style={{flexDirection:'row'}}>
                                    <Text style={[styles.text,{color: currentTheme.color}]}>Habit Stat</Text>
                                    <Switch 
                                        style={styles.switchType}
                                        trackColor={{ false: "#d9d6c6", true: "orange" }}
                                        thumbColor={isEnabledSwitch ? "white" : "#76756d"}
                                        ios_backgroundColor="#3e3e3e"
                                        onValueChange={toggleSwitch}
                                        value={isEnabledSwitch}
                                    />
                                </View>
                                
                            </View>
                            <View style={styles.buttonType}>
                                <Button  title="Confirm" color="pink" onPress={() => {params.setModalVisible(false),dispatch(setHabitStat(isEnabledSwitch))}} />
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
        textAlign: 'center',
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
        //backgroundColor: 'pink',
    },
    text:{
        
        marginLeft: 30,
        fontSize: 15,
        marginTop: 30,

    },
    switchType:{
        marginTop: 20,
        marginLeft: '50%'
    }
})
