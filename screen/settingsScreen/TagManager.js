import React from "react";
import { useState } from 'react';
import { ScrollView } from "react-native";
import {Text,  View , StyleSheet, Button, TouchableOpacity} from 'react-native';
import { useStore } from "../../Store";
import Icons from "../icon_color/Icon";
export default function TagManager (params){
    const[state,dispatch] = useStore()
    const {currentTheme} =state
    console.log('listHabit', state.listHabit)
    
    
    const uniqueArr = state.listHabit.filter(
        (obj, index, self) => index === self.findIndex((t) => t.tag === obj.tag)
      );
    const [isPressed, setIsPressed] = useState(uniqueArr[0].tag);
    const handlePress = (tag) => {
        setIsPressed(tag);
      };
    return(         
        <View style={[styles.container,{backgroundColor: currentTheme.backgroundColor}]}>
            <View style={{flexDirection:'row'}}>
                {uniqueArr.map((value,index)=>{
                    return(
                    
                        <TouchableOpacity style={{margin:2}}  key={value.tag}  onPress={() => handlePress(value.tag)}>
                            <Text style={[styles.boder, {backgroundColor: isPressed===value.tag?'red' : 'gray' ,color: isPressed===value.tag?'white' : 'black'}]}>{value.tag}</Text>
                        </TouchableOpacity>
    
                    )
                })}
            </View>  
            <ScrollView style={{margin: 12}}>
                {state.listHabit.map((habit,index)=>{
                    if (habit.tag===isPressed)
                    {
                        return(
                            <View style={{flexDirection:'row', marginBottom:'5%'}}>
                                <Icons type={habit.iconFamily} name={habit.icon} size={30} color={habit.color} />
                                <Text style={{color: currentTheme.color, marginLeft:'4%'}}>{habit.name}</Text>
                            </View>
                            
                        )
                       
                    }
                })}
            </ScrollView>   
        </View>
    );

}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        
    },
    scroll:{
        //marginLeft: 5,
        marginTop: -40
    },
    iconTitle:{
        flexDirection:'row', 
        marginLeft: 20,
        marginTop: 50,
        
    },
    viewText:{
        flex:1,
        flexDirection: 'column', 
        marginLeft: 30
    },
    textName:{
        fontSize: 20,
        fontWeight: "bold"
    },
    textRemind:{
        fontWeight: '100'
    },
    iconDots:{
        marginTop: '1%',
        AlignItems: 'flex-end',
        marginRight:"9%",
        

    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,

      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      modalContainer: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 5,
        alignItems: 'center',
      },
      boder:{
        margin:10,
        width: 50,
        height: 17,
        borderRadius: 20,
        textAlign: 'center',
      },
})
