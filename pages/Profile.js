import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity,Button } from 'react-native';
import BoxContainer from '../components/BoxContainer';


  const image_path =  '../assets/image.jpg';
  const name = 'Adil Kasbaoui';
  const level = 'beginner'; 
  const total_time = '02:30:15';
  const burned_calories = 7200;
  const points_collected = 1200; 
 
export default function Profile({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack(null)}>
      <Image
            source={{
              uri:
                'https://img.icons8.com/material-outlined/24/ffffff/back--v1.png',
            }}
            style={styles.icon}
          />
          <Text style={styles.text1}>Back</Text>
          </TouchableOpacity>
      <Text style={styles.text}>My profil</Text>
      
      <Image
      source={require(image_path)}
      style={styles.image}
      />
      <View style={styles.backcamera}>
        <TouchableOpacity >
            <Image
                source={{uri:'https://img.icons8.com/ffffff/camera'}}
                style={styles.camera}
            />
            </TouchableOpacity >
            </View>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.level}>{level}</Text>
            <TouchableOpacity style={styles.button}>
            <Text style={styles.edit} >Edit profil</Text>
        </TouchableOpacity>
        <BoxContainer style={styles.container1}>
        <Text style={styles.list}> Total time</Text>
        <Text style={styles.list1}>{total_time}</Text>
        <Image
                source={{uri:'https://img.icons8.com/fluency-systems-filled/48/4a90e2/alarm-clock.png'}}
                style={styles.icon1}
            /> 
        </BoxContainer>
        <BoxContainer style={styles.container1}>
        <Text style={styles.list}> Burned Calories</Text>
        <Text style={styles.list1}>{burned_calories} cal</Text>
        <Image
                source={{uri:'https://img.icons8.com/ios-glyphs/24/f5bb27/fire-element--v1.png'}}
                style={styles.icon1}
            />
        </BoxContainer>
        <BoxContainer style={styles.container1}>
        <Text style={styles.list}> Points Collected</Text>
        <Text style={styles.list1}>{points_collected} points</Text>
        <Image
                source={{uri:'https://img.icons8.com/ios-filled/50/4a90e2/diamond--v1.png'}}
                style={styles.icon1}
            />
        </BoxContainer>

      <StatusBar style="auto" />
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
                source={{uri:'https://img.icons8.com/material-outlined/24/ffffff/wallet.png'}}
                style={styles.icon}
            />
            </TouchableOpacity> 
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image
                source={{uri:'https://img.icons8.com/ios/50/FF5A45/user--v1.png'}}
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
  button:{ 
    width: 80,
    borderRadius: 100,
    top:-5,
    marginBottom:10,
    alignSelf:'center',
    resizeMode: 'stretch',
    borderWidth:1,
    backgroundColor:'#c7291e',
},
  text1:{
    position:'absolute',
    left:50,
    color:'#FFFFFF',
    marginTop:25,
    fontWeight: 'bold',
},
  container: {
    flex: 1,
    top:21,
    backgroundColor: '#131112',
  },
  image: {
    width:100,
    height:100,
    left:'35%',
    top:-10,
    borderRadius: 150 / 2,
    overflow: "hidden",
    resizeMode:"cover"
  },
  text:{
    color:'white',
    left:25,
    top:-15,
    alignItems: 'center',
    fontSize:25,
    fontWeight: 'bold',  
  },
  name:{
    top:-10,
    color:'white',
    textAlign:'center',
    alignItems: 'center',
    fontSize:18,
    fontWeight: 'bold',  
  },
  edit:{
    color:'white',
    textAlign:'center',
    alignItems: 'center',
    fontSize:15,
    fontWeight: 'bold',  
  },
  level:{
    top:-10,
    color:'grey',
    textAlign:'center',
    alignItems: 'center',
    fontSize:16,
    fontWeight: 'bold',   
  },
  list:{
    position: 'absolute',
    top: 8,
    left: 30,
    color:'grey',
    fontSize:14,
    fontWeight: 'bold',   
  },
  list1:{
    color:'white',
    fontSize:19,
    position: 'absolute',
    top: 32,
    left: 35,
    fontWeight: 'bold',  
  },
  cont:{
    position:'absolute',
    left:10, 
    top:560,
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: { 
    height: 25,
    width: 25,
    margin:22,
    resizeMode: 'stretch',
},
icon1: { 
  height: 25,
  width: 25,
  left:100,
  resizeMode: 'stretch',
},
container1: {
      left:20,
      backgroundColor: '#252625',
      height : 70,
      width:'85%',
      borderRadius: 20,
      resizeMode: 'stretch',
    },
camera: { 
  height: 25,
  width: 25,
  top:4,
  left:4,
},
backcamera:{
  height: 33,
  width: 33,
  left:'52%',
  top:-10,
  marginTop:-25,
  borderRadius: 70,
  resizeMode: 'stretch',
  backgroundColor:'#4F4F4F',
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
}
  
});
