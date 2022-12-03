import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
    {
        name: 'Habit tracker',
        createFromLocation: 1,
    },
    () => { },
    error => { console.log(error) }
);

const createTable = () => {
    db.transaction((tx) => {
        tx.executeSql(
            "CREATE TABLE IF NOT EXISTS "
            + "Users "
            + "(ID INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, Age INTEGER);"
        )
    })
}

const getData = () => {
    try {
        // AsyncStorage.getItem('UserData')
        //     .then(value => {
        //         if (value != null) {
        //             navigation.navigate('Home');
        //         }
        //     })
        db.transaction((tx) => {
            tx.executeSql(
                "SELECT Name, Age FROM Users",
                [],
                (tx, results) => {
                    var len = results.rows.length;
                    if (len > 0) {
                        navigation.navigate('Home');
                    }
                }
            )
        })
    } catch (error) {
        console.log(error);
    }
}

const setData = async () => {
    if (name.length == 0 || age.length == 0) {
        Alert.alert('Warning!', 'Please write your data.')
    } else {
        try {
            // var user = {
            //     Name: name,
            //     Age: age
            // }
            // await AsyncStorage.setItem('UserData', JSON.stringify(user));
            await db.transaction(async (tx) => {
                // await tx.executeSql(
                //     "INSERT INTO Users (Name, Age) VALUES ('" + name + "'," + age + ")"
                // );
                await tx.executeSql(
                    "INSERT INTO Users (Name, Age) VALUES (?,?)",
                    [name, age]
                );
            })
            navigation.navigate('Home');
        } catch (error) {
            console.log(error);
        }
    }
}