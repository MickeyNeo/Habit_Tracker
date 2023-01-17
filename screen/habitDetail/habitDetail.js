import React ,{useState} from "react";
import { View, Dimensions, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView,Image } from "react-native";
import {
    ProgressChart,
  } from "react-native-chart-kit";
import {useStore} from '../../Store';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

// import hinh 
import stopwatch from '../Icon/stopwatch.png';
import memo from '../Icon/memo.png';
import stat from '../Icon/stat.png';
import sound from '../Icon/sound.png';
import style from '../Icon/style.png';
import CountDown from './countdown/countdown'
import Stat from './Stat';  
import Memo from './Memo';
import plus from '../Icon/plus.png';
import play from '../Icon/play.png';
import replay from '../Icon/replay.png';
const HabitDetail = ({navigation,route}) => {
    const [onClock, setOnClock] = useState(false);
    const {habit} = route.params;
    const [showCountdown, setshowCountdown] = useState(false)
    const[state, dispatch] = useStore()

    const data = {
        label: ['Progress'],
        // data: state.progressData
        data: [state.progressData]
    }
    const chartConfig = {
        backgroundGradientFrom: "white",
        backgroundGradientFromOpacity: 1,
        backgroundGradientTo: "white",
        backgroundGradientToOpacity: 1,
        color: (opacity = 1) => `rgba(138, 126, 164, ${opacity})`,
        // strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
    };
    // if(habit.)
    console.log(habit)
    return (
        <View style={styles.container}>
            {
                showCountdown ? (
                    <View style = {styles.showView}>
                        <View style = {{flex: 0.85}}>
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
                        </View>
                        
                        <View style={styles.functionZone}>
                            {TabButton(navigation,"Style", style)}
                            {TabButton(navigation,"Sound", sound)}
                            {TabButton(navigation,"Stopwatch", stopwatch)}
                            {TabButton(navigation,"Memo", memo)}
                            {TabButton(navigation,"Stat", stat)}
                        </View>
                    </View>
                ):(
                    <View style = {styles.showView}>
                        <View style = {{flexDirection: 'column',alignItems:'center', top: '10%'}}>
                            <ProgressChart
                                data={data}
                                width={Dimensions.get('window').width-40}
                                height={320}
                                strokeWidth={10}
                                radius={140}
                                chartConfig={chartConfig}
                                hideLegend={true}
                            />
                            <Text>Progress rate: {data.data[0]*100}%</Text>
                        </View>
                        <View style = {styles.insideCircle}>
                            <View style = {{flexDirection: 'column'}}>
                                <Text style = {{color: 'black', fontSize: 27}}>0 steps</Text>
                                <Text>/1000</Text>
                            </View>
                            <TouchableOpacity>
                                <FontAwesome5 style={{marginHorizontal: 5}} 
                                            name={'plus'} 
                                            size={20} 
                                            color='gray' />
                            </TouchableOpacity>
                        </View>
                        <View style = {{top: '15%',flexDirection: 'row', justifyContent: 'center', alignItems: 'stretch',}}> 
                                <TouchableOpacity >
                                <Image
                                    source={plus}
                                    style={{ width: 30, height: 30, borderRadius: 100, backgroundColor: '#f5f5f5',right: 10}}
                                />
                                </TouchableOpacity>
                                <TouchableOpacity >
                                <Image
                                    source={replay}
                                    style={{ width: 30, height: 30,borderRadius: 100, backgroundColor: '#f5f5f5', left: 10}}
                                />
                                </TouchableOpacity>
                            </View> 
                        <View style={styles.functionZone}>
                            {TabButton(navigation,"Memo", memo)}
                            {TabButton(navigation,"Stat", stat)}
                        </View>
                    </View>
                )
            }
            
                

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
    showView:{
        flex: 1,
        flexDirection: 'column'
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
        bottom: 150,
        left: '2%',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default HabitDetail;