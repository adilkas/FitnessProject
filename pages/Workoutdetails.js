import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image,Button,TouchableOpacity, ImageBackground } from 'react-native';
import BoxContainer from '../components/BoxContainer';


export default function Workoutdetails({navigation,route}) {
  let data = route.params;
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/jumping.jpg')} style={{zIndex: -1,width: '100%', height: '70%',opacity:0.5}}>
      <TouchableOpacity 
      onPress={() => navigation.goBack(null)}>
      <Image
            source={{
              uri:
                'https://img.icons8.com/material-outlined/24/ffffff/back--v1.png',
            }}
            style={styles.icon}
          />
          <Text style={styles.text1}>Back</Text>
      </TouchableOpacity>       
      </ImageBackground>
      <StatusBar style="auto" />
      <BoxContainer style={styles.container1}>
        <View style={{backgroundColor:'#FE7762',
        height : 90,
        width:'80%',
        position: 'absolute',
        left:0,
        borderRadius: 20,
        resizeMode: 'stretch',}}>
        <Text style={styles.exercice}>{data.exercice}</Text>
        <Text style={styles.exercice}>Details about it</Text>
        </View>
        <Text 
        style={{color:'#FE7762',
                left:130,
                alignItems: 'center',
                fontSize:18,
                fontWeight:'bold'}}>65%</Text>
        </BoxContainer>
        <Text style={styles.time}>{data.time}</Text>
        
        <View style={{flexDirection:'row',justifyContent:'space-evenly',width:'70%',left:55,top:-10}}>
        <TouchableOpacity>
        <Image 
        source={{uri:'https://img.icons8.com/glyph-neue/64/ffffff/replay.png'}}
                style={styles.edit1}
        />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image 
        source={{uri:'https://img.icons8.com/ios-glyphs/30/ffffff/skip-to-start--v1.png'}}
                style={styles.edit1}
        />
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.button2}>
        <View style={styles.button1}>
        <Image 
        source={{uri:'https://img.icons8.com/ios-glyphs/30/ffffff/pause--v1.png'}}
                style={styles.edit2}
                
        />
        </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image 
        source={{uri:'https://img.icons8.com/ios-glyphs/30/ffffff/end--v1.png'}}
                style={styles.edit1}
        />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image
        source={{uri:'https://img.icons8.com/ios-glyphs/30/ffffff/stop.png'}}
                style={styles.edit1}
        />
        </TouchableOpacity>
        </View>
        
      <TouchableOpacity 
      onPress={() => navigation.navigate('Qrcode')}
      style={styles.button}>
      <Image
                source={{uri:'https://img.icons8.com/ios-glyphs/30/ffffff/qr-code--v1.png'}}
                style={styles.edit}
            />
        </TouchableOpacity>
      <View style={styles.cont}> 
            <View style={styles.border}></View>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image
                source={{uri:'https://img.icons8.com/fluency-systems-regular/50/ffffff/home.png'}}
                style={styles.icon}
            />
            </TouchableOpacity> 
            <TouchableOpacity onPress={() => navigation.navigate('Workout')}>
            <Image
                source={{uri:'https://img.icons8.com/material-outlined/24/FF5A45/wallet.png'}}
                style={styles.icon}
            />
            </TouchableOpacity> 
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image
                source={{uri:'https://img.icons8.com/ios/50/ffffff/user--v1.png'}}
                style={styles.icon}
            />      
            </TouchableOpacity> 
            <TouchableOpacity onPress={() => navigation.navigate('Package')}>
            <Image
                source={{uri:'https://img.icons8.com/metro/26/ffffff/package.png'}}
                style={styles.icon}
            />
            </TouchableOpacity> 
            <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
            <Image
                source={{uri:'https://img.icons8.com/windows/32/ffffff/appointment-reminders--v1.png'}}
                style={styles.icon}
            />
            </TouchableOpacity> 
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    flexDirection:'row',
    top:-160,
    left:15,
    backgroundColor: '#252625',
    height : 90,
    width:'90%',
    borderRadius: 20,
    resizeMode: 'stretch',
  },
  edit:{
    height: 30,
    width: 30,
    top:10,
    left:10,
    resizeMode: 'stretch',  
  },
  edit1:{
    height: 30,
    width: 30,
    top:-130,
    //left:60,
    resizeMode: 'stretch',  
  },
  edit2:{
    height: 30,
    width: 30,
    top:10,
    left:10,
    resizeMode: 'stretch',  
  },
  text1:{
    position:'absolute',
    left:50,
    color:'#FFFFFF',
    marginTop:25,
    fontWeight:'bold'
},
  container: {
    flex: 1,
    top:21,
    backgroundColor: '#131112',
  },
  cont:{
    position:'absolute',
    left:10, 
    top:560,
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text:{
    color:'white',
    left:90,
    alignItems: 'center',
    fontSize:25,
    fontWeight:'bold'
  },
  exercice:{
    color:'white',
    left:10,
    alignItems: 'center',
    fontSize:16,
    top:20,
    fontWeight:'bold'
  },
  time:{
    color:'white',
    textAlign:'center',
    top:-158,
    fontSize:30,
    fontWeight:'bold'
  },
  button:{ 
    width: 50,
    height:50,
    borderRadius: 100,
    top:-150,
    right:-300,
    marginBottom:10,
    resizeMode: 'stretch',
    backgroundColor:'#824ef2',
},
button1:{ 
  width: 50,
  height:50,
  borderRadius: 100,
  top:5,
  left:5,
  backgroundColor:'#824ef2',
},
button2:{ 
  width:60,
  height:60,
  borderRadius: 100,
  top:-145,
  backgroundColor:'grey',
  opacity:0.9,
},
  icon: { 
    height: 25,
    width: 25,
    margin:22,
    resizeMode: 'stretch',
},
border: {
    position:'absolute', 
    left:15,
    borderBottomColor: '#3F3F3F',
    borderBottomWidth: 1,
    borderWidth: 0.5,
    width:'90%',
    justifyContent: 'center',
    alignItems: 'center',
},
border1: {
  position:'absolute', 
  left:23,
  top:115,
  borderBottomColor: '#3F3F3F',
  borderBottomWidth: 1,
  borderWidth: 0.5,
  width:'89%',
  justifyContent: 'center',
  alignItems: 'center',
}
  
});
