import React from "react";
import { useState } from 'react';
import {Text,  View, StyleSheet,ScrollView,TouchableOpacity,SafeAreaView,TouchableWithoutFeedback,Button } from 'react-native';
import { useStore} from "../../Store";
import { delHabit } from "../../Store";
import { FontAwesome5,MaterialCommunityIcons } from "@expo/vector-icons";
import Modal from "react-native-modal";
import SelectDropdown from 'react-native-select-dropdown'
import Icons from "../icon_color/Icon";


export default function HabitManager (){
    const[state, dispatch] =useStore()
    const [test, setList] =useState(['Action 1',' Action 2', 'Action 3'])

    const [modalVisible, setModalVisible] = useState(false);
    const option = ["Edit", "Delete"]
    const [isModalVisibleDel, setModalVisibleDel] = useState(true);
    console.log(state.listHabit)
    const handleDelHablit =(id)=> {
        dispatch(delHabit(state.listHabit.filter(item => item.id !== id)))
    }
    return(         
        <SafeAreaView style={styles.container}>
           <ScrollView style={styles.scroll} >
                    {state.listHabit.map((habit,index) =>( 
                        <View key={index}>
                            <View style={styles.iconTitle}>
                            <Icons type={habit.iconFamily} name={habit.icon} size={27} color={habit.color} />
                                        <View style={styles.viewText}>
                                            <Text style={styles.textName}>
                                                {habit.name}
                                            </Text>
                                            <Text style={styles.textRemind}>
                                                {habit.reminderMessage}
                                            </Text>
                                        </View>
                                        <TouchableWithoutFeedback onPress={()=> {setModalVisible(true) }}>
                                            <View style={styles.iconDots}>

                                                <SelectDropdown
                                                    data={option}
                                                    // defaultButtonText={<View style={{AlignItems:'center'}}>
                                                    //         <MaterialCommunityIcons  name="dots-horizontal-circle-outline" size={20} color="black" />
                                                    // </View>
                                                    // }
                                                    defaultButtonText={<Text style={{alignSelf:'flex-start'}}>...</Text>}
                                                    buttonStyle={{
                                                        width: 50,
                                                        height: 50,
                                                        borderRadius: 25,
                                                        backgroundColor: 'gray'}}
                                                    //style={{ width: 100, height: 100}}
                                                    dropdownStyle={{
                                                        marginLeft:'-13%',
                                                        width: 180, height: 100, backgroundColor: 'white'
                                                    }}
                                                    onSelect={(selectedItem, index) => 
                                                        {
                                                          if (selectedItem == option[0]) console.log(selectedItem)
                                                          else if (selectedItem == option[1]) 
                                                            {
                                                                handleDelHablit(habit.id)
                                                                
                                                            }
                                                        }}
                                                    
                
                                                />
                                               
                                            </View>
                                            
                                                
                                            
                                        </TouchableWithoutFeedback>
                            </View>
                            
                       
                        </View>
                       
                    ))}
                </ScrollView>  
        </SafeAreaView>
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
})
