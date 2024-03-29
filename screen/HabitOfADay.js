import React, { useState, Component, useContext,useReducer } from "react";
import { View,Dimensions , Button, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView,Image, TextInput, Alert, } from "react-native";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import Icons from "./icon_color/Icon";
import {useStore,delHabit, editListProgressDay} from '../Store';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
import {calculateDayDoneInMonth, calculateDayTotalDone, calculateMonthlyVolumn,
    calculateTotalVolumn, calculateCurrentStreak, calculateBestStreak, 
    getDataOfCurWeek, getUnitNameforHOAD, getMemmoCurDay, CalculateDayStarted, calculateDayStarted, deleteHabit} from '../Store/database';
import MoreMemo from './HOADChildScreens/MoreMemo'
import { useEffect } from "react";
// import replace from "core-js/fn/symbol/replace";

const HabitOfADay = ({navigation,route}) =>{
    const {habit} = route.params;
    
    // getUnitNameforHOAD(habit, state, dispatch)
    const date = new Date();
    const currentMonth = date.getMonth() + 1
    const nameOfMonth = date.toDateString().slice(4,-8)
    
    // console.log(habit)
    const [isEnabled, setIsEnabled] = useState(false);
    const[state, dispatch] = useStore()
    const {currentTheme} =state
    // console.log(state.listPro)

    // calculateDayDoneInMonth(habit, dispatch);
    // calculateDayTotalDone(habit, dispatch);
    // calculateMonthlyVolumn(habit, dispatch);
    // calculateTotalVolumn(habit, dispatch);
    // calculateCurrentStreak(habit, dispatch);
    // calculateBestStreak(habit, dispatch);
    // calculateDayStarted(habit, dispatch);

    // Don't comment out useEffect. useEffect prevent the screen from loading repeatedly
 
    
    const data = {
        labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
        datasets: [
          {
            data: state.DataOfCurWeek
          }
        ],
        color :["black"]
      };
      const chartConfig = {
        backgroundGradientFrom: "white",
        backgroundGradientFromOpacity: 1,
        backgroundGradientTo: "white",
        backgroundGradientToOpacity: 1,
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false, // optional,
        fillShadowGradientFrom: 'black'
    };
    // getMemmoCurDay(habit, state, dispatch)
    // getDataOfCurWeek(habit, state, dispatch)
    
    const dailyAverage = Math.round(state.TotalVolumn / state.DayStarted * 100) / 100;
    const overallRate = Math.round(dailyAverage / habit.goalNo * 100) / 100 ;
    
    // const handleDelHablit =(id)=> {
    //     dispatch(delHabit(state.listHabit.filter(item => item.id !== id)))
    // }
    const handleDelHablit =(id,name)=> {
        dispatch(delHabit(state.listHabit.filter(item => item.id !== id)))
        dispatch(editListProgressDay(state.listProgressDay.filter(item=>item.habitName!==name)))
        deleteHabit(name);
    }
    const showAlertDelete = () => {
        Alert.alert(
            'Confirm',
            'Do you want to Delete this habit?',
          [
            {
              text: 'Cancel',
              //onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => {handleDelHablit(habit.id,habit.name), navigation.goBack()}}
          ],
          {cancelable: false},
        );
      };
    return(
        <View style = {[styles.container,{backgroundColor: currentTheme.backgroundColor}]}>
            <View style = {styles.header}>
                {/* <FontAwesome5 style={styles.iconTitle} name={habit.name.toLowerCase()} size={27} color='crimson' /> */}
                <Icons style={styles.iconTitle} type={habit.iconFamily} name={habit.icon} size={27} color={habit.color} />
                <Text style ={{marginTop: 10, fontSize: 20, fontWeight : "bold", color: currentTheme.color}}>{habit.name}</Text>
            </View>
            <View style={{flex: 1,alignItems: 'stretch'}}>
                <ScrollView style ={{marginBottom: 10, flex:1 }}>
                    {/* <Calendar style={styles.calendar} firstDay={1}/> */}
                    <View>
                        {CustomCalendar(habit, state, dispatch)}
                    </View>

                    {/* Yearly Status */}
                    {/* <View style = {styles.part}>
                        <Text style = {styles.headText}>Yearly Status</Text>
                    </View> */}

                    {/* Records */}
                    <View style = {[styles.part,{backgroundColor:(currentTheme.backgroundColor=='#1f1e1e')?'#918e8e':'#f5f5f5'}]}>
                        <Text style = {[styles.headText,{color: currentTheme.color}]}>Records</Text>
                        <View style={{flexDirection:'row',justifyContent:'center',alignContent: "space-around"}}>
                            <View style = {styles.column}>
                                <View style={styles.iconRecords}>
                                    <FontAwesome5  name="calendar-alt" size={50} color="#7fb7fa" />
                                    <Text style={{color: currentTheme.color}}>{state.DayDoneInMonth} Day</Text>
                                    <View></View>
                                    <Text style={{color: currentTheme.color}}>Done in {nameOfMonth}</Text>
                                </View>
                                <View style={styles.iconRecords}>
                                    <FontAwesome5  name="layer-group" size={50} color="#a6acf0" />
                                    <Text style={{color: currentTheme.color}}>{state.CurrentStreak} Day</Text>
                                    <Text style={{color: currentTheme.color}}>Current Streak</Text>
                                </View>
                                <View style={styles.iconRecords}>
                                    <FontAwesome5  name="poll" size={50} color="#10cc7a" />
                                    <Text style={{color: currentTheme.color}}>{state.MonthlyVolumn}</Text>
                                    <Text style={{color: currentTheme.color}}>Vol. in {nameOfMonth}</Text>
                                </View>
                                <View style={styles.iconRecords}>
                                    <FontAwesome5  name="cubes" size={50} color="#f8b2b3" />
                                    <Text style={{color: currentTheme.color}}>{dailyAverage}</Text>
                                    <Text style={{color: currentTheme.color}}>Daily Avg.</Text>
                                </View>
                            </View>

                            <View style = {styles.column}>
                                <View style={styles.iconRecords}>
                                    <FontAwesome5  name="clipboard-list" size={50} color="#4be1a9" />
                                    <Text style={{color: currentTheme.color}}>{state.DayTotalDone} Day</Text>
                                    <Text style={{color: currentTheme.color}}>Total Done</Text>
                                </View>
                                <View style={styles.iconRecords}>
                                    <FontAwesome5  name="medal" size={50} color="#f8b043" />
                                    <Text style={{color: currentTheme.color}}>{state.BestStreak} Day</Text>
                                    <Text style={{color: currentTheme.color}}>Best Streaks</Text>
                                </View>
                                <View style={styles.iconRecords}>
                                    <FontAwesome5  name="receipt" size={50} color="#81b6f8" />
                                    <Text style={{color: currentTheme.color}}>{state.TotalVolumn}</Text>
                                    <Text style={{color: currentTheme.color}}>Vol. Total</Text>
                                </View>
                                <View style={styles.iconRecords}>
                                    <FontAwesome5  name="percent" size={50} color="#fca133" />
                                    <Text style={{color: currentTheme.color}}>{overallRate}</Text>
                                    <Text style={{color: currentTheme.color}}>Overall Rate</Text>
                                </View>
                                
                            </View>
                        </View>
                        
                    </View>
                    
                    {/* Memos */}
                    <View style = {[styles.part,{backgroundColor:(currentTheme.backgroundColor=='#1f1e1e')?'#918e8e':'#f5f5f5'}]}>
                        <View style = {{flexDirection: 'row',justifyContent: 'space-between', marginHorizontal: 5}}>
                            <Text style = {[styles.headText,{color: currentTheme.color}] }>Memos</Text>
                            <TouchableOpacity style = {{marginTop: '1.25%'}}
                                onPress ={() =>{
                                    setIsEnabled(!isEnabled)
                                }}>
                                <Text style={{color: currentTheme.color}}>More</Text>
                                {isEnabled && <MoreMemo 
                                    myIsmodalVisible = {isEnabled}
                                    habit = {habit}
                                    setModalVisible = {setIsEnabled}
                                ></MoreMemo> }
                            </TouchableOpacity>
                        </View>
                        <View style = {{padding: 10, backgroundColor: '#F9BBAE' , borderRadius: 6, marginHorizontal: 10, marginBottom: 5}}>
                            <Text style={{color: currentTheme.color}}>{state.memoCurDay}</Text>
                        </View>
                    </View>

                    {/* Chart */}
                    <View style = {[styles.part] }>
                        <Text style = {styles.headText}>Chart</Text>
                        <View style = {{ flexDirection: 'row',justifyContent: 'center'}}>
                            <BarChart
                                data={data}
                                width= {Dimensions.get('window').width -40}
                                height={220}
                                yAxisSuffix= {state.unitHOAD}
                                chartConfig={chartConfig}
                                fillShadowGradientFrom =  'black'
                                
                                // verticalLabelRotation={30}
                            />
                        </View>
                    </View>

                    {/* Buttons */}
                    <View style = {{flex: 1, marginHorizontal: 10, flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20}}>
                        <TouchableOpacity style = {{ backgroundColor: '#F3ACB4', borderRadius: 8, width: '40%',height: '140%', justifyContent: 'center'}} onPress={()=> navigation.navigate('EditHabit', {
                                        Habit: habit,
                                    })}>  
                            <View style = {{flexDirection: 'row',justifyContent: 'center'}}>
                                <FontAwesome5 style = {{marginHorizontal: 5}} name='pencil-alt' size={15} color={currentTheme.color} />
                                <Text style={{color: currentTheme.color}}>Edit</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style = {{ backgroundColor: '#F3ACB4', borderRadius: 8, width: '40%',height: '140%', justifyContent: 'center'}} onPress={()=> {
                            showAlertDelete()
                            
                            // if (Platform.OS === 'ios' || Platform.OS === 'android') {
                            //     loadHabit_on_fone(state.listHabit, dispatch)
                            //   } else {
                            //     loadHabit_on_web(state.listHabit, dispatch)
                            //   }
                            // navigation.navigate('Statistic')
                            }}>
                            <View style = {{flexDirection: 'row',justifyContent: 'center'}}>
                                <FontAwesome5 style = {{marginHorizontal: 5}} name='trash-alt' size={15} color={currentTheme.color} />
                                <Text style={{color: currentTheme.color}}>Delete</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    
                </ScrollView>
                
            </View>
           
        </View>
    )
}

function CustomCalendar(props, state, dispatch) {
    const habit = props
    const none = {key: '0', color: 'red'};
    const half = {key: '50', color: 'yellow'};
    const near = {key: '75', color: 'orange'};
    const done = {key: '100', color: 'green'};
    var temp = '2023-02-08'

    // const[state, dispatch] = useStore()
    // console.log("state.listPro: ", state.listProDate)
    // console.log("Habit.goalNo: ", habit.goalNo)
    
    const getMarked = () => {

        let marked = {};
        if (state.listProDate.length != 0)
        for(let i = 0; i< state.listPro.length; i++){
            let temp = state.listPro[i]/habit.goalNo;
            // console.log(typeof state.listProDate[i])
            let tempDate = state.listProDate[i].split('/').join('-');
            if (temp == 0) {
                marked[tempDate]  = {
                    dots: [none] 
                };
            }
            else if (temp <= 0.5) {
                marked[tempDate]  = {
                    dots: [half]
                };
            }
            else if (temp <= .75) {
                marked[tempDate]  = {
                    dots: [near]
                };
            }
            else if (temp <= 1) {
                marked[tempDate]  = {
                    dots: [done]
                };
            }
        }
        //   marked[temp] = {
        //         dots: [none]
        //   };
        

        return marked;
      };
    return (
      <Calendar
        
        markingType="multi-dot"
        markedDates={getMarked()}
        {...props}
      />
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'column',
        flex:1,
        justifyContent: 'space-between'
    },
    iconTitle:{
        marginHorizontal: 5,
    },
    header: {
        marginTop: 3,
        flexDirection:'row',
        marginHorizontal: 10,
        borderBottomWidth: 1,
        borderColor: "brew"
    },
    calendar:{
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 4,
        marginTop: 10,
        marginHorizontal: 10,
        marginBottom: 5,
    },
    headText: {
        fontSize: 18,
        fontWeight : "bold",
        marginLeft: '3%'
    },
    part: {
        backgroundColor: 'white',
        borderRadius: 8,
        marginTop: 10,
        marginHorizontal: 10,
        marginBottom: 5,
        flexDirection: 'column'
    },
    column: {
        flexDirection : "column",
        marginHorizontal: '15%',
        marginVertical: '5%'
    },
    iconRecords: {

    },
})
export default HabitOfADay;
