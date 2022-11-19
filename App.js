import React from "react";
import { View, Button, Text, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationContainer } from "@react-navigation/native";
import { MainStackNavigator } from "./navigation/navigationstack";
const Main = () => {
   return (
   <NavigationContainer>
      <MainStackNavigator />
 
   </NavigationContainer>
   ); 
};
export default Main;