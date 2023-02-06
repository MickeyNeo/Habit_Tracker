import React from "react";
import { useState } from 'react';
import {Text,  View ,StyleSheet,TouchableOpacity, TextInput} from 'react-native';
import Modal from "react-native-modal"; 
export default function SelectFreq (params){
    const [count, setCount] = useState(0);
    const buttonPressed = ( item) => {
        const tmpState = params.select.map((val) => {
            if (val.id === item.id ) {
                return {...val, selected: !val.selected};
            }
            return val; 
        });
        params.setSelect(tmpState);
}
    return(         
        <View >
            <Modal isVisible={params.myIsmodalVisible} 
                useNativeDriver={true}
                onBackdropPress={() => params.setModalVisible(false)}
                >
                     <View style={{
                            height: params.freq == 'Week' ? '10%' : '25%', 
                            borderRadius: 30, 
                            borderWidth: 1,
                            backgroundColor: '#FFFFFF',}}>
                        <View style={styles.container}>
                            <View style ={{
                                backgroundColor: '#FFFFFF',
                                borderWidth: 1, 
                                borderRadius: 20, 
                                marginLeft: 20, 
                                marginRight: 20, 
                                marginTop: 10, 
                                justifyContent: 'center', 
                                alignItems: 'center'}}>
                                <Text style={styles.tilte}>Track Habit on</Text>
                                { params.freq == 'Weekly' && 
                                <SelectZone
                                    values = {params.select}
                                    buttonPressed = {buttonPressed}
                                    condition = {params.freq}
                                    color = {params.color}
                                />
                                }
                                { params.freq == 'Monthly' &&
                                <View>
                                <SelectZone
                                    values = {params.select}
                                    buttonPressed = {buttonPressed}
                                    condition = {params.freq}
                                    color = {params.color}
                                    flag = {0}
                                    />
                                <SelectZone
                                    values = {params.select}
                                    buttonPressed = {buttonPressed}
                                    condition = {params.freq}
                                    color = {params.color}
                                    flag = {1}
                                    />
                                <SelectZone
                                    values = {params.select}
                                    buttonPressed = {buttonPressed}
                                    condition = {params.freq}
                                    color = {params.color}
                                    flag = {2}
                                    />
                                </View>
                                }
                                {
                                    params.freq == 'Daily' && 
                                    <ChooseFreq
                                        values = {[ "Daily", "Weekly", "Monthly"]}
                                        color = {params.color}
                                        selected = {params.freq}
                                        setFreq = {params.setFreq}
                                        setSelect = {params.setSelect}
                                        week = {params.week}
                                        month = {params.month}
                                    />
                                }
                                {
                                    params.freq == 'Weekly' &&
                                    <TouchableOpacity
                                        onPress={() => {params.setModalVisible(false)}}
                                        style={[styles.button, {backgroundColor: params.color}]}
                                        >
                                        <Text style={styles.text}>Confirm</Text>
                                    </TouchableOpacity>
                                }
                                {
                                    params.freq == 'Monthly' &&
                                    <TouchableOpacity
                                        onPress={() => {params.setModalVisible(false)}}
                                        style={[styles.button, {backgroundColor: params.color}]}
                                        >
                                        <Text style={styles.text}>Confirm</Text>
                                    </TouchableOpacity>
                                }
                            {/* <Text style ={{fontSize: 10}}> Complete 1000 steps each day </Text> */}
                            </View>
                            {/* <View style ={{
                                backgroundColor: '#FFFFFF',
                                borderWidth: 1, 
                                borderRadius: 20, 
                                marginLeft: 20, 
                                marginRight: 20, 
                                marginTop: 10, 
                                justifyContent: 'center', 
                                alignItems: 'center'}}>
                                <Text style={styles.tilte}>Complete on any</Text>
                                {/* <View style = {{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                                    <TouchableOpacity 
                                        style = {{ 
                                            height: 20, 
                                            width: 20 }} 
                                            onPress = {() => setCount(count-1)}>
                                        <Text>-</Text>
                                    </TouchableOpacity>
                                    <TextInput
                                        style = {{  
                                            height: 20, 
                                            width: '50%', 
                                            borderRadius: 5,
                                            backgroundColor: '#f5f5f5', 
                                            color: '#a9a9a9',
                                        }}
                                            value ={count}
                                    />
                                     <TouchableOpacity 
                                        style = {{ 
                                            height: 20, 
                                            width: 20 }} 
                                            onPress = {() => setCount(count+1)}>
                                        <Text>+</Text>
                                    </TouchableOpacity>
                                </View> 
                                * <Text style ={{fontSize: 10}}> Complete {params.goal} steps each day, any {count} in a week </Text> 
                            </View> */}
                        </View>
                    </View>
                </Modal>       
        </View>
    )
}
const SelectZone = ({ values, buttonPressed, condition, color, flag }) => 
    (   
        <View style ={{flexDirection: 'row'}}>
            {values.map((value) => {
                if (condition == 'Weekly'|| value.title <= 10 && flag == 0 || value.title >= 11 && value.title <= 20 && flag == 1 || 
                value.title >= 21 && flag == 2)
                return (
                <TouchableOpacity 
                    onPress = {() => buttonPressed(value)}
                    style = 
                    {{ 
                    borderRadius: 10, 
                    width: condition == 'Weekly' ? 40 : 20,
                    height: 20, 
                    alignItems: 'center',
                    backgroundColor: value.selected ? color : 'white',
                    justifyContent: condition == 'Weekly' ? 'center' : 'space-evenly',
                    }}
                    key={value.title}
                >
                <Text style = {{fontSize: 10 }}>
                    {value.title}
                </Text>
                </TouchableOpacity>
                )
            })}
        </View>
    );
const ChooseFreq = ({values, color, selected, setFreq, setSelect, week, month}) =>
    (   
        <View style ={{flexDirection: 'column '}}>
            {values.map((value) => 
                <TouchableOpacity 
                onPress = {() => 
                    {   console.log(value)
                        if (value == 'Weekly') setSelect(prevState => ({ ...prevState, selectedFreq: week}))
                        else if (value == 'Monthly') setSelect(prevState => ({ ...prevState, selectedFreq: month}))
                        setFreq(prevState => ({ ...prevState, selectedItem: value}))}
                    }
                    style = 
                    {{ 
                    borderWidth: 1,
                    borderRadius: 10, 
                    width: 80,
                    height: 20, 
                    alignItems: 'center',
                    backgroundColor: value == selected ? color : 'white',
                    justifyContent: 'center',
                    }}
                    key={value}
                >
                <Text style = {{fontSize: 15 }}>
                    {value}
                </Text>
                </TouchableOpacity>
            )}
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
    },
    button: {
      //backgroundColor: 'blue',
      padding: 10,
      borderRadius: 5,
      marginTop: 20,
    },
    button_switch :{
        fontSize: 15, 
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
    }
})
