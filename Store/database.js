import * as SQLite from 'expo-sqlite';
import { useContext } from 'react';
import Context from './Context';
import reducer, { globalState } from './reducer';
import { addHabitList, emptyHabitList, setDayStarted, setOverallRate, setPerFectStreak, addProgressList} from './action';
import {useStore,setDayDoneInMonth,setDayTotalDone,setMonthlyVolumn,
    setTotalVolumn, setCurrentStreak, setBestStreak, setUnit,setUnitHOAD,
    setDataOfCurWeek, setMemmoCurDay, setListMemmo, setEveryHabitDone, setPerfectDayCount,
    setDailyAverage, setCheckHaveMemo} from '../Store'
import {React, useState } from 'react';
import { memoInit, habitInit, reminderInit, unitInit, tagInit, haveTagInit } from './init_data';
import moment from 'moment';
import { Platform } from 'react-native';


    
const streakRetain = (date, followingDate) => {
    let y, m, d, fy, fm, fd;
    let lastDayInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    [y, m, d] = [...date.split('-').map((x) => parseInt(x))];
    [fy, fm, fd] = [...followingDate.split('-').map((x) => parseInt(x))];
    
    if (y == fy) {
        if (m == fm) {
            if (fd - d == 1) {
                return true;
            }
        }
        else if (fm - m == 1) {
            if (fd == 1) {
                if (m == 2 && (d == 28 || d == 29)) {
                    return true;
                }
                else if (d == lastDayInMonth[m - 1]) {
                        return true;
                }
            }
        }
    }
    else if (fy - y == 1 && fm == 1 && fd == 1 && m == 12 && d == lastDayInMonth[m - 1]) {
        return true;
    }
    return false;
}

const CurrentStreak = (dates) => {
    let currentDate = new Date();

    // console.log(dates)

    if (Platform.OS === 'ios' || Platform.OS === 'android') {
        var [y, m, d] = [...dates._array[0].date.split('-').map((x) => parseInt(x))];
        // console.log('dates ',[y, m, d])
    } else {
        var [y, m, d] = [...dates[0].date.split('-').map((x) => parseInt(x))];
    }
    
    // console.log('------------------------------ ', dates)


    if (currentDate.getDate() != d || currentDate.getMonth() + 1 != m && currentDate.getFullYear() != y) {
        return 0;
    }

    let count = 1;


    if (Platform.OS === 'ios' || Platform.OS === 'android') {
        console.log(1)

        for (let i = 1; i < dates.length; i++) {
            let date = dates._array[i];
    
            let followingDate = dates._array[i - 1]
    
            // console.log('date ', dates)
            if (streakRetain(date.date, followingDate.date)) {
                count++;
            }
            else {
                break;
            }
        }
        // console.log('dates ',[y, m, d])
    } else {
        for (let i = 1; i < dates.length; i++) {
            let date = dates[i];
    
            let followingDate = dates[i - 1]
    
            // console.log('date ', dates)
            if (streakRetain(date.date, followingDate.date)) {
                count++;
            }
            else {
                break;
            }
        }
    }
    
    return count;
}

const BestStreak = (dates) => {
    let count = 1;
    let bestStreak = 1;
    // console.log(dates)
    if (Platform.OS === 'ios' || Platform.OS === 'android') {
        for (let i = 1; i < dates._array.length; i++) {
        
            let date = dates._array[i];
            let followingDate = dates._array[i - 1]
            if (streakRetain(date.date, followingDate.date)) {
                count++;
                if (count > bestStreak) {
                    bestStreak = count;
                }
            }
            else {
                count = 1;
            }
        }
    } else {
        for (let i = 1; i < dates.length; i++) {
        
            let date = dates[i];
            let followingDate = dates[i - 1]
            if (streakRetain(date.date, followingDate.date)) {
                count++;
                if (count > bestStreak) {
                    bestStreak = count;
                }
            }
            else {
                count = 1;
            }
        }
    }

    
    
    return bestStreak;
}
  
const db = SQLite.openDatabase('Habit_tracker.db');

