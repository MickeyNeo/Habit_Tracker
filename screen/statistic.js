
import { StatusBar } from 'expo-status-bar';
import {React, useState } from 'react';
import { Dimensions, Animated, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Foundation,Octicons,Entypo } from '@expo/vector-icons'; 
import {useStore,initDayDoneInMonth,setDayDoneInMonth} from '../Store'
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";

export default function Statistic({navigation}){
    const[state, dispatch] =useStore()
    
    let list_of_habit = []
    for (let i = 0; i < state.listHabit.length; i++){
        list_of_habit.push(state.listHabit[i]['name'].toLowerCase())
    }
    // console.log('statistic',state.listHabit[0]['name'])
    console.log('statistic',list_of_habit)
    const dataPro = {
        labels: ['Monthly_rate'], // optional
        data: [0.8]
      };
    const chartConfig = {
        backgroundGradientFrom: "white",
        backgroundGradientFromOpacity: 1,
        backgroundGradientTo: "white",
        backgroundGradientToOpacity: 1,
        color: (opacity = 1) => `rgba(249, 187, 174, ${opacity})`,
        // strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
    };
    return(
        <View style={style.container}> 
            <View style={{flexDirection:'row',backgroundColor: 'white',}}>
                <Foundation
                    style={{margin:5,marginLeft:15}}  
                    name="graph-pie" size={27} color="pink" />
                
                <ScrollView style={style.scroll} horizontal={true}> 
                    {state.listHabit.map((habit,index) =>(
                        
                        <TouchableOpacity key={index}
                            onPress={() => {
                                dispatch(initDayDoneInMonth(0))
                                navigation.navigate('HabitOfADay', {
                                    habit: habit,
                                    
                                })
                            }}>
                            <FontAwesome5 style={style.iconTitle} name={habit.name.toLowerCase()} size={27} color='crimson' />
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
            <View style={{flex: 1,}}>
                <ScrollView>
                    <Calendar style={style.calendar} firstDay={1}/>
                    <View style={style.static}>
                        <View style = {{flexDirection: 'column',alignItems:'center'}}>
                            <ProgressChart
                                data={dataPro}
                                width={Dimensions.get('window').width-40}
                                height={220}
                                strokeWidth={30}
                                radius={90}
                                chartConfig={chartConfig}
                                hideLegend={true}
                            />
                            <Text>Monthly rate: {dataPro.data[0]*100}%</Text>
                        </View>
                        <View style={{marginTop: '10%'}}>
                            <View style={{flexDirection:'row',justifyContent:'center'}}>
                                <View style={style.colum}>
                                    <View style={style.iconRecord}>
                                        <FontAwesome5  name="medal" size={50} color="#fcac44" />
                                        <Text>0 Day</Text>
                                        <Text>Best Streaks</Text>
                                    </View>
                                    <View style={style.iconRecord}>
                                        <Octicons name="checklist" size={50} color="#3ee7a8" />
                                        <Text>0</Text>
                                        <Text>Habits Done</Text>
                                    </View>
                                    
                                </View>
                                <View style={style.colum}>
                                    <View style={style.iconRecord}>
                                        <FontAwesome5 name="calendar-check" size={50} color="#84b5f7" />
                                        <Text>0 Day</Text>
                                        <Text>Perfect Days</Text>
                                    </View>
                                    <View style={style.iconRecord}>
                                        <Entypo name="dots-three-vertical" size={50} color="#b697ff" />
                                        <Text>0</Text>
                                        <Text>Daily Average</Text> 
                                    </View>
                                </View>
                            </View>
                            
                        </View>
                    </View>
                </ScrollView>
            </View>
            


        </View>
    );
}

const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'space-between'
    },
    scroll:{
        margin:5
    },
    iconTitle:{
        marginLeft: 30,
    },
    calendar:{
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 4,
        margin: 10
    },
    static:{
        margin: 10,
        borderRadius: 10,
        backgroundColor: 'white',
    },
    iconRecord:{
        marginBottom:20,
    },
    colum:{
        marginHorizontal: '15%',
        alignItems: 'center',
        flexDirection:'column'
    },

})
