import React, { useState, Component, useContext, useReducer, useEffect } from "react";
import { View, Button, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView,Image, TextInput, Alert, } from "react-native";
//import Ionicons from '@expo/vector-icons/Ionicons';
//import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
//import Fontisto from '@expo/vector-icons/Fontisto';
//import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
//import ColorPicker from 'react-native-wheel-color-picker';
//import { ChromePicker } from 'react-color';
import themeContext from "./styles/themeContext";
//import ChooseColor from "./icon_color/chooseColor";
//import ChooseIcon from "./icon_color/chooseIcon";
//import Icons from "./icon_color/Icon";
// import addName from ./''

import { useStore, useHabit, addHabitOfaDay, addHabitList, HabitProvider } from '../Store'
import { setHabitGoalNo, setHabitInput, setHabitGoalPeriod, initAddHabit, setHabitTimeRange, setHabitUnit, setHabitColor, setHabitFrequency } from '../Store/action'
//import { db, addHabit} from '../Store/database'
import * as SQLite from 'expo-sqlite';
//import { color } from "react-native-reanimated";

const AddHabit = ({navigation, route}) => {
    console.log(1);

    const [state,dispatch] = useStore();
    const [habitState, habitDispatch] = useHabit();

    const { name, colors, image, IconInfo } = route.params;

    const IconDetail = {
        iconName: IconInfo[0],
        iconFamily: IconInfo[1],
    }

    const theme = useContext(themeContext);

    const [icon, setIcon] = useState('');

    habitDispatch(initAddHabit({name: name, color: colors}))
    const db = SQLite.openDatabase('Habit_tracker.db');

    /* useEffect(() => {

        console.log("Updating database")
    
        db.transaction(tx => {
          tx.executeSql('CREATE TABLE IF NOT EXISTS Habit (\
             id	INTEGER,\
             name	TEXT NOT NULL,\
             note	TEXT,\
             frequency	TEXT NOT NULL,\
             color	TEXT NOT NULL DEFAULT \'#000\',\
             tagID	INTEGER COLLATE BINARY,\
             frequencyType	TEXT NOT NULL CHECK(frequencyType IN (\'Daily\', \'Weekly\', \'Monthly\')),\
             timeRange	TEXT NOT NULL CHECK(timeRange IN (\'Anytime\', \'Morning\', \'Afternoon\', \'Evening\')),\
             reminderMessage	TEXT,\
             showMemo	INTEGER NOT NULL CHECK(showMemo IN (0, 1)),\
             chartType	INTEGER NOT NULL CHECK(chartType IN (0, 1)),\
             habitStartDate	TEXT NOT NULL,\
             habitEndDate	TEXT,\
             goalNo	INTEGER NOT NULL DEFAULT 1,\
             goalPeriod	TEXT NOT NULL CHECK(goalPeriod IN (\'Day\', \'Week\', \'Month\')),\
             unitID	INTEGER,\
             PRIMARY KEY(id AUTOINCREMENT))')
        });
    
    }, [db]); */

    const addHabitDB = () => {
        /* db.transaction(tx => {
            tx.executeSql('DROP TABLE Habit')
          }); */
        
        db.transaction(tx => {
            tx.executeSql('CREATE TABLE IF NOT EXISTS Habit (\
               id	INTEGER,\
               name	TEXT NOT NULL,\
               note	TEXT,\
               frequency	TEXT NOT NULL,\
               color	TEXT NOT NULL DEFAULT \'#000\',\
               tagID	INTEGER COLLATE BINARY,\
               frequencyType	TEXT NOT NULL CHECK(frequencyType IN (\'Day\', \'Week\', \'Month\')),\
               timeRange	TEXT NOT NULL CHECK(timeRange IN (\'Anytime\', \'Morning\', \'Afternoon\', \'Evening\')),\
               reminderMessage	TEXT,\
               showMemo	INTEGER NOT NULL CHECK(showMemo IN (0, 1)),\
               chartType	INTEGER NOT NULL CHECK(chartType IN (0, 1)),\
               habitStartDate	TEXT NOT NULL,\
               habitEndDate	TEXT,\
               goalNo	INTEGER NOT NULL DEFAULT 1,\
               goalPeriod	TEXT NOT NULL CHECK(goalPeriod IN (\'Day\', \'Week\', \'Month\')),\
               unitID	INTEGER,\
               PRIMARY KEY(id AUTOINCREMENT))')
          });
    
        console.log("Adding Habit to db");
        db.transaction(tx => {
            tx.executeSql('INSERT INTO Habit (id, name, note, frequency, color, tagID, timeRange, reminderMessage, showMemo, chartType, habitStartDate, habitEndDate, goalNo, goalPeriod, unitID, progress) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', 
            [habitState.id, habitState.name, habitState.note, habitState.frequency, habitState.color, habitState.tagID, habitState.timeRange, habitState.reminderMessage, habitState.showMemo, habitState.chartType, habitState.habitStartDate, habitState.habitEndDate, habitState.goalNo, habitState.goalPeriod, habitState.unitID],
            (txObj, resultSet) => {
                console.log(resultSet);
                /* let existingNames = [...names];
                existingNames.push({ id: resultSet.insertId, name: '11111'});
                setNames(existingNames);
                setCurrentName(undefined); */
            },
            (txObj, error) => console.log(error)
            );
        });
    }

    return (
        <View style={{backgroundColor: theme.backgroundColor, flex: 1, flexDirection : 'column'}}>
            <View style ={styles.Habit}>
                <ScrollView >
                    <View style = {{flexDirection: 'column', padding: 10, }}>
                    <Text style ={{fontWeight: 'bold', color: theme.color }}>Name</Text>
                    <TextInput
                        style={[styles.textInput,{backgroundColor: theme.backgroundColor1}]}
                        placeholder={(name)}
                    />
                    </View>
                    <View style = {{flexDirection: 'column', padding: 10, }}>
                    <Text style ={{fontWeight: 'bold', color: theme.color }}>Note</Text>
                    <TextInput
                        style={styles.textInput}
                        value={habitState.note}
                        placeholder="Description or other infos"
                        onChangeText={(value) => setNote(value)}
                    />
                    </View>
                    <View style = {{flexDirection: 'column', padding: 10, }}>
                        <Text style ={{fontWeight: 'bold', color: theme.color }}>Icon & Color</Text>
                        <View style = {{flexDirection: 'row', flex: 2}}>
                            <View style ={{ flexDirection: 'row', justifyContent: 'space-evenly', flex: 0.5 }}>
                                {/* {<Text>Icon</Text>
                                {TabChoose('Icon', habitState, habitDispatch,setIcon,0,IconDetail)}}
                                <Text>Color</Text>
                                {TabChoose('Color', habitState, habitDispatch,setIcon,1,IconDetail)} */}
                            </View>
                        </View>
                    </View>

                    <View style = {{flexDirection: 'column', padding: 10}}>
                        <Text style ={{fontWeight: 'bold', color: theme.color }}>Tag</Text>
                        {/* <TouchableOpacity style = {{borderRadius: 10, width: 40, alignItems: 'center', backgroundColor: '#f5f5f5',}}>
                            <Ionicons name ='add' size = {20} color = {changecolor} />
                        </TouchableOpacity> */}
                    </View>

                    <View style = {{flexDirection: 'column',padding: 10}}>
                    <Text style ={{fontWeight: 'bold', color: theme.color }}>Goal & Goal Period</Text>
                        <View style = {{flexDirection: 'row', flex: 1}}>
                            <View style ={{ flexDirection: 'row', justifyContent: 'space-evenly',flex: 1, marginTop: 5 }}>

                            {TabButton(habitState, habitDispatch,"1")}
                            {TabButtonUnit(habitState, habitDispatch,"count")}
                            {TabButton(habitState, habitDispatch,"Day",0)}
                            {TabButton(habitState, habitDispatch,"Week",0)}
                            {TabButton(habitState, habitDispatch,"Month",0)}
                            </View>
                        </View>
                    </View>
                    <View style = {{flexDirection: 'column', padding: 10}}>
                    <Text style ={{fontWeight: 'bold', color: theme.color }}>Frequency</Text>
                    <TextInput
                        style={[styles.textInput,{backgroundColor: theme.backgroundColor1}]}
                        placeholder="Type here to translate!"
                        //onChangeText={newText => setText(newText)}
                        //defaultValue={text}
                    />
                    </View>
                    <View style = {{flexDirection: 'column', padding: 10}}>
                    <Text style ={{fontWeight: 'bold', color: theme.color }}>Time Range</Text>
                        <View style = {{flexDirection: 'row', flex: 1}}>
                            <View style ={{ flexDirection: 'row', justifyContent: 'flex-start',flex: 0.5, marginTop: 5 }}>
                            {TabButtontime(habitState, habitDispatch, "Anytime")}
                            {TabButtontime(habitState, habitDispatch, "Morning")}
                            {TabButtontime(habitState, habitDispatch, "Afternoon")}
                            {TabButtontime(habitState, habitDispatch, "Evening")}
                            </View>
                        </View> 
                    </View>
                    <View style = {{flexDirection: 'column', padding: 10}}>
                    <Text style ={{fontWeight: 'bold', color: theme.color }}>Remainder</Text>
                    </View>
                    <View style = {{flexDirection: 'column', padding: 10}}>
                    <Text style ={{fontWeight: 'bold', color: theme.color }}>Remainder Messages</Text>
                    <TextInput
                        style={[styles.textInput,{backgroundColor: theme.backgroundColor1}]}
                        value={habitState.reminderMessage}
                        placeholder="Enter your message here!"
                        onChangeText={(value) => setMess(value)}
                    />
                    </View>
                    {}
                </ScrollView>

            </View>
        <SafeAreaView style = {styles.homeZone}> 
            <TouchableOpacity 
                onPress={() => {
                    dispatch(addHabitOfaDay(name.toLowerCase()));
                    /* dispatch(setHabitInput(habit)); */
                    dispatch(addHabitList(habit));
                    addHabitDB();
                    navigation.navigate('Home', {
                        screen: 'AddHabit',
                    });
                }}>
                <Image
                    source={require('./Icon/done.png')}
                    style={{ width: 45, height: 45,}}
                />
            </TouchableOpacity>
        </SafeAreaView>
        </View>
    );
};