const refreshDatabase = () => {
// console.log("Refreshing habit table");
db.transaction(tx => {
    tx.executeSql("DROP TABLE Habit",
    [],
    (txObj, resultSet) => {
        // console.log("Dropped habit table")
        // console.log(resultSet);
    },
    (txObj, error) => console.log(error)
    );
})

db.transaction(tx => {
    tx.executeSql("DROP TABLE Memo",
    [],
    (txObj, resultSet) => {
        // console.log("Dropped Memo table")
        // console.log(resultSet);
    },
    (txObj, error) => console.log(error)
    );
})
4
db.transaction(tx => {
    tx.executeSql("DROP TABLE Reminder",
    [],
    (txObj, resultSet) => {
        // console.log("Dropped reminder table")
        // console.log(resultSet);
    },
    (txObj, error) => console.log(error)
    );
})

db.transaction(tx => {
    tx.executeSql("DROP TABLE Unit",
    [],
    (txObj, resultSet) => {
        // console.log("Dropped Unite table")
        // console.log(resultSet);
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
            frequencyType	TEXT NOT NULL CHECK(frequencyType IN (\'Daily\', \'Weekly\', \'Monthly\')),\
            timeRange	TEXT NOT NULL CHECK(timeRange IN (\'Anytime\', \'Morning\', \'Afternoon\', \'Evening\')),\
            reminderMessage	TEXT,\
            showMemo	INTEGER NOT NULL CHECK(showMemo IN (0, 1)),\
            chartType	INTEGER NOT NULL CHECK(chartType IN (0, 1)),\
            habitStartDate	TEXT NOT NULL,\
            habitEndDate	TEXT,\
            goalNo	TEXT NOT NULL DEFAULT \'1\',\
            goalPeriod	TEXT NOT NULL CHECK(goalPeriod IN (\'Day\', \'Week\', \'Month\')),\
            unitID	INTEGER,\
            icon TEXT,\
            iconFamily TEXT,\
            id TEXT NOT NULL,\
            flag INTEGER DEFAULT \'1\',\
            tag TEXT,\
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
            //  console.log("Initialize habit data")
            //  console.log(resultSet);
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
                // console.log("Initialize Memo data")
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
        tx.executeSql(haveTagInit,
        [], 
        (txObj, resultSet) => {
            // console.log("Initialize haveTag data")
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
        tx.executeSql('INSERT INTO Habit (name, note, frequency, color, frequencyType, timeRange, reminderMessage, showMemo, chartType, habitStartDate, habitEndDate, goalNo, goalPeriod, unitID, icon, iconFamily, id,tag,flag) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?,?)', 
        [habit.name, habit.note, habit.frequency, habit.color, habit.frequencyType, habit.timeRange, habit.reminderMessage, habit.showMemo, habit.chartType, habit.habitStartDay, habit.habitEndDay, habit.goalNo, habit.goalPeriod, habit.unitID, habit.icon, habit.iconFamily, habit.id, habit.tag,habit.flag],
        (txObj, resultSet) => {
            // console.log(resultSet);
        },
        (txObj, error) => console.log(error)
        );
    })

}

const addMemo = (habitName,today, content, progress) => {    
    console.log("Adding Memo to db", habitName,today, content, progress);

    db.transaction(tx => {
        tx.executeSql('INSERT INTO Memo (habitName, date, content, progress) values (?, ?, ?, ?)', 
        [habitName,today, content, progress],
        (txObj, resultSet) => {
            console.log("add memo here",resultSet.rows._array);
        },
        (txObj, error) => console.log(error)
        );
    })

}
const updateProgressMemo = (habitName,today, content, progress) => {    
    // console.log("update Memo to db", habitName,today, content, progress);
    // console.log("day need", today.slice(8,10));

    db.transaction(tx => {
        tx.executeSql("UPDATE Memo \
        SET progress = ?, content = ?\
        WHERE habitName = ? \
        AND strftime('%d',date) = ?\
        AND strftime('%m',date) = ?\
        AND strftime('%Y',date) = ?", 
        [progress,content, habitName,today.slice(8,10),today.slice(5,7),today.slice(0,4)],
        (txObj, resultSet) => {
            // console.log("Update habit name ", habitName, " from table Memo to ", newHabit.name);
            // console.log('update Memo to db here',resultSet.rows._array);
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

const loadHabit_on_fone = (listHabit, dispatch) => {
    console.log("Loading habit from db");

    /* db.transaction(tx => {"DROP TABLE Habit"}); */

    db.transaction(tx => {
        tx.executeSql('SELECT * FROM Habit', 
        [], 
        (txObj, resultSet) => {
            /* console.log("Loading data into habit list");
            console.log("List habit state");
            console.log(listHabit);
            console.log("Database resultset");*/
            console.log(resultSet.rows); 
            if (listHabit.length < resultSet.rows.length) {
                for (let i = 0; i < resultSet.rows.length; i++) {
                    //console.log("Database resultset", resultSet.rows)
                    dispatch(addHabitList(resultSet.rows._array[i]));
                } 
            }
        },
        (txObj, error) => console.log(error)
        );
    })

}


//Trên web
const loadHabit_on_web = (listHabit, dispatch) => {

    // console.log("Loading habit from db");

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
                    // console.log("Database resultset", resultSet.rows)
                    dispatch(addHabitList(resultSet.rows[i]));
                } 
            }
        },
        (txObj, error) => console.log(error)
        );
    })

}

const loadMemo = (listProgressDay, dispatch) => {
    console.log("Loading memo from db");

    /* db.transaction(tx => {"DROP TABLE Habit"}); */

    db.transaction(tx => {
        tx.executeSql('SELECT * FROM Memo', 
        [],
        (txObj, resultSet) => {

            if (listProgressDay.length < resultSet.rows.length) {
                for (let i = 0; i < resultSet.rows.length; i++) {
                    // console.log("Database resultset", resultSet.rows)
                    dispatch(addProgressList(resultSet.rows._array[i]));
                } 
            }
            // console.log("Loading memo to state");
            // console.log(resultSet.rows);
        },
        (txObj, error) => console.log(error)
        );
    })
}

// //Trên web
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
//                     dispatch(addHabitList(resultSet.rows[i]));
//                 } 
//             }
//         },
//         (txObj, error) => console.log(error)
//         );
//     })

// }

const loadSetting = (state, dispatch) => {

    console.log("Loading setting from db");

    /* db.transaction(tx => {"DROP TABLE Habit"}); */

    db.transaction(tx => {
        tx.executeSql('SELECT * FROM setting', 
        [],
        (txObj, resultSet) => {
            // console.log("Loading setting into global state");
            // console.log("resultSet.rows");
            dispatch(addStateSetting(resultSet.rows));
        },
        (txObj, error) => console.log(error)
        );
    })
}

const loadUnit = () => {
    // console.log("Loading unit from db");

    /* db.transaction(tx => {"DROP TABLE Habit"}); */

    db.transaction(tx => {
        tx.executeSql('SELECT * FROM Unit', 
        [],
        (txObj, resultSet) => {
            // console.log("Loading init unit");
            /*console.log("List habit state");
            console.log(listHabit);
            console.log("Database resultset");
            console.log(resultSet.rows);
            if (listHabit.length < resultSet.rows.length) {
                for (let i = 0; i < resultSet.rows.length; i++) {
                dispatch(addHabitList(resultSet.rows[i]));
                }
            } */
            // console.log(resultSet);
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
            // console.log("Deleted habit ", habitName, " from table HaveTag");
            // console.log(resultSet);
        },
        (txObj, error) => console.log(error)
        );
    })

    db.transaction(tx => {
        tx.executeSql('DELETE FROM Memo \
        WHERE habitName = ?', 
        [habitName],
        (txObj, resultSet) => {
            // console.log("Deleted habit ", habitName, " from table Memo");
            // console.log(resultSet);
        },
        (txObj, error) => console.log(error)
        );
    })

    db.transaction(tx => {
        tx.executeSql('DELETE FROM Reminder \
        WHERE habitName = ?', 
        [habitName],
        (txObj, resultSet) => {
            // console.log("Deleted habit ", habitName, " from table Reminder");
            // console.log(resultSet);
        },
        (txObj, error) => console.log(error)
        );
    })

    db.transaction(tx => {
        tx.executeSql('DELETE FROM Habit \
        WHERE name = ?', 
        [habitName],
        (txObj, resultSet) => {
            // console.log("Deleted habit ", habitName, " from table Habit");
            // console.log(resultSet);
        },
        (txObj, error) => console.log(error)
        );
    })

}

const updateHabit = (habit, newHabit) => {
    // console.log("Updating habit ", habit.name);

    if (habit.name != newHabit.name) {

        // console.log("Updating habit name");
        db.transaction(tx => {
            tx.executeSql('UPDATE HaveTag \
            SET name = ?\
            WHERE name = ?', 
            [newHabit.name, habit.name],
            (txObj, resultSet) => {
                // console.log("Update habit name ", habit.name, " from table HaveTag to ", newHabit.name);
                // console.log(resultSet);
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
                // console.log("Update habit name ", habitName, " from table Reminder to ", newHabit.name);
                // console.log(resultSet);
            },
            (txObj, error) => console.log(error)
            );
        })

        db.transaction(tx => {
            tx.executeSql('UPDATE Memo \
            SET habitName = ?\
            WHERE habitName = ?', 
            [newHabit.name, habit.name],
            (txObj, resultSet) => {
                // console.log("Update habit name ", habitName, " from table Memo to ", newHabit.name);
                // console.log(resultSet);
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
            // console.log("Update habit ", habitName, " from table Habit");
            // console.log(resultSet);
        },
        (txObj, error) => console.log(error)
        );
    })

}

const calculateMonthlyVolumn = (habit, dispatch) => {
    console.log("Calculated Monthly Volumn");
    console.log(habit.name)
    db.transaction(tx => {
        tx.executeSql("SELECT SUM(progress) \
        FROM Memo\
        WHERE habitName = ? AND strftime('%m',date) = strftime('%m','now')\
        AND strftime('%Y',date) = strftime('%Y','now')", 
        [habit.name],
        (txObj, resultSet) => {

            if (Platform.OS === 'ios' || Platform.OS === 'android') {
                var sum = (resultSet.rows._array[0]['SUM(progress)']) ? resultSet.rows._array[0]['SUM(progress)'] : 0;
              } else {
                var sum = (resultSet.rows[0]['SUM(progress)']) ? resultSet.rows[0]['SUM(progress)'] : 0;
              }

              dispatch(setMonthlyVolumn(sum))
              
            
        },
        (txObj, error) => console.log(error)
        );
    })
}

const calculateTotalVolumn  = (habit, dispatch) => {
   console.log("Calculated Total Volumn");    
    console.log(habit.name)
    db.transaction(tx => {
        tx.executeSql('SELECT SUM(progress) \
        FROM Memo\
        WHERE habitName = ?', 
        [habit.name],
        (txObj, resultSet) => {
            // console.log("Calculated Total Volumn");
            // console.log(resultSet.rows[0]['SUM(progress)']);
            // console.log(resultSet);
            if (Platform.OS === 'ios' || Platform.OS === 'android') {
                // if(state.TotalVolumn != resultSet.rows._array[0]['SUM(progress)']){
                    dispatch(setTotalVolumn(resultSet.rows._array[0]['SUM(progress)']))
                // }
              } else {
                // if(state.TotalVolumn != resultSet.rows[0]['SUM(progress)']){
                    dispatch(setTotalVolumn(resultSet.rows[0]['SUM(progress)']))
                // }
              }
            
        },
        (txObj, error) => console.log(error)
        );
    })  
}

const calculateDayDoneInMonth = (habit, dispatch) => {
    console.log("Calculated Day Done in month");

    // console.log(habit.name);
    db.transaction(function(tx) {
            tx.executeSql("SELECT COUNT(*) \
                FROM Memo\
                WHERE habitName = ? AND progress != 0 AND strftime('%m', date) = strftime('%m','now')\
                AND strftime('%Y',date) = strftime('%Y','now')", 
                [habit.name],
                (txObj, resultSet) => {
                    // console.log("Calculated Day Done in month",resultSet.rows)
                    
                    if (Platform.OS === 'ios' || Platform.OS === 'android') {
                        // if(state.DayDoneInMonth != resultSet.rows._array[0]['COUNT(*)']){
                            dispatch(setDayDoneInMonth(resultSet.rows._array[0]['COUNT(*)']))
                        // }
                      } else {
                        // if(state.DayDoneInMonth != resultSet.rows[0]['COUNT(*)']){
                            dispatch(setDayDoneInMonth(resultSet.rows[0]['COUNT(*)']))
                        // }
                      }
                    
                },
                (txObj, error) => console.log(error)
                );
        })
}


/* const calculateDayTotalDone  = (habit) => {
    const[state, dispatch] = useStore()
    if (habit instanceof Array) {
        let count = 0;
        for (let i = 0; i < habit.length; i++) {
            db.transaction(tx => {
                tx.executeSql("SELECT COUNT(*)\
                FROM Memo\
                WHERE habitName = ? AND progress == ?", 
                [habit[i].name, habit[i].goalNo],
                (txObj, resultSet) => {
                    // console.log("Calculate Day Total Done");
                    // console.log(resultSet.rows[0]['COUNT(*)']);
                    // console.log(resultSet);

                    if(state.DayTotalDone != resultSet.rows[0]['COUNT(*)']){
                        count += resultSet.rows[0]['COUNT(*)'];
                        if (i == habit.length - 1) {
                            dispatch(setEveryHabitDone(count));
                        }
                    }
                },
                (txObj, error) => console.log(error)
                );
            })
        }
    }
    else {
        db.transaction(tx => {
            tx.executeSql("SELECT COUNT(*)\
            FROM Memo\
            WHERE habitName = ? AND progress == ?", 
            [habit.name, habit.goalNo],
            (txObj, resultSet) => {
                // console.log("Calculate Day Total Done");
                // console.log(resultSet.rows[0]['COUNT(*)']);
                // console.log(resultSet);

                if(state.DayTotalDone != resultSet.rows[0]['COUNT(*)']){
                    dispatch(setDayTotalDone(resultSet.rows[0]['COUNT(*)']))
                }
            },
            (txObj, error) => console.log(error)
            );
        })
    }
} */

const calculateDayStarted  = (habit, dispatch) => {
    console.log("Calculate Day Started ", habit.name);

    db.transaction(tx => {
        tx.executeSql("SELECT COUNT(*)\
        FROM Memo\
        WHERE habitName = ? AND progress != 0", 
        [habit.name],
        (txObj, resultSet) => {
            // console.log(resultSet.rows[0]['COUNT(*)']);

            
                if (Platform.OS === 'ios' || Platform.OS === 'android') {
                    // if(state.DayTotalDone != resultSet.rows._array[0]['COUNT(*)']){
                        // console.log(resultSet.rows._array);

                        dispatch(setDayStarted(resultSet.rows._array[0]['COUNT(*)']));
                    // }
                    } else {
                    // if(state.DayTotalDone != resultSet.rows[0]['COUNT(*)']){
                        dispatch(setDayStarted(resultSet.rows[0]['COUNT(*)']));
                    // }
                    }
        },
        (txObj, error) => console.log(error)
        );
    })
}

const calculateDayTotalDone  = (habit, dispatch) => {
    console.log("Calculate Day Total Done");
    if (habit instanceof Array) {
        db.transaction(tx => {
            tx.executeSql("SELECT COUNT(*)\
            FROM Memo AS M, Habit AS H\
            WHERE H.name == M.habitName\
            AND M.progress == H.goalNo", 
            [],
            (txObj, resultSet) => {
                

                if (Platform.OS === 'ios' || Platform.OS === 'android') {
                    dispatch(setEveryHabitDone(resultSet.rows._array[0]['COUNT(*)']));
                  } else {
                    dispatch(setEveryHabitDone(resultSet.rows[0]['COUNT(*)']));
                  }
            },
            (txObj, error) => console.log(error)
            );
        })
    }
    else {
        db.transaction(tx => {
            tx.executeSql("SELECT COUNT(*)\
            FROM Memo\
            WHERE habitName = ? AND progress == ?", 
            [habit.name, habit.goalNo],
            (txObj, resultSet) => {
                // console.log("Calculate Day Total Done 1 habit");
                // console.log(resultSet.rows[0]['COUNT(*)']);

                
                    if (Platform.OS === 'ios' || Platform.OS === 'android') {
                        // if(state.DayTotalDone != resultSet.rows._array[0]['COUNT(*)']){
                            // console.log(resultSet.rows._array);

                            dispatch(setDayTotalDone(resultSet.rows._array[0]['COUNT(*)']));
                        // }
                      } else {
                        // if(state.DayTotalDone != resultSet.rows[0]['COUNT(*)']){
                            dispatch(setDayTotalDone(resultSet.rows[0]['COUNT(*)']));
                        // }
                      }
            },
            (txObj, error) => console.log(error)
            );
        })
    }
}

const calculateCurrentStreak = (habit, dispatch) => {
    console.log("Calculated Current Streak, ", habit.name);

    db.transaction(tx => {
        tx.executeSql('SELECT date \
        FROM Memo\
        WHERE habitName = ? AND progress != 0\
        ORDER BY date DESC', 
        [habit.name],
        (txObj, resultSet) => {
            // console.log("Calculated Current Streak");
            // console.log(resultSet.rows);

            let streak = CurrentStreak(resultSet.rows);

            console.log('streak ', streak);

            // if(state.CurrentStreak != streak){
                dispatch(setCurrentStreak(streak))
            // }
        },
        (txObj, error) => console.log(error)
        );
    })  
}

const calculateBestStreak = (habit, dispatch) => {
    console.log("Calculated Best Streak ", habit.name);

    db.transaction(tx => {
        tx.executeSql('SELECT date \
        FROM Memo\
        WHERE habitName = ? AND progress != 0\
        ORDER BY date DESC', 
        [habit.name],
        (txObj, resultSet) => {
            // console.log("Calculated Best Streak");
            // console.log(resultSet.rows);

            let streak = BestStreak(resultSet.rows);
            // console.log(streak);

            // if(state.BestStreak != streak){
                dispatch(setBestStreak(streak))
            // }
        },
        (txObj, error) => console.log(error)
        );
    })  
}

const getUnitName = (habit, state, dispatch) => {
    // const[state, dispatch] = useStore()

    db.transaction(tx => {
        tx.executeSql('SELECT Unit.name \
        FROM Unit, Habit\
        WHERE  Habit.unitID = Unit.id AND Habit.name = ?', 
        [habit.name],
        (txObj, resultSet) => {
            // console.log("Unit Name");
            // console.log(resultSet);
            // console.log(resultSet.rows[0]['name']);ư
            if (Platform.OS === 'ios' || Platform.OS === 'android') {
                if(state.unit != resultSet.rows._array['name']){
                    dispatch(setUnit(resultSet.rows._array['name']))
                }
              } else {
                if(state.unit != resultSet.rows[0]['name']){
                    dispatch(setUnit(resultSet.rows[0]['name']))
                }
              }
            
        },
        (txObj, error) => console.log(error)
        );
    })  
}
const getUnitNameforHOAD = (habit, state, dispatch) => {
    // const[state, dispatch] = useStore()

    db.transaction(tx => {
        tx.executeSql('SELECT Unit.name \
        FROM Unit, Habit\
        WHERE  Habit.unitID = Unit.id AND Habit.name = ?', 
        [habit.name],
        (txObj, resultSet) => {
            // console.log("Unit Name",habit.name);
            // console.log(resultSet);
            console.log(resultSet.rows._array['name']);
            if (Platform.OS === 'ios' || Platform.OS === 'android') {
                if(state.unitHOAD != resultSet.rows._array['name']){
                    dispatch(setUnitHOAD(resultSet.rows._array['name']))
                }
              } else {
                if(state.unitHOAD != resultSet.rows[0]['name']){
                    dispatch(setUnitHOAD(resultSet.rows[0]['name']))
                }
              }
            
        },
        (txObj, error) => console.log(error)
        );
    })  
}

// const getDayName = (date) => {
//     db.transaction(tx => {
//         tx.executeSql('SELECT Unit.name \
//         FROM Unit, Habit\
//         WHERE  Habit.unitID = Unit.id AND Habit.name = ?', 
//         [date],
//         (txObj, resultSet) => {
//             console.log("Unit Name");
//             console.log(resultSet);
//             console.log(resultSet.rows[0]['name']);
//             if(state.unit != resultSet.rows[0]['name']){
//                 dispatch(setUnit(resultSet.rows[0]['name']))
//             }
//         },
//         (txObj, error) => console.log(error)
//         );
//     })
// }

const getDataOfCurWeek = (habit, state, dispatch) => {    
    db.transaction(tx => {
        tx.executeSql("SELECT progress, strftime('%w',date) \
        FROM Memo\
        WHERE habitName = ? AND\
        strftime('%W', date) = strftime('%W', 'now')\
        AND strftime('%Y',date) = strftime('%Y','now')", 
        [habit.name],
        (txObj, resultSet) => {
            console.log('length',resultSet.rows.length);
            console.log('res',resultSet);
            console.log('state.DataOfCurWeek',state.DataOfCurWeek);
            let temp = [0,0,0,0,0,0,0]
            if(state.DataOfCurWeek.length == 0){
                if(resultSet.rows.length != 0){
                    for(let i = 0; i< resultSet.rows.length; i++){
                        if(resultSet.rows._array[i]["strftime('%w',date)"] == 0){
                            temp[6] = resultSet.rows._array[i]['progress']
                        }
                        else{
                            temp[resultSet.rows._array[i]["strftime('%w',date)"]-1] = resultSet.rows._array[i]['progress']
                        }
                    }
                    console.log('Done: ', temp)
                    dispatch(setDataOfCurWeek(temp))
                    // console.log(1);
                }
                else{
                    dispatch(setDataOfCurWeek([0,0,0,0,0,0,0]))
                }
                
            }
            
        },
        (txObj, error) => console.log(error)
        );
    })  
}

const getMemmoCurDay = (habit, state, dispatch) => {
    // console.log("Memo current day");
    // console.log("Habit", habit)
    db.transaction(tx => {
        tx.executeSql("SELECT content,date \
        FROM Memo\
        WHERE habitName = ? \
        AND strftime('%d',date) = strftime('%d','now')\
        AND strftime('%m',date) = strftime('%m','now')\
        AND strftime('%Y',date) = strftime('%Y','now')", 
        [habit.name],
        (txObj, resultSet) => {
            // console.log("Memo current day");
            // console.log(resultSet);

            if (Platform.OS === 'ios' || Platform.OS === 'android') {
            if(resultSet.rows._array.length != 0){
                if(state.memoCurDay != resultSet.rows._array['content'] && 
                    state.memoCurDate != resultSet.rows._array['date']){
                    dispatch(setMemmoCurDay([resultSet.rows._array['content'], resultSet.rows._array['date']]))
                }
            }
            } else {
            if(resultSet.rows.length != 0){
                if(state.memoCurDay != resultSet.rows[0]['content'] && 
                    state.memoCurDate != resultSet.rows[0]['date']){
                    dispatch(setMemmoCurDay([resultSet.rows[0]['content'], resultSet.rows[0]['date']]))
                }
            }
            }
            
            
        },
        (txObj, error) => console.log(error)
        );
    })  
}

const getAllMemmo = (habit, state, dispatch) => {
    // const[state, dispatch] = useStore()

    db.transaction(tx => {
        tx.executeSql("SELECT content,date \
        FROM Memo\
        WHERE habitName = ?\
        ORDER BY date DESC", 
        [habit.name],
        (txObj, resultSet) => {
            // console.log("Memo current day", );
            // console.log(resultSet);
            let tempMem = []
            let tempMemDate = []
            if(resultSet.rows.length != 0){
                if(state.listMemo.length == 0 && state.listMemoDate.length == 0 ){
                    if(resultSet.rows.length != 0){
                        for(let i = 0; i< resultSet.rows.length; i++){
                            tempMem.push(resultSet.rows._array[i]['content'])
                            tempMemDate.push(resultSet.rows._array[i]['date'].replace(/-/g,'/'))
                        }
                        dispatch(setListMemmo([tempMem, tempMemDate]))
    
                    }
                }
            }
        },
        (txObj, error) => console.log(error)
        );
    })  
}

const numberHabitInDay = (listHabit, date) => {
    var count = 0;
    for (var habit of listHabit) {
        if (habit.frequencyType == 'Daily') {
            // console.log('Habit Day: ', date);
            count += 1;
        }
        else if (habit.frequencyType == 'Weekly') {
            let day = moment(date).format('ddd');
            // console.log('Habit Week: ', day.toUpperCase() , habit.frequency.split(','));
            if (habit.frequency.split(',').includes(day.toUpperCase())) {
                // console.log('Habit Week: ', day.toUpperCase() , habit.frequency.split());
                count += 1;
            }
        }
        else if (habit.frequencyType == 'Monthly') {
            // console.log('Habit Month: ', date.slice(8), habit.frequency.split());
            if (date.slice(8) in habit.frequency.split()) {
                count += 1;
            }
        }
    }

    return count;
}

const CountPerfectDay = (listHabit, dispatch) => {

    db.transaction(tx => {
        tx.executeSql("SELECT date, COUNT(*)\
        FROM Memo AS M\
        GROUP BY date\
        ORDER BY date\
        ", 
        [],
        (txObj, resultSet) => {
            // console.log("Calculate Day Total Done");
            // console.log(resultSet.rows._array);

            var count = 0;

            if (Platform.OS === 'ios' || Platform.OS === 'android') {
                for (var day of resultSet.rows._array){
                    if (day['COUNT(*)'] == numberHabitInDay(listHabit, day['date'])) {
                        count += 1;
                    }
                }
              } else {
                for (var day of resultSet.rows){
                    if (day['COUNT(*)'] == numberHabitInDay(listHabit, day['date'])) {
                        count += 1;
                    }
                }
              }
            

            /* console.log('Counting perfect days: ', count); */

            dispatch(setPerfectDayCount(count));

            /* if(state.DayTotalDone != resultSet.rows[0]['COUNT(*)']){
                count += resultSet.rows[0]['COUNT(*)'];
                if (i == habit.length - 1) {
                    dispatch(setEveryHabitDone(count));
                }
            } */
        },
        (txObj, error) => console.log(error)
        );
    })
}

const CountPerfectStreak = (listHabit, dispatch) => {

    db.transaction(tx => {
        tx.executeSql("SELECT date, COUNT(*)\
        FROM Memo AS M\
        GROUP BY date\
        ORDER BY date\
        ", 
        [],
        (txObj, resultSet) => {
            // console.log("Calculate Perfect Streak");
            // console.log(resultSet.rows._array)

            var bestStreak = 0;
            var count = 1;
            var date = null;
            var followingDate = null;

            if (Platform.OS === 'ios' || Platform.OS === 'android') {
                for (var day of resultSet.rows._array){
                    if (day['COUNT(*)'] == numberHabitInDay(listHabit, day['date'])) {
                        // console.log(1);
                        if (followingDate) {
                            if (date&&streakRetain(date, followingDate)) {
                                date = followingDate;
                                followingDate = day['date'];
                                count += 1;
                                if (bestStreak < count) {
                                    bestStreak = count;
                                }
                            }
                            else {
                                count = 1
                                date = followingDate;
                                followingDate = day['date'];
                            }
                        }
                        else {
                            followingDate = day['date'];
                        }
                    }
                }
              } else {
                for (var day of resultSet.rows){
                    if (day['COUNT(*)'] == numberHabitInDay(listHabit, day['date'])) {
                        // console.log(1);
                        if (followingDate) {
                            if (date&&streakRetain(date, followingDate)) {
                                date = followingDate;
                                followingDate = day['date'];
                                count += 1;
                                if (bestStreak < count) {
                                    bestStreak = count;
                                }
                            }
                            else {
                                count = 1
                                date = followingDate;
                                followingDate = day['date'];
                            }
                        }
                        else {
                            followingDate = day['date'];
                        }
                    }
                }
              }
            

            // console.log('Counting perfect days: ', bestStreak); 

            dispatch(setPerFectStreak(bestStreak));

        },
        (txObj, error) => console.log(error)
        );
    })
}

const CalculateOverallRate = (listHabit, dispatch) => {
    db.transaction(tx => {
        tx.executeSql("SELECT date, COUNT(*)\
        FROM Memo AS M\
        GROUP BY date\
        ORDER BY date\
        ", 
        [],
        (txObj, resultSet) => {
            // console.log("Calculate Day Total Done");
            // console.log(resultSet);

            var rates = [];

            if (Platform.OS === 'ios' || Platform.OS === 'android') {
                for (var day of resultSet.rows._array){
                    // console.log("CalculateOverallRate",day['COUNT(*)'], numberHabitInDay(listHabit, day['date']))
                    if(numberHabitInDay(listHabit, day['date']) == 0){
                        rates.push(1)
                    }else{
                        rates.push(day['COUNT(*)'] * 1.0 / numberHabitInDay(listHabit, day['date'])) 
                    }
                }
              } else {
                for (var day of resultSet.rows){
                    // console.log(day['COUNT(*)'], numberHabitInDay(listHabit, day['date']))
                    rates.push(day['COUNT(*)'] * 1.0 / numberHabitInDay(listHabit, day['date'])) 
                }
              }
            

            const average = array => array.reduce((a, b) => a + b) / array.length;
            console.log(rates)
            // console.log('Overall Rate: ', average(rates));
            dispatch(setOverallRate(Math.round(average(rates) * 100)/100));


            /* if(state.DayTotalDone != resultSet.rows[0]['COUNT(*)']){
                count += resultSet.rows[0]['COUNT(*)'];
                if (i == habit.length - 1) {
                }
            } */
        },
        (txObj, error) => console.log(error)
        );
    })
}


const CalculateDailyAverage = (dispatch) => {

    db.transaction(tx => {
        tx.executeSql("SELECT date, COUNT(*)\
        FROM Memo AS M\
        GROUP BY date\
        ORDER BY date\
        ", 
        [],
        (txObj, resultSet) => {
            // console.log("Calculate Daily Average");
            // console.log(resultSet);

            var counts = [];

            if (Platform.OS === 'ios' || Platform.OS === 'android') {
                for (var day of resultSet.rows._array){
                    // console.log(day['COUNT(*)'], numberHabitInDay(listHabit, day['date']))
                    counts.push(day['COUNT(*)']) 
                }
            } else {
            for (var day of resultSet.rows){
                // console.log(day['COUNT(*)'], numberHabitInDay(listHabit, day['date']))
                counts.push(day['COUNT(*)']) 
            }
            }
            

            const average = array => array.reduce((a, b) => a + b) / array.length;
            // console.log(rates)
            // console.log('Overall Rate: ', average(rates));
            dispatch(setDailyAverage(Math.round(average(counts))));


            /* if(state.DayTotalDone != resultSet.rows[0]['COUNT(*)']){
                count += resultSet.rows[0]['COUNT(*)'];
                if (i == habit.length - 1) {
                }
            } */
        },
        (txObj, error) => console.log(error)
        );
    })
}

const checkHaveMemoCurDay = (habit,date, dispatch) => {

    db.transaction(tx => {
        tx.executeSql('SELECT COUNT(*) \
        FROM Memo\
        WHERE habitName = ? AND date = ?', 
        [habit.name, date],
        (txObj, resultSet) => {
            
            console.log(resultSet.rows._array[0]["COUNT(*)"]);
            if (Platform.OS === 'ios' || Platform.OS === 'android') {
                if(resultSet.rows._array[0]["COUNT(*)"] == 0){
                    dispatch(setCheckHaveMemo(0))
                }
                else{
                    dispatch(setCheckHaveMemo(0))
                }
              } 
            
        },
        (txObj, error) => console.log(error)
        );
    })  
}


export {db,getAllMemmo,getMemmoCurDay,getUnitNameforHOAD, getDataOfCurWeek,getUnitName, loadHabit_on_fone,
    loadHabit_on_web , addHabit, refreshDatabase, initDatabase, loadUnit, deleteHabit, 
    updateHabit, loadSetting, calculateDayDoneInMonth, calculateMonthlyVolumn, 
    calculateTotalVolumn, calculateDayTotalDone, calculateCurrentStreak, calculateBestStreak, CountPerfectDay,
    CalculateOverallRate, CalculateDailyAverage, CountPerfectStreak, loadMemo, calculateDayStarted, checkHaveMemoCurDay, addMemo,updateProgressMemo}
