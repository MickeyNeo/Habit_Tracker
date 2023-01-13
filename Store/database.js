import * as SQLite from 'expo-sqlite';
import { useContext } from 'react';
import Context from './Context';
import reducer, { globalState } from './reducer';
import { addHabitList, emptyHabitList } from './action';
import {useStore,setDayDoneInMonth,setDayTotalDone,setMonthlyVolumn,setTotalVolumn} from '../Store'
import {React, useState } from 'react';
import { memoInit, habitInit, reminderInit, unitInit, tagInit, haveTagInit } from './init_data';
    
  
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
        // console.log("Dropped HaveTag table")
        // console.log(resultSet);
    },
    (txObj, error) => console.log(error)
    );
})

db.transaction(tx => {
    tx.executeSql("DROP TABLE Tag",
    [],
    (txObj, resultSet) => {
        // console.log("Dropped Tag table")
        // console.log(resultSet);
    },
    (txObj, error) => console.log(error)
    );
})

db.transaction(tx => {
    tx.executeSql("DROP TABLE Setting",
    [],
    (txObj, resultSet) => {
        // console.log("Dropped Tag setting")
        // console.log(resultSet);
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
            iconFamily TEXT,\
            PRIMARY KEY(name))',
            [], 
            (txObj, resultSet) => {
                // console.log("Initialize habit table")
                // console.log(resultSet);
            },
            (txObj, error) => console.log(error)
            );
    });
    // unitID: min = 1; km = 9
    // tagID: Health = 0; Fitness = 1; Productivity = 2; Mental = 3
    db.transaction(tx => {
        tx.executeSql(habitInit,
        [],
        (txObj, resultSet) => {
            // console.log("Initialize habit table")
            // console.log(resultSet);
        },
        (txObj, error) => console.log(error)
        );
    })

    db.transaction(tx => {
        tx.executeSql('CREATE TABLE IF NOT EXISTS Memo (\
            habitName TEXT,\
            date	TEXT,\
            content	TEXT,\
            progress INTERGER,\
            PRIMARY KEY(habitName,date))',
            [], 
            (txObj, resultSet) => {
                // console.log("Initialize Memo table")
                // console.log(resultSet);
            },
            (txObj, error) => console.log(error)
        );
    });

    db.transaction(tx => {
        tx.executeSql(memoInit,
            [], 
            (txObj, resultSet) => {
                // console.log("Initialize Memo table")
                // console.log(resultSet);
            },
            (txObj, error) => console.log(error)
        );
    });

    db.transaction(tx => {
    tx.executeSql('CREATE TABLE IF NOT EXISTS Reminder (habitName TEXT, time TEXT, PRIMARY KEY(habitName,time))',
    [], 
    (txObj, resultSet) => {
        // console.log("Initialize Reminder table")
        // console.log(resultSet);
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
        // console.log("Initialize Tag table")
        // console.log(resultSet);
    },
    (txObj, error) => console.log(error)
    );
    });

    db.transaction(tx => {
        tx.executeSql(tagInit,
        [], 
        (txObj, resultSet) => {
            // console.log("Initialize tag data")
            // console.log(resultSet);
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
            // console.log("Initialize unit table")
            // console.log(resultSet);
        },
        (txObj, error) => console.log(error)
        );
    }); 

    db.transaction(tx => {
        tx.executeSql(unitInit,
        [], 
        (txObj, resultSet) => {
            // console.log("Initialize unit data")
            // console.log(resultSet);
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
            // console.log("Initialize haveTag table")
            // console.log(resultSet);
        },
        (txObj, error) => console.log(error)
        );
    }); 

    db.transaction(tx => {
        tx.executeSql('CREATE TABLE IF NOT EXISTS Setting (\
            language TEXT CHECK(language IN (\'English\', \'German\', \'Vietnamese\', \'French\')),\
            theme    TEXT CHECK(theme IN (\'Dark\', \'Light\')),\
            dateBarStyle TEXT CHECK(theme IN (\'DateWeek\', \'Week\', \'Date\')),\
            habitBarSize TEXT CHECK(habitBarSize IN (\'Large\', \'Small\')),\
            dailyReminderText TEXT,\
            dailyReminderTime TEXT,\
            habitStat INTERGER CHECK(habitStat IN (0, 1))\
        )',
        [], 
        (txObj, resultSet) => {
            // console.log("Initialize setting table")
            // console.log(resultSet);
        },
        (txObj, error) => console.log(error)
        );
    }); 
}

const addHabit = (habit) => {    
    console.log("Adding Habit to db");

    db.transaction(tx => {
        tx.executeSql('INSERT INTO Habit (name, note, frequency, color, tagID, frequencyType, timeRange, reminderMessage, showMemo, chartType, habitStartDate, habitEndDate, goalNo, goalPeriod, unitID, icon, iconFamily, week) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?)', 
        [habit.name, habit.note, habit.frequency, habit.color, habit.tagID, habit.frequencyType, habit.timeRange, habit.reminderMessage, habit.showMemo, habit.chartType, habit.habitStartDay, habit.habitEndDay, habit.goalNo, habit.goalPeriod, habit.unitID, habit.icon, habit.iconFamily, habit.week],
        (txObj, resultSet) => {
            // console.log(resultSet);
        },
        (txObj, error) => console.log(error)
        );
    })

}

