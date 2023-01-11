import React from 'react';
import IconPicker from "react-native-icon-picker";
import { View, Button, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView,Image, TextInput, Alert, TouchableHighlight } from "react-native";
import Modal from "react-native-modal";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";

import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Fontisto from "react-native-vector-icons/Fontisto";
import Ionicons from "react-native-vector-icons/Ionicons";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const ChooseIcon = (params) => { 
    return(         
        <View>
            <Modal isVisible={params.myIsmodalVisible} 
                useNativeDriver={true}
                onBackdropPress={() => params.setModalVisible(false)}
                >
                    {/* <View style={{backgroundColor: 'red', 
                            borderRadius: 30, borderWidth: 1,
                            height: '20%',
                            marginTop: 'auto', 
                            justifyContent: 'center',
                            alignContent: 'center',}}> */}
                    <IconPicker
                        showIconPicker={true}
                        toggleIconPicker={() => ({ showIconPicker: false })}
                        iconDetails={[
                            { family: "AntDesign", color: "blue", icons: ["wallet"] },
                            { family: "Entypo", icons: ["wallet"] },
                            { family: "FontAwesome", icons: ["google-wallet"] },
                            { family: "FontAwesome5", icons: ["wallet"] },
                            { family: "Fontisto", icons: ["wallet"] },
                            {
                                family: "MaterialCommunityIcons",
                                icons: ["wallet-membership"]
                            },
                            { family: "MaterialIcons", icons: ["wallet-travel"] }
                            ]
                        }
                        onSelect={(icon) => params.seticon(prevState => ({ ...prevState, icon: icon}))}
                    />
                </Modal>  
        </View>
    )
}
export default ChooseIcon;