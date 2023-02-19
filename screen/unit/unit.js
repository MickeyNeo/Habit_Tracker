import React from "react";
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Modal from "react-native-modal";
export default function SelectUnit (params){
    // console.log(params.unit)
    return(         
        <View >
            <Modal isVisible={params.myIsmodalVisible} 
                useNativeDriver={true}
                onBackdropPress={() => params.setModalVisible(false)}
                >
                    <View style={{
                                height: '20%',
                                marginTop: 'auto', 
                                backgroundColor: params.currentTheme.backgroundColor, 
                                borderRadius: 30, 
                                borderWidth: 1}}>
                        <View style={styles.container}>
                            <View style ={{
                                borderRadius: 20, 
                                flex: 1, 
                                justifyContent: 'space-evenly', 
                                }}>
                                <Text style={[styles.tilte,{color: params.currentTheme.color}]}>Select Unit</Text>
                                <PreviewLayout
                                    values = {[
                                    { id: 1, title: 'sec'},
                                    { id: 2, title: 'min'},
                                    { id: 3, title: 'hr'},
                                    { id: 4, title: 'ml'},
                                    { id: 5, title: 'oz'}
                                ]}
                                    selectedValue={params.unit}
                                    setSelectedValue={params.setunit}
                                    currentTheme={params.currentTheme}
                                />
                                <PreviewLayout
                                    values = {[
                                    { id: 6, title: 'cal'},
                                    { id: 7, title: 'count'},
                                    { id: 8, title: 'steps'},
                                    { id: 9, title: 'm'},
                                    { id: 10, title: 'km'}
                                ]}
                                    selectedValue={params.unit}
                                    setSelectedValue={params.setunit}
                                    currentTheme={params.currentTheme}
                                />
                                <PreviewLayout
                                    values = {[
                                    { id: 11, title: 'mile'},
                                ]}
                                    selectedValue={params.unit}
                                    setSelectedValue={params.setunit}
                                    currentTheme={params.currentTheme}
                                />
                            </View>
                        </View>
                    </View>
                </Modal>       
            
        </View>
    )
}
const PreviewLayout =({
    values,
    selectedValue,
    setSelectedValue, 
    currentTheme,
})=>(
    <View style = {{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        {values.map((value) =>(
            <TouchableOpacity style = {{ 
                borderRadius: 10, 
                width: 40,
                height: 20, 
                alignItems: 'center',
                backgroundColor:  value.title == selectedValue.title ? 'grey' : currentTheme.backgroundColor,
                justifyContent: 'center',
            }}
                key={value.id}
                   onPress={() => setSelectedValue(prevState => ({ ...prevState, unit: value}))}
            >
                <Text style = {{fontSize: 10,color:currentTheme.color }}>
                    {value.title}
                </Text>
            </TouchableOpacity>
        ))}
    </View>
);
const styles=StyleSheet.create({
    container:{
        flex:1
    },
    tilte:{
        fontSize: 15,
        color: 'black',
        alignSelf: 'center',
    },
    buttonType:{
        textAlign: 'center',
        borderRadius: 10,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 10, 
        paddingVertical: 5,
        backgroundColor: 'pink',
    },
   
})
