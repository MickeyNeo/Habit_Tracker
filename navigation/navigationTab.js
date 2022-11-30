import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import Habit from "../screen/habit";
import CustomHabit from "../screen/customhabit";
import AddHabit from "../screen/addhabit";
import Home from "../screen/home";
import { Ionicons } from '@expo/vector-icons';
import Setting from "../screen/setting";
import Statistic from "../screen/statistic";
import HabitDetail from "../screen/habitDetail/habitDetail";
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { View, Button, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView,Image, TextInput, Alert, } from "react-native";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
function getHeaderTitle(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
  switch (routeName) {
    case 'Home':
      return 'Home';
    case 'Statistic':
      return 'Statistic';
    case 'Settings':
      return 'Settings';
  }
}

function HomeTabs({navigation}) {
  return (
    <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
            tabBarShowLabel: false,
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused
                ? 'add'
                : 'ios-home-outline';
            if (iconName === 'add' && !focused) { 
              {navigation.navigate('Habit')}
            }
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
            }
            else if (route.name === 'Statistic') {
                iconName = focused ? 'ios-bar-chart' : 'ios-bar-chart-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#0c5776',
          tabBarInactiveTintColor: 'gray',
          tabBarActiveBackgroundColor: '#bcfefe',
          tabBarInactiveBackgroundColor: 'white',
        })}>
      <Tab.Screen  option = {{headerShown: false}} name="Home" component={Home} />
      <Tab.Screen  option = {{headerShown: false}}  name="Statistic" component={Statistic} />
      <Tab.Screen  option = {{headerShown: false}}  name="Settings" component={Setting} />
    </Tab.Navigator>
  );
}

function MainTabNavigator () {
  return (
      <Stack.Navigator >
        <Stack.Screen   
          options={({ route }) => ({
          headerTitle: getHeaderTitle(route), })} 
          name="Home" component={HomeTabs} />
        <Stack.Screen name="Habit" component={Habit} />
        <Stack.Screen name="AddHabit" component={AddHabit} />
        <Stack.Screen name="CustomHabit" component={CustomHabit} />
        <Stack.Screen options={{ headerTitle: 'Habit Detail' }} name="HabitDetail" component={HabitDetail} />
      </Stack.Navigator>
  );
}
export {MainTabNavigator};