import React, {useEffect, useState} from 'react';

import {View, Text, Button, StyleSheet,Image, Pressable} from 'react-native';
import Welcome from './component/Welcome';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Subscribe from './component/Subscribe';
// import {View, Text} from'react-native';
export default function App() {
  const Stack=createNativeStackNavigator();
 return(
   
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Subscribe" component={Subscribe} />

      </Stack.Navigator>
    </NavigationContainer>
   
   );
 
}

const styles = StyleSheet.create({
  pressWrapper:{
      top:180,
      backgroundColor:'darkgreen',
      width:320,
      height:40,
      borderRadius:10,
      justifyContent:'center',
      alignItems:'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {

    width: 100, // Adjust width and height as needed
    height: 100,
  },
  main:{
      margin:40
    
  },
  textWrapper:{
    fontSize:20,
    top:70,
    fontWeight:'bold',
    color:'black'
  },
  upperText:{
    fontSize:20,
    fontWeight:'bold',
    color:'darkgreen',
    
  },
  welcome:{
    fontSize:20,
    fontWeight:'bold',
    color:'black',
    bottom:190
  },
  lowerText:{
    fontSize:20,
    color:'white',
  }
});

const AppController =()=>
{
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome</Text>
      <Text style={styles.upperText}>Little</Text> 
      <Image source={require('./component/little-lemon-logo.png')}
      style={styles.image}
      />
      <Text style={styles.upperText}>Lemon</Text> 
     <View style={styles.main}>
     <Text style={styles.textWrapper}>Little Lemon, your local</Text>
      <Text style={styles.textWrapper}>Mediterian Bistro</Text>
     </View> 
         <Pressable style={styles.pressWrapper}>
        <Text style={styles.lowerText}>Newsletter</Text>
      </Pressable> 
        </View>
        );
}