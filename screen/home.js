import React from "react";
import { View, Button, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationContainer } from "@react-navigation/native";
import { MainStackNavigator } from "../navigation/navigationstack";
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeProvider, createTheme } from '@rneui/themed';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Fontisto from '@expo/vector-icons/Fontisto';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import dateFns from 'date-fns';
import { compareAsc, format } from 'date-fns'
import Data from "../data/data";
// format(new Date(2014, 1, 11), 'yyyy-MM-dd')
// const baseDate = new Date(2019, 6, 15);


const Home = ({ navigation }) => {
return (
    <View style={styles.container}>
              {/* <Calendar
              theme={{
                    dayTextColor: 'black', 
                    todayTextColor: 'black',  
                    selectedDayTextColor: 'black', 
                    selectedDayBackgroundColor: '#FF5D4E',
                    arrowColor: 'black', 
                    flex: 0.8,
                    
                                       
                }}
          // Initially visible month. Default = now
          current={format(baseDate)}
          minDate={dateFns.subWeeks(baseDate, 1)}
          maxDate={dateFns.addWeeks(baseDate, 1)}
          onDayPress={day => {
            console.log('selected day', day);
          }}
          // Handler which gets executed on day long press. Default = undefined
          onDayLongPress={day => {
            console.log('selected day', day);
          }}
          // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
          monthFormat={'yyyy MM'}
          // Handler which gets executed when visible month changes in calendar. Default = undefined
          onMonthChange={month => {
            console.log('month changed', month);
          }}
          // Hide month navigation arrows. Default = false
          hideArrows={false}
          // Replace default arrows with custom ones (direction can be 'left' or 'right')
          //renderArrow={direction => 'left' | 'right'}
          renderArrow={(direction) => direction === 'left' ? <MaterialCommunityIcons name = 'chevron-left' /> : <MaterialCommunityIcons name = 'chevron-right' />}
          // Do not show days of other months in month page. Default = false
          hideExtraDays={true}
          // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
          // day from another month that is visible in calendar page. Default = false
          disableMonthChange={true}
          // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
          firstDay={1}
          // Hide day names. Default = false
          hideDayNames={true}
          // Show week numbers to the left. Default = false
          showWeekNumbers={true}
          // Handler which gets executed when press arrow icon left. It receive a callback can go back month
          onPressArrowLeft={subtractMonth => subtractMonth()}
          // Handler which gets executed when press arrow icon right. It receive a callback can go next month
          onPressArrowRight={addMonth => addMonth()}
          // Disable left arrow. Default = false
          disableArrowLeft={false}
          // Disable right arrow. Default = false
          disableArrowRight={false}
          // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
          disableAllTouchEventsForDisabledDays={true}
          // Replace default month and year title with custom one. the function receive a date as parameter
          renderHeader={date => {
            
          }}
          // Enable the option to swipe between months. Default = false
          enableSwipeMonths={true}
        /> */}
      {/* <View style = {styles.addHabit}>
        <TouchableOpacity style = { styles.addHabit} onPress = {() => navigation.navigate("Habit")}>
          <MaterialCommunityIcons name ='rocket-launch-outline' size={100} color='black' />
          <Text>No Habits</Text>
          <Text>Press '+' to add new habit </Text>
        </TouchableOpacity>
      </View> */}
      <Data />
      <View style = {styles.homeZone} > 
      {/* <TouchableOpacity>
        <Ionicons name='home' size={32} color='red' />
        <Text>Home</Text>
      </TouchableOpacity> */}
      <TouchableOpacity  onPress={() => navigation.navigate("Habit")}>
        <Ionicons name='add-circle-outline' size={32} color='red' />
        <Text>Add</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name='md-stats-chart-outline' size={32} color='black' />
        <Text>Statistic</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name='settings-outline' size={32} color='black' />
        <Text>Setting</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        backgroundColor: 'white',
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
