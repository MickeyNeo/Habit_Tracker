import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState } from 'react';
import { Animated, Image, SafeAreaView, StyleSheet, ScrollView,Text, TouchableOpacity, View, TextInput, Switch } from 'react-native';
import Dog from '../assets/dog.png';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Settings(){
    const [currentTab, setCurrentTab] = useState();
    return(
        <SafeAreaView style={style.container}> 
            <ScrollView>
                <View style={{ justifyContent: 'flex-start', padding: 15, flexDirection: "row" }}>
                    <Image 
                        source={Dog}
                        style ={{
                            width: 60,
                            height:60, 
                            borderRadius: 10,
                        }}
                    ></Image>
                    <TextInput 
                        style={style.nameText}
                        placeholder="No Name"
                        
                    ></TextInput>
                    <FontAwesome5 name="pen" size={10} color="black" style={{marginTop: 32, marginLeft: 5}} />
                </View>

                {tabButton(currentTab, setCurrentTab,"Language")}
                {tabButton(currentTab, setCurrentTab,"Theme")}
                {tabButton(currentTab, setCurrentTab,"Widget Theme,")}
                {tabButton(currentTab, setCurrentTab,"Tab Bar")}
                {line()}
                {tabButton(currentTab, setCurrentTab,"Habbit Manager")}
                {tabButton(currentTab, setCurrentTab,"Icon Sync",1)}
                {tabButton(currentTab, setCurrentTab,"Daily Notification",1)}
                {tabButton(currentTab, setCurrentTab,"Safety Lock",1)}
                {tabButton(currentTab, setCurrentTab,"Sound",1)}
                {tabButton(currentTab, setCurrentTab,"Export")}
                {tabButton(currentTab, setCurrentTab,"More Settings")}
                {line()}
                {tabButton(currentTab, setCurrentTab,"Usage Tips")}
                {tabButton(currentTab, setCurrentTab,"Feedback")}
                {tabButton(currentTab, setCurrentTab,"Share")}
            
            
            
            </ScrollView>
        </SafeAreaView>
    );
}

//Multi Buttons..
const tabButton = (currentTab, setCurrentTab, name, nb=0)=>{
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    if (nb==0)
        return(
            <TouchableOpacity style={{flexDirection: "row" }}>
                    <Text style={{
                        flex: 1,
                        marginTop: 20,
                        marginLeft: 10,
                        fontSize: 20,
                        color: 'black'
                    }}>{name}</Text>
                    <Text style={{marginTop: 20,AlignItems: 'flex-end', marginRight:5}}>{'>'}</Text>
            </TouchableOpacity>
        );
    else{
        return(
            <View style={{flexDirection: "row" }}>
                <Text style={{
                        flex: 1,
                        marginTop: 20,
                        marginLeft: 10,
                        fontSize: 20,
                        color: 'black'
                    }}>{name}</Text>
                <Switch 
                    style={{marginTop: 20,AlignItems: 'flex-end', marginRight:5}}
                    trackColor={{ false: "#d9d6c6", true: "orange" }}
                    thumbColor={isEnabled ? "white" : "#76756d"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
            
        );
    }
}
const line = () =>{
    return(
        <View style={{flexDirection: 'row',alignItems: 'center', marginLeft:'5%', marginRight:'5%', marginTop: 20,}}> 
                <View style ={{flex: 1,height:1,borderWidth: 0.3}}></View>
        </View>
    )
}
const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
    },
    nameText:{
        marginLeft: 20,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 20
    }
})