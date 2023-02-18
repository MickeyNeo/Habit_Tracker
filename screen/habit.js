import React , { useState} from "react";
import { View, Button, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView,Image } from "react-native";
// import hinh 
import eat from './Icon/eat.png';
import breakfast from './Icon/breakfast.png';
import breathe from './Icon/breathe.png';
import burn from './Icon/burn.png';
import exercise from './Icon/exercise.png';
import fruit from './Icon/fruit.png';
import nosugar from './Icon/nosugar.png';
import read from './Icon/read.png';
import stretch from './Icon/stretch.png';
import review from './Icon/review.png';
import study from './Icon/study.png';
import thinking from './Icon/thinking.png';
import vege from './Icon/vege.png';
import workout from './Icon/workout.png';
import swim from './Icon/swim.png';
import walking from './Icon/walking.png';
import running from './Icon/running.png';
import chess from './Icon/chess.png';
import yoga from './Icon/yoga.png';
import cycling from './Icon/cycling.png';
import meditation from './Icon/meditation.png';
import learning from './Icon/learning.png';
import clear from './Icon/clear.png';
import lowfat from './Icon/lowfat.png';
import sleep from './Icon/sleep.png';
import add from './Icon/add.png';
import { useStore } from '../Store'
import tick from './Icon/tick.png'


