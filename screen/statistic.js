
import { StatusBar } from 'expo-status-bar';
import {React, useState } from 'react';
import { Animated, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Foundation,Octicons,Entypo } from '@expo/vector-icons'; 
import {useStore} from '../Store'


export default function Statistic({navigation}){
    const[state, dispatch] =useStore()
    console.log(state.stateHabitOfDay)
    return(
        <View style={style.container}> 
            <View style={{flexDirection:'row',backgroundColor: 'white',}}>
                <Foundation
                    style={{margin:5,marginLeft:15}}  
                    name="graph-pie" size={27} color="pink" />
                
                <ScrollView style={style.scroll} horizontal={true}> 
                    {state.stateHabitOfDay.map((value,index) =>(
                        
                        <TouchableOpacity key={index}
                            onPress={() => {
                                navigation.navigate('HabitOfADay', {
                                    // name: title,
                                    // colors: color,
                                    // image: image,
                                })
                            }}>
                            <FontAwesome5 style={style.iconTitle} name={value} size={27} color='crimson' />
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
            <View style={{flex: 1,alignItems: 'stretch'}}>
                <ScrollView>
                    <Calendar style={style.calendar} firstDay={1}/>
                    <View style={style.static}>
                        <View>
                            <Text></Text>
                        </View>
                        <View style={{flex:1, justifyContent:'flex-end'}}>
                            <View style={{flexDirection:'row',justifyContent:'center'}}>
                                <View style={style.colum}>
                                    <View style={style.iconRecord}>
                                        <FontAwesome5  name="medal" size={50} color="orange" />
                                        <Text>Day</Text>
                                        <Text>Best Streaks</Text>
                                    </View>
                                    <View style={style.iconRecord}>
                                        <Octicons name="checklist" size={50} color="green" />
                                        <Text>Day</Text>
                                        <Text>Best Streaks</Text>
                                    </View>
                                    
                                </View>
                                <View style={style.colum}>
                                    <View style={style.iconRecord}>
                                        <FontAwesome5 name="calendar-check" size={50} color="blue" />
                                        <Text>Day</Text>
                                        <Text>Best Streaks</Text>
                                    </View>
                                    <View style={style.iconRecord}>
                                        <Entypo name="dots-three-vertical" size={50} color="purle" />
                                        <Text>Day</Text>
                                        <Text>Best Streaks</Text> 
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
        marginLeft: 40,
    },
    calendar:{
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 4,
        margin: 10
    },
    static:{
        height: '80%',
        margin: 10,
        borderRadius: 10,
        backgroundColor: 'white',
    },
    iconRecord:{
        marginBottom:20,
    },
    colum:{
        margin: '15%',
        alignItems: 'center',
        flexDirection:'column'
    },

})
