import { StatusBar } from 'expo-status-bar';
import React, { useState} from 'react';
import { Button, Image, SafeAreaView, StyleSheet, ScrollView,Text, TouchableOpacity, View, TextInput, Switch } from 'react-native';
import Modal from "react-native-modal";
import Dog from '../assets/dog.png';
import { FontAwesome5 } from '@expo/vector-icons';
import Language from './settingsScreen/Language';
import Theme from './settingsScreen/Theme';
import WidgetTheme from './settingsScreen/WidgetTheme';
import HabitManager from './settingsScreen/HabitManager';
import Export from './settingsScreen/Export';
import MoreSettings from './settingsScreen/MoreSettings'
import UsageTips from './settingsScreen/UsageTips';

export default function Settings(){
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

                {tabButton(currentTab, setCurrentTab ,"Language")}
                {tabButton(currentTab, setCurrentTab ,"Theme")}
                {tabButton(currentTab, setCurrentTab ,"Widget Theme")}
                {tabButton(currentTab, setCurrentTab ,"Tab Bar")}
                {line()}
                {tabButton(currentTab, setCurrentTab ,"Habbit Manager")}
                {tabButton(currentTab, setCurrentTab ,"Daily Notification",1)}
                {tabButton(currentTab, setCurrentTab ,"Safety Lock",1)}
                {tabButton(currentTab, setCurrentTab ,"Sound",1)}
                {tabButton(currentTab, setCurrentTab ,"Export")}
                {tabButton(currentTab, setCurrentTab ,"More Settings")}
                {line()}
                {tabButton(currentTab, setCurrentTab ,"Usage Tips")}
                {tabButton(currentTab, setCurrentTab ,"Share")}
                {/* <TouchableOpacity style={style.row}>
                    <Text style= {style.tab}>Language</Text>{tail()}
                </TouchableOpacity>
                <TouchableOpacity style={style.row}>
                    <Text style= {style.tab}>Theme</Text>{tail()}
                </TouchableOpacity>
                <TouchableOpacity style={style.row}>
                    <Text style= {style.tab}>Widget Theme</Text>{tail()}
                </TouchableOpacity>
                <TouchableOpacity style={style.row}>
                    <Text style= {style.tab}>Tab Bar</Text>{tail()}
                </TouchableOpacity>
                {line()}
                <TouchableOpacity style={style.row}>
                    <Text style= {style.tab}>Habbit Manager</Text>{tail()}
                </TouchableOpacity>
                <TouchableOpacity style={style.row}>
                    <Text style= {style.tab}>Icon Sync</Text>
                    <Switch 
                        style={{marginTop: 20,AlignItems: 'flex-end', marginRight:5}}
                        trackColor={{ false: "#d9d6c6", true: "orange" }}
                        thumbColor={isEnabled ? "white" : "#76756d"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={style.row}>
                    <Text style= {style.tab}>Daily Notification</Text>
                    <Switch 
                        style={{marginTop: 20,AlignItems: 'flex-end', marginRight:5}}
                        trackColor={{ false: "#d9d6c6", true: "orange" }}
                        thumbColor={isEnabled ? "white" : "#76756d"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={style.row}>
                    <Text style= {style.tab}>Safety Lock</Text>
                    <Switch 
                        style={{marginTop: 20,AlignItems: 'flex-end', marginRight:5}}
                        trackColor={{ false: "#d9d6c6", true: "orange" }}
                        thumbColor={isEnabled ? "white" : "#76756d"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={style.row}>
                    <Text style= {style.tab}>Sound</Text>
                    <Switch 
                        style={{marginTop: 20,AlignItems: 'flex-end', marginRight:5}}
                        trackColor={{ false: "#d9d6c6", true: "orange" }}
                        thumbColor={isEnabled ? "white" : "#76756d"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={style.row}>
                    <Text style= {style.tab}>Export</Text>{tail()}
                </TouchableOpacity>
                <TouchableOpacity style={style.row}>
                    <Text style= {style.tab}>More Settings</Text>{tail()}
                </TouchableOpacity>
                {line()}
                <TouchableOpacity style={style.row}>
                    <Text style= {style.tab}>Usage Tips</Text>{tail()}
                </TouchableOpacity>
                <TouchableOpacity style={style.row}>
                    <Text style= {style.tab}>Feedback</Text>{tail()}
                </TouchableOpacity>
                <TouchableOpacity style={style.row}>
                    <Text style= {style.tab}>Share</Text>{tail()}
                </TouchableOpacity>
                 */}

                <View>
                    <Button title="Show modal" onPress={() => setModalVisible(!isModalVisible)} />
                    
                    {/* <Modal isVisible={isModalVisible} 
                        useNativeDriver={true}
                        onBackdropPress={() => setModalVisible(false)}
                        animationIn = 'bounceIn'
                        animationInTiming = {500}
                        animationOut ="bounceOut"
                        animationOutTiming = {500}
                    >
                        <View style={style.model}>
                            <Text style={style.nameText}>Select Language</Text>
                        </View>
                    </Modal> */}
                    
                </View>
            
            
            
            </ScrollView>
        </SafeAreaView>
    );
}

//Multi Buttons..
const tabButton = (currentTab, setCurrentTab ,name, nb=0)=>{
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    if (nb==0)
        return(
                <View>
                    <TouchableOpacity style={{flexDirection: "row" }}
                    onPress ={() => {
                        setIsEnabled(!isEnabled)
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
                    {isEnabled && name == 'Theme' && <Theme 
                        myIsmodalVisible = {isEnabled}
                        setModalVisible = {setIsEnabled}
                    ></Theme> }
                    {isEnabled && name == 'Widget Theme' && <WidgetTheme 
                        myIsmodalVisible = {isEnabled}
                        setModalVisible = {setIsEnabled}
                    ></WidgetTheme> }
                    {/* {isEnabled && name == 'Tab Bar' && <Language 
                        myIsmodalVisible = {isEnabled}
                        setModalVisible = {setIsEnabled}
                    ></Language> } */}
                    {isEnabled && name == 'Habbit Manager' && <HabitManager 
                        myIsmodalVisible = {isEnabled}
                        setModalVisible = {setIsEnabled}
                    ></HabitManager> }
                    {isEnabled && name == 'Export' && <Export 
                        myIsmodalVisible = {isEnabled}
                        setModalVisible = {setIsEnabled}
                    ></Export> }
                    {isEnabled && name == 'More Settings' && <MoreSettings 
                        myIsmodalVisible = {isEnabled}
                        setModalVisible = {setIsEnabled}
                    ></MoreSettings> }
                    {isEnabled && name == 'Usage Tips' && <UsageTips 
                        myIsmodalVisible = {isEnabled}
                        setModalVisible = {setIsEnabled}
                    ></UsageTips> }
                    {/* {isEnabled && name == 'Share' && <Language 
                        myIsmodalVisible = {isEnabled}
                        setModalVisible = {setIsEnabled}
                    ></Language> } */}
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
                 <TouchableOpacity>
                    <Switch 
                        style={{marginTop: 20,AlignItems: 'flex-end', marginRight:5}}
                        trackColor={{ false: "#d9d6c6", true: "orange" }}
                        thumbColor={isEnabled ? "white" : "#76756d"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </TouchableOpacity>
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
const languageScreen =() =>{
    return(
        <View style={style.model}>
            <Text>Hello!</Text>
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