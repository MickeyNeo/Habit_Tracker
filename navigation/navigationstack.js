import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screen/home";
import Habit from "../screen/habit";
import CustomHabit from "../screen/customhabit";
import AddHabit from "../screen/addhabit";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator /*initialRouteName="Home"*/>
      <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{ title: 'Welcome' }} />
      <Stack.Screen name="Habit" component={Habit} />
      <Stack.Screen name="CustomHabit" component={CustomHabit} 
         options={{
          title: 'Custom Habit',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
        }}
      />
      <Stack.Screen name="AddHabit" component={AddHabit} 
        options={{
          title: 'Add Habit',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
        }}
      />
    </Stack.Navigator>
  );
}

export { MainStackNavigator };
