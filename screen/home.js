import React, {useState, useEffect} from 'react';
import { View,Text, StyleSheet, TouchableOpacity, Image, ScrollView} from "react-native";
import Icons from "./icon_color/Icon";
import * as Progress from 'react-native-progress';
import { addHabitList, useStore } from '../Store'
import * as SQLite from 'expo-sqlite';
import { CalendarProvider, WeekCalendar } from "react-native-calendars";
import { refreshDatabase, loadHabit_on_fone, loadHabit_on_web, initDatabase, loadUnit, loadSetting } from '../Store/database';
import moment from 'moment';
import { format} from 'date-fns';
//import { ScrollView, State, TextInput } from 'react-native-gesture-handler';
import { Platform } from 'react-native';
import { getUnitName, loadMemo} from '../Store/database';

const Home = ({ navigation }) => {
  const [state,dispatch] = useStore();
  
  
  // const db = SQLite.openDatabase('Habit_tracker.db');
  //refreshDatabase();
  initDatabase();

  // Don't comment out useEffect. useEffect prevent the screen from loading repeatedly
  useEffect(() => {
    if (Platform.OS === 'ios' || Platform.OS === 'android') {
      loadHabit_on_fone(state.listHabit, dispatch)
      loadMemo(state.listProgressDay, dispatch)
     
    } else {
      loadHabit_on_web(state.listHabit, dispatch)
    }
    
  }, []); // 👈️ empty dependencies array
  const today = new Date();
  const [selectedDay, setSelectedDay] = useState(format(today, 'MM/dd/yyyy'));
  const listH = state.listHabit
  const listP = state.listProgressDay

  //refreshDatabase(state.listHabit, dispatch)
  console.log('home',state.listProgressDay.length)
  //console.log(state.listHabit)
  //loadSetting(state, dispatch);
  /* loadUnit(); */
  console.log('list', state.listHabit)
  const HabitZone = (values,navigation,date,listProgressDay) => {
    //console.log('date',date)
    let day = moment(date.dateString).format('ddd')
    day = day.toUpperCase()

    //console.log(day)
    //console.log(values)
    const [state,dispatch] = useStore();

    // const {listProgressDay} =state
    console.log('listProgressDay',listProgressDay)
    

    const arr3 = values.map(obj => {
      const arr2match = listProgressDay.find(x => x.habitName === obj.name && (x.date === date.dateString));
      return { ...obj, ...arr2match };
    });
    console.log('arr3', arr3)
    //time
    const handleTime = (until) => {
      return {
        seconds: until % 60,
        minutes: parseInt(until / 60, 10) % 60,
        hours: parseInt(until / (60 * 60), 10) % 24,
        days: parseInt(until / (60 * 60 * 24), 10),
      };
    };
    const findObjectById = (id) => {
      var a=state.listUnit.find((obj) => obj.id === id) || null;
      if (a!==null) return a.title
      return null
    };
    if (arr3 != '')
    return (
    <ScrollView>
      <View style = {{flexDirection: 'column', padding: 10, justifyContent: 'space-evenly'}}>

        {arr3.map((value) => {
          // let pickDay = value.frequency;
          // pickDay = pickDay.split(',')
          // for (let i = 0; i < pickDay.length; i++) {
          //   if (pickDay[i] == day ) {

          console.log('day' ,value.date)
          if (value.date===date.dateString){
              var valueGoal = value.goalNo
              var checkShow = null 
              getUnitName(value)
              if (value.unitID === 1 || value.unitID === 2 || value.unitID == 3 ){
                  {checkShow = 1; 
                    if (value.unitID === 2 ) valueGoal= value.goalNo*60
                    else if (value.unitID === 3) valueGoal= value.goalNo*3600
                    else valueGoal= value.goalNo
                  }
              }else{
                  checkShow = 0
              }
              const doMath=()=>{
                if (checkShow==1){
                const {days, hours, minutes, seconds} = handleTime(value.progress)
                //console.log(days, hours, minutes, seconds)
                if (hours!==0)
                  return(<Text>{hours}h {minutes}m {seconds}s</Text>)
                else if (minutes!==0)
                  return(<Text>{minutes}m {seconds}s</Text>)
                else return(<Text>{seconds}s</Text>)
                }
                else 
                  return(<Text>{value.progress}</Text>)
              }
              //console.log('vlp',value.progress, 'vlg',value.goalNo)
              const handleMath=()=>{
                if (value.progress===undefined)               
                  return 0
                return(value.progress/valueGoal)
              }
              
              //console.log(days, hours, minutes, seconds)
              return (
                <TouchableOpacity 
                  style={{ padding: 5 }} 
                  key={value.id} 
                  onPress={() => navigation.navigate('HabitDetail', {habit: value, checkShow: checkShow})}>
                  <Progress.Bar progress={handleMath()} width={null} height={state.habitBarSize?50:35} color={value.color}>
                  {/* (value.progress)/(value.goalNo) */}
                  </Progress.Bar>
                  <View style={{
                    flex: 1,
                    position: 'absolute',
                    flexDirection: 'row',
                    alignItems: 'center',
                    top:9,
                    left:10
                  }}>
                      <Icons type={value.iconFamily} name={value.icon} size={state.habitBarSize?40:25} color='black' />
                      <View style={{ flexDirection: 'column' }}>
                        <Text style={{ fontSize: 10 }}>{value.name}</Text>
                        <Text style={{ fontSize: 8 }}>{value.note}</Text>
                      </View>
                      <View style={{ alignItems: 'flex-end', flex: 1,right:10}}>
                        {/* {!checkShow && <Text> {(value.progress)/(valueGoal)} {value.unitID.title}</Text>} */}
                        <Text>{doMath()}/{value.goalNo} {findObjectById(value.unitID)}</Text>
                      </View>
                    </View>
                </TouchableOpacity>
              );
          }
  })}
      </View>
    </ScrollView>
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
  // }
  return (
    <View style={{backgroundColor: 'white', flex: 1, flexDirection: 'column'}}>
      <View style ={{height: 80 }}>
        <CalendarProvider date={format(today, 'MM/dd/yyyy')}>
          <WeekCalendar 
            theme={styles.theme}
            onDayPress = {(day) => {
              setSelectedDay(day)}} 
            firstDay={state.dateBarStyle?1:0}
           />
        </CalendarProvider>
      </View>
      <View style = {{flex: 0.8, flexDirection: 'column'}}>
        
        {HabitZone(listH,navigation,selectedDay,listP)}
      </View>
    </View>
  )
};


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
