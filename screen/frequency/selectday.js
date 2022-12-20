import React from "react";
import { useState } from 'react';
import {Text,  View ,StyleSheet,Button,TouchableOpacity, TextInput} from 'react-native';
import Modal from "react-native-modal";
import { FontAwesome5 } from '@expo/vector-icons'; 
import { useStore,setLanguage } from "../../Store";
export default function SelectFreq (params){
    const[state, dispatch] = useStore()
    const [lg,setLg] = useState('Monday')
    const [count, setCount] = useState(0)
    console.log(count)
    console.log(params.freq);
    var week = ['MON','TUE','WED','THU','FRI','SAT','SUN']
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
                    <View style={{
                        height: params.freq == 'Week' ? '28%' : '35%', 
                        borderRadius: 30, 
                        borderWidth: 1,
                        backgroundColor: '#FFFFFF',}}>
                        <View style={styles.container}>
                            <View style ={{
                                backgroundColor: '#00FFF6',
                                borderWidth: 1, 
                                borderRadius: 20, 
                                marginLeft: 20, 
                                marginRight: 20, 
                                marginTop: 10, 
                                //flex: params.freq == 'Week' ? 0.3 : 0.5, 
                                justifyContent: 'center', 
                                alignItems: 'center'}}>
                                <Text style={styles.tilte}>Track Habit on</Text>
                                { 
                                    params.freq == 'Week' &&
                                    <SelectZone
                                        values = {week}
                                        selectedValue={lg}
                                        setSelectedValue={setLg}
                                        condition = {params.freq}
                                    />
                                }
                                {
                                    params.freq == 'Month' && <View>
                                    <SelectZone
                                        values = {['1','2','3','4','5','6','7','8','9','10']}
                                    />
                                    <SelectZone
                                        values = {['11','12','13','14','15','16','17','18','19','20']}
                                    />
                                    <SelectZone
                                        values = {['21','22','23','24','25','26','27','28','29','30']}
                                    />
                                    </View>
                                }       
                                <Text style ={{fontSize: 10}}> Complete 1000 steps each day </Text>
                            </View>
                            <View style ={{
                                backgroundColor: '#00FFF6',
                                borderWidth: 1, 
                                borderRadius: 20, 
                                marginLeft: 20, 
                                marginRight: 20, 
                                marginTop: 10, 
                                justifyContent: 'center', 
                                alignItems: 'center'}}>
                                <Text style={styles.tilte}>Complete on any</Text>
                                <View style = {{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                                    <Button style = {{ backgroundColor: 'white'}} title = '-' onPress = {() => setCount(count-1)}/>
                                    <TextInput
                                        style ={{  
                                            height: 20, 
                                            width: '50%', 
                                            borderRadius: 5,
                                            backgroundColor: '#f5f5f5', 
                                            color: '#a9a9a9',}}
                                            value ={count}
                                    />
                                    <Button style = {{ backgroundColor: 'white', color: 'white'}} title = '+' onPress = {() => setCount(count+1)}/>
                                </View>
                                <Text style ={{fontSize: 10}}> Complete 1000 steps each day, any {count} in a week </Text>
                            </View>
                        </View>
                    </View>
                </Modal>       
            
        </View>
    )
}
const SelectZone =({
    values,
    selectedValue,
    setSelectedValue, 
    condition,
})=> 
    (   
        <View style = {{flexDirection: 'row', /*flex: condition == 'Day' ? 1 : 0.8*/ }}>
            {values.map((value) =>(
                <TouchableOpacity style = 
                {{ 
                    borderRadius: 10, 
                    width: condition == 'Week' ? 40 : 20,
                    height: 20, 
                    alignItems: 'center',
                    backgroundColor: '#FFAEAE',
                    justifyContent: condition == 'Week' ? 'center' : 'space-evenly',
                }}
                    key={value}
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
        flex: 1,
        
    },
    tilte:{
        width: '100%',
        //height: '10%',
        //top: '2%',
        left: '35%',
        //position: 'absolute',
        fontSize: 15,
        color: 'black',
    }
})
