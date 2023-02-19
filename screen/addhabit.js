import React, { useState} from "react";
import { View,Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView,Image, TextInput, Alert, Switch } from "react-native";
import ChooseColor from "./icon_color/chooseColor";
import ChooseIcon from "./icon_color/chooseIcon";
import Icons from "./icon_color/Icon";
import TimePickerDialog from '@react-native-community/datetimepicker';
import SelectFreq from './frequency/selectday';
import SelectUnit from './unit/unit';
import moment from 'moment';
import Modal from "react-native-modal";
import { useStore , addHabitList, setListProgressDay} from '../Store'
import { setHabitInput } from '../Store/action'
import { db, addHabit,addMemo } from '../Store/database'
const AddHabit = ({navigation, route}) => {
    const [state, dispatch] = useStore();
    const {currentTheme} = state
    const {id, name, colors, IconInfo, unitHabit, tag, flag } = route.params;
    
    const IconDetail={
        iconName: IconInfo[0],
        iconFamily: IconInfo[1],
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
    for ( var i = 0; i < 31; i++)
    {
        month.push({id:i+1 , title: i+1, selected: 1})
    }
    const today = new Date();
    const day = moment(today).format('ddd')
    const date = [{title: day.toUpperCase(), selected: true}]
    let unit = {}
    unitHabit.forEach((item) => unit = item)
    const [value, setState] = useState({
        goal: "1",
        currentTabPeriod: "Day",
        currentTabTime: "Anytime",
        changecolor: colors,
        note: "",
        mess: "",
        startDay: new Date(),
        endDay: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
        isEnabled: 0,
        unit: unit,
        tag: tag,
        habitname: name,
        selectedItem: "Daily",
        selectedFreq: date,
        icon: IconInfo[0],
        iconFamily: IconInfo[1],

    });
    const showday = []
    value.selectedFreq.forEach((item) => { if (item.selected == true ) showday.push(item.title)})
    const toggleSwitch = () => setState(prevState => ({ ...prevState, isEnabled: !prevState.isEnabled}));
    const habit = {
        id: id,
        name: value.habitname,
        note: value.note,
        frequency: showday.join(),
        color: value.changecolor,
        // tagID: 0,
        frequencyType: value.selectedItem,
        timeRange: value.currentTabTime,
        remainderMessage: value.mess,
        showMemo: value.isEnabled,
        chartType: 0,
        habitStartDate: value.startDay,
        habitEndDate: value.endDay,
        goalNo: value.goal,
        tag: value.tag,
        goalPeriod: value.currentTabPeriod,
        unitID: value.unit.id,
        icon: value.icon,
        iconFamily: value.iconFamily,
        flag : flag,
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
    
    //Danh sách các ngày được chọn
    const handleProgressDay=()=>{
      const startDate = moment(value.startDay);
      const endDate = moment(value.endDay);
      while (startDate <= endDate) {
        if (habit.frequencyType==='Daily')
        {
          addMemo(habit.name, moment(startDate).format('YYYY-MM-DD'), '', 0)
          dispatch(setListProgressDay({habitName: habit.name, date: moment(startDate).format('YYYY-MM-DD'), progress:0, content:''}))}
        else if (habit.frequencyType==='Weekly')
          {
            if (habit.frequency.includes(moment(startDate).format('ddd').toLocaleUpperCase()))
            {
              addMemo(habit.name, moment(startDate).format('YYYY-MM-DD'), '', 0)
              dispatch(setListProgressDay({habitName: habit.name, date: moment(startDate).format('YYYY-MM-DD'), progress:0, content:''}))          
            }
          }
        else if (habit.frequencyType==='Monthly')
          {
            if (habit.frequency.includes(moment(startDate).date()))
            {
              addMemo(habit.name, moment(startDate).format('YYYY-MM-DD'), '', 0)
              dispatch(setListProgressDay({habitName: habit.name, date: moment(startDate).format('YYYY-MM-DD'), progress:0, content:''})) 
          }
        }
        startDate.add(1, 'days');
      }
    }
    
    return (
        <View style={{ flex: 1, flexDirection : 'column' }}>
            <View style ={[styles.Habit, {backgroundColor: currentTheme.backgroundColor}]}>
                <ScrollView >
                    <View style = {{flexDirection: 'column', padding: 10, }}>
                        <Text style ={{fontWeight: 'bold', color: currentTheme.color }}>Name</Text>
                        <TextInput
                            style={[styles.textInput, {backgroundColor:(currentTheme.backgroundColor=='#1f1e1e')?'#918e8e':'#f5f5f5', color: currentTheme.color}]}
                            placeholder={(value.habitname)}
                            value={value.habitname}
                            onChangeText={(value) => setState(prevState => ({ ...prevState, habitname: value }))}
                        />
                    </View>

                    <View style = {{flexDirection: 'column', padding: 10, }}>
                        <Text style ={{fontWeight: 'bold', color: currentTheme.color}}>Note</Text>
                        <TextInput
                            style={[styles.textInput, {backgroundColor:(currentTheme.backgroundColor=='#1f1e1e')?'#918e8e':'#f5f5f5',color: currentTheme.color}]}
                            value={value.note}
                            placeholder="Description or other infos"
                            onChangeText={(value) => setState(prevState => ({ ...prevState, note: value }))}
                        />
                    </View>

                    <View style = {{flexDirection: 'column', padding: 10, }}>
                        <Text style ={{fontWeight: 'bold', color: currentTheme.color }}>Icon & Color</Text>
                        <View style = {{flexDirection: 'row', flex: 2}}>
                            <View style ={{ 
                                flexDirection: 'row', 
                                justifyContent: 'space-between', 
                                flex: 0.5, 
                                padding: 10
                                }}>
                                <Text style = {{fontSize: 12, alignSelf: 'center',color: currentTheme.color }}>Icon</Text>
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
                                  currentTheme={currentTheme}
                                />
                                <Text style={{color: currentTheme.color}}>|</Text>
                                <Text style = {{fontSize: 12, alignSelf: 'center',color: currentTheme.color }}>Color</Text>
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
                                  currentTheme={currentTheme}
                                />
                            </View>
                        </View>
                    </View>
                    {/* Tag */}
                    <View style = {{flexDirection: 'column', padding: 10}}>
                            <Text style = {{fontWeight: 'bold', color: currentTheme.color }}>Tag</Text>
                            <TouchableOpacity style={{flexDirection:'row',padding: 10,justifyContent: 'space-between' }} onPress={() => setModalVisible(true)}>  
                              <Text style= {[styles.btnTouch, {backgroundColor: value.changecolor, color: currentTheme.color }]}> {value.tag} </Text>
                            </TouchableOpacity>
                            <Modal
                                  isVisible={isModalVisible}
                                  onBackdropPress={() => setModalVisible(false)}
                                >
                                  <View style={[styles.modalContainer,{backgroundColor:currentTheme.backgroundColor}]}>
                                    <TextInput
                                      style={[styles.input, {textAlign : 'center', color:currentTheme.color}]}
                                      placeholder="Enter text here"
                                      value={value.tag}
                                      onChangeText={text => {setState(prevState => ({ ...prevState, tag: text }))}}
                                    />
                                    <TouchableOpacity
                                      onPress={() => setModalVisible(false)}
                                      style={[styles.button, { backgroundColor:value.changecolor}]}>
                                      <Text style={[styles.text,{color: currentTheme.color}]}>Done</Text>
                                    </TouchableOpacity>
                                  </View>
                                </Modal>
                    </View>                          
                    <View style = {{flexDirection: 'column',padding: 10}}>
                        <Text style ={{fontWeight: 'bold', color: currentTheme.color }}>Goal & Goal Period</Text>
                        <View style = {{flexDirection: 'row' , alignItems: 'center'}}>
                            <View style ={{ flexDirection: 'row', padding: 10, justifyContent: 'space-evenly', flex: 0.7 }}>
                                <TextInput
                                    style = {[styles.btnTouch, {textAlign: 'center' , height: 20,color: currentTheme.color }]}
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
                                  currentTheme={currentTheme}
                                />
                                
                            </View>
                            <Text style={{color: currentTheme.color}}>/</Text>
                            <View style = {{flexDirection: 'row', padding: 10, alignSelf: 'center'}}>
                              {TabButton(value.currentTabPeriod, setState, "Day", value.changecolor, date,currentTheme)}
                              {TabButton(value.currentTabPeriod, setState, "Week", value.changecolor, Week,currentTheme)}
                              {TabButton(value.currentTabPeriod, setState, "Month", value.changecolor, month,currentTheme)}
                            </View>
                        </View>
                    </View>

                    <View style = {{padding: 10}}>
                        <View style = {{flexDirection: 'row' , justifyContent: 'space-between'}}>
                          <Text style = {{fontWeight: 'bold', color: currentTheme.color}}>Frequency</Text>
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
                              currentTheme={currentTheme}
                               /> 
                        </View>
                    </View>
                    <View style = {{padding: 10, width: '50%'}}>
                            {DisplayNote(value.selectedFreq,value.goal,value.unit, value.selectedItem)}
                    </View>

                    <View style = {{flexDirection: 'column', padding: 10}}>
                        <Text style ={{fontWeight: 'bold', color: currentTheme.color }}>Reminder Messages</Text>
                        <TextInput
                            style={[styles.textInput,{backgroundColor:(currentTheme.backgroundColor=='#1f1e1e')?'#918e8e':'#f5f5f5', color: currentTheme.color}]}
                            value={value.mess}
                            placeholder="Enter your message here!"
                            onChangeText={(value) => setState(prevState => ({ ...prevState, mess: value }))}
                        />
                    </View>

                    {/* <View style = {{flexDirection: 'column', padding: 10}}>
                        <View style = {{flex: 0.2, flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style ={{fontWeight: 'bold', color: currentTheme.color, alignSelf: 'center' }}>Show memo after check-in</Text>
                            <Switch
                                trackColor={{ false: "#d9d6c6", true: "orange" }}
                                thumbColor={value.isEnabled ? "white" : "#76756d"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={value.isEnabled}
                            />
                        </View>

                    </View> */}
                    <View style = {{flexDirection: 'column', padding: 10}}>
                        <Text style ={{fontWeight: 'bold', color: currentTheme.color }}>Habit Term</Text>
                        <View style = {{flexDirection: 'row', flex: 1}}>
                            <View style ={{ flexDirection: 'column', alignItems: 'center',flex: 0.5, padding: 10 }}>
                                <Text style={{color: currentTheme.color}}>Start</Text>
                                {ShowTimePicker(value.startDay, value.endDay,setState,value.changecolor ,1,currentTheme.color)}
                            </View>
                            <View style ={{ flexDirection: 'column', alignItems: 'center',flex: 0.5, padding: 10 }}>
                                <Text style={{color: currentTheme.color}}>End</Text>
                                {ShowTimePicker(value.startDay, value.endDay,setState,value.changecolor,0,currentTheme.color)}
                            </View>
                        </View>
                    </View> 
                </ScrollView>
            </View>
        <SafeAreaView style = {[styles.homeZone,{backgroundColor:currentTheme.backgroundColor}]}> 
            <TouchableOpacity 
                onPress={() => {
                    // dispatch(addHabitOfaDay(name.toLowerCase()));
                    dispatch(setHabitInput(habit));
                    dispatch(addHabitList(habit));
                    handleProgressDay();
                    addHabit(habit);
                    navigation.navigate('Home', {
                        screen: 'AddHabit',
                    });
                }}>
                <Image
                    source={require('./Icon/done.png')}
                    style={{ width: 45, height: 45,tintColor: currentTheme.color}}
                />
            </TouchableOpacity>
        </SafeAreaView>
        </View>
    );
};

const TabButton = (currentTabPeriod, setState, title, color, time,currentTheme) => {
    return (
        <TouchableOpacity onPress={() => {
            setState(prevState => ({ ...prevState, currentTabPeriod: title }))
            setState(prevState => ({ ...prevState, selectedFreq: time }))
            if (title=='Day') setState(prevState => ({ ...prevState, selectedItem: 'Daily' }))
            else if (title=='Week') setState(prevState => ({ ...prevState, selectedItem: 'Weekly' }))
            else setState(prevState => ({ ...prevState, selectedItem: 'Monthly' }))
        }}>
        <View style={[styles.btnTouch, 
            {backgroundColor: currentTabPeriod == title ? color : '#918e8e'}
        ]}>
            <Text style={{
            fontSize: 12,
            color: currentTabPeriod == title ? (currentTheme.color=='white'?'black':'white') : currentTheme.color
            }}>{title}</Text>

        </View>
        </TouchableOpacity>
    )
}

const TabChoose = ({title, changecolor, unit, tag, IconDetail, icon, iconFamily, setState, flag, selectedItem, goal, select, week, month,currentTheme}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  return (
    <TouchableOpacity
      style={[styles.btnTouch, flag === 2 && { backgroundColor: changecolor}, flag === 3 && [styles.freq]]}
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
              currentTheme={currentTheme}
            />
          )}
          {title === 'Icon' && flag === 1 && (
            <ChooseIcon
              myIsmodalVisible={isEnabled}
              setModalVisible={setIsEnabled}
              seticon={setState}
              currentTheme={currentTheme}
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
              currentTheme={currentTheme}
            />
          )}
          {title === 'count' && flag === 4 && (
            <SelectUnit
              myIsmodalVisible={isEnabled}
              setModalVisible={setIsEnabled}
              unit={unit}
              setunit={setState}
              currentTheme={currentTheme}
            />
          )}
        </>
      )}
      {flag === 3 && <Text style={{color:currentTheme.color}}>{selectedItem} {title}</Text>}
      {flag === 4 && (
        <Text style={{ fontSize: 12,color:currentTheme.color }}>{unit.title}</Text>
      )}
    </TouchableOpacity>
  )
}

