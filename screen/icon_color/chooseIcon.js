import React,{useState} from 'react';
import IconPicker from "react-native-icon-picker";
import { View, Button, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView,Image, TextInput, Alert, TouchableHighlight } from "react-native";
import Modal from "react-native-modal";
import Icons from './Icon';

const ChooseIcon = (params) => { 
    const [isPressed, setIsPressed] = useState(false);
    const handlePress = (icon) => {
        setIsPressed(icon.name);
        params.seticon(prevState => ({ ...prevState, icon: icon.name, iconFamily:icon.family}))
      };
    const iconList1 = [
        { name: 'ios-camera', family: 'Ionicons' },
        { name: 'ios-home', family: 'Ionicons' },
        { name: 'ios-person', family: 'Ionicons' },
        { name: 'ios-cart', family: 'Ionicons' },
        { name: 'facebook', family: 'FontAwesome' },
        { name: 'twitter', family: 'FontAwesome' },
        { name: 'google', family: 'FontAwesome' },
        { name: 'menu', family: 'MaterialIcons' },
        { name: 'settings', family: 'MaterialIcons' },
        {name: 'add', family:'MaterialIcons'},
        
    ]
    const iconList2 = [
        {name: 'check', family:'MaterialIcons'},
        {name: 'close', family:'MaterialIcons'},
        {name: 'edit', family:'MaterialIcons'},
        {name: 'favorite', family:'MaterialIcons'},
        {name: 'home', family:'MaterialIcons'},
        {name: 'search', family:'MaterialIcons'},
        {name: 'child-care', family:'MaterialIcons'},
        {name: 'share', family:'MaterialIcons'},
        {name: 'star', family:'MaterialIcons'},
        {name: 'thumb-up', family:'MaterialIcons'},
        
    ]
    const iconList3 = [
        {name: 'html5', family:'FontAwesome'},
        {name: 'instagram', family:'FontAwesome'},
        {name: 'github', family:'FontAwesome'},
        {name: 'apple', family:'FontAwesome'},
        {name: 'envelope', family:'FontAwesome'},
        {name: 'phone', family:'FontAwesome'},
        {name: 'info-circle', family:'FontAwesome'},
        {name: 'plus-circle', family:'FontAwesome'},
        {name: 'minus-circle', family:'FontAwesome'},
        {name: 'check-circle', family:'FontAwesome'},
        {name: 'cancel', family:'MaterialIcons'},
      ];
    const iconList4=[
        
        {name: 'facebook', family:'FontAwesome'},
        {name: 'btc', family:'FontAwesome5'},
        {name: 'bed', family:'FontAwesome'},
        {name: 'chess-knight', family:'FontAwesome5'},
        {name: 'broom', family:'FontAwesome5'},
        {name: 'calculator', family:'FontAwesome'},
        {name: 'cat', family:'FontAwesome5'},
        {name: 'charging-station', family:'FontAwesome5'},
        {name: 'cocktail', family:'FontAwesome5'},
        
    ]
    return(         
        <View>
            <Modal isVisible={params.myIsmodalVisible} 
                useNativeDriver={true}
                onBackdropPress={() => params.setModalVisible(false)}
                >

                <View style={[styles.modalContainer, {backgroundColor: params.currentTheme.backgroundColor}]}>
                    <View style={ {flexDirection:'row'}}>
                    {iconList1.map((iconS,index)=>{
                        return(
                        <TouchableOpacity style={{margin:2}}  key={iconS.name}  onPress={() => handlePress(iconS)}>
                                
                            <Icons type={iconS.family} name={iconS.name} size={30} color={isPressed===iconS.name?'red' : params.currentTheme.color}/>
                            
                        </TouchableOpacity >
                        )
                    })}
                    </View>
                    <View style={ {flexDirection:'row'}}>
                    {iconList2.map((iconS,index)=>{
                        return(
                        <TouchableOpacity  style={{margin:2}}  key={iconS.name}  onPress={() => handlePress(iconS)}>
                            <Icons type={iconS.family} name={iconS.name} size={30} color={isPressed===iconS.name?'red' : params.currentTheme.color}/>
                        </TouchableOpacity >
                        )
                    })}
                    </View>
                    <View style={ {flexDirection:'row'}}>
                        {iconList3.map((iconS,index)=>{
                            return(
                                <TouchableOpacity  style={{margin:2}}  key={iconS.name}  onPress={() => handlePress(iconS)}>
                                    <Icons type={iconS.family} name={iconS.name} size={30} color={isPressed===iconS.name?'red' : params.currentTheme.color}/>
                                </TouchableOpacity >
                                )
                        })}
                    </View>
                    <View style={ {flexDirection:'row'}}>
                        {iconList4.map((iconS,index)=>{
                            return(
                                <TouchableOpacity  style={{margin:2}}  key={iconS.name}  onPress={() => handlePress(iconS)}>
                                    <Icons type={iconS.family} name={iconS.name} size={30} color={isPressed===iconS.name?'red' : params.currentTheme.color}/>
                                </TouchableOpacity >
                                )
                        })}
                    </View>
                    
                    
                    
                </View>
                </Modal>  
        </View>
    )
}
const styles = StyleSheet.create({
    modalContainer: {
        //backgroundColor: 'white',
        padding: 20,
        borderRadius: 5,
        alignItems: 'flex-start',
    },
})
export default ChooseIcon;
