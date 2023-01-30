import React from "react";
import { useState } from 'react';
import {Text,  View, StyleSheet, ScrollView, TouchableOpacity,Switch,Button} from 'react-native';
import { useStore,setTheme } from "../../Store";

const valueHBS = ['Simple','Intutive'];
const valueDBS =['Week only','Day + Week','Date only'];
export default function Theme (){
    const [state, dispatch] =useStore()
    const {currentTheme} =state
    //console.log(currentTheme.id)
    const [HBSize, setHBSize] =useState('Normal')
    const [DBS, setDBS] =useState('Normal')
    const flag = (currentTheme.id =='light')? true:false
    const [isEnabledSwitch, setIsEnabledSwitch] =useState(flag)
    const toggleSwitch = () => {setIsEnabledSwitch(previousState => !previousState),dispatch(setTheme())};
    const [HBS,setHBS] = useState('Simple')
    const handleHBS =()=>{
        if (HBS =='Simple') setHBS('Intutive')
        else setHBS('Simple')
    }
    
    return(         
        <View style={[styles.container, {backgroundColor: currentTheme.backgroundColor}]}>
            
            <ScrollView>
                
                <TouchableOpacity onPress={handleHBS}>
                    <View style={{flexDirection:'row'}}>
                        <Text style={[styles.text,{color: currentTheme.color}]}>Habit Bar Style</Text>
                        <Text style={[styles.textCheck,{color: currentTheme.color}]}>{HBS}</Text>                        
                    </View>
                </TouchableOpacity>
                    
                    <View style={{flexDirection:'row'}}>
                        <Text style={[styles.text,{color: currentTheme.color}]}>Date Bar Style</Text>
                        <CheckTab 
                            values={valueDBS}
                            selectedValue={DBS}
                            setSelectedValue={setDBS}
                        />
                    </View>
                
                
                    <View style={{flexDirection:'row'}}>
                        <Text style={[styles.text,{color: currentTheme.color}]}>Appearance</Text>
                        <Switch 
                            style={styles.switchType}
                            trackColor={{ false: "#d9d6c6", true: "orange" }}
                            thumbColor={isEnabledSwitch ? "white" : "#76756d"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabledSwitch}
                        />
                    </View>
               
                
                    <View style={{flexDirection:'row'}}>
                        <Text style={[styles.text,{color: currentTheme.color}]}>Habit Bar size</Text>
                        <CheckTab 
                            values={['Normal','Small']}
                            selectedValue={HBSize}
                            setSelectedValue={setHBSize}
                        />
                    </View>                
            </ScrollView>    
            
        </View>
    );

}
const CheckTab=({
    values,
    selectedValue,
    setSelectedValue,  
})=>(
    <View style={{flexDirection: 'row'}}>
        {values.map((value) =>(
            <TouchableOpacity
                key={value}
                onPress={() => setSelectedValue(value)}
                style={[
                    styles.button,
                    selectedValue === value && styles.selected,
                  ]}
                >
                  <Text
                    style={[
                      styles.buttonLabel,
                      selectedValue === value && styles.selectedLabel,
                    ]}
                  >
                    {value}
                  </Text>
            </TouchableOpacity>
        ))}
    </View>
);
const styles=StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'flex-start',
    },
    text:{   
        flex:1,
        marginLeft: 30,
        fontSize: 20,
        marginTop: 30,
    },
    textCheck:{
        marginTop: 32,
        alignItems:"flex-end",
        right: '50%',
        fontSize: 10,
        fontWeight: '100',

    },
    switchType:{
        marginTop: 30,
        right: '28%'
    },
    button: {
        marginTop: 30,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 6,
        backgroundColor: "oldlace",
        alignSelf: "flex-end",
        marginHorizontal: "1%",
        marginBottom: 6,
        //minWidth: "48%",
        textAlign: "center",
      },
      selected: {
        backgroundColor: "coral",
        borderWidth: 0,
      },
      buttonLabel: {
        fontSize: 12,
        fontWeight: "500",
        color: "coral",
      },
      selectedLabel: {
        color: "white",
      },

})