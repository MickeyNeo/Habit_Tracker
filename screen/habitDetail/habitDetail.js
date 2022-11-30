import React ,{useState} from "react";
import { View, Button, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView,Image } from "react-native";
// import hinh 
import stopwatch from '../Icon/stopwatch.png';
import memo from '../Icon/memo.png';
import stat from '../Icon/stat.png';
import sound from '../Icon/sound.png';
import style from '../Icon/style.png';
import CountDown from 'react-native-countdown-component';
import Stat from './Stat';
import Memo from './Memo';
import plus from '../Icon/plus.png';
import play from '../Icon/play.png';
import replay from '../Icon/replay.png';
const HabitDetail = ({navigation}) => {
    const [onClock, setOnClock] = useState(false);
return (
    <View style={styles.container}>
        <View style={styles.countdown} >
        <CountDown
            until={60 * 10 + 30}
            size={30}
            onFinish={() => alert('Finished')}
            digitStyle={{backgroundColor: '#FFF', borderWidth: 2, borderColor: '#1CC625'}}
            digitTxtStyle={{color: '#1CC625'}}
            timeLabelStyle={{color: 'red', fontWeight: 'bold'}}
            //separatorStyle={{color: '#1CC625'}}
            timeToShow={['M', 'S']}
            timeLabels={{m: 'MM', s: 'SS'}}
            running = {onClock}
            //showSeparator
        />
        </View>

        <View style = {{flexDirection: 'row', justifyContent: 'center', alignItems: 'center',}}> 
            <TouchableOpacity >
            <Image
                source={plus}
                style={{ width: 30, height: 30, borderRadius: 100, backgroundColor: '#f5f5f5'}}
            />
            </TouchableOpacity>
            <TouchableOpacity onPress = {() => setOnClock(!onClock)} >
            <Image
                source={play}
                style={{ width: 40, height: 40,}}
            />
            </TouchableOpacity>
            <TouchableOpacity >
            <Image
                source={replay}
                style={{ width: 30, height: 30,borderRadius: 100, backgroundColor: '#f5f5f5'}}
            />
            </TouchableOpacity>
        </View>
        <View style={styles.functionZone}>
            {TabButton(navigation,"Style", style)}
            {TabButton(navigation,"Sound", sound)}
            {TabButton(navigation,"Stopwatch", stopwatch)}
            {TabButton(navigation,"Memo", memo)}
            {TabButton(navigation,"Stat", stat)}
        </View>

    </View>
    );
};
const TabButton = (navigation, title, image) => {
const [isEnabled, setIsEnabled] = useState(false);
  return (
    <TouchableOpacity style = {styles.btnTouch}
        onPress ={() => {
                    setIsEnabled(!isEnabled)
                    }}
                    > 
                    {isEnabled && title == 'Memo' && <Memo
                        myIsmodalVisible = {isEnabled}
                        setModalVisible = {setIsEnabled}
                    ></Memo> }
                    {isEnabled && title == 'Stat' && <Stat 
                        myIsmodalVisible = {isEnabled}
                        setModalVisible = {setIsEnabled}
                    ></Stat> }   
    <Image
        source={image}
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
    countdown: {
        flex: 0.85,
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
});

export default HabitDetail;