import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState, createContext, useContext } from 'react';
import { Button, Image, SafeAreaView, StyleSheet, ScrollView,Text, TouchableOpacity, View, TextInput, Switch, Appearance } from 'react-native';
import Modal from "react-native-modal";
import Dog from '../assets/dog.png';
import { FontAwesome5 } from '@expo/vector-icons';
//Popup
import language from './settingsScreen/language';


export default function Settings(){
    const [currentTab, setCurrentTab] = useState();
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
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

                {tabButton("Language")}
                {tabButton("Theme")}
                {tabButton("Widget Theme,")}
                {tabButton("Tab Bar")}
                {line()}
                {tabButton("Habbit Manager")}
                {tabButton("Icon Sync",1)}
                {tabButton("Daily Notification",1)}
                {tabButton("Safety Lock",1)}
                {tabButton("Sound",1)}
                {tabButton("Export")}
                {tabButton("More Settings")}
                {line()}
                {tabButton("Usage Tips")}
                {tabButton("Feedback")}
                {tabButton("Share")}
                
                <View>
                    <Button title="Show modal" onPress={toggleModal} />

                    <Modal isVisible={isModalVisible} 
                        useNativeDriver={true}
                        onBackdropPress={() => setModalVisible(false)}
                        animationIn = 'bounceIn'
                        animationInTiming = {500}
                        animationOut ="bounceOut"
                        animationOutTiming = {500}
                    >
                        <View style={style.model}>
                            <Text>Hello!</Text>
                        </View>
                    </Modal>
                </View>
            
            
            
            </ScrollView>
        </SafeAreaView>
    );
}

//Multi Buttons..
const tabButton = (name, nb=0)=>{
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    // const toggleModal = () => {
    //     setModalVisible(!isModalVisible);
    // };
    if (nb==0)
        return(
            <TouchableOpacity style={{flexDirection: "row" }}
                //onPress={()=>lg(f)}
            >
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
    else if ( nb === 1)
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
                    style={{marginTop: 20, AlignItems: 'flex-end', marginRight:5}}
                    trackColor={{ false: "#d9d6c6", true: "orange" }}
                    thumbColor={isEnabled ? "white" : "#76756d"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
        );
       
}
const line = () =>{
    return(
        <View style={{flexDirection: 'row',alignItems: 'center', marginLeft:'5%', marginRight:'5%', marginTop: 20,}}> 
                <View style ={{flex: 1,height:1,borderWidth: 0.3}}></View>
        </View>
    )
}
const lg =() =>{
    const [isModalVisible, setModalVisible] = useState(false);
    
    return(         
                <View>
                    <Modal isVisible={isModalVisible} 
                        useNativeDriver={true}
                        onBackdropPress={() => setModalVisible(false)}
                        animationIn = 'bounceIn'
                        animationInTiming = {500}
                        animationOut ="bounceOut"
                        animationOutTiming = {500}
                    >
                        <View style={{height: '38%', backgroundColor: 'white', borderRadius: 30, borderWidth: 1,justifyContent: 'center'}}>
                            <Text>Hello!</Text>
                        </View>
                    </Modal>
                </View>
    );
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        //backgroundColor: 'white',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
    },
    nameText:{
        marginLeft: 20,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 20
    },
    model:{
        height: '38%',
        backgroundColor: 'white',
        borderRadius: 30,
        borderWidth: 1,
        justifyContent: 'center'
    }
})