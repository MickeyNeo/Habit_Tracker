import React, {useState, useContext} from 'react';
import { View, Button, Text, StyleSheet, TouchableOpacity, Image, Switch, TextInput } from "react-native";
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import * as Progress from 'react-native-progress';
import walking from './Icon/walking.png';
import WeeklyCalendar from 'react-native-weekly-calendar';
import { useStore } from '../Store'

const Home = ({ navigation }) => {
  const [state,dispatch] = useStore();
  const [day, setDay] = useState('');
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <Calendar 
              onDayPress={ (day) => setDay(day)}
            />
      {HabitZone(state.listHabit,navigation,day.dateString)}
    </View>
  )
};
const HabitZone =(
    values,
    navigation,
    day) => {
    console.log(day);
    console.log(values)
    if (values != '')
    return (
    <View>
        {values.map((value) => {value.habitStartDay == day && 
        <TouchableOpacity style = {{padding: 5}} key={value.name} onPress = {() => navigation.navigate("Habit")}>
            <Progress.Bar progress={0.3} width = {300} height={35}>
              <View style={{
                    flex: 1,
                    position: 'absolute', 
                    flexDirection: 'row', 
                    alignItems: 'center',
                    }}>
                      <Image
                        source={value.image}
                        style={{ width: 35, height: 35,}}
                      />
                      <View style ={{flexDirection: 'column', borderWidth: 1,}}>
                        <Text style = {{color: value.color, fontSize: 10}}>{value.name}</Text>
                        <Text style = {{color: value.color, fontSize: 8}}>{value.note}</Text>
                      </View>

                      <View style={{left: '50%', alignSelf: 'flex-end', borderWidth: 1, flex: 1}}>
                          <Text>Test</Text>
                      </View>
                    </View>
                  </Progress.Bar>
              </TouchableOpacity>
            })}
        <TouchableOpacity style = { styles.addHabit} onPress = {() => navigation.navigate("Habit")}>
                  <Text style = {{color: 'black'}} >Press '+' to add new habit </Text>
        </TouchableOpacity>
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
                <Text style = {{color: 'black'}} >Press '+' to add new habit </Text>
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
    progress: {
      padding: 10,
      flexDirection: 'row',
      width: "100%",
    }
});

export default Home;
