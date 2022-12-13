import React, { useState, Component, useContext,useReducer } from "react";
import { View, Button, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView,Image, TextInput, Alert, } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Fontisto from '@expo/vector-icons/Fontisto';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import ColorPicker from 'react-native-wheel-color-picker';
import { ChromePicker } from 'react-color';
import themeContext from "./styles/themeContext";
import ChooseColor from "./icon_color/chooseColor";
import ChooseIcon from "./icon_color/chooseIcon";
import Icons from "./icon_color/Icon";
// import addName from ./''

import { useStore , addHabitOfaDay, addHabitList} from '../Store'
import { setHabitInput } from '../Store/action'
import { db, addHabit} from '../Store/database'

const AddHabit = ({navigation, route}) => {
    const [state,dispatch] = useStore();
    const { name, colors, image, IconInfo } = route.params;
    const IconDetail = {
        iconName: IconInfo[0],
        iconFamily: IconInfo[1],
    }
    const theme = useContext(themeContext);
    const [currentTabGoal, setCurrentTabGoal] = useState("1");
    const [currentTabPeriod, setCurrentTabPeriod] = useState("Day");
    const [currentTabTime, setCurrentTabTime] = useState("Anytime");
    const [isEnabled, setIsEnabled] = useState(false);
    const [changecolor, setcolor] = useState(colors);
    const [note, setNote] = useState('');
    const [freq, setFreq] = useState('');
    const [mess, setMess] = useState('');
   const habit = {
        id: 0,
        name: name,
        note: note,
        frequency: freq,
        color: changecolor,
        tagID: 0,
        frequencyType: '',
        timeRange: currentTabTime,
        remainderMessage: mess,
        showMemo: 0,
        chartType: '',
        habitStartDay: '',
        habitEndDay: '',
        goalNo: currentTabGoal,
        goalPeriod: currentTabPeriod,
        unitID: '',
        image: image,
    }
    const [icon, setIcon] = useState('');

    return (
        <View style={{backgroundColor: theme.backgroundColor, flex: 1, flexDirection : 'column'}}>
            <View style ={styles.Habit}>
                <ScrollView >
                    <View style = {{flexDirection: 'column', padding: 10, }}>
                    <Text style ={{fontWeight: 'bold', color: theme.color }}>Name</Text>
                    <TextInput
                        style={[styles.textInput,{backgroundColor: theme.backgroundColor1}]}
                        placeholder={(name)}
                    />
                    </View>
                    <View style = {{flexDirection: 'column', padding: 10, }}>
                    <Text style ={{fontWeight: 'bold', color: theme.color }}>Note</Text>
                    <TextInput
                        style={styles.textInput}
                        value={note}
                        placeholder="Description or other infos"
                        onChangeText={(value) => setNote(value)}
                    />
                    </View>
                    <View style = {{flexDirection: 'column', padding: 10, }}>
                        <Text style ={{fontWeight: 'bold', color: theme.color }}>Icon & Color</Text>
                        <View style = {{flexDirection: 'row', flex: 2}}>
                            <View style ={{ flexDirection: 'row', justifyContent: 'space-evenly', flex: 0.5 }}>
                                <Text>Icon</Text>
                                {TabChoose('Icon', changecolor, setcolor,setIcon,0,IconDetail)}
                                <Text>Color</Text>
                                {TabChoose('Color', changecolor, setcolor,setIcon,1,IconDetail)}
                            </View>
                        </View>
                    </View>

                    <View style = {{flexDirection: 'column', padding: 10}}>
                        <Text style ={{fontWeight: 'bold', color: theme.color }}>Tag</Text>
                        <TouchableOpacity style = {{borderRadius: 10, width: 40, alignItems: 'center', backgroundColor: '#f5f5f5',}}>
                            <Ionicons name ='add' size = {20} color = {changecolor} />
                        </TouchableOpacity>
                    </View>

                    <View style = {{flexDirection: 'column',padding: 10}}>
                    <Text style ={{fontWeight: 'bold', color: theme.color }}>Goal & Goal Period</Text>
                        <View style = {{flexDirection: 'row', flex: 1}}>
                            <View style ={{ flexDirection: 'row', justifyContent: 'space-evenly',flex: 1, marginTop: 5 }}>
                            {TabButton(currentTabGoal,currentTabPeriod, setCurrentTabGoal,setCurrentTabPeriod,"1", changecolor,1)}
                            {TabButton(currentTabGoal,currentTabPeriod, setCurrentTabGoal,setCurrentTabPeriod,"count",changecolor,1)}
                            {TabButton(currentTabGoal,currentTabPeriod, setCurrentTabGoal,setCurrentTabPeriod,"Day", changecolor,0)}
                            {TabButton(currentTabGoal,currentTabPeriod, setCurrentTabGoal,setCurrentTabPeriod,"Week", changecolor,0)}
                            {TabButton(currentTabGoal,currentTabPeriod, setCurrentTabGoal,setCurrentTabPeriod,"Month", changecolor,0)}
                            </View>
                        </View>
                    </View>
                    <View style = {{flexDirection: 'column', padding: 10}}>
                    <Text style ={{fontWeight: 'bold', color: theme.color }}>Frequency</Text>
                    <TextInput
                        style={[styles.textInput,{backgroundColor: theme.backgroundColor1}]}
                        placeholder="Type here to translate!"
                        //onChangeText={newText => setText(newText)}
                        //defaultValue={text}
                    />
                    </View>
                    <View style = {{flexDirection: 'column', padding: 10}}>
                    <Text style ={{fontWeight: 'bold', color: theme.color }}>Time Range</Text>
                        <View style = {{flexDirection: 'row', flex: 1}}>
                            <View style ={{ flexDirection: 'row', justifyContent: 'flex-start',flex: 0.5, marginTop: 5 }}>
                            {TabButtontime(currentTabTime, setCurrentTabTime, "Anytime",changecolor)}
                            {TabButtontime(currentTabTime, setCurrentTabTime, "Morning", changecolor)}
                            {TabButtontime(currentTabTime, setCurrentTabTime, "Afternoon", changecolor)}
                            {TabButtontime(currentTabTime, setCurrentTabTime, "Evening", changecolor)}
                            </View>
                        </View> 
                    </View>
                    <View style = {{flexDirection: 'column', padding: 10}}>
                    <Text style ={{fontWeight: 'bold', color: theme.color }}>Remainder</Text>
                    </View>
                    <View style = {{flexDirection: 'column', padding: 10}}>
                    <Text style ={{fontWeight: 'bold', color: theme.color }}>Remainder Messages</Text>
                    <TextInput
                        style={[styles.textInput,{backgroundColor: theme.backgroundColor1}]}
                        value={mess}
                        placeholder="Enter your message here!"
                        onChangeText={(value) => setMess(value)}
                    />
                    </View>
                    {/* <View style = {{flexDirection: 'column', padding: 10}}>
                        <View style = {{flexDirection : 'row'}}>
                            <Text style ={{fontWeight: 'bold', color: theme.color }}>Chart Type</Text>
                            <Image 
                                source={require('./Icon/bar-chart.png')}
                                style={{ width: 48, height: 48,}}
                            />
                        </View>
                    </View>
                    <View style = {{flexDirection: 'column', padding: 10}}>
                    <Text style ={{fontWeight: 'bold', color: theme.color }}>Habit Term</Text>
                        <View style = {{flexDirection: 'row', flex: 1}}>
                            <View style ={{ flexDirection: 'row', justifyContent: 'flex-start',flex: 0.5 }}>
                            </View>
                        </View>
                    </View> */}
                </ScrollView>

            </View>
        <SafeAreaView style = {styles.homeZone}> 
            <TouchableOpacity 
                onPress={() => {
                    dispatch(addHabitOfaDay(name.toLowerCase()));

                    dispatch(setHabitInput(habit));
                    dispatch(addHabitList(habit));

                    navigation.navigate('Home', {
                        screen: 'AddHabit',
                    });
                }}>
                <Image
                    source={require('./Icon/done.png')}
                    style={{ width: 45, height: 45,}}
                />
            </TouchableOpacity>
        </SafeAreaView>
        </View>
    );
};

