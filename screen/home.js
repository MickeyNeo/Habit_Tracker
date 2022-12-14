import React, {useState} from 'react';
import { View,Text, StyleSheet, TouchableOpacity, Image, } from "react-native";
import Icons from "./icon_color/Icon";
import * as Progress from 'react-native-progress';
import { addHabitList, useStore } from '../Store'
import * as SQLite from 'expo-sqlite';
import { CalendarProvider, WeekCalendar } from "react-native-calendars";
import { refreshDatabase, loadHabit, initDatabase, loadUnit, loadSetting } from '../Store/database';
import moment from 'moment';
import { format} from 'date-fns';

const Home = ({ navigation }) => {
  const [state,dispatch] = useStore();
  const today = new Date();
  const [selectedDay, setSelectedDay] = useState('');
  const db = SQLite.openDatabase('Habit_tracker.db');
  //refreshDatabase();
  //initDatabase();
  //loadHabit(state.listHabit, dispatch);
  //loadSetting(state, dispatch);

  /* loadUnit(); */
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
    //console.log(day)
    if (values != '')
    return (
    <View>
      <View style = {{flexDirection: 'column', padding: 10, justifyContent: 'space-evenly'}}>
        {values.map((value) => { 
            let pickDay = value.week;
            console.log(pickDay)
            if (pickDay[0].selected == true && pickDay[0].title == day ||
                pickDay[1].selected == true && pickDay[1].title == day ||
                pickDay[2].selected == true && pickDay[2].title == day ||
                pickDay[3].selected == true && pickDay[3].title == day ||
                pickDay[4].selected == true && pickDay[4].title == day ||
                pickDay[5].selected == true && pickDay[5].title == day ||
                pickDay[6].selected == true && pickDay[6].title == day)
           return (
              <TouchableOpacity style ={{padding: 5}} key={value.name} onPress = {() => navigation.navigate("HabitDetail")}>
                <Progress.Bar progress={0.3} width = {null} height={35} color = {value.color}>
                  <View style={{
                    flex: 1,
                    position: 'absolute', 
                    flexDirection: 'row', 
                    alignItems: 'center',
                  }}>
                    <Icons type = {value.iconFamily} name = {value.icon} size = {25} color = 'black' />
                    <View style ={{flexDirection: 'column'}}>
                      <Text style = {{fontSize: 10}}>{value.name}</Text>
                      <Text style = {{fontSize: 8}}>{value.note}</Text>
                    </View>
                    <View style={{ alignItems: 'flex-end', flex: 1}}>
                      <Text>0/{value.goalNo}</Text>
                    </View>
                  </View>
                </Progress.Bar>
              </TouchableOpacity>
            )
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
            <Text style = {{color: 'black', fontFamily: 'monospace'}} >No Habits</Text>
            <Text style = {{color: 'black', fontFamily: 'monospace'}} >Press '+' to add new habit </Text>
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
      textDayFontFamily: 'monospace',
      textMonthFontFamily: 'monospace',
      textDayHeaderFontFamily: 'monospace',
      textDayFontWeight: '300',
      textMonthFontWeight: 'bold',
      textDayHeaderFontWeight: '300',
      textDayFontSize: 16,
      textMonthFontSize: 16,
      textDayHeaderFontSize: 16
    }
});
export default Home;
