import React from "react";
import { View, Button, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView,Image } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationContainer } from "@react-navigation/native";
import { MainStackNavigator } from "../navigation/navigationstack";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Fontisto from '@expo/vector-icons/Fontisto';
//import { createDrawerNavigator } from "@react-navigation/drawer";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const Habit = ({navigation}) => {
return (
    <View style={styles.container}>

        <View style = {styles.addHabit}>
            <TouchableOpacity  onPress ={() => navigation.navigate("CustomHabit")} style ={styles.customHabit}> 
                <Ionicons name='add-circle'  size ={30} color = 'green' />
                <Text> Create Your Custom Habit </Text>
            </TouchableOpacity>
        </View>

        <View style ={styles.Habit}>
            <ScrollView >

                <Text style = {{ fontSize: 20, padding: 10,}}>Sports</Text>
                <View style = { styles.habitZone} >

                <View style = {styles.zone}> 
                <TouchableOpacity onPress ={() => navigation.navigate('AddHabit', { name: 'Walk'})} style = {styles.btnHabit}>
                    <FontAwesome5 name='walking' size={40} color='crimson' />
                    <Text>Walk</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress ={() => navigation.navigate('AddHabit', { name: 'Run'})} style = {styles.btnHabit}>
                    <FontAwesome5 name='running' size={40} color='darkgoldenrod' />
                    <Text>Run</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress ={() => navigation.navigate('AddHabit', { name: 'Chess'})} style = {styles.btnHabit}>
                    <FontAwesome5 name ='chess' size={40} color='black' />
                    <Text>Chess</Text>
                </TouchableOpacity>
                </View>

                <View style = {styles.zone}>
                <TouchableOpacity onPress ={() => navigation.navigate('AddHabit', { name: 'Stretch'})} style = {styles.btnHabit}>
                    <Image
                        source={require('./Icon/stretch.png')}
                        style={{ width: 48, height: 48,}}
                    />
                    <Text>Stretch</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress ={() => navigation.navigate('AddHabit', { name: 'Yoga'})} style = {styles.btnHabit}>
                    <MaterialCommunityIcons name='yoga' size={40} color='darkred' />
                    <Text>Yoga</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress ={() => navigation.navigate('AddHabit', { name: 'Cycling'})} style = {styles.btnHabit}>
                    <Ionicons name='bicycle' size={40} color='dodgerblue' />
                    <Text>Cycling</Text>
                </TouchableOpacity>
                </View>
                <View style = { styles.zone}>
                <TouchableOpacity onPress ={() => navigation.navigate('AddHabit', { name: 'Swim'})} style = {styles.btnHabit}>
                    <FontAwesome5 name='swimmer' size={40} color='deepskyblue' />
                    <Text>Swim</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress ={() => navigation.navigate('AddHabit', { name: 'Burn Calorie'})} style = {styles.btnHabit}>
                    <Image
                        source={require('./Icon/burn.png')}
                        style={{ width: 45, height: 45,}}
                    />
                    <Text>Burn Calorie</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress ={() => navigation.navigate('AddHabit', { name: 'Exercise'})} style = {styles.btnHabit}>
                    <Image
                        source={require('./Icon/exercise.png')}
                        style={{ width: 48, height: 48,}}
                    />
                    <Text>Exercise</Text>
                </TouchableOpacity>
                </View>
                </View>
                 <Text style = {{ fontSize: 20, padding: 10,}}>Thought</Text>
                <View style = { styles.habitZone} >
                <View style = {styles.zone}> 
                <TouchableOpacity onPress ={() => navigation.navigate('AddHabit', { name: 'Breathe'})} style = {styles.btnHabit}>
                    <Image
                        source={require('./Icon/breathe.png')}
                        style={{ width: 40, height: 40,}}
                    />
                    <Text>Breathe</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress ={() => navigation.navigate('AddHabit', { name: 'Meditation'})} style = {styles.btnHabit}>
                    <MaterialCommunityIcons name='meditation' size={40} color='red' />
                    <Text>Meditation</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress ={() => navigation.navigate('AddHabit', { name: 'Read Book'})} style = {styles.btnHabit}>
                    <Image
                        source={require('./Icon/read.png')}
                        style={{ width: 40, height: 40,}}
                    />
                    <Text>Read book</Text>
                </TouchableOpacity>
                </View>

                <View style = {styles.zone}>
                <TouchableOpacity onPress ={() => navigation.navigate('AddHabit', { name: 'Learning'})} style = {styles.btnHabit}>
                    <Image
                        source={require('./Icon/study.png')}
                        style={{ width: 48, height: 48,}}
                    />
                    <Text>Learning</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress ={() => navigation.navigate('AddHabit', { name: 'Review Today'})} style = {styles.btnHabit}>
                    <Image
                        source={require('./Icon/review.png')}
                        style={{ width: 40, height: 40,}}
                    />
                    <Text>Review Today</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress ={() => navigation.navigate('AddHabit', { name: 'Mind Clearing'})} style = {styles.btnHabit}>
                    <Image
                        source={require('./Icon/thinking.png')}
                        style={{ width: 40, height: 40,}}
                    />
                    <Text>Mind Clearning</Text>
                </TouchableOpacity>
                </View>
                {/* <View style = { styles.zone}>
                <TouchableOpacity style = {styles.btnHabit}>
                    <Ionicons name='add-circle-outline' size={40} color='red' />
                    <Text>Sleep</Text>
                </TouchableOpacity>
                </View> */}
                </View>
                 <Text style = {{ fontSize: 20, padding: 10,}}>Health</Text>
                <View style = { styles.habitZone} >
                <View style = {styles.zone}> 
                <TouchableOpacity onPress ={() => navigation.navigate('AddHabit', { name: 'Workout'})} style = {styles.btnHabit}>
                    <Image
                        source={require('./Icon/workout.png')}
                        style={{ width: 40, height: 40,}}
                    />
                    <Text>Workout</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress ={() => navigation.navigate('AddHabit', { name: 'Eat Fruits'})} style = {styles.btnHabit}>
                    <Image
                        source={require('./Icon/fruit.png')}
                        style={{ width: 40, height: 40,}}
                    />
                    <Text>Eat Fruits</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress ={() => navigation.navigate('AddHabit', { name: 'Eat Vegetable'})} style = {styles.btnHabit}>
                    <Image
                        source={require('./Icon/vege.png')}
                        style={{ width: 40, height: 40,}}
                    />
                    <Text>Eat Vege</Text>
                </TouchableOpacity>
                </View>

                <View style = {styles.zone}>
                <TouchableOpacity onPress ={() => navigation.navigate('AddHabit', { name: 'No Sugar'})} style = {styles.btnHabit}>
                    <Image
                        source={require('./Icon/nosugar.png')}
                        style={{ width: 40, height: 40,}}
                    />
                    <Text>No Sugar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress ={() => navigation.navigate('AddHabit', { name: 'Sleep Early'})} style = {styles.btnHabit}>
                    <Image
                        source={require('./Icon/sleep.png')}
                        style={{ width: 40, height: 40,}}
                    />
                    <Text>Sleep Early</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress ={() => navigation.navigate('AddHabit', { name: 'Eat Low-Fat'})} style = {styles.btnHabit}>
                    <Image
                        source={require('./Icon/eat.png')}
                        style={{ width: 40, height: 40,}}
                    />
                    <Text>Eat Low-Fat</Text>
                </TouchableOpacity>
                </View>
                <View style = { styles.zone}>
                <TouchableOpacity onPress ={() => navigation.navigate('AddHabit', { name: 'Eat Breakfast'})} style = {styles.btnHabit}>
                    <Image
                        source={require('./Icon/breakfast.png')}
                        style={{ width: 40, height: 40,}}
                    />
                    <Text>Eat Breakfast</Text>
                </TouchableOpacity>
                </View>
                </View>
            </ScrollView>

        </View>

      {/* <SafeAreaView style = {styles.homeZone}> 

        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Ionicons name='home' size={35} color='red' />
            <Text>Home</Text>
        </TouchableOpacity>

         <TouchableOpacity>
            <Ionicons name='add-circle-outline' size={40} color='red' />
            <Text>Add</Text>
        </TouchableOpacity> 

        <TouchableOpacity>
            <Ionicons name='md-stats-chart-outline' size={35} color='black' />
            <Text>Statistic</Text>
        </TouchableOpacity>

        <TouchableOpacity>
            <Ionicons name='settings-outline' size={35} color='black' />
            <Text>Setting</Text>
        </TouchableOpacity>

      </SafeAreaView> */}

    </View>
    );
};

