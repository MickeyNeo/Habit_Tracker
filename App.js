import React, {useState} from "react";
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { MainTabNavigator } from "./navigation/navigationTab";
import { StoreProvider } from "./Store"

const Main = () => {

   return (

   <StoreProvider>
      <NavigationContainer>
         <MainTabNavigator/>
      </NavigationContainer>
   </StoreProvider>


   ); 
};
export default Main;
