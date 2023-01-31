import React, { useState, Component, useContext,useReducer } from "react";
import { View,Dimensions , Button, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView,Image, TextInput, Alert, } from "react-native";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import Icons from "./icon_color/Icon";
import {useStore} from '../Store';
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
    getDataOfCurWeek, getUnitNameforHOAD, getMemmoCurDay} from '../Store/database';
import MoreMemo from './HOADChildScreens/MoreMemo'

const HabitOfADay = ({navigation,route}) =>{
    const {habit} = route.params;
    getUnitNameforHOAD(habit)
    const date = new Date();
    const currentMonth = date.getMonth() + 1
    const nameOfMonth = date.toLocaleString(
        'default',
        {month: 'long'}
    );
    
    console.log(habit)
    const [isEnabled, setIsEnabled] = useState(false);
    const[state, dispatch] = useStore()
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
    getMemmoCurDay(habit)
    getDataOfCurWeek(habit)
    calculateDayDoneInMonth(habit);
    calculateDayTotalDone(habit);
    calculateMonthlyVolumn(habit);
    calculateTotalVolumn(habit);
    calculateCurrentStreak(habit);
    calculateBestStreak(habit);
    const dailyAverage = Math.round(state.TotalVolumn / state.DayTotalDone * 100) / 100;
    const overallRate = Math.round(dailyAverage / habit.goalNo * 100) / 100 ;
    return(
        <View style = {styles.container}>
            <View style = {styles.header}>
                {/* <FontAwesome5 style={styles.iconTitle} name={habit.name.toLowerCase()} size={27} color='crimson' /> */}
                <Icons style={styles.iconTitle} type={habit.iconFamily} name={habit.icon} size={27} color='crimson' />
                <Text style ={{marginTop: 10, fontSize: 20, fontWeight : "bold"}}>{habit.name}</Text>
            </View>
            <View style={{flex: 1,alignItems: 'stretch'}}>
                <ScrollView style ={{marginBottom: 10, flex:1 }}>
                    <Calendar style={styles.calendar} firstDay={1}/>
                    
                    {/* Yearly Status */}
                    {/* <View style = {styles.part}>
                        <Text style = {styles.headText}>Yearly Status</Text>
                    </View> */}

                    {/* Records */}
                    <View style = {styles.part}>
                        <Text style = {styles.headText}>Records</Text>
                        <View style={{flexDirection:'row',justifyContent:'center',alignContent: "space-around"}}>
                            <View style = {styles.column}>
                                <View style={styles.iconRecords}>
                                    <FontAwesome5  name="calendar-alt" size={50} color="#7fb7fa" />
                                    <Text>{state.DayDoneInMonth} Day</Text>
                                    <View></View>
                                    <Text>Done in {nameOfMonth}</Text>
                                </View>
                                <View style={styles.iconRecords}>
                                    <FontAwesome5  name="layer-group" size={50} color="#a6acf0" />
                                    <Text>{state.CurrentStreak} Day</Text>
                                    <Text>Current Streak</Text>
                                </View>
                                <View style={styles.iconRecords}>
                                    <FontAwesome5  name="poll" size={50} color="#10cc7a" />
                                    <Text>{state.MonthlyVolumn}</Text>
                                    <Text>Vol. in {nameOfMonth}</Text>
                                </View>
                                <View style={styles.iconRecords}>
                                    <FontAwesome5  name="cubes" size={50} color="#f8b2b3" />
                                    <Text>{dailyAverage}</Text>
                                    <Text>Daily Avg.</Text>
                                </View>
                            </View>

                            <View style = {styles.column}>
                                <View style={styles.iconRecords}>
                                    <FontAwesome5  name="clipboard-list" size={50} color="#4be1a9" />
                                    <Text>{state.DayTotalDone} Day</Text>
                                    <Text>Total Done</Text>
                                </View>
                                <View style={styles.iconRecords}>
                                    <FontAwesome5  name="medal" size={50} color="#f8b043" />
                                    <Text>{state.BestStreak} Day</Text>
                                    <Text>Best Streaks</Text>
                                </View>
                                <View style={styles.iconRecords}>
                                    <FontAwesome5  name="receipt" size={50} color="#81b6f8" />
                                    <Text>{state.TotalVolumn}</Text>
                                    <Text>Vol. Total</Text>
                                </View>
                                <View style={styles.iconRecords}>
                                    <FontAwesome5  name="percent" size={50} color="#fca133" />
                                    <Text>{overallRate}</Text>
                                    <Text>Overall Rate</Text>
                                </View>
                                
                            </View>
                        </View>
                        
                    </View>
                    
                    {/* Memos */}
                    <View style = {styles.part}>
                        <View style = {{flexDirection: 'row',justifyContent: 'space-between', marginHorizontal: 5 }}>
                            <Text style = {styles.headText}>Memos</Text>
                            <TouchableOpacity style = {{marginTop: '1.25%'}}
                                onPress ={() =>{
                                    setIsEnabled(!isEnabled)
                                }}>
                                <Text>More</Text>
                                {isEnabled && <MoreMemo 
                                    myIsmodalVisible = {isEnabled}
                                    habit = {habit}
                                    setModalVisible = {setIsEnabled}
                                ></MoreMemo> }
                            </TouchableOpacity>
                        </View>
                        <View style = {{padding: 10, backgroundColor: '#F9BBAE' , borderRadius: 6, marginHorizontal: 10, marginBottom: 5}}>
                            <Text>{state.memoCurDay}</Text>
                        </View>
                    </View>

                    {/* Chart */}
                    <View style = {styles.part}>
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
                        <TouchableOpacity style = {{ backgroundColor: '#F3ACB4', borderRadius: 8, width: '40%',height: '140%', justifyContent: 'center'}} onPress={()=> {}}>
                            <View style = {{flexDirection: 'row',justifyContent: 'center'}}>
                                <FontAwesome5 style = {{marginHorizontal: 5}} name='pencil-alt' size={15} color='black' />
                                <Text>Edit</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style = {{ backgroundColor: '#F3ACB4', borderRadius: 8, width: '40%',height: '140%', justifyContent: 'center'}} onPress={()=> {}}>
                            <View style = {{flexDirection: 'row',justifyContent: 'center'}}>
                                <FontAwesome5 style = {{marginHorizontal: 5}} name='trash-alt' size={15} color='black' />
                                <Text>Delete</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    
                </ScrollView>
                
            </View>
           
        </View>
    )
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
