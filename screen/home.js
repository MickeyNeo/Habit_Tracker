import React, {useState, useEffect} from 'react';
import { View,Text, StyleSheet, TouchableOpacity, Image, } from "react-native";
import Icons from "./icon_color/Icon";
import * as Progress from 'react-native-progress';
import { addHabitList, useStore } from '../Store'
import * as SQLite from 'expo-sqlite';
import { CalendarProvider, WeekCalendar } from "react-native-calendars";
import { refreshDatabase, loadHabit_on_fone, loadHabit_on_web, initDatabase, loadUnit, loadSetting } from '../Store/database';
import moment from 'moment';
import { format} from 'date-fns';
import { TextInput } from 'react-native-gesture-handler';
import { Platform } from 'react-native';
import { getUnitName } from '../Store/database';

const Home = ({ navigation }) => {
  const [state,dispatch] = useStore();
  const today = new Date();
  const [selectedDay, setSelectedDay] = useState(format(today, 'MM/dd/yyyy'));
  
  // const db = SQLite.openDatabase('Habit_tracker.db');
  // //refreshDatabase();
  // //initDatabase();

  // // Don't comment out useEffect. useEffect prevent the screen from loading repeatedly
  // useEffect(() => {
  //   if (Platform.OS === 'ios' || Platform.OS === 'android') {
  //     loadHabit_on_fone(state.listHabit, dispatch)
  //   } else {
  //     loadHabit_on_web(state.listHabit, dispatch)
  //   }
  // }, []); // 👈️ empty dependencies array

  //refreshDatabase(state.listHabit, dispatch)
  
  //console.log(state.listHabit)
  console.log(state.listProgressDay)
  //loadSetting(state, dispatch);
  /* loadUnit(); */
  //console.log(selectedDay)
  // }
  return (
    <View style={{backgroundColor: 'white', flex: 1, flexDirection: 'column'}}>
      <View style ={{height: 80 }}>
        <CalendarProvider date={format(today, 'MM/dd/yyyy')}>
          <WeekCalendar 
            theme={styles.theme}
            onDayPress = {(day) => {
              setSelectedDay(day)}} 
            firstDay={1}
           />
        </CalendarProvider>
      </View>
      <View style = {{flex: 0.8, flexDirection: 'column'}}>
        {HabitZone(state.listHabit,navigation,selectedDay)}
      </View>
    </View>
  )
};

const HabitZone = (values,navigation,date) => {
    //console.log(date)
    let day = moment(date.dateString).format('ddd')
    day = day.toUpperCase()
    console.log(date.dateString)
    //console.log(values)
    const [state,dispatch] = useStore();
    const {listProgressDay} =state
    console.log(listProgressDay)
    const arr3 = values.map(obj => {
      const arr2match = listProgressDay.find(x => x.id === obj.id && (x.day === date.dateString || date.dateString ==undefined));
      return { ...obj, ...arr2match };
    });
    console.log(arr3)
    if (arr3 != '')
    return (
    <View>
      <View style = {{flexDirection: 'column', padding: 10, justifyContent: 'space-evenly'}}>
        {arr3.map((value) => {
          // let pickDay = value.frequency;
          // pickDay = pickDay.split(',')
          // for (let i = 0; i < pickDay.length; i++) {
          //   if (pickDay[i] == day ) {
          if (value.day===date.dateString){
              var checkShow = null 
              getUnitName(value)
              if (value.unitID.title == 'sec' || value.unitID.title == 'min' || value.unitID.title == 'hr' ){
                  checkShow = 1
              }else{
                  checkShow = 0
              }
              return (
                <TouchableOpacity 
                  style={{ padding: 5 }} 
                  key={value.name} 
                  onPress={() => navigation.navigate('HabitDetail', {habit: value, checkShow: checkShow})}>
                  <Progress.Bar progress={(value.process)/(value.goalNo)} width={null} height={35} color={value.color}>
                  {/* (value.process)/(value.goalNo) */}
                  </Progress.Bar>
                  <View style={{
                    flex: 1,
                    position: 'absolute',
                    flexDirection: 'row',
                    alignItems: 'center',
                    top:9,
                    left:10
                  }}>
                      <Icons type={value.iconFamily} name={value.icon} size={25} color='black' />
                      <View style={{ flexDirection: 'column' }}>
                        <Text style={{ fontSize: 10 }}>{value.name}</Text>
                        <Text style={{ fontSize: 8 }}>{value.note}</Text>
                      </View>
                      <View style={{ alignItems: 'flex-end', flex: 1,right:10}}>
                        <Text>0/{value.goalNo}</Text>
                      </View>
                    </View>
                </TouchableOpacity>
              );
          }
  })}
      </View>
    </View>
  )
  else 
    return (
      <View style={{backgroundColor: 'white', flex: 1}}>
        <View style = {styles.addHabit}>
          <TouchableOpacity style = { styles.addHabit} onPress = {() => navigation.navigate("Habit")}>
            <Image
              source={require('./Icon/rocket.png')}
              style={{ width: 100, height: 100,}} />

            <Text style = {{color: 'black' }} >No Habits</Text>
            <Text style = {{color: 'black' }} >Press '+' to add new habit </Text>
            </TouchableOpacity>
        </View>
      </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex: 1, 
    },
    addHabit: { 
        flex: 1,
        alignItems: 'center',
        alignSelf: 'center',
        color: 'white',
        justifyContent: "center",
        padding: 10,
        fontSize: 20,
    },
    theme :{
      borderRadius: 20,
      borderWidth: 1,
      backgroundColor: '#ffffff',
      calendarBackground: '#ffffff',
      textSectionTitleColor: '#b6c1cd',
      textSectionTitleDisabledColor: '#d9e1e8',
      selectedDayBackgroundColor: '#F3ACB4',
      selectedDayTextColor: '#ffffff',
      todayTextColor: '#F3ACB4',
      dayTextColor: '#2d4150',
      textDisabledColor: '#d9e1e8',
      dotColor: '#00adf5',
      selectedDotColor: '#ffffff',
      arrowColor: 'orange',
      disabledArrowColor: '#d9e1e8',
      monthTextColor: 'blue',
      indicatorColor: '#F3ACB4',
      textDayFontWeight: '300',
      textMonthFontWeight: 'bold',
      textDayHeaderFontWeight: '300',
      textDayFontSize: 16,
      textMonthFontSize: 16,
      textDayHeaderFontSize: 16
    }
});
export default Home;
