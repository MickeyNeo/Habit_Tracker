import React, {useState, useContext} from 'react';
import { View, Button, Text, StyleSheet, TouchableOpacity, Image, Switch, TextInput } from "react-native";
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import Icons from "./icon_color/Icon";
import * as Progress from 'react-native-progress';
import walking from './Icon/walking.png';
import { addHabitList, useStore } from '../Store'
import * as SQLite from 'expo-sqlite';
import { CalendarProvider, WeekCalendar } from "react-native-calendars";
import { refreshDatabase, loadHabit, initDatabase, loadUnit, loadSetting } from '../Store/database';


const Home = ({ navigation }) => {
  const [state,dispatch] = useStore();
  const [day, setDay] = useState('');
  const db = SQLite.openDatabase('Habit_tracker.db');
  console.log("List habit: ", state.listHabit);
  // refreshDatabase();
  // initDatabase();

  loadHabit(state.listHabit, dispatch);
  //loadSetting(state, dispatch);

  /* loadUnit(); */

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View style ={{flex: 0.2}}>
      <CalendarProvider date={new Date().toISOString()}>
        <WeekCalendar onDayPress={(day) => console.log(day)} firstDay={1} />
      </CalendarProvider>
      </View>
      <View style = {{flex: 0.8, flexDirection: 'column'}}>
        {HabitZone(state.listHabit,navigation)}
      </View>
      <TouchableOpacity style = { styles.addHabit} onPress = {() => navigation.navigate("Habit")}>
                  <Text style = {{color: 'black'}} >Press '+' to add new habit </Text>
        </TouchableOpacity>
    </View>
  )
};
const HabitZone =(
    values,
    navigation
    ) => {
    if (values != '')
    return (
    <View>
      <View style = {{flexDirection: 'column', padding: 10, justifyContent: 'space-evenly'}}>
        {values.map((value) => 
        <TouchableOpacity style ={{padding: 5}} key={value.name} onPress = {() => navigation.navigate("HabitDetail")}>
            <Progress.Bar progress={0.3} width = {null} height={35} color = {value.color}>
              <View style={{
                    flex: 1,
                    position: 'absolute', 
                    flexDirection: 'row', 
                    alignItems: 'center',
                    //padding: 10,
                    }}>
                        <Icons type = {value.iconFamily} name = {value.iconName} size = {25} color = 'black' />
                        <View style ={{flexDirection: 'column'}}>
                          <Text style = {{fontSize: 10}}>{value.name}</Text>
                          <Text style = {{fontSize: 8}}>{value.note}</Text>
                        </View>

                      <View style={{ alignItems: 'flex-end', flex: 1}}>
                          <Text>Test</Text>
                      </View>
                    </View>
                  </Progress.Bar>
              </TouchableOpacity>
            )}
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
                      style={{ width: 100, height: 100,}}
                />
                <Text style = {{color: 'black'}} >No Habits</Text>
                <Text style = {{color: 'black', fontFamily: 'Segoe UI'}} >Press '+' to add new habit </Text>
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
    }
});

export default Home;
