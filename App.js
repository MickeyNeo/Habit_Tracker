import React, {useState} from "react";
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { MainTabNavigator } from "./navigation/navigationTab";
import { StoreProvider, HabitProvider } from "./Store"

const Main = () => {
   return (

   <HabitProvider> 
      <StoreProvider>
         <NavigationContainer>
            <MainTabNavigator/>
         </NavigationContainer>
      </StoreProvider>
   </HabitProvider>  
   ); 
};
export default Main;
