import React,{useState, useEffect} from "react";
import {Text, View, StyleSheet, TouchableOpacity,Alert,TextInput} from 'react-native';
import { addUnit, loadUnit, deleteUnit } from "../../Store/database";
import Modal from "react-native-modal";
export default function SelectUnit (params){
    const [isModalVisible, setModalVisible] = useState(false);
    const [isEdit, setIsEdit] = useState(false) 

    // const [unit, setUnit] = useState([
    //     { id: 1, title: 'sec'},
    //     { id: 2, title: 'min'},
    //     { id: 3, title: 'hr'},
    //     { id: 4, title: 'ml'},
    //     { id: 5, title: 'oz'},
    //     { id: 6, title: 'cal'},
    //     { id: 7, title: 'count'},
    //     { id: 8, title: 'steps'},
    //     { id: 9, title: 'm'},
    //     { id: 10, title: 'km'},
    //     { id: 11, title: 'mile'},
    // ])
    const [unit, setUnit] = useState([]);

    useEffect(() => {

        loadUnit(setUnit);
  
    }, []);

    const [newUnit, setNewUnit]= useState('')
    const handleAddUnit = () =>{
        if (unit.find(p=>p.title===newUnit))
            showAlertTag()
        else
            setUnit([...unit, {id: unit.length+1 , title: newUnit}]);
        addUnit(newUnit);
        setNewUnit('');
    }
    const handleDeleteUnit = (id)=>{
        console.log("id",id)
        const newList = [...unit];
        console.log('before',newList)
        newList.filter((obj) => obj.id !== id);
        console.log('after',newList)
        deleteUnit(id)
        setUnit(newList);
        //console.log('after',unit)
    }
    //Thong bao co unit da ton tai
    const showAlertTag = () => {
        Alert.alert(
            'Announce',
            'Unit exists',
          [
            {
              text: 'OK',
              style: 'cancel',
            },
          ],
          {cancelable: false},
        );
      };
    const handlePress= ()=>{
        setIsEdit(prevState => !prevState)
    }
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
                                <View style={{flexDirection:'row'}}>
                                    <TouchableOpacity style={{flex:1, margin:10}} onPress={handlePress}>
                                    {unit.length>=12 &&<Text style={{fontSize: 20,color: params.currentTheme.color }}>{isEdit ? 'Done' : 'Edit'}</Text>}
                                    </TouchableOpacity>
                                    <View style={{ flex: 2,margin:10}}>
                                        <Text style={{color: params.currentTheme.color,fontSize: 20}}>Select Unit</Text>
                                    </View>
                                </View>
                                <View style = {{flexDirection: 'row', flex: 1, flexWrap:'wrap'}}>
                                    {unit.map((value) =>(
                                        <View style={{}}>
                                            <TouchableOpacity style = {[styles.buttonType,{ 
                                            backgroundColor:  (value.title === params.unit.title) ? params.color : ((params.currentTheme.backgroundColor=='#1f1e1e')?'#918e8e':'#f5f5f5')
                                        }]}
                                            key={value.id}
                                            onPress={() => params.setunit(prevState => ({ ...prevState, unit: value}))}
                                            disabled={isEdit}
                                        >
                                            <Text style = {{fontSize:12,color:params.currentTheme.color }}>
                                                {value.title}
                                            </Text>
                                            </TouchableOpacity>
                                            {value.id>=12&& isEdit==true &&<TouchableOpacity style={[styles.delete,{position:'absolute', top:0,left:0}]} onPress={()=>{handleDeleteUnit(value.id)}}>
                                                <Text style={{color:'white',textAlign:'center'}}>x</Text>
                                            </TouchableOpacity>}
                                        </View>
                                        

                                    ))}
                                    <TouchableOpacity style = {[styles.buttonType
                                            ,{backgroundColor:(params.currentTheme.backgroundColor=='#1f1e1e')?'#918e8e':'#f5f5f5'}]}
                                            onPress={() => setModalVisible(true)}
                                            disabled={isEdit}
                                            >
                                        <Text>+</Text>
                                    </TouchableOpacity>
                                    <Modal
                                        isVisible={isModalVisible}
                                        onBackdropPress={() => {setModalVisible(false); if (newUnit!='') handleAddUnit()}}
                                    >
                                         <View style={[styles.modalContainer,{backgroundColor:params.currentTheme.backgroundColor}]}>
                                            <TextInput
                                            style={[styles.input, {textAlign : 'center', color:params.currentTheme.color}]}
                                            placeholder="Enter text here"
                                            value={newUnit}
                                            onChangeText={text => {setNewUnit(text)}}
                                            />
                                            <TouchableOpacity
                                            onPress={() => {setModalVisible(false);if (newUnit!='') handleAddUnit()}}
                                            style={[styles.button, { backgroundColor:params.color}]}>
                                            <Text style={[styles.text,{color: params.currentTheme.color}]}>Done</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </Modal>
        
                                </View>

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
    delete:{
        margin:10,
        borderRadius: 5, 
        width: 10,
        height: 20,
        backgroundColor:'red',
    },
    buttonType:{
        margin:10,
        borderRadius: 10, 
        width: 40,
        height: 20, 
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalContainer: {
        //backgroundColor: 'white',
        padding: 20,
        borderRadius: 5,
        alignItems: 'center',
    },
    input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginTop: 20,
    },
    button :{
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    },

})
