import React from "react";
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
import { useStore } from "../Store";

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
  const [state, dispatch] = useStore()
  const {stateHabitStat} = state
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
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: 'gray',
            tabBarActiveBackgroundColor: '#F3ACB4',
            tabBarInactiveBackgroundColor: 'white',
          })}>
        <Tab.Screen  option = {{headerShown: false}} name="Home" component={Home} /> 
        {stateHabitStat && <Tab.Screen  option = {{headerShown: false}}  name="Statistic" component={Statistic} />}
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
        <Stack.Screen options={{ headerTitle: 'Add Your Habit' }}name="AddHabit" component={AddHabit} />
        <Stack.Screen options={{ headerTitle: 'Habit Detail' }} name="HabitDetail" component={HabitDetail} />
        <Stack.Screen name='Theme' component={Theme}/>
        <Stack.Screen option ={{headerTitle: 'All Habit'}} name='HabitManager' component={HabitManager}/>
        <Stack.Screen name="Export" component={Export} />
        <Stack.Screen name="TagManager" component={TagManager} />
        <Stack.Screen options={{ headerTitle: 'Habit Details' }} name="HabitOfADay" component={HabitOfADay}/>
      </Stack.Navigator>
  );
}
export {MainTabNavigator};
