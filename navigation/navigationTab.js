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
          headerStyle: {
            backgroundColor: state.currentTheme.backgroundColor, // đổi màu nền header
          },
          headerTitleStyle: {
            color: state.currentTheme.color, // đổi màu chữ header
          },
        tabBarButton: (props) => <TouchableOpacity {...props} 
        onPress = {() => {
          if (props.accessibilityState.selected == true)
          navigation.navigate('Habit')
          else navigation.navigate('Home')
          //console.log(props.accessibilityState.selected)
        }}/>
        }} name= "Home" component={Home} /> 
        {stateHabitStat && <Tab.Screen options={{headerStyle: {
            backgroundColor: state.currentTheme.backgroundColor, // đổi màu nền header
          },
          headerTitleStyle: {
            color: state.currentTheme.color, // đổi màu chữ header
          },}} name="Statistic" component={Statistic} />}
        <Tab.Screen options={{headerStyle: {
            backgroundColor: state.currentTheme.backgroundColor, // đổi màu nền header
          },
          headerTitleStyle: {
            color: state.currentTheme.color, // đổi màu chữ header
          },}} name="Settings" component={Setting} />
      </Tab.Navigator>
  );
}
function MainTabNavigator () {
  const [state,dispatch] = useStore();
  return (
      <Stack.Navigator >
        <Stack.Screen   
          options={({ route }) => ({
          headerTitle: getHeaderTitle(route)})} 
          name="None" component={HomeTabs} />
        <Stack.Screen options={{headerStyle: {
            backgroundColor: state.currentTheme.backgroundColor, // đổi màu nền header
          },
          headerTitleStyle: {
            color: state.currentTheme.color, // đổi màu chữ header
          },}} name="Habit" component={Habit} />
        <Stack.Screen options={{ headerTitle: 'Add Your Habit',headerStyle: {
            backgroundColor: state.currentTheme.backgroundColor, // đổi màu nền header
          },
          headerTitleStyle: {
            color: state.currentTheme.color, // đổi màu chữ header
          }, }} name="AddHabit" component={AddHabit} />
        <Stack.Screen options={{ headerTitle: 'Habit Detail',headerStyle: {
            backgroundColor: state.currentTheme.backgroundColor, // đổi màu nền header
          },
          headerTitleStyle: {
            color: state.currentTheme.color, // đổi màu chữ header
          }, }} name="HabitDetail" component={HabitDetail} />
        <Stack.Screen options={{headerStyle: {
            backgroundColor: state.currentTheme.backgroundColor, // đổi màu nền header
          },
          headerTitleStyle: {
            color: state.currentTheme.color, // đổi màu chữ header
          },}} name='Theme' component={Theme}/>
        <Stack.Screen options ={{headerTitle: 'All Habit',headerStyle: {
            backgroundColor: state.currentTheme.backgroundColor, // đổi màu nền header
          },
          headerTitleStyle: {
            color: state.currentTheme.color, // đổi màu chữ header
          },}} name='HabitManager' component={HabitManager}/>
        <Stack.Screen name="Export" component={Export} />
        <Stack.Screen options={{headerStyle: {
            backgroundColor: state.currentTheme.backgroundColor, // đổi màu nền header
          },
          headerTitleStyle: {
            color: state.currentTheme.color, // đổi màu chữ header
          },}} name="TagManager" component={TagManager} />
        <Stack.Screen options={{ headerTitle: 'Habit Details',headerStyle: {
            backgroundColor: state.currentTheme.backgroundColor, // đổi màu nền header
          },
          headerTitleStyle: {
            color: state.currentTheme.color, // đổi màu chữ header
          }, }} name="HabitOfADay" component={HabitOfADay}/>
        <Stack.Screen options={{ headerTitle: 'Edit Habit',headerStyle: {
            backgroundColor: state.currentTheme.backgroundColor, // đổi màu nền header
          },
          headerTitleStyle: {
            color: state.currentTheme.color, // đổi màu chữ header
          },}} name="EditHabit" component={EditHabit}/>
      </Stack.Navigator>
  );
}
export {MainTabNavigator};
