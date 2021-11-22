import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image,Button,TouchableOpacity, FlatList } from 'react-native';
import BoxContainer from '../components/BoxContainer';

const DATA = [
  {
    id:1,
    exercice: '20 X Jump rope',
    time: '02:00',
    image :"https://img.icons8.com/material-outlined/24/4a90e2/checkmark.png"
  },
  {
    id:2,
    exercice: '20 X Jump rope',
    time: '02:00',
    image :"https://img.icons8.com/material-outlined/24/4a90e2/checkmark.png"
  },
  {
    id:3,
    exercice: '20 X Squat thrust split jumps',
    time: '02:00',
    image :"https://img.icons8.com/material-sharp/24/FF5A45/play--v1.png"
  },
  {
    id:4,
    exercice: '20 X Squat thrust split jumps',
    time: '02:00',
    image :"https://img.icons8.com/material-sharp/24/FF5A45/play--v1.png"
  }
];



export default function Workout({navigation}) {
  const renderItem = ({ item}) => (
    <TouchableOpacity onPress={() => navigation.push('Workoutdetails',item)} >
    <BoxContainer style={styles.container1}>       
          
          <Text style={styles.list}> {item.exercice}</Text>
          <Text style={styles.list1}> {item.time}</Text>
          <Image
                  source={{uri:item.image}}
                  style={styles.icon1}
              />
          </BoxContainer>
    </TouchableOpacity>
  );
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

      <Text style={styles.text}>My workout week</Text>
      <View style={styles.border1}></View>
      <StatusBar style="auto" />
      <View style={styles.flat}></View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
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
  edit:{
    height: 30,
    width: 30,
    top:10,
    left:10,
    resizeMode: 'stretch',  
  },
  list:{
    position: 'absolute',
    top: 12,
    left: 15,
    color:'white',
    fontSize:15,
    fontWeight: 'bold',   
  },
  list1:{
    color:'grey',
    fontSize:14,
    position: 'absolute',
    top: 37,
    left: 15,
    fontWeight: 'bold',  
  },
  icon1: { 
    height: 25,
    width: 25,
    left:120,
    resizeMode: 'stretch',
  },
  flat:{
    padding:20,
  },
  container1: {
        left:20,
        backgroundColor: '#252625',
        height : 70,
        width:'85%',
        borderRadius: 20,
        resizeMode: 'stretch',
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
    top:-15,
    alignItems: 'center',
    textAlign:'center',
    fontSize:25,
    fontWeight: 'bold',
  },
    button:{ 
      width: 50,
      height:50,
      borderRadius: 100,
      top:-90,
      right:-300,
      marginBottom:10,
      resizeMode: 'stretch',
      backgroundColor:'#824ef2',
  
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
