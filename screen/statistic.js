
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
import {useStore,setUnit, initDayDoneInMonth,initDayTotalDone, initMonthlyVolumn,initTotalVolumn, initDataOfCurWeek, setDayDoneInMonth, setDayTotalDone, setMonthlyVolumn, setTotalVolumn, setBestStreak, setCurrentStreak, setDayStarted} from '../Store'
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
import { calculateDayTotalDone, CalculateOverallRate, CountPerfectDay, CalculateDailyAverage, 
    CountPerfectStreak, calculateDayDoneInMonth, calculateMonthlyVolumn, calculateTotalVolumn, 
    calculateCurrentStreak, calculateBestStreak, calculateDayStarted, getDataOfCurWeek, getMemmoCurDay} from '../Store/database';
import { useEffect } from 'react';
// import {calculateDayTotalDone, CountPerfectDay, CalculateOverallRate, CountPerfectStreak, CalculateDailyAverage} from '../Store/database';
// import { set } from 'core-js/core/dict';

const Statistic = ({navigation}) => {
    const[state, dispatch] = useStore()
    const {currentTheme} =state
    // Don't comment out useEffect. useEffect prevent the screen from loading repeatedly
  useEffect(() => {
    calculateDayTotalDone(state.listHabit, dispatch);
    CountPerfectDay(state.listHabit, dispatch);
    CountPerfectStreak(state.listHabit, dispatch);
    CalculateOverallRate(state.listHabit, dispatch);
    CalculateDailyAverage(dispatch);
  }, []); // 👈️ empty dependencies array
    
    
    const dataPro = {
        labels: ['Monthly_rate'], // optional
        data: [0.8]
      };
    const chartConfig = {
        backgroundGradientFrom: (currentTheme.backgroundColor=='#1f1e1e')?'#918e8e':'#f5f5f5',
        backgroundGradientFromOpacity: 1,
        backgroundGradientTo: (currentTheme.backgroundColor=='#1f1e1e')?'#918e8e':'#f5f5f5',
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
    
    

    return(
        <View style={[style.container,{backgroundColor: currentTheme.backgroundColor}]}> 
            <View style={{flexDirection:'row',}}>
                <Foundation
                    style={{margin:5,marginLeft:15}}  
                    name="graph-pie" size={27} color="pink" />
                
                <ScrollView style={style.scroll} horizontal={true}> 
                    {state.listHabit.map((habit,index) =>(
                        
                        <TouchableOpacity key={index}
                            onPress={() => {

                                console.log(habit);
                                getMemmoCurDay(habit, state, dispatch);
                                getDataOfCurWeek(habit, state, dispatch);
                                calculateDayDoneInMonth(habit, dispatch);
                                calculateDayTotalDone(habit, dispatch);
                                calculateMonthlyVolumn(habit, dispatch);
                                calculateTotalVolumn(habit, dispatch);
                                calculateCurrentStreak(habit, dispatch);
                                calculateBestStreak(habit, dispatch);
                                calculateDayStarted(habit, dispatch);
                                // dispatch(setDayDoneInMonth(state.DayDoneInMonth));
                                // dispatch(setDayTotalDone(state.DayTotalDone));
                                // dispatch(setMonthlyVolumn(state.MonthlyVolumn));
                                // dispatch(setTotalVolumn(state.TotalVolumn));
                                // dispatch(setBestStreak(state.BestStreak));
                                // dispatch(setCurrentStreak(state.CurrentStreak));
                                // dispatch(setDayStarted(state.DayStarted));

                                // dispatch(initDayDoneInMonth(0))
                                // dispatch(initDayTotalDone(0))
                                // dispatch(initMonthlyVolumn(0))
                                // dispatch(initTotalVolumn(0))
                                // dispatch(initDataOfCurWeek([]))
                                
                                console.log('Navigate to ', habit.name)

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
            <View style={{flex: 1}}>
                <ScrollView>
                    <Calendar style={[style.calendar,{backgroundColor: currentTheme.backgroundColor}]} firstDay={1}/>
                    <View style={[style.static,{backgroundColor:(currentTheme.backgroundColor=='#1f1e1e')?'#918e8e':'#f5f5f5'}]}>
                        <View style = {{flexDirection: 'column',alignItems:'center' }}>
                            <ProgressChart
                                data={dataPro}
                                width={Dimensions.get('window').width-40}
                                height={220}
                                strokeWidth={30}
                                radius={90}
                                chartConfig={chartConfig}
                                hideLegend={true}
                            />
                            <Text style={{color: currentTheme.color}}>Monthly rate: {state.OverallRate*100}%</Text>
                        </View>
                        <View style={{marginTop: '10%'}}>
                            <View style={{flexDirection:'row',justifyContent:'center'}}>
                                <View style={style.colum}>
                                    <View style={style.iconRecord}>
                                        <FontAwesome5  name="medal" size={50} color="#fcac44" />
                                        <Text style={{color: currentTheme.color}}>{state.PerfectStreak} {(state.PerfectStreak == 1) ? 'Day' : 'Days'}</Text>
                                        <Text style={{color: currentTheme.color}}>Best Streaks</Text>
                                    </View>
                                    <View style={style.iconRecord}>
                                        <Octicons name="checklist" size={50} color="#3ee7a8" />
                                        <Text style={{color: currentTheme.color}}>{state.EveryHabitDone}</Text>
                                        <Text style={{color: currentTheme.color}}>Habits Done</Text>
                                    </View>
                                    
                                </View>
                                <View style={style.colum}>
                                    <View style={style.iconRecord}>
                                        <FontAwesome5 name="calendar-check" size={50} color="#84b5f7" />
                                        <Text style={{color: currentTheme.color}}>{state.PerfectDayCount}</Text>
                                        <Text style={{color: currentTheme.color}}>Perfect {(state.PerfectDayCount == 1) ? 'Day' : 'Days'}</Text>
                                    </View>
                                    <View style={style.iconRecord}>
                                        <Entypo name="dots-three-vertical" size={50} color="#b697ff" />
                                        <Text style={{color: currentTheme.color}}>{state.DailyAverage}</Text>
                                        <Text style={{color: currentTheme.color}}>Daily Average</Text> 
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
        //backgroundColor: 'white',
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