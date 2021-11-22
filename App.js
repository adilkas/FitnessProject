import React from 'react';
import Home from './pages/Home';
import Workout from './pages/Workout';
import Workoutdetails from './pages/Workoutdetails';
import Profile from './pages/Profile';
import Package from './pages/Package';
import Notification from './pages/Notification';
import Qrcode from './pages/Qrcode';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
      <NavigationContainer>
      <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false
      }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="Workout"
          component={Workout}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
        />
        <Stack.Screen
          name="Package"
          component={Package}
        />
        <Stack.Screen
          name="Notification"
          component={Notification}
        />
        <Stack.Screen
          name="Qrcode"
          component={Qrcode}
        />
        <Stack.Screen
          name="Workoutdetails"
          component={Workoutdetails}
        />
      
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}

