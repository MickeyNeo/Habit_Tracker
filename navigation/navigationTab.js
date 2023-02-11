import React, { useState, Component, useContext,useReducer,useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import Habit from "../screen/habit";
import AddHabit from "../screen/addhabit";
import Home from "../screen/home";
import { Ionicons } from '@expo/vector-icons';
import Setting from "../screen/setting";
import Statistic from "../screen/statistic";
import HabitDetail from "../screen/habitDetail/habitDetail";
import { View, Button, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView,Image, TextInput, Alert, } from "react-native";
import Theme from "../screen/settingsScreen/Theme";
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import HabitManager from "../screen/settingsScreen/HabitManager";
import Export from "../screen/settingsScreen/Export";
import HabitOfADay from "../screen/HabitOfADay";
import TagManager from "../screen/settingsScreen/TagManager";
import EditHabit from "../screen/EditHabit";
import { useStore } from "../Store";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const HomeStack = createStackNavigator();
 
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
function HomeTab() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen options = {{headerShown: false}} name="Habit" component={Habit} />
      <HomeStack.Screen options = {{headerShown: false}} name="None" component={Home} />
    </HomeStack.Navigator>
  )
}
function HomeTabs({navigation}) {
  const [state, dispatch] = useStore()
  const {stateHabitStat} = state
  if (stateHabitStat==true)
    return (
      <Tab.Navigator 
            initialRouteName="Home"
            screenOptions={({ route }) => ({
            tabBarShowLabel: false,
            headerShown: false,
            tabBarIcon: ({ focused, color, size, navigation }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused
                ? 'add'
                : 'ios-home-outline';
            }
            else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
            }
            else if (route.name === 'Statistic') {
                iconName = focused ? 'ios-bar-chart' : 'ios-bar-chart-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#4E3B43',
          tabBarInactiveTintColor: '#AEAC99',
          tabBarActiveBackgroundColor: '#FFB2D1',
          tabBarInactiveBackgroundColor: 'white',
        })}
        >
        <Tab.Screen 
        options = {{headerShown: false,
        tabBarButton: (props) => <TouchableOpacity {...props} 
        onPress = {() => {
          if (props.accessibilityState.selected == true)
          navigation.navigate('Habit')
          else navigation.navigate('Home')
          //console.log(props.accessibilityState.selected)
        }}/>
        }} name= "Home" component={Home} /> 
        <Tab.Screen  name="Statistic" component={Statistic} />
        <Tab.Screen  name="Settings" component={Setting} />
      </Tab.Navigator>
  );
  else
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
      <Tab.Screen  options = {{headerShown: false}} name="Home" component={HomeTab} /> 
      <Tab.Screen  options = {{headerShown: false}}  name="Settings" component={Setting} />
    </Tab.Navigator>
);
}
function MainTabNavigator () {
  return (
      <Stack.Navigator >
        <Stack.Screen   
          options={({ route }) => ({
          headerTitle: getHeaderTitle(route)})} 
          name="None" component={HomeTabs} />
        <Stack.Screen name="Habit" component={Habit} />
        <Stack.Screen options={{ headerTitle: 'Add Your Habit' }} name="AddHabit" component={AddHabit} />
        <Stack.Screen options={{ headerTitle: 'Habit Detail' }} name="HabitDetail" component={HabitDetail} />
        <Stack.Screen name='Theme' component={Theme}/>
        <Stack.Screen option ={{headerTitle: 'All Habit'}} name='HabitManager' component={HabitManager}/>
        <Stack.Screen name="Export" component={Export} />
        <Stack.Screen name="TagManager" component={TagManager} />
        <Stack.Screen options={{ headerTitle: 'Habit Details' }} name="HabitOfADay" component={HabitOfADay}/>
        <Stack.Screen options={{ headerTitle: 'Edit Habit'}} name="EditHabit" component={EditHabit}/>
      </Stack.Navigator>
  );
}
export {MainTabNavigator};
