import React from "react";
import { View, Button, Text, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationContainer } from "@react-navigation/native";
import { MainStackNavigator } from "./navigation/navigationstack";
import  { MainTabNavigator } from "./navigation/navigationTab";
const Main = () => {
   return (
   <NavigationContainer>
      <MainTabNavigator/>
   </NavigationContainer>
   ); 
};
export default Main;