const TabButton = (habitState, habitDispatch, title, flag) => {
if (flag ==1)
    return (
        <TouchableOpacity onPress={() => {
            habitDispatch(setHabitGoalNo(title));
        }}>
            <View style={[styles.btnTouch, { backgroundColor: habitState.goalNo == title ? color : 'transparent'}]}>
                <Text style={{
                    fontSize: 15,
                    color: habit.goalNo == title ? "#a9a9a9" : "grey"
                }}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
else 
    return (
        <TouchableOpacity onPress={() => {
            //setCurrentTabPeriod(title)
            habitDispatch(setHabitGoalPeriod(title));
        }}>
        <View style={[styles.btnTouch, 
            { backgroundColor: habitState.goalPeriod == title ? habitState.color : 'transparent'}
        ]}>
            <Text style={{
            fontSize: 15,
            color: habitState.goalPeriod == title ? "#a9a9a9" : "grey"
            }}>{title}</Text>

        </View>
        </TouchableOpacity>
    )
}

const TabButtonUnit = (habitState, habitDispatch, title) => {
    return (
      <TouchableOpacity onPress={() => {
          habitDispatch(setHabitUnit(title));
      }}>
        <View style={[styles.btnTouchTime, 
          { backgroundColor: 'transparent'}
        ]}>
          <Text style={{
            fontSize: 15,
            color: "grey"
          }}>{title}</Text>
  
        </View>
      </TouchableOpacity>
    )
  }

const TabButtontime = (habitState, habitDispatch, title) => {
  return (
    <TouchableOpacity onPress={() => {
        habitDispatch(setHabitTimeRange(title))
    }}>
      <View style={[styles.btnTouchTime, 
        { backgroundColor: habitState.timeRange == title ? habitState.color : 'transparent'}
      ]}>
        <Text style={{
          fontSize: 15,
          color: habitState.timeRange == title ? "#a9a9a9" : "grey"
        }}>{title}</Text>

      </View>
    </TouchableOpacity>
  )
}
/* const TabChoose = (title, habitState, habitDispatch, setIcon, flag, IconDetail) => {
    const [isEnabled, setIsEnabled] = useState(false);
    if (flag == 1)
    return (
        <TouchableOpacity style = {[styles.btnTouch, {backgroundColor: habitState.color}]}    
        onPress ={() => {
                        setIsEnabled(!isEnabled)
                        }}
                        >
                        {isEnabled && title == 'Color' && <ChooseColor
                            myIsmodalVisible = {isEnabled}
                            setModalVisible = {setIsEnabled}
                            color = {habitState.color}
                            setColor ={habitDispatch(setHabitColor())}
                        ></ChooseColor>
                        }
        </TouchableOpacity>
    )
    else 
    return (
        <TouchableOpacity style = {[styles.btnTouch]} 
        onPress ={() => {
                        setIsEnabled(!isEnabled)
                        }}
                        >
        <Icons type = {IconDetail.iconFamily} name = {IconDetail.iconName} size = {20} color = {habitState.color} />
                        {isEnabled && title == 'Icon' && <ChooseIcon 
                            myIsmodalVisible = {isEnabled}
                            setModalVisible = {setIsEnabled}
                            seticon = {setIcon}
                        ></ChooseIcon>
                        }
        </TouchableOpacity>
    )
} */
const styles = StyleSheet.create({
    addHabit: { 
        alignItems: 'stretch',
        height: '15%',
        width: '100%',

    },
    Habit: {
        flex: 0.9,
        height: '88%',
        width: '100%',
    },
    homeZone: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent : 'space-evenly',
      position: 'absolute',
      width: 59,
      height: 59,
      top: '90%',
      left: '40%',
      padding: 0,
      borderRadius: 150,
      borderWidth: 1,
    },
    textInput: {
        height: 40, 
        with: '20%', 
        flex: 0.2,
        borderRadius: 5,
        padding: 10,
        //backgroundColor: '#f5f5f5', 
        color: '#a9a9a9',
    },
    customHabit: {
        flex: 0.4,
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 10,
        alignItems: 'center',
        alignSelf: 'flex-start',
        padding: 2,
        backgroundColor: '#D9D9D9',
        left: '20%',
        right: '20%',
        width: '60%',
        top: '5%',
    },
    btnTouch: {
        borderRadius: 10, 
        width: 50, 
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        
    },
    btnTouchTime: {
        borderRadius: 10, 
        width: 80, 
        alignItems: 'center',
        fontSize: 20,
        backgroundColor: '#f5f5f5',
        color: '#a9a9a9',
    },
    habitZone: {
        flexDirection: 'column',
    },
    zone: {
        flexDirection :'row',
        justifyContent : 'space-evenly',
        padding: 10,
    }
});
export default AddHabit;