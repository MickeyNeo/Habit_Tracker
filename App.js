import React, {useState, useEffect} from "react";
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { MainTabNavigator } from "./navigation/navigationTab";
import { StoreProvider } from "./Store"
import * as SQLite from 'expo-sqlite';
import { FileSystem } from 'expo';

// load DB for expo

const Main = () => {
   const [db, setDb] = useState(SQLite.openDatabase('Habit_tracker'));
   const [isLoading, setIsLoading] = useState(true);
   const [names, setNames] = useState([]);
   const [currentName, setCurrentName] = useState(undefined); 

   /* FileSystem.downloadAsync(
      'C:\Users\ADMIN\OneDrive\Máy tính\HK5\MobileDev\Habit_Tracker\Habit_tracker.db',
      FileSystem.documentDirectory + 'Habit_tracker.db'
    )
    .then(({ uri }) => {
      console.log('Finished downloading to ', uri)
    })
    .catch(error => {
      console.error(error);
    }) */

   useEffect(() => {

      db.transaction(tx => {
         tx.executeSql('CREATE TABLE IF NOT EXISTS "Habit" (\
            "id"	INTEGER,\
            "name"	TEXT NOT NULL,\
            "note"	TEXT,\
            "frequency"	TEXT NOT NULL,\
            "color"	TEXT NOT NULL DEFAULT \'#000\',\
            "tagID"	INTEGER COLLATE BINARY,\
            "frequencyType"	TEXT NOT NULL CHECK("frequencyType" IN (\'Daily\', \'Weekly\', \'Monthly\')),\
            "timeRange"	TEXT NOT NULL CHECK("timeRange" IN (\'Anytime\', \'Morning\', \'Afternoon\', \'Evening\')),\
            "reminderMessage"	TEXT,\
            "showMemo"	INTEGER NOT NULL CHECK("showMemo" IN (0, 1)),\
            "chartType"	INTEGER NOT NULL CHECK("chartType" IN (0, 1)),\
            "habitStartDate"	TEXT NOT NULL,\
            "habitEndDate"	TEXT,\
            "goalNo"	INTEGER NOT NULL DEFAULT 1,\
            "goalPeriod"	TEXT NOT NULL CHECK("goalPeriod" IN (\'Day\', \'Week\', \'Month\')),\
            "unitID"	INTEGER,\
            PRIMARY KEY("id" AUTOINCREMENT))')
       });

       db.transaction(tx => {
         tx.executeSql("INSERT INTO 'Habit' VALUES \
         ('id', 'name', 'note', 'frequency', 'color', 'tagID', 'frequencyType', 'timeRange', 'reminderMessage', 'showMemo', 'chartType', 'habitStartDate', 'habitEndDate', 'goalNo', 'goalPeriod', 'unitID')\
            ('1', 'Meditation', 'Meditation is good', '1', '#000', '', 'Daily', 'Morning', 'Now is present!!!', '1', '0', '2022-11-01 00:00:00.000', '', '1', 'Day', '2');\
            ('2', 'Exercise', 'Exercise is good!!!', '3', '''#002''', '', 'Weekly', 'Anytime', 'Exercise now!!!', '0', '1', '2022-11-01 06:30:00.000', '', '1', 'Day', '8');"
            )
       });

       db.transaction(tx => {
         tx.executeSql('CREATE TABLE "Memo" (\
            "habitID"	INTEGER,\
            "date"	TEXT,\
            "content"	TEXT,\
            PRIMARY KEY("habitID","date"))'
         )
      });

      db.transaction(tx => {
         tx.executeSql('CREATE TABLE "Reminder" (\
            "habitID"	INTEGER,\
            "time"	TEXT,\
            PRIMARY KEY("habitID","time")\
         )'
         )
      });

      db.transaction(tx => {
         tx.executeSql('CREATE TABLE "Tag" (\
            "id"	INTEGER,\
            "name"	TEXT NOT NULL,\
            PRIMARY KEY("id" AUTOINCREMENT)\
         )'
         )
      });

      db.transaction(tx => {
         tx.executeSql('CREATE TABLE "Unit" (\
            "id"	INTEGER,\
            "name"	TEXT,\
            PRIMARY KEY("id" AUTOINCREMENT)\
         )'
         )
      });

      db.transaction(tx => {
         tx.executeSql('SELECT * FROM "Habit"', null,
            (txObj, resultSet) => setNames(resultSet.rows._array),
            (txObj, error) => console.log(error)
         );
      });
      setIsLoading(false);

   }, [db]);

   console.log(names);

   return (

   <StoreProvider>
      <NavigationContainer>
         <MainTabNavigator/>
      </NavigationContainer>
   </StoreProvider>


   ); 
};
export default Main;
