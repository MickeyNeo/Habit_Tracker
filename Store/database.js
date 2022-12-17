import * as SQLite from 'expo-sqlite';
import { useContext } from 'react';
import Context from './Context';
import reducer, { globalState } from './reducer';
import { addHabitList } from './action';

const db = SQLite.openDatabase('Habit_tracker.db');

const refreshDatabase = () => {
    console.log("Refreshing habit table");
    db.transaction(tx => {
        tx.executeSql("DROP TABLE Habit",
        [],
        (txObj, resultSet) => {
            console.log("Dropped habit table")
            console.log(resultSet);
        },
        (txObj, error) => console.log(error)
        );
    })

    db.transaction(tx => {
        tx.executeSql("DROP TABLE Memo",
        [],
        (txObj, resultSet) => {
            console.log("Dropped Memo table")
            console.log(resultSet);
        },
        (txObj, error) => console.log(error)
        );
    })
4
    db.transaction(tx => {
        tx.executeSql("DROP TABLE Reminder",
        [],
        (txObj, resultSet) => {
            console.log("Dropped reminder table")
            console.log(resultSet);
        },
        (txObj, error) => console.log(error)
        );
    })

    db.transaction(tx => {
        tx.executeSql("DROP TABLE Unit",
        [],
        (txObj, resultSet) => {
            console.log("Dropped Unite table")
            console.log(resultSet);
        },
        (txObj, error) => console.log(error)
        );
    })

    db.transaction(tx => {
        tx.executeSql("DROP TABLE HaveTag",
        [],
        (txObj, resultSet) => {
            console.log("Dropped HaveTag table")
            console.log(resultSet);
        },
        (txObj, error) => console.log(error)
        );
    })

    db.transaction(tx => {
        tx.executeSql("DROP TABLE Tag",
        [],
        (txObj, resultSet) => {
            console.log("Dropped Tag table")
            console.log(resultSet);
        },
        (txObj, error) => console.log(error)
        );
    })
}

const initDatabase = () => {
    db.transaction(tx => {
        tx.executeSql('CREATE TABLE IF NOT EXISTS Habit (\
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
            icon TEXT,\
            PRIMARY KEY(name))',
            [], 
            (txObj, resultSet) => {
                console.log("Initialize habit table")
                console.log(resultSet);
            },
            (txObj, error) => console.log(error)
            );
    });

    db.transaction(tx => {
        tx.executeSql('CREATE TABLE IF NOT EXISTS Memo (\
           habitName TEXT,\
           date	TEXT,\
           content	TEXT,\
           progress INTERGER.\
           PRIMARY KEY(habitName,date))',
           [], 
           (txObj, resultSet) => {
                console.log("Initialize Memo table")
                console.log(resultSet);
           },
           (txObj, error) => console.log(error)
        );


     });
  
     db.transaction(tx => {
        tx.executeSql('CREATE TABLE IF NOT EXISTS Reminder (habitName TEXT, time TEXT, PRIMARY KEY(habitName,time))',
        [], 
        (txObj, resultSet) => {
            console.log("Initialize Reminder table")
            console.log(resultSet);
        },
        (txObj, error) => console.log(error)
        );
     });
  
     db.transaction(tx => {
        tx.executeSql('CREATE TABLE IF NOT EXISTS Tag (\
           id	INTEGER,\
           name	TEXT NOT NULL,\
           PRIMARY KEY(id AUTOINCREMENT)\
        )',
        [], 
        (txObj, resultSet) => {
            console.log("Initialize Tag table")
            console.log(resultSet);
        },
        (txObj, error) => console.log(error)
        );
     });
  
     db.transaction(tx => {
        tx.executeSql("INSERT INTO Tag (\"id\", \"name\") VALUES \
        ('1', 'Health'),\
        ('2', 'Fitness'),\
        ('3', 'Productivity')",
        [], 
        (txObj, resultSet) => {
            console.log("Initialize tag data")
            console.log(resultSet);
        },
        (txObj, error) => console.log(error)
        );
     }); 
    

     db.transaction(tx => {
        tx.executeSql('CREATE TABLE IF NOT EXISTS Unit (\
           id	INTEGER,\
           name	TEXT,\
           PRIMARY KEY(id AUTOINCREMENT)\
        )',
        [], 
        (txObj, resultSet) => {
            console.log("Initialize unit table")
            console.log(resultSet);
        },
        (txObj, error) => console.log(error)
        );
     }); 

     db.transaction(tx => {
        tx.executeSql("INSERT INTO Unit (\"id\", \"name\") VALUES \
        ('1', 'sec'),\
        ('2', 'min'),\
        ('3', 'hr'),\
        ('4', 'ml'),\
        ('5', 'oz'),\
        ('6', 'cal'),\
        ('7', 'count'),\
        ('8', 'steps'),\
        ('9', 'm'),\
        ('10', 'km'),\
        ('11', 'mile')",
        [], 
        (txObj, resultSet) => {
            console.log("Initialize unit data")
            console.log(resultSet);
        },
        (txObj, error) => console.log(error)
        );
     }); 


     db.transaction(tx => {
        tx.executeSql('CREATE TABLE IF NOT EXISTS HaveTag (\
           habitName TEXT,\
           tagId    INTEGER,\
           PRIMARY KEY(habitName, tagId)\
        )',
        [], 
        (txObj, resultSet) => {
            console.log("Initialize haveTag table")
            console.log(resultSet);
        },
        (txObj, error) => console.log(error)
        );
     }); 
}

