import React from "react";
import { useState } from 'react';
import {Text,  View, StyleSheet,ScrollView,TouchableOpacity,SafeAreaView,TouchableWithoutFeedback } from 'react-native';
import { useStore } from "../../Store";
import { FontAwesome5,MaterialCommunityIcons } from "@expo/vector-icons";
import Modal from "react-native-modal";
import SelectDropdown from 'react-native-select-dropdown'
export default function HabitManager (){
    const[state, dispatch] =useStore()
    const [test, setList] =useState(['Action 1',' Action 2', 'Action 3'])

    const [modalVisible, setModalVisible] = useState(false);
    const [popUpPosition, setPopUpPosition] = useState({x:0, y:0});
    const onPress = (event) => {
        const {pageX, pageY} = event.nativeEvent;
        setPopUpPosition({x:pageX, y:pageY});
        console.log(`Tapped at x: ${pageX}, y: ${pageY}`);
    }
    const option = ["Edit", "Reset All Data", "Delete"]
    return(         
        <SafeAreaView style={styles.container}>
           <ScrollView style={styles.scroll} >
                    {test.map((value,index) =>( 
                        <View key={index}>
                            
                            <View style={styles.iconTitle}>
                                        <View style={styles.viewText}>
                                            <Text style={styles.textName}>
                                                {value}
                                            </Text>
                                            <Text style={styles.textRemind}>
                                                loi nhac
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
                                                        width: 180, height: 150, backgroundColor: 'white'
                                                    }}
                                                    onSelect={(selectedItem, index) => 
                                                        {
                                                          if (selectedItem == option[0]) console.log(selectedItem)
                                                          else if (selectedItem == option[1]) console.log(selectedItem)
                                                          else console.log(selectedItem)
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
})
