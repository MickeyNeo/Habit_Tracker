import React, {useState} from "react";
import {Text,  View ,StyleSheet, TextInput} from 'react-native';
import Modal from "react-native-modal";

export default function Memo (params){
    const [text, setText] = useState('');
    return(         
        <View>
            <Modal isVisible={params.myIsmodalVisible} 
                useNativeDriver={true}
                onBackdropPress={() => params.setModalVisible(false)}
                >
                    <View style={{height: '38%', backgroundColor: 'white', 
                            borderRadius: 30, borderWidth: 1,
                            height: '50%',
                            marginTop: 'auto', }}>
                        <TextInput
                            style = {{ height: 40, 
                            width: '90%', 
                            left: '5%',
                            //flex: 0.2,
                            borderRadius: 10,
                            padding: 10,
                            backgroundColor: '#f5f5f5', 
                            color: '#a9a9a9',
                            top: '5%',
                            }}
                            placeholder="Type your memo here!!!"
                            onChangeText={newText => setText(newText)}
                            defaultValue={text}
                        />
                        <Text>{text}</Text>
                    </View>
                </Modal>       
        </View>
    )
}