const Habit = ({navigation}) => {
    const [state, dispatch] = useStore();
    const {currentTheme} =state
    const habit = [ 
        {
            id: 'wa',
            name: 'Walking',
            image: walking,
            color: '#FFAEAE',
            iconInfor: ['walking', 'FontAwesome5'],
            unit: [{ id: 8, title: 'steps'}],
            tag: 'Sport',
            flag: 0,
            number: 0,
        },
        {
            id: 'ru',
            name: 'Running',
            image: running,
            color: 'green',
            iconInfor: ['running','FontAwesome5'],
            unit: [{ id: 10, title: 'km'}],
            tag: 'Sport',
            flag: 0,
            number: 1,
        },
        {
            id: 'ch',
            name: 'Chess',
            image: chess,
            color: 'grey',
            iconInfor: ['chess-king','MaterialCommunityIcons'],
            unit: [{ id: 3, title: 'hr'}],
            tag: 'Sport',
            flag: 0,
            number: 2,
        },
        {
            id: 'st',
            name: 'Stretch',
            image: stretch,
            color: '#dc143c',
            iconInfor: ['running','FontAwesome5'],
            unit: [{ id: 10, title: 'km'}],
            tag: 'Sport',
            flag: 0,
            number: 3,
        },
        {
            id: 'yo',
            name: 'Yoga',
            image: yoga,
            color: '#ffb6c1',
            iconInfor: ['yoga','MaterialCommunityIcons'],
            unit: [{ id: 3, title: 'hr'}],
            tag: 'Sport',
            flag: 0,
            number: 4,
        },
        {
            id: 'cy',
            name: 'Cycling',
            image: cycling,
            color: '#a0522d',
            iconInfor: ['md-bicycle-sharp','Ionicons'],
            unit: [{ id: 10, title: 'km'}],
            tag: 'Sport',
            flag: 0,
            number: 5,
        },
        {
            id: 'sw',
            name: 'Swimming',
            image: swim,
            color:  '#00ffff', 
            iconInfor: ['swimmer','FontAwesome5'],
            unit: [{ id: 4, title: 'ml'}],
            tag: 'Sport',
            flag: 0,
            number: 6,
        },
        {
            id: 'bu',
            name: 'Burn Calo',
            image: burn,
            color:  '#00ffff', 
            iconInfor: ['burn','FontAwesome5'],
            unit: [{ id: 6, title: 'Cal'}],
            tag: 'Sport',
            flag: 0,
            number: 7,
        },
        {
            id: 'ex',
            name: 'Excercise',
            image: exercise,
            color:  '#00ffff', 
            iconInfor: ['fitness-center','MaterialIcons'],
            unit: [{ id: 3, title: 'hr'}],
            tag: 'Sport',
            flag: 0,
            number: 8,
        },
        {
            id: 'br',
            name: "Breathe",
            image: breathe,
            color:  '#00ffff', 
            iconInfor: ['running','FontAwesome5'],
            unit: [{ id: 2, title: 'min'}],
            tag: 'Health',
            flag: 0,
            number: 9,
        },
        {
            id: 'me',
            name: 'Meditation',
            image: meditation,
            color:  '#00ffff', 
            iconInfor: ['meditation','MaterialCommunityIcons'],
            unit: [{ id: 2, title: 'min'}],
            tag: 'Health',
            flag: 0,
            number: 10,
        },
        {
            id: 're',
            name: 'Read book',
            image: read,
            color:  '#00ffff', 
            iconInfor: ['book-reader','FontAwesome5'],
            unit: [{id: 7, title: 'count'}],
            tag: 'Mind',
            flag: 0,
            number: 11,
        },
        {
            id: 'le',
            name: 'Learning',
            image: learning,
            color:  '#00ffff', 
            iconInfor: ['brain','MaterialCommunityIcons'],
            unit: [{ id: 2, title: 'min'}],
            tag: 'Mind',
            flag: 0,
            number: 12,
        },
        {
            id: 'rv',
            name: 'Review',
            image: review,
            color:  '#00ffff', 
            iconInfor: ['preview','Fontisto'],
            unit: [{ id: 7, title: 'count'}],
            tag: 'Mind',
            flag: 0,
            number: 13,
        },
        {
            id: 'mi',
            name: 'Mind Clear',
            image: clear,
            color:  '#00ffff', 
            iconInfor: ['clear','MaterialIcons'],
            unit: [{ id: 2, title: 'min'}],
            tag: 'Mind',
            flag: 0,
            number: 14,
        },
        {
            id: 'wo',
            name: "Workout",
            image: workout,
            color:  '#00ffff', 
            iconInfor: ['fitness','Ionicons'],
            unit: [{ id: 6, title: 'Cal'}],
            tag: 'Health',
            flag: 0,
            number: 15,
        },
        {
            id: 'eaf',
            name: 'Eat Fruit',
            image: fruit,
            color:  '#00ffff', 
            iconInfor: ['fruit-grapes-outline','MaterialCommunityIcons'],
            unit: [{ id: 6, title: 'Cal'}],
            tag: 'Health',
            flag: 0,
            number: 16,
        },
        {
            id: 'eav',
            name: 'Eat Vegetable',
            image: vege,
            color:  '#00ffff', 
            iconInfor: ['running','FontAwesome5'],
            unit: [{ id: 6, title: 'Cal'}],
            tag: 'Health',
            flag: 0,
            number: 17,
        },
        {
            id: 'no',
            name: 'No Sugar',
            image: nosugar,
            color:  '#00ffff', 
            iconInfor: ['spoon-sugar','MaterialCommunityIcons'],
            unit: [{ id: 6, title: 'Cal'}],
            tag: 'Health',
            flag: 0,
            number: 18,
        },
        {
            id: 'sl',
            name: 'Sleep Early',
            image: sleep,
            color:  '#00ffff', 
            iconInfor: ['sleep','MaterialCommunityIcons'],
            unit: [{ id: 3, title: 'hr'}],
            tag: 'Health',
            flag: 0,
            number: 19,
        },
        {
            id: 'eal',
            name: 'Eat Low-Fat',
            image: lowfat,
            color:  '#00ffff', 
            iconInfor: ['running','FontAwesome5'],
            unit: [{ id: 6, title: 'Cal'}],
            tag: 'Health',
            flag: 0,
            number: 20,
        },
    ]
    const value = state.listHabit;
    const checkFlag = []
    {value.map((item) => checkFlag.push(item.id))}
    for (let i = 0; i < habit.length; i++) 
    {
        habit[i].flag = checkFlag.includes(habit[i].id) ? 1 : habit[i].flag;
    }
    // console.log(checkFlag)
    function generateRandomString(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            result += characters.charAt(randomIndex);
        }
        return result;
        }
    return (
    <View style={[styles.container,{backgroundColor: currentTheme.backgroundColor}]}>
        <View style = {styles.addHabit}>
            <TouchableOpacity  onPress= {() => {
            navigation.navigate('AddHabit', {
                id: generateRandomString(10),
                name: 'New Habit',
                image: add,
                colors: 'green',
                IconInfo: ['add','Ionicons'],
                unitHabit: [{ id: 7, title: 'count'}],
                tag: 'Sport',
                flag: 1,})
            }}  style ={[styles.customHabit,{backgroundColor: currentTheme.backgroundColor}]}> 
                <Image
                    source={require('./Icon/add.png')}
                    style={{ width: 40, height: 40,}}
                />
                <Text style={{color: currentTheme.color}}> Create Your Custom Habit </Text>
            </TouchableOpacity>
        </View>
        {/* Habit Zone */}
        <View style ={styles.Habit}>
            <ScrollView>
                <Text style = {{ fontSize: 20, padding: 10, fontWeight: 'bold', color: currentTheme.color}}>Sports</Text>
                <View style = { styles.habitZone}>
                    <TabButton navigation={navigation} habit={habit} flag = {0} />
                    <TabButton navigation={navigation} habit={habit} flag = {1} />
                    <TabButton navigation={navigation} habit={habit} flag = {2} />
                    </View>
                <Text style = {{ fontSize: 20, padding: 10, fontWeight: 'bold',color: currentTheme.color}}>Thought</Text>
                <View style = { styles.habitZone}>
                    <TabButton navigation={navigation} habit={habit} flag = {3} />
                    <TabButton navigation={navigation} habit={habit} flag = {4} />
                </View>
                <Text style = {{ fontSize: 20, padding: 10, fontWeight: 'bold',color: currentTheme.color}}>Health</Text>
                <View style = { styles.habitZone}>
                    <TabButton navigation={navigation} habit={habit} flag = {5} />
                    <TabButton navigation={navigation} habit={habit} flag = {6} />
                </View> 
            </ScrollView>
        </View>
    </View>
    );
};
const TabButton = ({navigation, habit, flag }) => 
    <View style = {styles.zone}>
    {habit.map((value, index) => { 
        //console.log(value.flag)
        if (value.number <= 2 && flag == 0 || value.number >= 3 && value.number < 6 && flag == 1
            || value.number >= 6 && value.number < 9 && flag == 2 || value.number >= 9 && value.number < 12 && flag == 3
            || value.number >= 12 && value.number < 15 && flag == 4 || value.number >= 15 && value.number < 18 && flag == 5 
            || value.number >= 18 && value.number < 21 && flag == 6) 
        return (
        <TouchableOpacity
            key = {index}
            onPress={() => {
                navigation.navigate('AddHabit', {
                    id: value.id,
                    name: value.name,
                    image: value.image,
                    colors: value.color,
                    IconInfo: value.iconInfor,
                    unitHabit: value.unit,
                    tag: value.tag,
                    flag: !value.flag
                })
            }}
            style={[styles.btnHabit, {backgroundColor: value.flag == 1 ? '#F8D1CC' : '#F3ACB4'}]}
            disabled = {value.flag == 1 ? true : false}
        >
            <Image source={ value.flag == 1 ? tick : value.image} style={{ width: 40, height: 40 }} />
            <Text style={{ fontSize: 10 }}>{value.name}</Text>
        </TouchableOpacity>
    )})}
    </View>
const styles = StyleSheet.create({
    container:{
      flex: 1, 
      flexDirection: 'column',
    },
    addHabit: { 
        height: '8%',
        width: '100%',
    },
    Habit: {
        flex: 1,
        alignItems: 'stretch',
        width: '100%',
        left: '0%',
    },
    homeZone: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent : 'space-evenly',
      backgroundColor: '#BEABAB',
      position: 'absolute',
      width: '100%',
      height: '10%',
      top: '90%',
      left: '0%',
      padding: 0,
    },
    textHabit: {
        fontSize: 12,
        alignSelf: 'flex-start',
        color: 'red',
    },
    customHabit: {
        flex: 0.4,
        flexDirection: 'row',
        borderRadius: 10,
        alignItems: 'center',
        alignSelf: 'flex-start',
        padding: 2,
        backgroundColor: '#f5f5f5',
        left: '20%',
        right: '20%',
        width: '60%',
        top: '5%',
    },
    btnHabit : {
        justifyContent: 'center',
        borderRadius: 100,
        width : 90,
        height: 90,
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#F3ACB4',
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

export default Habit;