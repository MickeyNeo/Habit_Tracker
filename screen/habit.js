import React from "react";
import { View, Button, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView,Image } from "react-native";
// import hinh 
import eat from './Icon/eat.png';
import breakfast from './Icon/breakfast.png';
import breathe from './Icon/breathe.png';
import burn from './Icon/burn.png';
import exercise from './Icon/exercise.png';
import fruit from './Icon/fruit.png';
import nosugar from './Icon/nosugar.png';
import read from './Icon/read.png';
import stretch from './Icon/stretch.png';
import review from './Icon/review.png';
import study from './Icon/study.png';
import thinking from './Icon/thinking.png';
import vege from './Icon/vege.png';
import workout from './Icon/workout.png';
import swim from './Icon/swim.png';
import walking from './Icon/walking.png';
import running from './Icon/running.png';
import chess from './Icon/chess.png';
import yoga from './Icon/yoga.png';
import cycling from './Icon/cycling.png';
import meditation from './Icon/meditation.png';
import learning from './Icon/learning.png';
import clear from './Icon/clear.png';
import lowfat from './Icon/lowfat.png';
import sleep from './Icon/sleep.png';
import add from './Icon/add.png';



const Habit = ({navigation}) => {
return (
    <View style={styles.container}>

        <View style = {styles.addHabit}>
            <TouchableOpacity  onPress ={() => navigation.navigate("CustomHabit")} style ={styles.customHabit}> 
                <Image
                    source={require('./Icon/add.png')}
                    style={{ width: 40, height: 40,}}
                />
                <Text> Create Your Custom Habit </Text>
            </TouchableOpacity>
        </View>

        <View style ={styles.Habit}>
            <ScrollView>
                <Text style = {{ fontSize: 20, padding: 10, fontWeight: 'bold'}}>Sports</Text>
                <View style = { styles.habitZone}>
                    <View style = {styles.zone}>
                        {TabButton(navigation,"Walking", walking, '#FFAEAE', ['walking', 'FontAwesome5'], 'km')}
                        {TabButton(navigation,"Running", running, 'green', ['running','FontAwesome5'], 'km')}
                        {TabButton(navigation,"Chess", chess, 'grey', ['chess-king','MaterialCommunityIcons'])}
                    </View>

                    <View style = {styles.zone}>
                        {TabButton(navigation,"Stretch", stretch, '#dc143c', ['running','FontAwesome5'])}
                        {TabButton(navigation,"Yoga", yoga, '#ffb6c1', ['yoga','MaterialCommunityIcons'])}
                        {TabButton(navigation,"Cycling", cycling, '#a0522d', ['md-bicycle-sharp','Ionicons'])}
                    </View>

                    <View style = { styles.zone}>
                        {TabButton(navigation,"Swim", swim, '#00ffff', ['swimmer','FontAwesome5'])}
                        {TabButton(navigation,"Burn Calo", burn, '#ff6347', ['burn','FontAwesome5'])}
                        {TabButton(navigation,"Exercise", exercise, '#00ff7f', ['fitness-center','MaterialIcons'])}
                    </View>

                    </View>

                <Text style = {{ fontSize: 20, padding: 10, fontWeight: 'bold'}}>Thought</Text>
                <View style = { styles.habitZone} >
                    <View style = {styles.zone}> 
                        {TabButton(navigation,"Breathe", breathe, '#98fb98', ['running','FontAwesome5'])}
                        {TabButton(navigation,"Meditation", meditation, '#ffa500', ['meditation','MaterialCommunityIcons'])}
                        {TabButton(navigation,"Read book", read, '#7b68ee', ['book-reader','FontAwesome5'])}
                    </View>

                    <View style = {styles.zone}>
                        {TabButton(navigation,"Learning", learning, '#ff8c00', ['brain','MaterialCommunityIcons'])}
                        {TabButton(navigation,"Review", review, '#ffb6c1', ['preview','Fontisto'])}
                        {TabButton(navigation,"Mind Clear", clear, '#ffe4e1', ['clear','MaterialIcons'])}
                    </View>
                </View>

                <Text style = {{ fontSize: 20, padding: 10, fontWeight: 'bold'}}>Health</Text>
                <View style = { styles.habitZone} >
                    <View style = {styles.zone}> 
                        {TabButton(navigation,"Workout", workout, '#ffff00', ['fitness','Ionicons'])}
                        {TabButton(navigation,"Eat Fruit", fruit, '#9acd32', ['fruit-grapes-outline','MaterialCommunityIcons'])}
                        {TabButton(navigation,"Eat Vegetable", vege, '#98fb98', ['running','FontAwesome5'])}
                    </View>

                    <View style = {styles.zone}>
                        {TabButton(navigation,"No Sugar", nosugar, '#afeeee', ['spoon-sugar','MaterialCommunityIcons'])}
                        {TabButton(navigation,"Sleep Early", sleep, '#cd853f', ['sleep','MaterialCommunityIcons'])}
                        {TabButton(navigation,"Eat Low-Fat", lowfat, '#dda0dd', ['running','FontAwesome5'])}
                    </View>

                    <View style = { styles.zone}>
                        {TabButton(navigation,"Eat Breakfast", breakfast, '#db7093', ['breakfast-dining','MaterialIcons'])}
                    </View>
                </View>
            </ScrollView>
        </View>
    </View>
    );
};
const TabButton = (navigation, title, image, color, IconInfo, unit) => {
  return (
    <TouchableOpacity onPress={() => {
        navigation.navigate('AddHabit', {
            name: title,
            colors: color,
            image: image,
            IconInfo: IconInfo,
            unitHabit: unit,
        })
    }} style = {styles.btnHabit}>
    <Image
        source={image}
        style={{ width: 40, height: 40,}}
    />
    <Text style = {{fontSize: 10}}>{title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
    container:{
      flex: 1, 
      //backgroundColor: '#B3D5F2',
      flexDirection: 'column',
    },
    addHabit: { 
        height: '8%',
        width: '100%',
    },
    Habit: {
        flex: 1,
        alignItems: 'stretch',
        width: '100%',
        left: '0%',
    },
    homeZone: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent : 'space-evenly',
      backgroundColor: '#BEABAB',
      position: 'absolute',
      width: '100%',
      height: '10%',
      top: '90%',
      left: '0%',
      padding: 0,
    },
    textHabit: {
        fontSize: 12,
        alignSelf: 'flex-start',
        color: 'red',
    },
    customHabit: {
        flex: 0.4,
        flexDirection: 'row',
        borderRadius: 10,
        alignItems: 'center',
        alignSelf: 'flex-start',
        padding: 2,
        backgroundColor: '#f5f5f5',
        left: '20%',
        right: '20%',
        width: '60%',
        top: '5%',
    },
    btnHabit : {
        justifyContent: 'center',
        borderRadius: 100,
        width : 90,
        height: 90,
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#F3ACB4',
    },
    habitZone: {
        flexDirection: 'column',

    },
    zone: {
        flexDirection :'row',
        justifyContent : 'space-evenly',
        padding: 10,
    }
});

export default Habit;