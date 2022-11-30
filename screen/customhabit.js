import React, { useState, Component, useContext }from "react";
import { View, Button, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView,Image, TextInput, Alert } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Fontisto from '@expo/vector-icons/Fontisto';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import ColorPicker from 'react-native-wheel-color-picker';
import { ChromePicker } from 'react-color';

const CustomHabit= ({navigation}) => {
const colors = 'green';
const [currentTab, setCurrentTab] = useState("Day");
const [currentTabTime, setCurrentTabTime] = useState("Anytime");
return (
    <View style={styles.container}>

        {/* <View style = {styles.addHabit}>
            <TouchableOpacity style ={styles.customHabit}> 
                <Ionicons name='add-circle'  size ={30} color = 'green' />
                <Text> Create Your Custom Habit </Text>
            </TouchableOpacity>
        </View> */}

        <View style ={styles.Habit}>
            <ScrollView >
                <View style = {{flexDirection: 'column', padding: 10, }}>
                <Text style ={{fontWeight: 'bold'}}>Name</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter your name habit!"
                    //data.push(route.params.name)
                    //onChangeText={newText => setText(newText)}
                    //defaultValue={text}
                />
                </View>
                <View style = {{flexDirection: 'column', padding: 10, }}>
                <Text style ={{fontWeight: 'bold'}}>Note</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Description or other infos"
                    //onChangeText={newText => setText(newText)}
                    //defaultValue={text}
                />
                </View>
                <View style = {{flexDirection: 'column', padding: 10, }}>
                    <Text style ={{fontWeight: 'bold'}}>Icon & Color</Text>
                    <View style = {{flexDirection: 'row', flex: 2}}>
                        <View style ={{ flexDirection: 'row', justifyContent: 'space-evenly', flex: 0.5 }}>
                        <Text>Icon</Text>
                        <TouchableOpacity style = {styles.btnTouch}>
                        <Ionicons name ='add' size = {20} color ='#00FF7F' />
                        </TouchableOpacity>
                        <Text>|</Text>
                        <Text>Color</Text>
                        <TouchableOpacity  style = {styles.btnTouch}>
                        <Ionicons name ='add' size = {20} color ='#00FF7F' />
                        </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style = {{flexDirection: 'column', padding: 10}}>
                    <Text style ={{fontWeight: 'bold'}}>Tag</Text>
                    <TouchableOpacity style = {{borderRadius: 10, width: 40, alignItems: 'center', backgroundColor: '#f5f5f5',}}>
                        <Ionicons name ='add' size = {20} color ='#00FF7F' />
                    </TouchableOpacity>
                </View>

                <View style = {{flexDirection: 'column',padding: 10}}>
                <Text style ={{fontWeight: 'bold'}}>Goal & Goal Period</Text>
                    <View style = {{flexDirection: 'row', flex: 1}}>
                        <View style ={{ flexDirection: 'row', justifyContent: 'space-evenly',flex: 1, marginTop: 5 }}>
                        {TabButton(currentTab, setCurrentTab, "1", colors)}
                        {TabButton(currentTab, setCurrentTab, "count",colors)}
                        {TabButton(currentTab, setCurrentTab, "Day", colors)}
                        {TabButton(currentTab, setCurrentTab, "Week", colors)}
                        {TabButton(currentTab, setCurrentTab, "Month", colors)}
                        </View>
                    </View>
                </View>
                <View style = {{flexDirection: 'column', padding: 10}}>
                <Text style ={{fontWeight: 'bold'}}>Frequency</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Type here to translate!"
                    //onChangeText={newText => setText(newText)}
                    //defaultValue={text}
                />
                </View>
                <View style = {{flexDirection: 'column', padding: 10}}>
                <Text style ={{fontWeight: 'bold'}}>Time Range</Text>
                    <View style = {{flexDirection: 'row', flex: 1}}>
                        <View style ={{ flexDirection: 'row', justifyContent: 'flex-start',flex: 0.5, marginTop: 5 }}>
                        {TabButtontime(currentTabTime, setCurrentTabTime, "Anytime",colors)}
                        {TabButtontime(currentTabTime, setCurrentTabTime, "Morning", colors)}
                        {TabButtontime(currentTabTime, setCurrentTabTime, "Afternoon", colors)}
                        {TabButtontime(currentTabTime, setCurrentTabTime, "Evening", colors)}
                        </View>
                    </View>
                </View>
                <View style = {{flexDirection: 'column', padding: 10}}>
                <Text style ={{fontWeight: 'bold'}}>Remainder</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Type here to translate!"
                    //onChangeText={newText => setText(newText)}
                    //defaultValue={text}
                />
                </View>
                <View style = {{flexDirection: 'column', padding: 10}}>
                <Text style ={{fontWeight: 'bold'}}>Remainder Messages</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Type here to translate!"
                    //onChangeText={newText => setText(newText)}
                    //defaultValue={text}
                />
                </View>
                <View style = {{flexDirection: 'column', padding: 10}}>
                    <View style = {{flexDirection : 'row'}}>
                        <Text style ={{fontWeight: 'bold'}}>Chart Type</Text>
                        <Image 
                            source={require('./Icon/bar-chart.png')}
                            style={{ width: 48, height: 48,}}
                        />
                    </View>
                </View>
                <View style = {{flexDirection: 'column', padding: 10}}>
                <Text style ={{fontWeight: 'bold'}}>Habit Term</Text>
                    <View style = {{flexDirection: 'row', flex: 1}}>
                        <View style ={{ flexDirection: 'row', justifyContent: 'flex-start',flex: 0.5 }}>
                        </View>
                    </View>
                </View>
            </ScrollView>

        </View>
      <SafeAreaView style = {styles.homeZone}> 
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Image
                source={require('./Icon/done.png')}
                style={{ width: 45, height: 45,}}
            />
        </TouchableOpacity>
      </SafeAreaView>
    </View>
    );
};
const TabButton = (currentTab, setCurrentTab, title, colors) => {
  return (
    <TouchableOpacity onPress={() => {
    //   if (title == "Day") {
    //     // Do your Stuff...
    //   } else {
        setCurrentTab(title)
    //   }
    }}>
      <View style={[styles.btnTouch, 
        { backgroundColor: currentTab == title ? colors : 'transparent'}
      ]}>
        <Text style={{
          fontSize: 15,
          color: currentTab == title ? "#a9a9a9" : "grey"
        }}>{title}</Text>

      </View>
    </TouchableOpacity>
  );
}
const TabButtontime = (currentTabTime, setCurrentTabTime, title, colors) => {
  return (
    <TouchableOpacity onPress={() => {
    //   if (title == "Day") {
    //     // Do your Stuff...
    //   } else {
        setCurrentTabTime(title)
    //   }
    }}>
      <View style={[styles.btnTouchTime, 
        { backgroundColor: currentTabTime == title ? colors : 'transparent'}
      ]}>
        <Text style={{
          fontSize: 15,
          color: currentTabTime == title ? "#a9a9a9" : "grey"
        }}>{title}</Text>

      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
      flex: 1, 
      backgroundColor: 'white',
      flexDirection: 'column',
    },
    addHabit: { 
        //flex: 0.5,
      //flexDirection : 'column',
        alignItems: 'stretch',
      //alignSelf: 'center',
        //backgroundColor: "#fffaf0",
      //justifyContent: "center",
      //TextSize: 50,
        //padding: 0,
        //height: '88%',
        //borderWidth: 5,
        //position: 'absolute',
        //top: '10%',
        height: '15%',
        width: '100%',

    },
    Habit: {
        flex: 0.9,
      //flexDirection : 'column',
        //alignItems: 'stretch',
      //alignSelf: 'center',
        //backgroundColor: "#f0ffff",
      //justifyContent: "center",
      //TextSize: 50,
        //padding: 0,
        height: '88%',
        //borderWidth: 5,
        //position: 'fixed',
        //top: '5%',
        //height: '68%',
        width: '100%',
        //left: '2%',
        //right: '10%',
    },
    homeZone: {
      //flex: 0.15,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent : 'space-evenly',
      //backgroundColor: '#BEABAB',
      position: 'absolute',
      width: 59,
      height: 59,
      top: '90%',
      left: '40%',
      padding: 0,
      borderRadius: 150,
      borderWidth: 1,
    },
    textInput: {
        height: 40, 
        //borderWidth: 1, 
        with: '20%', 
        flex: 0.2,
        borderRadius: 5,
        padding: 10,
        backgroundColor: '#f5f5f5', 
        color: '#a9a9a9',
    },
    customHabit: {
        flex: 0.4,
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 10,
        alignItems: 'center',
        //justifyContent: 'center',
        alignSelf: 'flex-start',
        padding: 2,
        backgroundColor: '#D9D9D9',
        left: '20%',
        right: '20%',
        width: '60%',
        top: '5%',
    },
    btnTouch: {
        //borderWidth: 1, 
        borderRadius: 10, 
        width: 50, 
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        
    },
    btnTouchTime: {
        //borderWidth: 1, 
        borderRadius: 10, 
        width: 80, 
        alignItems: 'center',
        fontSize: 20,
        backgroundColor: '#f5f5f5',
        color: '#a9a9a9',
    },
    habitZone: {
        flexDirection: 'column',
        //backgroundColor: '#fffaf0',
        //borderWidth: 1,
        //alignSelf: 'stretch'
        //alignItems: 'center',

    },
    zone: {
        flexDirection :'row',
        //justifyContent : 'flex-start',
        //backgroundColor: 'red',
        //alignContent: 'center',
        //backgroundColor: 'white',
        justifyContent : 'space-evenly',
        //borderWidth: 1,
        padding: 10,
        //borderWidth: 2,
    }
});
export default CustomHabit;