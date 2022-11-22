import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
//Screen
import Setting from "../screen/setting";
import Statistic from "../screen/statistic";

const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator screenOptions={{ headerShown: false }}>
      <SettingsStack.Screen name="Settings" component={Setting} />
      <SettingsStack.Screen name="Statistic" component={Statistic} />
    </SettingsStack.Navigator>
  );
}
export {SettingsStackScreen};