const addSetting = (state) => {    
    console.log("Adding Setting to db");

    db.transaction(tx => {
        tx.executeSql('INSERT INTO Setting (language, theme, habitBarStyle, dateBarStyle, habitStat, dailyReminderTime, dailyReminderText) values (?, ?, ?, ?, ?, ?, ?)', 
        [state.stateLanguage, state.theme, state.habitBarStyle, state.dateBarStyle, state.habitStat, state.dailyReminderTime, state.dailyReminderText],
        (txObj, resultSet) => {
            // console.log(resultSet);
        },
        (txObj, error) => console.log(error)
        );
    })
}

// Trên đt
// const loadHabit = (listHabit, dispatch) => {

//     console.log("Loading habit from db");

//     /* db.transaction(tx => {"DROP TABLE Habit"}); */

//     db.transaction(tx => {
//         tx.executeSql('SELECT * FROM Habit', 
//         [],
//         (txObj, resultSet) => {
//             /* console.log("Loading data into habit list");
//             console.log("List habit state");
//             console.log(listHabit);
//             console.log("Database resultset");
//             console.log(resultSet.rows); */
//             if (listHabit.length < resultSet.rows.length) {
//                 for (let i = 0; i < resultSet.rows.length; i++) {
//                     console.log("Database resultset", resultSet.rows)
//                     dispatch(addHabitList(resultSet.rows._array[i]));
//                 } 
//             }
//         },
//         (txObj, error) => console.log(error)
//         );
//     })

// }


//Trên web
const loadHabit = (listHabit, dispatch) => {

    console.log("Loading habit from db");

    /* db.transaction(tx => {"DROP TABLE Habit"}); */

    db.transaction(tx => {
        tx.executeSql('SELECT * FROM Habit', 
        [],
        (txObj, resultSet) => {
            /* console.log("Loading data into habit list");
            console.log("List habit state");
            console.log(listHabit);
            console.log("Database resultset");
            console.log(resultSet.rows); */
            if (listHabit.length < resultSet.rows.length) {
                for (let i = 0; i < resultSet.rows.length; i++) {
                    console.log("Database resultset", resultSet.rows)
                    dispatch(addHabitList(resultSet.rows[i]));
                } 
            }
        },
        (txObj, error) => console.log(error)
        );
    })

}

const loadSetting = (state, dispatch) => {

    console.log("Loading setting from db");

    /* db.transaction(tx => {"DROP TABLE Habit"}); */

    db.transaction(tx => {
        tx.executeSql('SELECT * FROM setting', 
        [],
        (txObj, resultSet) => {
            console.log("Loading setting into global state");
            console.log("resultSet.rows");
            dispatch(addStateSetting(resultSet.rows));
        },
        (txObj, error) => console.log(error)
        );
    })
}

