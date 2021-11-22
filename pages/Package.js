import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native';


export default function Package({navigation}) {
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
      <Text style={styles.text}>Welcome to Package Page</Text>
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
                source={{uri:'https://img.icons8.com/ios/50/ffffff/user--v1.png'}}
                style={styles.icon}
            />      
            </TouchableOpacity> 
            <TouchableOpacity onPress={() => navigation.navigate('Package')}>
            <Image
                source={{uri:'https://img.icons8.com/metro/26/FF5A45/package.png'}}
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
  text1:{
    position:'absolute',
    left:50,
    color:'#FFFFFF',
    marginTop:25,
},
  container: {
    flex: 1,
    top:21,
    backgroundColor: '#131112',
  },
  text:{
    color:'white',
    top:69,
    left:25,
    alignItems: 'center',
    fontSize:25,
    fontStyle:'italic',  
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
