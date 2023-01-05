import React, { useState, Component, useContext,useReducer } from "react";
import { View, Button, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView,Image, TextInput, Alert, Switch } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import themeContext from "./styles/themeContext";
import ChooseColor from "./icon_color/chooseColor";
import ChooseIcon from "./icon_color/chooseIcon";
import Icons from "./icon_color/Icon";
import TimePickerDialog from '@react-native-community/datetimepicker';

import DateTimePicker from '@react-native-community/datetimepicker';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import SelectDropdown from 'react-native-select-dropdown';
import SelectFreq from './frequency/selectday';
import SelectUnit from './unit/unit';



// import addName from ./''

import { useStore , addHabitOfaDay, addHabitList} from '../Store'
import { setHabitInput } from '../Store/action'
import { db, addHabit } from '../Store/database'

//import { db, addHabit} from '../Store/database'
const AddHabit = ({navigation, route}) => {
    const frequency = ["Daily", "Weekly", "Monthly"]
    const [state,dispatch] = useStore();
    const { name, colors, image, IconInfo, unitHabit } = route.params;
    const IconDetail = {
        iconName: IconInfo[0],
        iconFamily: IconInfo[1],
    }
    const theme = useContext(themeContext);
    const [goal, setGoal] = useState("1");
    const [currentTabPeriod, setCurrentTabPeriod] = useState("Week");
    const [currentTabTime, setCurrentTabTime] = useState("Anytime");
    const [changecolor, setcolor] = useState(colors);
    const [note, setNote] = useState('');
    const [freq, setFreq] = useState('');
    const [mess, setMess] = useState('');
    const [startDay, setStartDay] = useState(new Date());
    const [endDay, setEndDay] = useState(new Date());
    const [isEnabled, setIsEnabled] = useState(0);
    const [unit, setUnit] = useState(unitHabit);
    const [tag, setTag] = useState('');
    const [habitname, setName] = useState(name);
    const [selectedItem, setItem] = useState('Daily')
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const habit = {
        name: habitname,
        note: note,
        frequency: freq,
        color: changecolor,
        tagID: 0,
        frequencyType: 'Day',
        timeRange: currentTabTime,
        remainderMessage: mess,
        showMemo: isEnabled,
        chartType: 0,
        habitStartDay: startDay.toLocaleString(),
        habitEndDay: endDay.toDateString(),
        goalNo: goal,
        goalPeriod: currentTabPeriod,
        unitID: '',
        iconName: IconInfo[0],
        iconFamily: IconInfo[1],
    }
    const Week = [
        {
            id : 1,
            title: 'MON',
            selected: 0
        },
        {
            id : 2,
            title: 'TUE',
            selected: 0
        },
        {
            id : 3,
            title: 'WED',
            selected: 0
        },
        {
            id : 4,
            title: 'THU',
            selected: 0
        },
        {
            id : 5,
            title: 'FRI',
            selected: 0
        },
        {
            id : 6,
            title: 'SAT',
            selected: 0
        },
        {
            id : 7,
            title: 'SUN',
            selected: 0
        },
]   
    const month = [];
    for ( var i = 0; i < 30; i++)
    {
        month.push({id:i+1 , title: i+1, selected: 0})
    }
    const [select, setSelect] = useState(Week);
    const [icon, setIcon] = useState('');
    return (
        <View style={{ flex: 1, flexDirection : 'column'}}>
            <View style ={styles.Habit}>
                <ScrollView >
                    <View style = {{flexDirection: 'column', padding: 10, }}>
                        <Text style ={{fontWeight: 'bold', color: theme.color }}>Name</Text>
                        <TextInput
                            style={[styles.textInput]}
                            placeholder={(habitname)}
                            value={habitname}
                            onChangeText={(value) => setName(value)}
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
                            <View style ={{ 
                                flexDirection: 'row', 
                                justifyContent: 'space-between', 
                                flex: 0.5, 
                                padding: 10, 
                                }}>
                                <Text style = {{fontSize: 12 }}>Icon</Text>
                                {TabChoose('Icon', changecolor, setcolor,setIcon, unit,setUnit, tag, setTag, IconDetail,1)}
                                <Text>|</Text>
                                <Text style = {{fontSize: 12 }}>Color</Text>
                                {TabChoose('Color', changecolor, setcolor,setIcon, unit,setUnit, tag, setTag, IconDetail,2)}
                            </View>
                        </View>
                    </View>

                    <View style = {{flexDirection: 'column', padding: 10}}>
                            <Text style ={{fontWeight: 'bold', color: theme.color }}>Tag</Text>
                            
                    </View>

                    <View style = {{flexDirection: 'column',padding: 10}}>
                        <Text style ={{fontWeight: 'bold', color: theme.color }}>Goal & Goal Period</Text>
                            <View style = {{flexDirection: 'row'}}>
                                <View style ={{ flexDirection: 'row', padding: 10, justifyContent: 'space-evenly', flex: 0.7 }}>
                                    <TextInput
                                        style = {
                                            {
                                                width: 50,
                                                height: 17,
                                                backgroundColor: changecolor,
                                                borderRadius: 20,
                                                textAlign: 'center'
                                            }
                                        }
                                        value={goal}
                                        placeholder={goal}
                                        onChangeText={(value) => setGoal(value)}
                                    />
                                    {TabChoose('count', changecolor, setcolor,setIcon, unit,setUnit, tag, setTag, IconDetail,4)}
                                </View>
                                <View style = {{flexDirection: 'row', padding: 10, alignSelf: 'center'}}>
                                    {TabButton(currentTabPeriod, setCurrentTabPeriod,"Day", changecolor)}
                                    {TabButton(currentTabPeriod, setCurrentTabPeriod,"Week", changecolor,Week,setSelect)}
                                    {TabButton(currentTabPeriod, setCurrentTabPeriod,"Month", changecolor,month,setSelect)}
                                </View>
                        </View>
                    </View>

                    <View style = {{flexDirection: 'column', padding: 10}}>
                        <View style = {{flexDirection: 'row' , justifyContent: 'space-between'}}>
                            <View style = {{flexDirection: 'column'}}>
                                <Text style ={{fontWeight: 'bold', color: theme.color}}>Frequency</Text>
                                {DisplayNote(select,goal,unit)}
                            </View>
                            <View style = {{flexDirection: 'row', justifyContent: 'center'}}>
                                <SelectDropdown
                                    buttonStyle={{width: 75, height: 15, backgroundColor: 'white'}}
                                    buttonTextStyle= {{fontSize: 8}}
                                    defaultButtonText={selectedItem}
                                    data={frequency}
                                    onSelect={(selectedItem, index) => setItem(selectedItem)}
                                />
                                {TabChoose('>', changecolor, setcolor,setIcon, unit,setUnit, tag, setTag, IconDetail,3,currentTabPeriod,goal,select,setSelect)}
                            </View>
                        </View>
                    </View>

                    <View style = {{flexDirection: 'column', padding: 10}}>
                        <Text style ={{fontWeight: 'bold', color: theme.color }}>Time Range</Text>
                            <View style = {{flexDirection: 'row', flex: 1, padding: 10}}>
                                <View style ={{ flexDirection: 'row', justifyContent: 'space-evenly', flex: 0.8}}>
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
                             style={[styles.textInput]}
                            value={mess}
                            placeholder="Enter your message here!"
                            onChangeText={(value) => setMess(value)}
                        />
                    </View>

                    <View style = {{flexDirection: 'column', padding: 10}}>
                        <View style = {{flex: 0.2, flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style ={{fontWeight: 'bold', color: theme.color, alignSelf: 'center' }}>Show memo after check-in</Text>
                            <Switch
                                //style ={{borderWidth: 1}}
                                trackColor={{ false: "#d9d6c6", true: "orange" }}
                                thumbColor={isEnabled ? "white" : "#76756d"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </View>
                    </View>

                    <View style = {{flexDirection: 'column', padding: 10}}>
                            <View style = {{flexDirection : 'row', justifyContent: 'space-between', alignContent: 'center'}}>
                                <Text style ={{fontWeight: 'bold', color: theme.color, alignSelf: 'center' }}>Chart Type</Text>
                                <View style = {{flexDirection: 'row'}}>
                                <TouchableOpacity >
                                <Icons type = {'ant'} name = {'barschart'} size = {32} />
                                </TouchableOpacity>
                                <TouchableOpacity >
                                <Icons type = {'ant'} name = {'barschart'} size = {32} />
                                </TouchableOpacity>
                                </View>
                            </View>
                    </View>

                    <View style = {{flexDirection: 'column', padding: 10}}>
                        <Text style ={{fontWeight: 'bold', color: theme.color }}>Habit Term</Text>
                            <View style = {{flexDirection: 'row', flex: 1}}>
                                <View style ={{ flexDirection: 'column', alignItems: 'center',flex: 0.5, padding: 10 }}>
                                    <Text>Start</Text>
                                    {ShowTimePicker(startDay, setStartDay, endDay, setEndDay, 1)}
                                </View>
                                <View style ={{ flexDirection: 'column', alignItems: 'center',flex: 0.5, padding: 10 }}>
                                    <Text>End</Text>
                                    {ShowTimePicker(startDay, setStartDay, endDay, setEndDay, 0)}
                                </View>
                            </View>
                    </View> 
                </ScrollView>

            </View>
        <SafeAreaView style = {styles.homeZone}> 
            <TouchableOpacity 
                onPress={() => {
                    // dispatch(addHabitOfaDay(name.toLowerCase()));
                    dispatch(setHabitInput(habit));
                    //dispatch(addHabitList(habit));

                    addHabit(state.habit);
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

const TabButton = (currentTabPeriod, setCurrentTabPeriod, title, color, time, setSelect) => {
    return (
        <TouchableOpacity onPress={() => {
            setCurrentTabPeriod(title),
            setSelect(time)
        }}>
        <View style={[styles.btnTouch, 
            { backgroundColor: currentTabPeriod == title ? color : '#f5f5f5'}
        ]}>
            <Text style={{
            fontSize: 12,
            color: currentTabPeriod == title ? "black" : "#a9a9a9"
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
        { backgroundColor: currentTabTime == title ? color : '#f5f5f5'}
      ]}>
        <Text style={{
          fontSize: 12,
          color: currentTabTime == title ? "black" : "#a9a9a9"
        }}>{title}</Text>

      </View>
    </TouchableOpacity>
  )
}
const TabChoose = (title, changecolor, setcolor,setIcon, unit,setUnit, tag, setTag, IconDetail, flag,currentTabPeriod,goal,select,setSelect) => {
const [isEnabled, setIsEnabled] = useState(false);
if (flag == 2)
  return (
    <TouchableOpacity style = {[styles.btnTouch, {backgroundColor: changecolor}]}    
        onPress ={() => {
                    setIsEnabled(!isEnabled)
                    }}
                    >
                <View style={[styles.btnTouch]}>
                    {isEnabled && title == 'Color' && <ChooseColor
                        myIsmodalVisible = {isEnabled}
                        setModalVisible = {setIsEnabled}
                        color = {changecolor}
                        setColor ={setcolor}
                    ></ChooseColor>
                    }
                </View>
    </TouchableOpacity>
  )
else if (flag == 1)
return (
    <TouchableOpacity style = {[styles.btnTouch]} 
    onPress ={() => {
                    setIsEnabled(!isEnabled)
                    }}
                    >
    <Icons type = {IconDetail.iconFamily} name = {IconDetail.iconName} size = {18} color = {changecolor} />
                    {isEnabled && title == 'Icon' && <ChooseIcon 
                        myIsmodalVisible = {isEnabled}
                        setModalVisible = {setIsEnabled}
                        seticon = {setIcon}
                    ></ChooseIcon>
                    }
    </TouchableOpacity>
  )
  else if ( flag == 3)
  return (
    <TouchableOpacity 
            onPress ={() => {
                setIsEnabled(!isEnabled)
                            }}
                >
                {isEnabled  && title == '>' && <SelectFreq
                myIsmodalVisible = {isEnabled}
                setModalVisible = {setIsEnabled}
                freq ={currentTabPeriod}
                color = {changecolor}
                goal ={goal}
                select = {select}
                setSelect = {setSelect}
                ></SelectFreq>
                }
                <Text> {title} </Text>
                </TouchableOpacity>
  )
  else if (flag == 4)
    return (
        <TouchableOpacity style = {[styles.btnTouch, {backgroundColor: changecolor}]}
            onPress ={() => {
                setIsEnabled(!isEnabled)
                            }}
                >
                {isEnabled && title == 'count' && <SelectUnit
                myIsmodalVisible = {isEnabled}
                setModalVisible = {setIsEnabled}
                unit = {unit}
                setunit = {setUnit}
                ></SelectUnit>
                }
                <Text style = {{fontSize: 12}}>{unit}</Text>
                </TouchableOpacity>
  )
}
const ShowTimePicker = (startDay, setStartDay,endDay, setEndDay, flag) => {
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        if (flag == 1)
            setStartDay(currentDate);
        else 
            setEndDay(currentDate);
        };
        const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
        };
        const showDatepicker = () => {
            showMode('date');
        };
    if (flag == 1)
    return (
        <View>
            <TouchableOpacity onPress={showDatepicker} style = {{flexDirection: 'row', borderRadius: 10, backgroundColor: 'green'}} >
            <Text>{startDay.toLocaleString()}</Text>
            {show && (
                <TimePickerDialog
                testID="dateTimePicker"
                value={startDay}
                mode={mode}
                is24Hour={true}
                positiveButton={{label: 'OK', textColor: 'green'}}
                onChange={onChange}
                />
            )}
            </TouchableOpacity>
        </View>
    )
    else 
    return (
            <View>
            <TouchableOpacity onPress={showDatepicker} style = {{flexDirection: 'row', borderRadius: 10, backgroundColor: 'green'}} >
            <Text>{endDay.toLocaleString()}</Text>
            {show && (
                <TimePickerDialog
                testID="dateTimePicker"
                value={endDay}
                mode={mode}
                is24Hour={true}
                positiveButton={{label: 'OK', textColor: 'green'}}
                onChange={onChange}
                />
            )}
            </TouchableOpacity>
        </View>
        )
}
const DisplayNote = (select,goal,unit) => {
    return (
    <View style = {{flexDirection: 'row'}}>
        <Text style ={{fontSize: 10}}>Complete {goal} {unit} in</Text>
        
        {select.map((value) => 
        <Text style = {{fontSize: 10}}key = {value.id} > {value.selected ? value.title : null}</Text> 
    )}
    </View>
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
        backgroundColor: 'white',
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
        height: 30, 
        with: '20%', 
        flex: 0.2,
        borderRadius: 5,
        backgroundColor: '#f5f5f5', 
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
        width: 60, 
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