const TabButton = (currentTabGoal,currentTabPeriod, setCurrentTabGoal,setCurrentTabPeriod, title, color , flag) => {
if (flag ==1 )
    return (
        <TouchableOpacity onPress={() => {
            setCurrentTabGoal(title)
        }}>
        <View style={[styles.btnTouch, 
            { backgroundColor: currentTabGoal == title ? color : 'transparent'}
        ]}>
            <Text style={{
            fontSize: 15,
            color: currentTabGoal == title ? "#a9a9a9" : "grey"
            }}>{title}</Text>

        </View>
        </TouchableOpacity>
    )
else 
    return (
        <TouchableOpacity onPress={() => {
            setCurrentTabPeriod(title)
        }}>
        <View style={[styles.btnTouch, 
            { backgroundColor: currentTabPeriod == title ? color : 'transparent'}
        ]}>
            <Text style={{
            fontSize: 15,
            color: currentTabPeriod == title ? "#a9a9a9" : "grey"
            }}>{title}</Text>

        </View>
        </TouchableOpacity>
    )
}
const TabButtontime = (currentTabTime, setCurrentTabTime, title, color) => {
  return (
    <TouchableOpacity onPress={() => {
        setCurrentTabTime(title)
    }}>
      <View style={[styles.btnTouchTime, 
        { backgroundColor: currentTabTime == title ? color : 'transparent'}
      ]}>
        <Text style={{
          fontSize: 15,
          color: currentTabTime == title ? "#a9a9a9" : "grey"
        }}>{title}</Text>

      </View>
    </TouchableOpacity>
  )
}
const TabChoose = (title, changecolor, setcolor, setIcon, flag, IconDetail) => {
const [isEnabled, setIsEnabled] = useState(false);
if (flag == 1)
  return (
    <TouchableOpacity style = {[styles.btnTouch, {backgroundColor: changecolor}]}    
    onPress ={() => {
                    setIsEnabled(!isEnabled)
                    }}
                    >
                    {isEnabled && title == 'Color' && <ChooseColor
                        myIsmodalVisible = {isEnabled}
                        setModalVisible = {setIsEnabled}
                        color = {changecolor}
                        setColor ={setcolor}
                    ></ChooseColor>
                    }
    </TouchableOpacity>
  )
else 
return (
    <TouchableOpacity style = {[styles.btnTouch]} 
    onPress ={() => {
                    setIsEnabled(!isEnabled)
                    }}
                    >
    <Icons type = {IconDetail.iconFamily} name = {IconDetail.iconName} size = {20} color = {changecolor} />
                    {isEnabled && title == 'Icon' && <ChooseIcon 
                        myIsmodalVisible = {isEnabled}
                        setModalVisible = {setIsEnabled}
                        seticon = {setIcon}
                    ></ChooseIcon>
                    }
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    addHabit: { 
        alignItems: 'stretch',
        height: '15%',
        width: '100%',

    },
    Habit: {
        flex: 0.9,
        height: '88%',
        width: '100%',
    },
    homeZone: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent : 'space-evenly',
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
        with: '20%', 
        flex: 0.2,
        borderRadius: 5,
        padding: 10,
        //backgroundColor: '#f5f5f5', 
        color: '#a9a9a9',
    },
    customHabit: {
        flex: 0.4,
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 10,
        alignItems: 'center',
        alignSelf: 'flex-start',
        padding: 2,
        backgroundColor: '#D9D9D9',
        left: '20%',
        right: '20%',
        width: '60%',
        top: '5%',
    },
    btnTouch: {
        borderRadius: 10, 
        width: 50, 
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        
    },
    btnTouchTime: {
        borderRadius: 10, 
        width: 80, 
        alignItems: 'center',
        fontSize: 20,
        backgroundColor: '#f5f5f5',
        color: '#a9a9a9',
    },
    habitZone: {
        flexDirection: 'column',
    },
    zone: {
        flexDirection :'row',
        justifyContent : 'space-evenly',
        padding: 10,
    }
});
export default AddHabit;