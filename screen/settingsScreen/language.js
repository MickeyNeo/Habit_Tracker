import React from "react";
import { useState } from 'react';
import {Text,  View ,StyleSheet,Button} from 'react-native';
import Modal from "react-native-modal";


export default function Language (params){
    //const [check,setCheck] = useState('English')
    return(         
        <View >
            <Modal isVisible={params.myIsmodalVisible} 
                useNativeDriver={true}
                onBackdropPress={() => params.setModalVisible(false)}
                animationIn = 'bounceIn'
                animationInTiming = {600}
                animationOut ='bounceOut'
                animationOutTiming = {500}
                >
                    <View style={{height: '38%', backgroundColor: 'white', borderRadius: 30, borderWidth: 1,justifyContent: 'center'}}>
                        <View style={styles.container}>
                            <Text style={styles.tilte}>Select Language</Text>
                            <Text style={styles.text}>English</Text>
                            <Text style={styles.text}>Vietnames</Text>
                            <Text style={styles.text}>French</Text>
                            <Text style={styles.text}>German</Text>
                        </View>
                        <View style={styles.buttonType}>
                            <Button  title="Confirm" color="white" onPress={() => params.setModalVisible(false)} />
                        </View>
                        
                    </View>
                </Modal>       
            
        </View>
    )

}
const styles=StyleSheet.create({
    container:{
        flex:1
    },
    tilte:{
        marginLeft: 30,
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 20
    },
    buttonType:{
        textAlign: 'center',
        borderRadius: 10,
        //paddingHorizontal: 5,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 10, 
        paddingVertical: 5,
        backgroundColor: 'pink',
    },
    text:{
        
        marginLeft: 30,
        fontSize: 15,
        marginTop: 30,

    }
})
