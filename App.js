import React, {useState, useEffect} from "react";
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { MainTabNavigator } from "./navigation/navigationTab";
import { StoreProvider } from "./Store"
import { refreshDatabase, initDatabase } from "./Store/database";

const Main = () => {

   useEffect(() => {
      // refreshDatabase();   
      initDatabase();   
    }, []); // 👈️ empty dependencies array
   
   return (

   <StoreProvider>
      <NavigationContainer>
         <MainTabNavigator/>
      </NavigationContainer>
   </StoreProvider>


   ); 
};
export default Main;
