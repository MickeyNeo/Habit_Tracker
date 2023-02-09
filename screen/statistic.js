
import { StatusBar } from 'expo-status-bar';
import {React, useState } from 'react';
import { Dimensions, Animated, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Foundation,Octicons,Entypo } from '@expo/vector-icons'; 
import Icons from "./icon_color/Icon";
import {useStore,setUnit, initDayDoneInMonth,initDayTotalDone, initMonthlyVolumn,initTotalVolumn, initDataOfCurWeek} from '../Store'
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
import { calculateDayTotalDone, CalculateOverallRate, CountPerfectDay, CalculateDailyAverage } from '../Store/database';
import { useEffect } from 'react';

const Statistic = ({navigation}) => {
    const[state, dispatch] = useStore()
    
    
    
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

    /* useEffect(() => {
        calculateDayTotalDone(state.listHabit);
        CountPerfectDay(state.listHabit);
    }, []); // 👈️ empty dependencies array */
    CountPerfectStreak(state.listHabit);
    calculateDayTotalDone(state.listHabit);
    CountPerfectDay(state.listHabit);
    CalculateOverallRate(state.listHabit);
    CalculateDailyAverage();

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
                                dispatch(initDayTotalDone(0))
                                dispatch(initMonthlyVolumn(0))
                                dispatch(initTotalVolumn(0))
                                dispatch(initDataOfCurWeek([]))
                                

                                navigation.navigate('HabitOfADay', {
                                    habit: habit,
                                })
                            }}>
                            {/* <FontAwesome5 style={style.iconTitle} name={habit.name.toLowerCase()} size={27} color='crimson' /> */}
                            <Icons style={style.iconTitle} type={habit.iconFamily} name={habit.icon} size={27} color={habit.color} />
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
                            <Text>Monthly rate: {state.OverallRate*100}%</Text>
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
                                        <Text>{state.EveryHabitDone}</Text>
                                        <Text>Habits Done</Text>
                                    </View>
                                    
                                </View>
                                <View style={style.colum}>
                                    <View style={style.iconRecord}>
                                        <FontAwesome5 name="calendar-check" size={50} color="#84b5f7" />
                                        <Text>{state.PerfectDayCount} Day</Text>
                                        <Text>Perfect Days</Text>
                                    </View>
                                    <View style={style.iconRecord}>
                                        <Entypo name="dots-three-vertical" size={50} color="#b697ff" />
                                        <Text>{state.DailyAverage}</Text>
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

export default Statistic