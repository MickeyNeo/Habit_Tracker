import React ,{useState,useRef, useEffect} from "react";
import { View, Dimensions, Text, StyleSheet, TouchableOpacity,Button, ScrollView, SafeAreaView,Image, TextInput,Alert } from "react-native";
import {
    ProgressChart,
  } from "react-native-chart-kit";
import {useStore} from '../../Store';
import { editListProgressDay } from "../../Store";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Modal from "react-native-modal";
// import hinh 
import stopwatch from '../Icon/stopwatch.png';
import memo from '../Icon/memo.png';
import stat from '../Icon/stat.png';
import sound from '../Icon/sound.png';
import style from '../Icon/style.png';
//import CountDown from './countdown/countdown'
import CountDown from "react-native-countdown-component";
import plus from '../Icon/plus.png';
import play from '../Icon/play.png';
import pause from '../Icon/pause.png';
import replay from '../Icon/replay.png';    
import moment from 'moment';

const HabitDetail = ({navigation,route}) => {
    const[state, dispatch] = useStore()
    const [onClock, setOnClock] = useState(false);
    const {habit, checkShow} = route.params;
    
    const [showCountdown, setshowCountdown] = useState(checkShow)
    //CountDown
    const [timeCountDown,setTimeCountDown] =useState(()=>{
        if (habit.unitID.title == 'sec') return habit.goalNo-habit.progress  
        if (habit.unitID.title == 'min')  return habit.goalNo*60-habit.progress  
        if (habit.unitID.title == 'hr' ) return habit.goalNo*3600-habit.progress  
    })
    //const [timeCount, setTimeCount] = useState(0)
    const handleTime =(time)=>{ 
        if (habit.unitID.title == 'sec') return time  
        if (habit.unitID.title == 'min')  return time*60
        if (habit.unitID.title == 'hr' ) return time*3600
    }
    //Count
    const [count,setCount] =useState(habit.progress)
    const [value, setValue] = useState(0);
    
    const [modalVisible, setModalVisible] = useState(false);
    //Memo
    const [memoText,setMemoText] =useState(habit.content)
    
    const data = {
        label: ['Progress'],
        // data: state.progressData
        data: [count/habit.goalNo]
    }
    const chartConfig = {
        backgroundGradientFrom: "white",
        backgroundGradientFromOpacity: 1,
        backgroundGradientTo: "white",
        backgroundGradientToOpacity: 1,
        color: (opacity = 1) => `rgba(138, 126, 164, ${opacity})`,
        // strokeWidth: 2, // optional, default 3
        //barPercentage: count/habit.goalNo,
        useShadowColorFromDataset: false // optional
    };
    
    // console.log(habit.id,habit.day,count,memoText)
    // console.log(habit)
    // console.log(state.listProgressDay)
    //Hiện thông báo confirm
    const showAlert = () => {
        Alert.alert(
            'Confirm',
            'Do you want to reset this habit for today?',
          [
            {
              text: 'Cancel',
              //onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => {setCount(0),handleEdit(habit.name,habit.date,0,memoText)}},
          ],
          {cancelable: false},
        );
      };
    //Hiện thông báo confirm

    const showAlertTime = () => {
        Alert.alert(
            'Confirm',
            'Do you want to reset this habit for today?',
          [
            {
              text: 'Cancel',
              //onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => setTimeCountDown()},
          ],
          {cancelable: false},
        );
      };

    const handleEdit=(name,day,count,memo)=>{
        dispatch(editListProgressDay(state.listProgressDay.map(item => {
            if (item.habitName === name && item.date===day) {
              return { ...item, progress:count, content:memo};
            }
            return item
            })))
    }
    
    //handleEdit(habit.id,habit.day,count,memoText)
    return (
        <View style={styles.container}>
            {      
                checkShow ? (
                    <View style = {styles.showView}>
                        <View style = {{flex: 0.85}}>
                            <View style={styles.countdown} >
                                <CountDown
                                    until={timeCountDown}
                                    size={35}
                                    onFinish={() => alert('Finished')}
                                    digitStyle={{backgroundColor: '#FFF', borderWidth: 2, borderColor: '#1CC625'}}
                                    digitTxtStyle={{color: '#1CC625'}}
                                    timeLabelStyle={{color: 'red', fontWeight: 'bold'}}
                                    //separatorStyle={{color: '#1CC625'}}
                                    timeToShow={['H', 'M', 'S']}
                                    timeLabels={{h:'HH',m: 'MM', s: 'SS'}}
                                    running = {onClock}
                                    onChange={(time)=>  {if (onClock &&count!==timeCountDown)  {setCount(count+1),handleEdit(habit.name,habit.date,count+1,memoText) }}}
                                    //showSeparator
                                />
                                
                            </View>

                            <View style = {{flexDirection: 'row', justifyContent: 'center', alignItems: 'center',}}> 
                                {/* <TouchableOpacity >
                                <Image
                                    source={plus}
                                    style={{ width: 30, height: 30, borderRadius: 100, backgroundColor: '#f5f5f5'}}
                                />
                                </TouchableOpacity> */}
                                <TouchableOpacity onPress = {() => setOnClock(!onClock)} >
                                <Image
                                    source={onClock?pause:play}
                                    style={{ width: 40, height: 40,}}
                                />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={showAlertTime} >
                                <Image
                                    source={replay}
                                    style={{ width: 30, height: 30,borderRadius: 100, backgroundColor: '#f5f5f5'}}
                                />
                                </TouchableOpacity>
                            </View> 
                        </View>
                        
                        <View style={styles.functionZone}>
                            {/* {TabButton(navigation,"Style", style)}
                            {TabButton(navigation,"Sound", sound)}
                            {TabButton(navigation,"Stopwatch", stopwatch)} */}
                           {TabButtonMemo(memoText,setMemoText,memo,handleEdit,habit,count,memoText)}
                           {TabButtonStat(navigation,"Stat", stat,habit)}
                        </View>
                    </View>
                ):(
                    <View style = {styles.showView}>
                        <View style = {{flexDirection: 'column',alignItems:'center', top: '10%'}}>
                            <ProgressChart
                                data={data}
                                width={Dimensions.get('window').width-40}
                                height={420}
                                strokeWidth={10}
                                radius={140}
                                chartConfig={chartConfig}
                                hideLegend={true}
                            />
                            <Text>Progress rate: {data.data[0]*100}%</Text>
                            
                        </View>
                        <View style = {styles.insideCircle}>
                            {count!=0 &&(<TouchableOpacity  onPress={() => {setCount(count - 1),handleEdit(habit.name,habit.date,count-1,memoText)}}>
                                    <FontAwesome5 style={{marginHorizontal: 5}} 
                                                name={'minus'} 
                                                size={20} 
                                                color='gray' />
                            </TouchableOpacity>)}
                            <View style = {{flexDirection: 'column'}}>
                                <Text style = {{color: 'black', fontSize: 27}}>{count} {habit.unitID.title}</Text>
                                <Text>/{habit.goalNo}</Text>
                            </View>
                            <TouchableOpacity onPress={() => {setCount(prevState => prevState+1),handleEdit(habit.name,habit.date,count+1,memoText)}}>
                                
                                <FontAwesome5 style={{marginHorizontal: 5}} 
                                            name={'plus'} 
                                            size={20} 
                                            color='gray' />
                            </TouchableOpacity>
                        </View>
                        <View style = {{top: '8%',flexDirection: 'column', justifyContent: 'center', alignItems: 'center',}}>
                            {/* <TextInput
                                    style = {{ height: 40, 
                                    width: '50%', 
                                    margin: 5,
                                    //flex: 0.2,
                                    borderRadius: 10,
                                    padding: 10,
                                    backgroundColor: '#f5f5f5', 
                                    color: '#a9a9a9',
                                    top: '5%',
                                    }}
                                    placeholder="Type your memo here!!!"
                                    onChangeText={newText => setText(newText)}
                                    //defaultValue='0'
                            />  */}
                            <View style = {{flexDirection: 'row'}}>
                                <TouchableOpacity onPress={() => {setModalVisible(true)}}>
                                <Image
                                    source={plus}
                                    style={{ width: 30, height: 30, borderRadius: 100, backgroundColor: '#f5f5f5',right: 10}}
                                />
                                <Modal
                                    isVisible={modalVisible}
                                    onBackdropPress={() => {setModalVisible(false)}}
                                >
                                    <View style={styles.modalContainer}>
                                    <TextInput
                                      style={styles.input}
                                        //placeholder={Value} {habit.unitID.title}
                                        //ref={inputRef}
                                        keyboardType="numeric"
                                        value={value}
                                        onChangeText={number => setValue(number)}
                                    />
                                    <TouchableOpacity
                                      onPress={() => {setModalVisible(false),setCount(count+value*1),handleEdit(habit.name,habit.date,count+value*1,memoText),setValue(0)}}
                                      style={[styles.button,{backgroundColor:habit.color}]}
                                    >
                                      <Text style={styles.text}>Done</Text>
                                    </TouchableOpacity>
                                    </View>

                                </Modal>
                                </TouchableOpacity>
                                <TouchableOpacity  onPress={showAlert}>
                                <Image
                                    source={replay}
                                    style={{ width: 30, height: 30,borderRadius: 100, backgroundColor: '#f5f5f5', left: 10}}
                                />
                                </TouchableOpacity>
                                </View>
                                
                        </View> 
                        <View style={styles.functionZone}>
                            {TabButtonMemo(memoText,setMemoText,memo,handleEdit,habit,count,memoText)}
                            {TabButtonStat(navigation,"Stat", stat,habit)}
                        </View>
                    </View>
                )
            }
            
                

            </View>
        );
};
const TabButtonMemo = (memo, setMemo,pic,handleEdit,habit,count,memoText) => {
const [isEnabled, setIsEnabled] = useState(false);
  return (
    <TouchableOpacity style = {styles.btnTouch}
        onPress ={() => {setIsEnabled(true)}}>
        <Modal
            isVisible={isEnabled}
            onBackdropPress={() => {setIsEnabled(false)}}
            >
            <View style={styles.modalContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Input your memo here"
                    value={memo}
                    onChangeText={text => setMemo(text)}
                />
                <TouchableOpacity
                    onPress={() => {setIsEnabled(false),handleEdit(habit.name,habit.date,count,memoText)}}
                    style={[styles.button,{backgroundColor:'blue'}]}
                >
                    <Text style={styles.text}>Done</Text>
                </TouchableOpacity>
            </View>
            
            
            </Modal>  
    <Image
        source={pic}
        style={{ width: 30, height: 30, borderRadius: 100, backgroundColor: '#f5f5f5',}}
    />
    <Text style = {{fontSize: 10}}>Memo</Text>
    </TouchableOpacity>
  );
}
const TabButtonStat =(navigation, title, pic,habit)=>{
    return (
        <TouchableOpacity style = {styles.btnTouch} 
        onPress={() => 
        navigation.navigate('HabitOfADay', {
                                    habit: habit,
                                })}>  
        <Image
            source={pic}
            style={{ width: 30, height: 30, borderRadius: 100, backgroundColor: '#f5f5f5',}}
        />
        <Text style = {{fontSize: 10}}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
      flex: 1, 
      backgroundColor: 'white',
      flexDirection: 'column',
    },
    showView:{
        flex: 1,
        flexDirection: 'column',
    },
    countdown: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    clock: {
        backgroundColor: '#a9a9a9',
    },
    btnTouch :
    {
        width: 60,
        heigh: 60,
        alignItems: 'center',
    },
    functionZone: {
        position: 'absolute',
        width: '100%',
        height: '10%',
        top: '90%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    insideCircle: {
        flexDirection: 'row',
        position: 'relative',
        bottom: 170,
        left: '1%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        backgroundColor: 'white',
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
    text: {
    color: 'white',
    fontWeight: 'bold',
    },
    button: {
        //backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
      },
});

export default HabitDetail;