const styles = StyleSheet.create({
    container:{
      flex: 1, 
      backgroundColor: 'white',
      flexDirection: 'column',
      //position: 'fixed',
      //overflow: 'none',
    },
    addHabit: { 
        //flex: 0.5,
      //flexDirection : 'column',
        alignItems: 'stretch',
      //alignSelf: 'center',
        //backgroundColor: "#fffaf0",
      //justifyContent: "center",
      //TextSize: 50,
        //padding: 0,
        //height: '88%',
        //borderWidth: 5,
        //position: 'absolute',
        //top: '10%',
        height: '15%',
        width: '100%',

    },
    Habit: {
        flex: 0.9,
      //flexDirection : 'column',
        alignItems: 'stretch',
      //alignSelf: 'center',
        //backgroundColor: "#f0ffff",
      //justifyContent: "center",
      //TextSize: 50,
        //padding: 0,
        height: '88%',
        //borderWidth: 5,
        //position: 'fixed',
        //top: '5%',
        //height: '68%',
        width: '100%',
        left: '0%',
    },
    homeZone: {
      //flex: 0.15,
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
        fontSize: 20,
        alignSelf: 'flex-start',
        color: 'red',
    },
    customHabit: {
        flex: 0.4,
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 10,
        alignItems: 'center',
        //justifyContent: 'center',
        alignSelf: 'flex-start',
        padding: 2,
        backgroundColor: '#D9D9D9',
        left: '20%',
        right: '20%',
        width: '60%',
        top: '5%',
    },
    btnHabit : {
        borderRadius: 10,
        //borderWidth: 2,
        width : 90,
        height: 90,
        alignItems: 'center',
        padding: 10,
        fontSize: 20,
        backgroundColor: '#c0c0c0',
    },
    habitZone: {
        flexDirection: 'column',
        //backgroundColor: '#fffaf0',
        //borderWidth: 1,
        //alignSelf: 'stretch'
        //alignItems: 'center',

    },
    zone: {
        flexDirection :'row',
        //justifyContent : 'flex-start',
        //backgroundColor: 'red',
        //alignContent: 'center',
        //backgroundColor: 'white',
        justifyContent : 'space-evenly',
        //borderWidth: 1,
        padding: 10,
        //borderWidth: 2,
    }
});

export default Habit;