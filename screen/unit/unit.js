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
                                backgroundColor: 'white', 
                                borderRadius: 30, 
                                borderWidth: 1}}>
                        <View style={styles.container}>
                            <View style ={{
                                borderRadius: 20, 
                                flex: 1, 
                                justifyContent: 'space-evenly', 
                                }}>
                                <Text style={styles.tilte}>Select Unit</Text>
                                <PreviewLayout
                                    values = {[
                                    { id: 0, title: 'count'},
                                    { id: 1, title: 'steps'},
                                    { id: 2, title: 'm'},
                                    { id: 3, title: 'km'},
                                    { id: 4, title: 'mile'}
                                ]}
                                    selectedValue={params.unit}
                                    setSelectedValue={params.setunit}
                                />
                                <PreviewLayout
                                    values = {[
                                    { id: 5, title: 'sec'},
                                    { id: 6, title: 'min'},
                                    { id: 7, title: 'hr'},
                                    { id: 8, title: 'ml'},
                                    { id: 9, title: 'oz'}
                                ]}
                                    selectedValue={params.unit}
                                    setSelectedValue={params.setunit}
                                />
                                <PreviewLayout
                                    values = {[
                                    { id: 10, title: 'Cal'},
                                ]}
                                    selectedValue={params.unit}
                                    setSelectedValue={params.setunit}
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
})=>(
    <View style = {{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        {values.map((value) =>(
            <TouchableOpacity style = {{ 
                borderRadius: 10, 
                width: 40,
                height: 20, 
                alignItems: 'center',
                backgroundColor:  value.title == selectedValue.title ? 'grey' : 'white',
                justifyContent: 'center',
            }}
                key={value.id}
                   onPress={() => setSelectedValue(prevState => ({ ...prevState, unit: value}))}
            >
                <Text style = {{fontSize: 10 }}>
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
