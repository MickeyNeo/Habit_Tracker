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
import Modal from "react-native-modal";

import { useStore , setListProgressDay, delHabit, editListProgressDay} from '../Store'
import { setHabitInput } from '../Store/action'
import { db, addHabit, updateHabit } from '../Store/database'
import { Tile } from "@rneui/base";
const EditHabit = ({navigation, route}) => {
  const frequency_of_day = ["Daily", "Weekly", "Monthly"]
  const frequency_of_week = ["Weekly", "Monthly"]
  const [state, dispatch] = useStore();
  const {currentTheme} =state
  const {Habit} = route.params;
  const IconDetail = {
      iconName: Habit.icon,
      iconFamily: Habit.iconFamily,
  }
  
  const Week = [];
  const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  for (let i = 0; i < days.length; i++) {
      const day = {
          id: i + 1,
          title: days[i],
          selected: 1
      };
      Week.push(day);
  }
  const month = [];
  for ( var i = 0; i < 30; i++)
  {
      month.push({id:i+1 , title: i+1, selected: 1})
  }
  const today = new Date();
  const day = moment(today).format('ddd')
  const date = [{title: day.toUpperCase(), selected: true}]
  const findObjectById = (id) => {
    return state.listUnit.find((obj) => obj.id === id) || null;
  };
  let unit = findObjectById(Habit.unitID) 
  let freq_selected = Habit.frequency
  freq_selected = freq_selected.split(',')
  const freqtype = Habit.frequencyType;
  let old_freq_selected = []
  if (freqtype === 'Daily') {
      old_freq_selected = freq_selected;
  }
  else if (freqtype === 'Weekly') {
    for (let i = 0; i < Week.length; i++) 
    {
      Week[i].selected = freq_selected.includes(Week[i].title) ? 1 : 0;
    }
  }
  else {
    for (let i = 0; i < month.length; i++) 
    {
      month[i].selected = freq_selected.includes(month[i].title) ? 1 : 0;
    }
  }
  console.log(Week);
  const [value, setState] = useState({
      goal: Habit.goalNo,
      currentTabPeriod: Habit.goalPeriod,
      currentTabTime: Habit.timeRange,
      changecolor: Habit.color,
      note: Habit.note,
      mess: Habit.remainderMessage,
      startDay: Habit.habitStartDate,
      endDay: Habit.habitEndDate,
      isEnabled: Habit.showMemo,
      unit: unit,
      tag: Habit.tag,
      habitname: Habit.name,
      selectedItem: Habit.frequencyType,
      selectedFreq: Habit.frequencyType === 'Daily' ? date : Habit.frequencyType === 'Weekly' ? Week : month,
      icon: Habit.icon,
      iconFamily: Habit.iconFamily,
  });
  const theme = useContext(themeContext);
  const toggleSwitch = () => setState(prevState => ({ ...prevState, isEnabled: !prevState.isEnabled}));
  const habit = {
      id: Habit.id,
      name: value.habitname,
      note: value.note,
      frequency: value.frequency,
      color: value.changecolor,
      // tagID: Habit.tagID,
      frequencyType: value.selectedItem,
      timeRange: value.currentTabTime,
      remainderMessage: value.mess,
      showMemo: value.isEnabled,
      chartType: Habit.chartType,
      habitStartDate: value.startDay,
      habitEndDate: value.endDay,
      goalNo: value.goal,
      goalPeriod: value.currentTabPeriod,
      unitID: value.unit.id,
      icon: value.icon,
      iconFamily: value.iconFamily,
      flag : Habit.flag,
      tag: value.tag,
  }
  //Tag
  const [iTag, setiTag] = useState([])
  const [newTag, setNewTag] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const handleAddTag = () => {
    setiTag([...iTag, newTag]);
    setNewTag('');
  };
  const handleRemoveTag = (index) => {
    const newList = [...iTag];
    newList.splice(index, 1);
    setiTag(newList);
  };
  //Daly
  const itemWeek = ['MON', 'TUE', 'WED','THU','FRI','SAT','SUN'];
  const itemMoth = Array.from({length: 31}, (_, index) => (index + 1).toString());
  const [visModel, setVisModel] = useState(false)
  //console.log(itemMoth)
  //Danh sách các ngày được chọn
  const handleProgressDay=(startDate,endDate)=>{
    startDate = moment(value.startDay);
    endDate = moment(value.endDay);
    const dateRange = [];
    const list = [];
    while (startDate <= endDate) {
      dateRange.push(moment(startDate).format('YYYY-MM-DD'));
      //console.log(1)
      //list.push({id:id, day: moment(startDate).format('YYYY-MM-DD'), process:0, memo:''})
      dispatch(setListProgressDay({habitName: Habit.name, date: moment(startDate).format('YYYY-MM-DD'), progress:0, content:''}))
      startDate.add(1, 'days');
    }
    
  }
  //Hàm sửa habit
  const handleHabit=()=>{
    if (habit.name!==Habit.name) dispatch(editListProgressDay(state.listProgressDay.map(item=>{
      if (item.habitName=== Habit.name)
        return {...item, habitName: habit.name}
      return item
    })))
    dispatch(delHabit(state.listHabit.map(item => {
        if (item.id === Habit.id)
          return { ...item, name:habit.name, chartType : habit.chartType, color: habit.color, frequency: habit.frequency, frequencyType: habit.frequencyType, goalNo: habit.goalNo, goalPeriod: habit.goalPeriod, habitEndDate: habit.habitEndDate, habitStartDate: habit.habitStartDate, icon: habit.icon, iconFamily: habit.iconFamily, note: habit.note, remainderMessage: habit.remainderMessage, showMemo: habit.showMemo, tag: habit.tag, timeRange: habit.timeRange, unitID: habit.unitID};
        return item
        }
        )))}
  //Hàm xóa ngày
  const handDelProgressDay=(name, startDate, endDate)=>{
    console.log('1 listPro',state.listProgressDay)
    dispatch(editListProgressDay(state.listProgressDay.filter(item=>item.habitName!==name)))
    console.log('2 listPro',state.listProgressDay)
  }
  //Edit
  const handleEdit=()=>{
    if (value.endDay>Habit.habitEndDate){
      const startDate = new Date(Habit.habitEndDate.getTime() + 24 * 60 * 60 * 1000);
      const endDate = value.endDay;
      handleProgressDay(startDate,endDate);
      handleHabit();
    }
    else if (value.endDay<Habit.habitEndDate)
    {
      handDelProgressDay(value.habitname,value.endDay,Habit.habitEndDate)
      handleHabit();
    }
    else 
    handleHabit();
    updateHabit(Habit, habit);
    navigation.goBack()
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
                              padding: 10
                              }}>
                              <Text style = {{fontSize: 12, alignSelf: 'center' }}>Icon</Text>
                              <TabChoose 
                                title = 'Icon' 
                                changecolor = {value.changecolor}
                                unit = {value.unit} 
                                tag = {value.tag} 
                                IconDetail = {IconDetail}
                                icon ={value.icon}
                                iconFamily ={value.iconFamily}
                                setState = {setState}
                                flag = {1} 
                              />
                              <Text>|</Text>
                              <Text style = {{fontSize: 12, alignSelf: 'center' }}>Color</Text>
                              <TabChoose 
                                title = 'Color' 
                                changecolor = {value.changecolor}
                                unit = {value.unit} 
                                tag = {value.tag} 
                                IconDetail = {IconDetail}
                                icon ={value.icon}
                                iconFamily ={value.iconFamily}
                                setState = {setState}
                                flag = {2} 
                              />
                          </View>
                      </View>
                  </View>
                  {/* Tag */}
                  <View style = {{flexDirection: 'column', padding: 10}}>
                            <Text style ={{fontWeight: 'bold', color: theme.color }}>Tag</Text>
                            <TouchableOpacity style={{flexDirection:'row',padding: 10,justifyContent: 'space-between' }} onPress={() => setModalVisible(true)}>  
                              <Text style={[styles.boder,{backgroundColor:value.changecolor}]}>{value.tag}</Text>
                            </TouchableOpacity>
                            <Modal
                                  isVisible={isModalVisible}
                                  onBackdropPress={() => setModalVisible(false)}
                                >
                                  <View style={styles.modalContainer}>
                                    <TextInput
                                      style={styles.input}
                                      placeholder="Enter text here"
                                      value={value.tag}
                                      onChangeText={text => {setState(prevState => ({ ...prevState, tag: text }))}}
                                    />
                                    <TouchableOpacity
                                      onPress={() => setModalVisible(false)}
                                      style={[styles.button,{backgroundColor:value.changecolor}]}
                                    >
                                      <Text style={styles.text}>Done</Text>
                                    </TouchableOpacity>
                                  </View>
                                </Modal>
                  </View>                          
                  <View style = {{flexDirection: 'column',padding: 10}}>
                      <Text style ={{fontWeight: 'bold', color: theme.color }}>Goal & Goal Period</Text>
                      <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                          <View style ={{ flexDirection: 'row', padding: 10, justifyContent: 'space-evenly', flex: 0.7 }}>
                              <TextInput
                                    style = {[styles.btnTouch, {textAlign: 'center' , height: 20}]}
                                        keyboardType="numeric"
                                        value={value.goal}
                                        onChangeText={(value) => setState(prevState => ({ ...prevState, goal: value }))}
                                    />
                                <TabChoose 
                                  title = 'count' 
                                  changecolor = {value.changecolor}
                                  unit = {value.unit} 
                                  tag = {value.tag} 
                                  IconDetail = {IconDetail}
                                  icon ={value.icon}
                                  iconFamily ={value.iconFamily}
                                  setState = {setState}
                                  flag = {4} 
                                />
                                
                            </View>
                            <Text style={{color: currentTheme.color}}>/</Text>
                            <View style = {{flexDirection: 'row', padding: 10, alignSelf: 'center'}}>
                              {TabButton(value.currentTabPeriod, setState, "Day", value.changecolor, date)}
                              {TabButton(value.currentTabPeriod, setState, "Week", value.changecolor, Week)}
                              {TabButton(value.currentTabPeriod, setState, "Month", value.changecolor, month)}
                            </View>
                      </View>
                  </View>

                  <View style = {{padding: 10}}>
                      <View style = {{flexDirection: 'row' , justifyContent: 'space-between'}}>
                        <Text style ={{fontWeight: 'bold', color: theme.color}}>Frequency</Text>
                        <TabChoose 
                            title = '>' 
                            changecolor = {value.changecolor}
                            unit = {value.unit} 
                            tag = {value.tag} 
                            IconDetail
                            setState = {setState}
                            flag = {3} 
                            selectedItem = {value.selectedItem}
                            goal = {value.goal}
                            select = {value.selectedFreq}
                            week = {Week}
                            month = {month}
                             /> 
                      </View>
                          
                  </View>
                  <View style = {{padding: 10}}>
                          {DisplayNote(value.selectedFreq,value.goal,value.unit, value.selectedItem)}
                  </View>

                  <View style = {{flexDirection: 'column', padding: 10}}>
                      <Text style ={{fontWeight: 'bold', color: theme.color }}>Reminder</Text>
                  </View>

                  <View style = {{flexDirection: 'column', padding: 10}}>
                      <Text style ={{fontWeight: 'bold', color: theme.color }}>Reminder Messages</Text>
                      <TextInput
                          style={[styles.textInput]}
                          value={value.mess}
                          placeholder="Enter your message here!"
                          onChangeText={(value) => setState(prevState => ({ ...prevState, mess: value }))}
                      />
                  </View>

                  {/* <View style = {{flexDirection: 'column', padding: 10}}>
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
                  </View> */}

                  <View style = {{flexDirection: 'column', padding: 10}}>
                      <Text style ={{fontWeight: 'bold', color: theme.color }}>Habit Term</Text>
                      <View style = {{flexDirection: 'row', flex: 1}}>
                          <View style ={{ flexDirection: 'column', alignItems: 'center',flex: 0.5, padding: 10 }}>
                              <Text>Start</Text>
                              {ShowTimePicker(value.startDay, value.endDay,setState,value.changecolor ,1)}
                          </View>
                          <View style ={{ flexDirection: 'column', alignItems: 'center',flex: 0.5, padding: 10 }}>
                              <Text>End</Text>
                              {ShowTimePicker(value.startDay, value.endDay,setState,value.changecolor,0)}
                          </View>
                      </View>
                  </View> 
              </ScrollView>

          </View>
      <SafeAreaView style = {styles.homeZone}> 
          <TouchableOpacity 
              onPress={() => {
                  // dispatch(addHabitOfaDay(name.toLowerCase()));
                  //dispatch(setHabitInput(habit));
                  //dispatch(addHabitList(habit));
                  handleEdit();
                  //addHabit(state.habit);
                  
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

const TabButton = (currentTabPeriod, setState, title, color, time) => {
  return (
      <TouchableOpacity onPress={() => {
          setState(prevState => ({ ...prevState, currentTabPeriod: title }))
          setState(prevState => ({ ...prevState, selectedFreq: time }))
          if (title=='Day') setState(prevState => ({ ...prevState, selectedItem: 'Daily' }))
          else if (title=='Week') setState(prevState => ({ ...prevState, selectedItem: 'Weekly' }))
          else setState(prevState => ({ ...prevState, selectedItem: 'Monthly' }))
      }}>
      <View style={[styles.btnTouch, 
          {backgroundColor: currentTabPeriod == title ? color : '#f5f5f5'}
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
      {backgroundColor: currentTabTime == title ? color : '#f5f5f5'}
    ]}>
      <Text style={{
        fontSize: 12,
        color: currentTabTime == title ? "black" : "#a9a9a9"
      }}>{title}</Text>

    </View>
  </TouchableOpacity>
)
}
const TabChoose = ({title, changecolor, unit, tag, IconDetail,icon, iconFamily, setState, flag, selectedItem, goal, select, week, month}) => {
const [isEnabled, setIsEnabled] = useState(false);
return (
  <TouchableOpacity
    style={[styles.btnTouch, flag === 2 && { backgroundColor: changecolor }, flag === 3 && [styles.freq]]}
    onPress={() => {
      setIsEnabled(!isEnabled)
    }}>
    {flag === 1 && (
      <Icons type={iconFamily} name={icon} size={18} color={changecolor} />
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
            setFreq = {setState}
            freq={selectedItem}
            color={changecolor}
            goal={goal}
            select={select}
            setSelect={setState}
            week = {week}
            month = {month}
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
    {flag === 3 && <Text>{selectedItem}{title}</Text>}
    {flag === 4 && (
      <Text style={{ fontSize: 12 }}>{unit.title}</Text>
    )}
  </TouchableOpacity>
)
}

const ShowTimePicker = (startDay, endDay, setState,color ,flag) => {
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  startDay = new Date(startDay);
  endDay = new Date(endDay);
  const onChange = (event, selectedDate) => {
    // const currentDate = selectedDate;
    setShow(false);
    if (flag === 1) {
      if (selectedDate > endDay) 
      {
        Alert.alert(
          'Warning',
          'Start day must be before the end day',
        [
      { text: 'OK', onPress: () => setState(prevState => ({ ...prevState, startDay: startDay })) }
        ],
      { cancelable: false }
      );
      }
      setState(prevState => ({ ...prevState, startDay: selectedDate  }))
    } else {
      if (selectedDate < startDay) 
      {
        Alert.alert(
          'Warning',
          'End day must be after the current day',
        [
      { text: 'OK', onPress: () => setState(prevState => ({ ...prevState, endDay: endDay })) }
        ],
      { cancelable: false }
      );
      }
      setState(prevState => ({ ...prevState, endDay: selectedDate }))
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
        style={{ flexDirection: 'row', borderRadius: 10, backgroundColor: color }}
      >
        <Text>{flag === 1 ? startDay.toDateString() : endDay.toDateString()}</Text>
        {show && (
          <TimePickerDialog
            testID="dateTimePicker"
            value={flag === 1 ? startDay : endDay}
            mode={mode}
            //is24Hour
            positiveButton={{ label: 'OK', textColor: color }}
            onChange={onChange}
          />
        )}
      </TouchableOpacity>
    </View>
  );


};

const DisplayNote = (select, goal, unit, frequencyType) => {
    var text = frequencyType == 'Daily'? 'each day':'in total on'
    return (
    <View style = {{flexDirection: 'row'}}>
        <Text style = {{fontSize: 10, color: 'red' }}> *Complete {goal} {unit.title} {text} </Text>
        {frequencyType === 'Weekly' || frequencyType === 'Monthly' ? (
    <View style={[{flexDirection: 'row', }, frequencyType === 'Monthly' && {flexWrap: 'wrap'}]}>
    {select.map((value) => (
      <Text style={{fontSize: 10, color: 'red' , marginRight: 5}} key={value.id}> 
        {value.selected ? value.title : null}
      </Text>
      ))}
    </View>
      ) : null}
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
        height: 20,
    },
    freq: {
      alignItems: 'center',
      width : '25%',
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
    },
    boder:{
      width: 50,
      height: 17,
      borderRadius: 20,
      textAlign: 'center',
    },
    button: {
      //backgroundColor: 'blue',
      padding: 10,
      borderRadius: 5,
      marginTop: 20,
    },
    text: {
      color: 'white',
      fontWeight: 'bold',
    },
    modalContainer: {
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 5,
      alignItems: 'center',
    },
    input: {
      width: '80%',
      height: 40,
      borderWidth: 1,
      borderColor: 'gray',
      padding: 10,
      marginTop: 20,
    },
    modalFe: {
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 5,
      alignItems: 'center',
    },
});
export default EditHabit;