const ShowTimePicker = (startDay, endDay, setState,color ,flag, colors) => {
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const onChange = (event, selectedDate) => {
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
        <Text style={{color: colors}}>{flag === 1 ? startDay.toDateString() : endDay.toDateString()}</Text>
        {show && (
          <TimePickerDialog
            testID="dateTimePicker"
            value={flag === 1 ? startDay : endDay}
            mode={mode}
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
    justifyContent : 'center',
    alignSelf:'center',
    position: 'absolute',
    width: 59,
    height: 59,
    top: '90.5%',
    padding: 0,
    borderRadius: 150,
    borderWidth: 1,
  },
  textInput: {
    height: 30, 
    with: '20%', 
    flex: 0.2,
    borderRadius: 5,
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
  button :{
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  btnTouch: {
    borderRadius: 10, 
    width: 50, 
    alignItems: 'center',
    backgroundColor: '#918e8e',
    fontSize: 12,
    height: 20,
  },
  freq: {
    alignItems: 'center',
    width : '25%',
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
    borderRadius: 10, 
    width: 60, 
    alignItems: 'center',
    fontSize: 20,
    backgroundColor: '#f5f5f5',
    color: '#a9a9a9',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
  modalContainer: {
    //backgroundColor: 'white',
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
export default AddHabit;

