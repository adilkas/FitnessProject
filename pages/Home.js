import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,Button,TouchableOpacity,ImageBackground } from 'react-native';

const image = { uri: "../assets/workout.jpg" };

export default function Home({navigation}){
    return(
      <View style={styles.container}>  
      <ImageBackground source={require('../assets/workout.jpg')} style={{width: '100%', height: '100%'}}>
      </ImageBackground>
        <Text style={styles.text}>Welcome to your Fitness App</Text>
        <StatusBar style="auto" />
        <View style={styles.button}>
        <Button 
        title="Start My Workout"
        onPress={() => navigation.navigate('Workout')}
        color='#c7291e'
        />
        </View>
        <View style={styles.cont}> 
            <View style={styles.border}></View>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image
                source={{uri:'https://img.icons8.com/fluency-systems-regular/50/FF5A45/home.png'}}
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
        
    )
  }

  const styles = StyleSheet.create({
    text1:{
      position:'absolute',
      left:50,
      color:'#FFFFFF',
      marginTop:25,
  },
    cont:{
      position:'absolute',
      left:10, 
      top:560,
      flex:1,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    container: {
      flex: 1,
      top:21,
      backgroundColor: '#131112',
    },
    button:{
        position:'absolute',
        marginTop:450,
        alignSelf:'center',
        padding:10,
    },
    image: {
      flex: 1,
      justifyContent: "center"
    },
    text:{
      color:'white',
      top:100,
      left:25,
      alignItems: 'center',
      fontSize:25,
      fontWeight:'bold',  
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
}
    
  });