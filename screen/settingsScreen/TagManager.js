import React from "react";
import { useState, useEffect } from 'react';
import { ScrollView } from "react-native";
import {Text,  View , StyleSheet, Button, TouchableOpacity} from 'react-native';
import { useStore } from "../../Store";
import Icons from "../icon_color/Icon";
import { loadHaveTag,loadTag } from "../../Store/database";
export default function TagManager (params){
    const[state,dispatch] = useStore()
    const {currentTheme} =state
    const [listTag, setListTag] = useState([]); 
    const [listHaveTag, setListHaveTag] = useState([]); 
    let newObj = { id:0, name: "All"};
    useEffect(() => {
        loadTag(setListTag);
        loadHaveTag(null, setListHaveTag);
    }, []);
    const [isPressed, setIsPressed] = useState(newObj.name);
    const handlePress = (tag) => {
        setIsPressed(tag);
      };
    return(         
        <View style={[styles.container,{backgroundColor: currentTheme.backgroundColor}]}>
            <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                <TouchableOpacity style={{margin:2}}  onPress={() => handlePress(newObj.name)}>
                    <View style={[styles.boder, {backgroundColor: isPressed===newObj.name?'red' : 'gray'}]}>
                        <Text style={{textAlign: 'center',color: isPressed===newObj.name?'white' : 'black'}}>{newObj.name}</Text>
                    </View>
                    
                </TouchableOpacity>
                {listTag.map((value,index)=>{
                    
                    return(
                    
                        <TouchableOpacity style={{margin:2}}  key={value.id}  onPress={() => handlePress(value.name)}>
                            <View style={[styles.boder, {backgroundColor: isPressed===value.name?'red' : 'gray'}]}>
                                <Text style={{ textAlign: 'center',color: isPressed===value.name?'white' : 'black'}}>{value.name}</Text>
                            </View>
                        </TouchableOpacity>
    
                    )
                })}
                <TouchableOpacity style={{margin:2}} >
                            <View style={[styles.boder, {backgroundColor: 'red'}]}>
                                <Text style={{ textAlign: 'center',color: 'white'}}>x</Text>
                            </View>
                        </TouchableOpacity>
            </View>  
            <ScrollView style={{margin: 12}}>
                { isPressed!='All'?listHaveTag.map((tag,index)=>{
                    const habit = state.listHabit.find(e=>e.name===tag.habitName);
                    if (habit && tag.name===isPressed){
                        return(
                            <View style={{flexDirection:'row', marginBottom:'5%'}}>
                                <Icons type={habit.iconFamily} name={habit.icon} size={30} color={habit.color} />
                                <Text style={{color: currentTheme.color, marginLeft:'4%'}}>{habit.name}</Text>
                            </View>
                            
                        )
                    }
            }):state.listHabit.map((habit,index)=>{
                return(
                    <View style={{flexDirection:'row', marginBottom:'5%'}}>
                        <Icons type={habit.iconFamily} name={habit.icon} size={30} color={habit.color} />
                        <Text style={{color: currentTheme.color, marginLeft:'4%'}}>{habit.name}</Text>
                    </View>
                    
                )
            }) 
            }
            </ScrollView>   
        </View>
    );

}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        
    },
      boder:{
        margin:10,
        justifyContent: 'center',
        width: 50,
        height: 20,
        borderRadius: 20,
      },
})
