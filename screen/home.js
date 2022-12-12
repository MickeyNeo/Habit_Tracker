import React, {useState, useContext} from 'react';
import { View, Button, Text, StyleSheet, TouchableOpacity, Image, Switch, TextInput } from "react-native";
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import * as Progress from 'react-native-progress';
import walking from './Icon/walking.png';
import WeeklyCalendar from 'react-native-weekly-calendar';
import { useStore } from '../Store'

const Home = ({ navigation }) => {
  const [state,dispatch] = useStore();
  console.log(state.habit);
  //console.log(state.name)i;
      return (
          <View style={{backgroundColor: 'white', flex: 1}}>
            {/* <View style = {{flex: 0.1}}>
            </View>
            <View style = {styles.progress}> 
              <TouchableOpacity style = {{flex: 1}} onPress = {() => navigation.navigate("HabitDetail")}>
                  <Progress.Circle size={100} indeterminate={true} color = 'white'>
                  <View style={{
                    position: 'absolute', 
                    flexDirection: 'row', 
                    color: 'grey', 
                    alignItems: 'center',
                    //borderWidth: 2,
                    }}>
                  <Image
                      source={walking}
                      style={{ width: 35, height: 35,}}
                  /> 
                  <Text style = {{color: 'red', fontSize: 15}}>Walking</Text>
                  </View> 
                  </Progress.Circle>
              </TouchableOpacity>
            </View> */}
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
        );
      };

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        //backgroundColor: 'white',
    },
    addHabit: { 
        flex: 1,
        alignItems: 'center',
        alignSelf: 'center',
        color: 'white',
        justifyContent: "center",
        padding: 10,
        fontSize: 20,
      //TextSize: 50,
    },
    progress: {
      flexDirection: 'row',
      top: '10%',
      width: "100%",
    },
    homeZone: {
      //flex: 0.15,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent : 'space-evenly',
      backgroundColor: '#BEABAB',
      position: 'absolute',
      width: '100%',
      height: '10%',
      top: '90%',
      left: '0%',
      padding: 0,
    }
});

export default Home;