const addHabit = (habit) => {    
    console.log("Adding Habit to db");

    db.transaction(tx => {
        tx.executeSql('INSERT INTO Habit (name, note, frequency, color, tagID, frequencyType, timeRange, reminderMessage, showMemo, chartType, habitStartDate, habitEndDate, goalNo, goalPeriod, unitID) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', 
        [habit.name, habit.note, habit.frequency, habit.color, habit.tagID, habit.frequencyType, habit.timeRange, habit.reminderMessage, habit.showMemo, habit.chartType, habit.habitStartDate, habit.habitEndDate, habit.goalNo, habit.goalPeriod, habit.unitID],
        (txObj, resultSet) => {
            console.log(resultSet);
        },
        (txObj, error) => console.log(error)
        );
    })
}

const loadHabit = (listHabit, dispatch) => {
    console.log("Loading habit to db");

    /* db.transaction(tx => {"DROP TABLE Habit"}); */

    db.transaction(tx => {
       tx.executeSql('SELECT * FROM Habit', 
       [],
       (txObj, resultSet) => {
           console.log("Loading data into habit list");
           console.log("List habit state");
           console.log(listHabit);
           console.log("Database resultset");
           console.log(resultSet.rows);
           if (listHabit.length < resultSet.rows.length) {
              for (let i = 0; i < resultSet.rows.length; i++) {
                dispatch(addHabitList(resultSet.rows[i]));
              }
           }
       },
       (txObj, error) => console.log(error)
       );
   })
  }

  const loadUnit = () => {
    console.log("Loading habit to db");

    /* db.transaction(tx => {"DROP TABLE Habit"}); */

    db.transaction(tx => {
       tx.executeSql('SELECT * FROM Unit', 
       [],
       (txObj, resultSet) => {
           console.log("Loading init unit");
           /*console.log("List habit state");
           console.log(listHabit);
           console.log("Database resultset");
           console.log(resultSet.rows);
           if (listHabit.length < resultSet.rows.length) {
              for (let i = 0; i < resultSet.rows.length; i++) {
                dispatch(addHabitList(resultSet.rows[i]));
              }
           } */
           console.log(resultSet);
       },
       (txObj, error) => console.log(error)
       );
   })
  }


export {db, loadHabit, addHabit, refreshDatabase, initDatabase, loadUnit}