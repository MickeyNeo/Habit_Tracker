import React, { useState, Component, useContext,useReducer } from "react";
import { View, Button, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView,Image, TextInput, Alert, Switch } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import themeContext from "./styles/themeContext";
import ChooseColor from "./icon_color/chooseColor";
import ChooseIcon from "./icon_color/chooseIcon";
import Icons from "./icon_color/Icon";
import TimePickerDialog from '@react-native-community/datetimepicker';
import { format} from 'date-fns';
import DateTimePicker from '@react-native-community/datetimepicker';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import SelectDropdown from 'react-native-select-dropdown';
import SelectFreq from './frequency/selectday';
import SelectUnit from './unit/unit';
import moment from 'moment';


// import addName from ./''

import { useStore , addHabitOfaDay, addHabitList} from '../Store'
import { setHabitInput } from '../Store/action'
import { db, addHabit } from '../Store/database'
//import { db, addHabit} from '../Store/database'
const AddHabit = ({navigation, route}) => {
    const frequency = ["Daily", "Weekly", "Monthly"]
    const [state,dispatch] = useStore();
    const { name, colors, IconInfo, unitHabit } = route.params;
    const IconDetail = {
        iconName: IconInfo[0],
        iconFamily: IconInfo[1],
    }
    const Week = [];
    const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    for (let i = 0; i < days.length; i++) {
        const day = {
            id: i + 1,
            title: days[i],
            selected: 0
        };
        Week.push(day);
    }
    const month = [];
    for ( var i = 0; i < 30; i++)
    {
        month.push({id:i+1 , title: i+1, selected: 0})
    }
    const today = new Date();
    const day = moment(today).format('ddd')
    const date = [{title: day.toUpperCase(), selected: true}]
    const [select, setSelect] = useState(date);
    const showday = []
    select.forEach((item) => { if (item.selected == true ) showday.push(item.title)})
    const [value, setState] = useState({
        goal: "1",
        currentTabPeriod: "Day",
        currentTabTime: "Anytime",
        changecolor: colors,
        note: "",
        freq: "",
        mess: "",
        startDay: new Date(),
        endDay: new Date(),
        formattedDateStart: moment(new Date()).format('YYYY-MM-DD'),
        formattedDateEnd: moment(new Date()).format('YYYY-MM-DD'),
        isEnabled: 0,
        unit: unitHabit,
        tag: "",
        habitname: name,
        selectedItem: "Daily",
    });
    const theme = useContext(themeContext);
    const toggleSwitch = () => setState(prevState => ({ ...prevState, isEnabled: !prevState.isEnabled}));
    const habit = {
        name: value.habitname,
        note: value.note,
        frequency: value.freq,
        color: value.changecolor,
        tagID: 0,
        frequencyType: 'Day',
        timeRange: value.currentTabTime,
        remainderMessage: value.mess,
        showMemo: value.isEnabled,
        chartType: 0,
        habitStartDay: value.formattedDateStart,
        habitEndDay: value.formattedDateEnd,
        goalNo: value.goal,
        goalPeriod: value.currentTabPeriod,
        unitID: '',
        icon: IconInfo[0],
        iconFamily: IconInfo[1],
        week: showday,
    }
    return (
        <View style={{ flex: 1, flexDirection : 'column'}}>
            <View style ={styles.Habit}>
                <ScrollView >
                    <View style = {{flexDirection: 'column', padding: 10, }}>
                        <Text style ={{fontWeight: 'bold', color: theme.color }}>Name</Text>
                        <TextInput
                            style={[styles.textInput]}
                            placeholder={(value.habitname)}
                            value={value.habitname}
                            onChangeText={(value) => setState(prevState => ({ ...prevState, habitname: value }))}
                        />
                    </View>

                    <View style = {{flexDirection: 'column', padding: 10, }}>
                        <Text style ={{fontWeight: 'bold', color: theme.color }}>Note</Text>
                        <TextInput
                            style={styles.textInput}
                            value={value.note}
                            placeholder="Description or other infos"
                            onChangeText={(value) => setState(prevState => ({ ...prevState, note: value }))}
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
                                {TabChoose('Icon', value.changecolor, value.unit, value.tag, IconDetail, setState, 1)}
                                <Text>|</Text>
                                <Text style = {{fontSize: 12 }}>Color</Text>
                                {TabChoose('Color', value.changecolor, value.unit, value.tag, IconDetail,setState,2)}
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
                                    style = {{
                                        width: 50,
                                        height: 17,
                                        backgroundColor: value.changecolor,
                                        borderRadius: 20,
                                        textAlign: 'center'
                                        }}
                                        value={value.goal}
                                        placeholder={value.goal}
                                        onChangeText={(value) => setState(prevState => ({ ...prevState, goal: value }))}
                                    />
                                {TabChoose('count', value.changecolor, value.unit, value.tag, IconDetail,setState,4)}
                            </View>
                            <View style = {{flexDirection: 'row', padding: 10, alignSelf: 'center'}}>
                                {TabButton(value.currentTabPeriod, setState,"Day", value.changecolor,date,setSelect)}
                                {TabButton(value.currentTabPeriod, setState,"Week", value.changecolor,Week,setSelect)}
                                {TabButton(value.currentTabPeriod, setState,"Month", value.changecolor,month,setSelect)}
                            </View>
                        </View>
                    </View>

                    <View style = {{flexDirection: 'column', padding: 10}}>
                        <View style = {{flexDirection: 'row' , justifyContent: 'space-between'}}>
                            <View style = {{flexDirection: 'column'}}>
                                <Text style ={{fontWeight: 'bold', color: theme.color}}>Frequency</Text>
                                {DisplayNote(select,value.goal,value.unit)}
                            </View>
                            <View style = {{flexDirection: 'row', justifyContent: 'center'}}>
                                <SelectDropdown
                                    buttonStyle={{width: 75, height: 15, backgroundColor: 'white'}}
                                    buttonTextStyle= {{fontSize: 8}}
                                    defaultButtonText={value.selectedItem}
                                    data={frequency}
                                    onSelect={(selectedItem, index) => setState(prevState => ({ ...prevState, selectedItem: selectedItem }))}
                                />
                                {TabChoose('>', value.changecolor, value.unit, value.tag, IconDetail,setState,3, value.currentTabPeriod, value.goal,select,setSelect)}
                            </View>
                        </View>
                    </View>

                    <View style = {{flexDirection: 'column', padding: 10}}>
                        <Text style ={{fontWeight: 'bold', color: theme.color }}>Time Range</Text>
                            <View style = {{flexDirection: 'row', flex: 1, padding: 10}}>
                                <View style ={{ flexDirection: 'row', justifyContent: 'space-evenly', flex: 0.8}}>
                                {TabButtontime(value.currentTabTime, setState, "Anytime",value.changecolor)}
                                {TabButtontime(value.currentTabTime, setState, "Morning", value.changecolor)}
                                {TabButtontime(value.currentTabTime, setState, "Afternoon", value.changecolor)}
                                {TabButtontime(value.currentTabTime, setState, "Evening", value.changecolor)}
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
                            value={value.mess}
                            placeholder="Enter your message here!"
                            onChangeText={(value) => setState(prevState => ({ ...prevState, mess: value }))}
                        />
                    </View>

                    <View style = {{flexDirection: 'column', padding: 10}}>
                        <View style = {{flex: 0.2, flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style ={{fontWeight: 'bold', color: theme.color, alignSelf: 'center' }}>Show memo after check-in</Text>
                            <Switch
                                //style ={{borderWidth: 1}}
                                trackColor={{ false: "#d9d6c6", true: "orange" }}
                                thumbColor={value.isEnabled ? "white" : "#76756d"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={value.isEnabled}
                            />
                        </View>
                    </View>

                    <View style = {{flexDirection: 'column', padding: 10}}>
                            <View style = {{flexDirection : 'row', justifyContent: 'space-between', alignContent: 'center'}}>
                                <Text style ={{fontWeight: 'bold', color: theme.color, alignSelf: 'center' }}>Chart Type</Text>
                                <View style = {{flexDirection: 'row'}}>
                                    <TouchableOpacity>
                                        <Icons type = {'ant'} name = {'barschart'} size = {32} />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Icons type = {'ant'} name = {'barschart'} size = {32} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                    </View>

                    {/* <View style = {{flexDirection: 'column', padding: 10}}>
                        <Text style ={{fontWeight: 'bold', color: theme.color }}>Habit Term</Text>
                        <View style = {{flexDirection: 'row', flex: 1}}>
                            <View style ={{ flexDirection: 'column', alignItems: 'center',flex: 0.5, padding: 10 }}>
                                <Text>Start</Text>
                                {ShowTimePicker(value.startDay, setStartDay, endDay, setEndDay, 1)}
                            </View>
                            <View style ={{ flexDirection: 'column', alignItems: 'center',flex: 0.5, padding: 10 }}>
                                <Text>End</Text>
                                {ShowTimePicker(value.startDay, setStartDay, endDay, setEndDay, 0)}
                            </View>
                        </View>
                    </View>  */}
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

const TabButton = (currentTabPeriod, setState, title, color, time, setSelect) => {
    return (
        <TouchableOpacity onPress={() => {
            setState(prevState => ({ ...prevState, currentTabPeriod: title })),
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
const TabButtontime = (currentTabTime, setState, title, color) => {
  return (
    <TouchableOpacity onPress={() => {
        setState(prevState => ({ ...prevState, currentTabTime: title }))
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
const TabChoose = ( title, changecolor, unit, tag, IconDetail, setState, flag, currentTabPeriod, goal,select,setSelect) => {
  const [isEnabled, setIsEnabled] = useState(false);
  return (
    <TouchableOpacity
      style={[styles.btnTouch, flag === 2 && { backgroundColor: changecolor }]}
      onPress={() => {
        setIsEnabled(!isEnabled)
      }}
    >
      {flag === 1 && (
        <Icons type={IconDetail.iconFamily} name={IconDetail.iconName} size={18} color={changecolor} />
      )}
      {isEnabled && (
        <>
          {title === 'Color' && flag === 2 && (
            <ChooseColor
              myIsmodalVisible={isEnabled}
              setModalVisible={setIsEnabled}
              color={changecolor}
              setColor={setState}
            />
          )}
          {title === 'Icon' && flag === 1 && (
            <ChooseIcon
              myIsmodalVisible={isEnabled}
              setModalVisible={setIsEnabled}
              seticon={setState}
            />
          )}
          {title === '>' && flag === 3 && (
            <SelectFreq
              myIsmodalVisible={isEnabled}
              setModalVisible={setIsEnabled}
              freq={currentTabPeriod}
              color={changecolor}
              goal={goal}
              select={select}
              setSelect={setSelect}
            />
          )}
          {title === 'count' && flag === 4 && (
            <SelectUnit
              myIsmodalVisible={isEnabled}
              setModalVisible={setIsEnabled}
              unit={unit}
              setunit={setState}
            />
          )}
        </>
      )}
      {flag === 3 && <Text>{title}</Text>}
      {flag === 4 && (
        <Text style={{ fontSize: 12 }}>{unit}</Text>
      )}
    </TouchableOpacity>
  )
}
const ShowTimePicker = (startDay, endDay, setState, flag) => {
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    if (flag === 1) {
      setStartDay(currentDate);
    } else {
      setEndDay(currentDate);
    }
  };
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };
  const showDatepicker = () => {
    showMode('date');
  };

  return (
    <View>
      <TouchableOpacity
        onPress={showDatepicker}
        style={{ flexDirection: 'row', borderRadius: 10, backgroundColor: 'green' }}
      >
        <Text>{flag === 1 ? startDay.toLocaleString() : endDay.toLocaleString()}</Text>
        {show && (
          <TimePickerDialog
            testID="dateTimePicker"
            value={flag === 1 ? startDay : endDay}
            mode={mode}
            is24Hour
            positiveButton={{ label: 'OK', textColor: 'green' }}
            onChange={onChange}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};
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

