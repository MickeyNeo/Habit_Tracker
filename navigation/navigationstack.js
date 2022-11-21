import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Screen
import Home from "../screen/home";
import Habit from "../screen/habit";
import CustomHabit from "../screen/customhabit";
import AddHabit from "../screen/addhabit";
import SettingSreen from "../screen/setting";
import StatisticSreen from "../screen/statistic";

//SreenName
const settingsName = "Settings"
const statisticName = "Statistic";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const MainStackNavigator = () => {
  return (
    <Stack.Navigator /*initialRouteName="Home"*/>
      <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{ title: 'Welcome' }} />
      
      <Stack.Screen name="Habit" component={Habit} />
      <Stack.Screen name="CustomHabit" component={CustomHabit} 
         options={{
          title: 'Custom Habit',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
        }}
      />
      <Stack.Screen name="AddHabit" component={AddHabit} 
        options={{
          title: 'Add Habit',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
        }}
      />
    </Stack.Navigator>

  );
}

const MutiStackNavigator = () =>{
  return(
      <Stack.Navigator> 
          <Stack.Screen name={statisticName} component={StatisticSreen} />
          <Stack.Screen name={settingsName} component={SettingSreen} />
      </Stack.Navigator>
  );
}

export { MainStackNavigator , MutiStackNavigator};
