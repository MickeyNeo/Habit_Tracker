import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SettingsStackScreen } from "./navigationstack";
import { NavigationContainer } from '@react-navigation/native';
import Habit from "../screen/habit";
import CustomHabit from "../screen/customhabit";
import AddHabit from "../screen/addhabit";
import Home from "../screen/home";
import { Ionicons } from '@expo/vector-icons';
import Setting from "../screen/setting";
import Statistic from "../screen/statistic";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
            screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-home-outline'
                : 'home-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
            }
            else if (route.name === 'Statistic') {
                iconName = focused ? 'ios-bar-chart' : 'ios-bar-chart-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
      <Tab.Screen  options={{ title: 'My home' }} name="Home" component={Home} />
      <Tab.Screen  options={{ title: 'Statistic' }} name="Statistic" component={Statistic} />
      <Tab.Screen options={{ title: 'Setting' }} name="Settings" component={Setting} />
    </Tab.Navigator>
  );
}

function MainTabNavigator () {
  return (
    <Stack.Navigator >
      <Stack.Screen option = {{headerShown: false}} name="Home" component={HomeTabs} />
      <Stack.Screen name="Habit" component={Habit} />
      <Stack.Screen name="AddHabit" component={AddHabit} />
      <Stack.Screen name="CustomHabit" component={CustomHabit} />
    </Stack.Navigator>
  );
}
export {MainTabNavigator};