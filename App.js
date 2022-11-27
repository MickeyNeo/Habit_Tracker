import React, { useState, useEffect} from "react";
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { MainTabNavigator } from "./navigation/navigationTab";
import { EventRegister } from 'react-native-event-listeners';
import themeContext from "./screen/styles/themeContext";
import  theme  from "./screen/styles/theme";

const Main = () => {
   const [darkApp, setDarkApp] = useState(false);
   useEffect (() => {
      let eventListener = EventRegister.addEventListener(
         'changeThemeEvent', 
         data =>  {
            setDarkApp(data);
         },
      );
      return () => {
         EventRegister.removeEventListener(eventListener)
      };
   }, []);
   return (
   <themeContext.Provider value = { darkApp === true ? theme.dark : theme.light}>
   <NavigationContainer>
      <MainTabNavigator/>
   </NavigationContainer>
   </themeContext.Provider>
   ); 
};
export default Main;
