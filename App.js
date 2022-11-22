import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import  { MainTabNavigator } from "./navigation/navigationTab";
const Main = () => {
   return (
   <NavigationContainer>
      <MainTabNavigator/>
   </NavigationContainer>
   ); 
};
export default Main;
