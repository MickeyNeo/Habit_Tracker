import React from 'react';
import ColorPicker from 'react-native-wheel-color-picker';
import { View, Button, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView,Image, TextInput, Alert, TouchableHighlight } from "react-native";
import Modal from "react-native-modal";

const ChooseColor = (params) => { 
    return(         
        <View>
            <Modal isVisible={params.myIsmodalVisible} 
                useNativeDriver={true}
                onBackdropPress={() => params.setModalVisible(false)}
                >
                    <View style={{backgroundColor: params.currentTheme.backgroundColor, 
                            borderRadius: 20, 
                            borderWidth: 1,
                            height: '60%',
                            marginTop: 'auto', 
                            justifyContent: 'center',
                            alignContent: 'center',}}>
                    <ColorPicker
                        //ref={r => { picker = r }}
                        color= {params.color}
                        //swatchesOnly={swatchesOnly}
                        onColorChange={(color) => params.setColor(prevState => ({ ...prevState, changecolor: color}))}
                        onColorChangeComplete={(color) => params.setColor(prevState => ({ ...prevState, changecolor: color}))}
                        thumbSize={30}
                        sliderSize={30}
                        noSnap={true}
                        row={false}
                        //swatchesLast={swatchesLast}
                        //swatches={swatchesEnabled}
                        //discrete={disc}
				    />
                    </View>
                </Modal>  
        </View>
    )
}
export default ChooseColor;