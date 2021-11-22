import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,Button,TouchableOpacity,ImageBackground } from 'react-native';

export default function Qrcode({navigation}){
    return(
      <View style={styles.container}>  
      <ImageBackground source={require('../assets/lockers.jpg')} style={{width: '100%', height: '100%',overflow : "hidden"}}> 
      
       <TouchableOpacity 
       style={{top:7}}
        onPress={() => navigation.goBack(null)}>
      <Text
            style={styles.text}
          >x</Text>
          </TouchableOpacity>
          
        <StatusBar style="auto" />
        <Image
                source={{uri:'https://img.icons8.com/external-prettycons-solid-prettycons/60/ffffff/external-qr-code-shopping-prettycons-solid-prettycons.png'}}
                style={styles.icon}
            />
            </ImageBackground>
        <TouchableOpacity 
        style={styles.button}>
          <Text style={{color: 'white', textAlign:'center', top:15}}>Scan Qr Code</Text>
          </TouchableOpacity>
        </View>
        
    )
  }

  const styles = StyleSheet.create({
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
      width: 120,
      height:50,
      borderRadius: 15,
      top:-250,
      left:125,
      marginBottom:10,
      resizeMode: 'stretch',
      backgroundColor:'#824ef2',
  
},
    text:{
      color:'white',
      left:10,
      top:7,
      fontSize:18,      
      fontWeight:'bold',  
    },
    icon: { 
      height: 120,
      width: 120,
      alignSelf: 'center',
      margin:22,
      top:160,
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