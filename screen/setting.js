import { StatusBar } from 'expo-status-bar';
import React, { useState} from 'react';
import { Button, Image, SafeAreaView, StyleSheet, ScrollView,Text, TouchableOpacity, View, TextInput, Switch } from 'react-native';
import Modal from "react-native-modal";
import Dog from '../assets/dog.png';
import { FontAwesome5 } from '@expo/vector-icons';
import Language from './settingsScreen/Language';
import Theme from './settingsScreen/Theme'
import HabitManager from './settingsScreen/HabitManager';
import Export from './settingsScreen/Export';
import MoreSettings from './settingsScreen/MoreSettings'
import TagManager from './settingsScreen/TagManager';
import DailyNotification from './settingsScreen/DailyNotification';
import TabBar from './settingsScreen/TabBar';
import VactionMode from './settingsScreen/VactionMode';
import DateTimePicker from 'react-native-date-time-picker';

export default function Settings({navigation}){
    const [currentTab, setCurrentTab] = useState('');
    // const [isEnabled, setIsEnabled] = useState(false);
    const [isModalVisible, setModalVisible] = useState(false);
    
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
                
                {tabButton(navigation,"Language")}
                {tabButton(navigation,"Theme")}
                {tabButton(navigation,"Tab Bar")}
                {line()}
                {tabButton(navigation,"Habit Manager")}
                {tabButton(navigation,"Daily Notification",1)}
                {tabButton(navigation,"Safety Lock",1)}
                {tabButton(navigation,"Vacation Mode",1)}
                {tabButton(navigation,"Sound",1)}
                {tabButton(navigation,"Export")}
                {tabButton(navigation,"More Settings")}
                {line()}
                {tabButton(navigation,"Tag Manager")}
        

                
            
            
            </ScrollView>
        </SafeAreaView>
    );
}

//Multi Buttons..
const tabButton = (navigation,name, nb=0)=>{
    const [isEnabled, setIsEnabled] = useState(false);
    const [isEnabledSwitch, setIsEnabledSwitch] =useState(false)
    const toggleSwitch = () => {
        if (isEnabledSwitch ==false) setIsEnabled(true)
        setIsEnabledSwitch(previousState => !previousState);
        
    }
        
    if (nb==0)
        return(
                <View>
                    <TouchableOpacity style={{flexDirection: "row" }}
                    onPress ={() => {
                        setIsEnabled(!isEnabled)
                        switch (name) {
                            case 'Theme':
                                navigation.navigate("Theme")
                            break;
                            case 'Habit Manager':
                                navigation.navigate("HabitManager")
                            break;
                            case 'More Settings':
                                navigation.navigate("MoreSettings")
                            break;
                            case 'Export':
                                navigation.navigate("Export")
                            break;
                            case 'Tag Manager':
                                navigation.navigate("TagManager")
                            break;
                            default :
                                break;
                        }
                        
                    }}
                    >   
                            <Text style={{
                                flex: 1,
                                marginTop: 20,
                                marginLeft: 10,
                                fontSize: 20,
                                color: 'black'
                            }}>{name}</Text>
                                {tail()}
                    </TouchableOpacity>
                    {isEnabled && name == 'Language' && <Language 
                        myIsmodalVisible = {isEnabled}
                        setModalVisible = {setIsEnabled}
                    ></Language> }
                    {isEnabled && name == 'Tab Bar' && <TabBar 
                        myIsmodalVisible = {isEnabled}
                        setModalVisible = {setIsEnabled}
                    ></TabBar> }
                </View>
            
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
                        style={{marginTop: 20,AlignItems: 'flex-end', marginRight:5}}
                        trackColor={{ false: "#d9d6c6", true: "orange" }}
                        thumbColor={isEnabledSwitch ? "white" : "#76756d"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabledSwitch}
                    />
                    {isEnabled  && name == 'Daily Notification' && <DailyNotification 
                        myIsmodalVisible = {isEnabled}
                        setModalVisible = {setIsEnabled}
                    ></DailyNotification> }
                    {isEnabled  && name == 'Vacation Mode' && <VactionMode
                        myIsmodalVisible = {isEnabled}
                        setModalVisible = {setIsEnabled}
                    ></VactionMode> }
                    
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
const tail =()=>{
    return(
        <Text style={{marginTop: 20,AlignItems: 'flex-end', marginRight:5}}>{'>'}</Text>
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
    },
    row:{
        flexDirection: "row" 
    },
    tab:{
        flex: 1,
        marginTop: 20,
        marginLeft: 10,
        fontSize: 20,
        color: 'black'
    },
    title:{

    },
    model:{
        height: '38%',
        backgroundColor: 'white',
        borderRadius: 30,
        borderWidth: 1,
        justifyContent: 'center'
    }
})