const loadUnit = () => {
    console.log("Loading unit from db");

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

const deleteHabit = (habitName) => {
    console.log("Deleting habit from db");

    db.transaction(tx => {
        tx.executeSql('DELETE FROM HaveTag \
        WHERE habitName = ?', 
        [habitName],
        (txObj, resultSet) => {
            console.log("Deleted habit ", habitName, " from table HaveTag");
            console.log(resultSet);
        },
        (txObj, error) => console.log(error)
        );
    })

    db.transaction(tx => {
        tx.executeSql('DELETE FROM Memo \
        WHERE habitName = ?', 
        [habitName],
        (txObj, resultSet) => {
            console.log("Deleted habit ", habitName, " from table Memo");
            console.log(resultSet);
        },
        (txObj, error) => console.log(error)
        );
    })

    db.transaction(tx => {
        tx.executeSql('DELETE FROM Reminder \
        WHERE habitName = ?', 
        [habitName],
        (txObj, resultSet) => {
            console.log("Deleted habit ", habitName, " from table Reminder");
            console.log(resultSet);
        },
        (txObj, error) => console.log(error)
        );
    })

    db.transaction(tx => {
        tx.executeSql('DELETE FROM Habit \
        WHERE name = ?', 
        [habitName],
        (txObj, resultSet) => {
            console.log("Deleted habit ", habitName, " from table Habit");
            console.log(resultSet);
        },
        (txObj, error) => console.log(error)
        );
    })

}

const updateHabit = (habit, newHabit) => {
    console.log("Updating habit ", habit.name);

    if (habit.name != newHabit.name) {

        console.log("Updating habit name");
        db.transaction(tx => {
            tx.executeSql('UPDATE HaveTag \
            SET name = ?\
            WHERE name = ?', 
            [newHabit.name, habit.name],
            (txObj, resultSet) => {
                console.log("Update habit name ", habit.name, " from table HaveTag to ", newHabit.name);
                console.log(resultSet);
            },
            (txObj, error) => console.log(error)
            );
        })

        db.transaction(tx => {
            tx.executeSql('UPDATE Reminder \
            SET name = ?\
            WHERE name = ?', 
            [newHabit.name, habit.name],
            (txObj, resultSet) => {
                console.log("Update habit name ", habitName, " from table Reminder to ", newHabit.name);
                console.log(resultSet);
            },
            (txObj, error) => console.log(error)
            );
        })

        db.transaction(tx => {
            tx.executeSql('UPDATE Memo \
            SET name = ?\
            WHERE name = ?', 
            [newHabit.name, habit.name],
            (txObj, resultSet) => {
                console.log("Update habit name ", habitName, " from table Memo to ", newHabit.name);
                console.log(resultSet);
            },
            (txObj, error) => console.log(error)
            );
        })

    }

    db.transaction(tx => {
        tx.executeSql('UPDATE Habit \
        SET name = ?, note = ?, frequency = ?, color = ?, frequencyType = ?, timeRange = ?, reminderMessage = ?, showMemo = ?, \
        chartType = ?, habitStartDate = ?, habitEndDate = ?, goalNo = ?, goalPeriod = ?, unitID = ?, icon = ?\, iconFamily = ?\
        WHERE name = ?', 
        [newHabit.name, newHabit.note, newHabit.frequency, newHabit.color, newHabit.frequencyType, newHabit.timeRange, 
        newHabit.reminderMessage, newHabit.showMemo, newHabit.chartType, newHabit.habitStartDate, newHabit.habitEndDate, 
        newHabit.goalNo, newHabit.goalPeriod, newHabit.unitID, newHabit.icon, newHabit.iconFamily, habit.name],
        (txObj, resultSet) => {
            console.log("Update habit ", habitName, " from table Habit");
            console.log(resultSet);
        },
        (txObj, error) => console.log(error)
        );
    })

}

const calculateMonthlyVolumn = (habit) => {
    const[state, dispatch] = useStore()
    db.transaction(tx => {
        tx.executeSql("SELECT SUM(progress) \
        FROM Memo\
        WHERE habitName = ? AND strftime('%m',date) = strftime('%m','now')", 
        [habit.name],
        (txObj, resultSet) => {
            console.log("Calculated Monthly Volumn");
            console.log(resultSet);
            if(state.MonthlyVolumn != resultSet.rows[0]['COUNT(*)']){
                dispatch(setMonthlyVolumn(resultSet.rows[0]['COUNT(*)']))
            }
        },
        (txObj, error) => console.log(error)
        );
    })
}

const calculateTotalVolumn  = (habit) => {
    const[state, dispatch] = useStore()
    db.transaction(tx => {
        tx.executeSql('SELECT SUM(progress) \
        FROM Memo\
        WHERE habitName = ?', 
        [habit.name],
        (txObj, resultSet) => {
            console.log("Calculated Total Volumn");
            console.log(resultSet);
            if(state.TotalVolumn != resultSet.rows[0]['COUNT(*)']){
                dispatch(setTotalVolumn(resultSet.rows[0]['COUNT(*)']))
            }
        },
        (txObj, error) => console.log(error)
        );
    })  
}

const calculateDayDoneInMonth = (habit) => {
    const[state, dispatch] = useStore()
    db.transaction(function(tx) {
            tx.executeSql("SELECT COUNT(*) \
                FROM Memo\
                WHERE habitName = ? AND progress != 0 AND strftime('%m',date) = strftime('%m','now')", 
                [habit.name],
                (txObj, resultSet) => {
                    console.log("Calculated Day Done in month");
                    console.log(resultSet);
                    if(state.DayDoneInMonth != resultSet.rows[0]['COUNT(*)']){
                        dispatch(setDayDoneInMonth(resultSet.rows[0]['COUNT(*)']))
                    }
                },
                (txObj, error) => console.log(error)
                );
            
        })
}


const calculateDayTotalDone  = (habit) => {
    const[state, dispatch] = useStore()
    db.transaction(tx => {
        tx.executeSql("SELECT COUNT(*)\
        FROM Memo\
        WHERE habitName = ? AND progress != 0", 
        [habit.name],
        (txObj, resultSet) => {
            console.log("Calculate Day Total Done");
            console.log(resultSet);
            if(state.DayTotalDone != resultSet.rows[0]['COUNT(*)']){
                dispatch(setDayTotalDone(resultSet.rows[0]['COUNT(*)']))
            }
        },
        (txObj, error) => console.log(error)
        );
    })
}
/* const calculateDailyAverage = () => {
    db.transaction(tx => {
        tx.executeSql('SELECT SUM(progress) \
        FROM Memo\
        WHERE habitName = ?', 
        [habit.name],
        (txObj, resultSet) => {
            console.log("Calculated Total Volumn");
            console.log(resultSet);
        },
        (txObj, error) => console.log(error)
        );
    })
} */

const calculateOverallRate = () => {

}

export {db, loadHabit, addHabit, refreshDatabase, initDatabase, loadUnit, deleteHabit, 
    updateHabit, loadSetting, calculateDayDoneInMonth, calculateMonthlyVolumn, 
    calculateTotalVolumn, calculateDayTotalDone}
