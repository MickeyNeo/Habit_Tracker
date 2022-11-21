import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainStackNavigator , MutiStackNavigator} from "./navigationstack";
//Screen
import HomeScreen from "../screen/home";
import Habit from "../screen/habit";
import CustomHabit from "../screen/customhabit";
import AddHabit from "../screen/addhabit";
import SettingSreen from "../screen/setting";
import StatisticSreen from "../screen/statistic";

//SreenName

const homeName = "Home";
const settingsName = "Settings"
const statisticName = "Statistic";

const Tab = createBottomTabNavigator();

const MainTabNavigator = () =>{
    return(
        <Tab.Navigator> 
            <Tab.Screen name={homeName} component={HomeScreen} />
            <Tab.Screen name={statisticName} component={StatisticSreen} />
            <Tab.Screen name={settingsName} component={SettingSreen} />
        </Tab.Navigator>
    );
}
export {MainTabNavigator};