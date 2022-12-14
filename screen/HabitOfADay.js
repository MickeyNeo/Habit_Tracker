import React, { useState, Component, useContext,useReducer } from "react";
import { View,Dimensions , Button, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView,Image, TextInput, Alert, } from "react-native";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
const HabitOfADay = ({navigation,route}) =>{
    const {iconName} = route.params;
    const data = {
        labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
        datasets: [
          {
            data: [20, 30, 40, 10, 5, 30,45]
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
    return(
        <View style = {styles.container}>
            <View style = {styles.header}>
                <FontAwesome5 style={styles.iconTitle} name={iconName} size={27} color='crimson' />
                <Text style ={{marginTop: 10, fontSize: 20, fontWeight : "bold"}}>{iconName[0].toUpperCase()+iconName.slice(1)}</Text>
            </View>
            <View style={{flex: 1,alignItems: 'stretch'}}>
                <ScrollView style ={{marginBottom: 10, flex:1 }}>
                    <Calendar style={styles.calendar} firstDay={1}/>
                    
                    {/* Yearly Status */}
                    <View style = {styles.part}>
                        <Text style = {styles.headText}>Yearly Status</Text>
                    </View>

                    {/* Records */}
                    <View style = {styles.part}>
                        <Text style = {styles.headText}>Records</Text>
                        <View style={{flexDirection:'row',justifyContent:'center',alignContent: "space-around"}}>
                            <View style = {styles.column}>
                                <View style={styles.iconRecords}>
                                    <FontAwesome5  name="calendar-alt" size={50} color="#d8c3c3" />
                                    <Text>0 Day</Text>
                                    <Text>Done in December</Text>
                                </View>
                                <View style={styles.iconRecords}>
                                    <FontAwesome5  name="layer-group" size={50} color="#d8c3c3" />
                                    <Text>0 Day</Text>
                                    <Text>Current Streak</Text>
                                </View>
                                <View style={styles.iconRecords}>
                                    <FontAwesome5  name="medal" size={50} color="#d8c3c3" />
                                    <Text>0 Day</Text>
                                    <Text>Best Streak</Text>
                                </View>
                            </View>

                            <View style = {styles.column}>
                                <View style={styles.iconRecords}>
                                    <FontAwesome5  name="clipboard-list" size={50} color="#d8c3c3" />
                                    <Text>0 Day</Text>
                                    <Text>Total Done</Text>
                                </View>
                                <View style={styles.iconRecords}>
                                    <FontAwesome5  name="medal" size={50} color="#d8c3c3" />
                                    <Text>Day</Text>
                                    <Text>Best Streaks</Text>
                                </View>
                                <View style={styles.iconRecords}>
                                    <FontAwesome5  name="medal" size={50} color="#d8c3c3" />
                                    <Text>Day</Text>
                                    <Text>Best Streaks</Text>
                                </View>
                                
                            </View>
                        </View>
                        
                    </View>
                    
                    {/* Memos */}
                    <View style = {styles.part}>
                        <View style = {{flexDirection: 'row',justifyContent: 'space-between', marginHorizontal: 5 }}>
                            <Text style = {styles.headText}>Memos</Text>
                            <Text style = {{marginTop: '1.25%'}}>More</Text>
                        </View>
                        <View style = {{padding: 10, backgroundColor: '#c5acac' , borderRadius: 6, marginHorizontal: 10, marginBottom: 5}}>
                            <TextInput placeholder="No memos yet."/>
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
                                yAxisSuffix="mins"
                                chartConfig={chartConfig}
                                fillShadowGradientFrom =  'black'
                                
                                // verticalLabelRotation={30}
                            />
                        </View>
                    </View>

                    <View style = {{flex: 1, marginHorizontal: 10, flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20}}>
                        <TouchableOpacity style = {{ backgroundColor: '#c5bebe', borderRadius: 8, width: '40%',height: '140%', justifyContent: 'center'}} onPress={()=> {}}>
                            <View style = {{flexDirection: 'row',justifyContent: 'center'}}>
                                <FontAwesome5 style = {{marginHorizontal: 5}} name='pencil-alt' size={15} color='black' />
                                <Text>Edit</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style = {{ backgroundColor: '#c5bebe', borderRadius: 8, width: '40%',height: '140%', justifyContent: 'center'}} onPress={()=> {}}>
                            <View style = {{flexDirection: 'row',justifyContent: 'center'}}>
                                <FontAwesome5 style = {{marginHorizontal: 5}} name='trash-alt' size={15} color='black' />
                                <Text>Delete</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    
                </ScrollView>
                {/* Buttons */}
                
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