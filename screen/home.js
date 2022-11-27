import React, { useRef, useState, createContext, useContext } from 'react';
import { View, Button, Text, StyleSheet, TouchableOpacity, Image, Switch } from "react-native";
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import dateFns from 'date-fns';
import { EventRegister } from 'react-native-event-listeners';
import themeContext from "./styles/themeContext";

const Home = ({ navigation }) => {
const [isEnabled, setIsEnabled] = useState(false);
const [darkmode, setDarkMode] = useState(false);
const theme = useContext(themeContext);
return (
    <View style={{backgroundColor: theme.backgroundColor, flex: 1}}>
      <View style = {styles.addHabit}>
        <TouchableOpacity style = { styles.addHabit} onPress = {() => navigation.navigate("Habit")}>
          <Image
                source={require('./Icon/rocket.png')}
                style={{ width: 100, height: 100,}}
                  />
          <Text style = {{color: theme.color}} >No Habits</Text>
          <Text style = {{color: theme.color}} >Press '+' to add new habit </Text>
          </TouchableOpacity>
            <View style={{flexDirection: "row" }}>
                <Text style={{
                        flex: 1,
                        marginTop: 20,
                        marginLeft: 10,
                        fontSize: 20,
                        color: 'black'
                    }}>{name}</Text>
                <Switch 
                    style={{marginTop: 20, AlignItems: 'flex-end', marginRight:5}}
                    trackColor={{ false: "#d9d6c6", true: "orange" }}
                    thumbColor={isEnabled ? "white" : "#76756d"}
                    ios_backgroundColor="#3e3e3e"
                    value={darkmode}
                    onValueChange={
                        value => {setDarkMode(value);
                        EventRegister.emit('changeThemeEvent', value)
                    }}
                />
            </View>
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
