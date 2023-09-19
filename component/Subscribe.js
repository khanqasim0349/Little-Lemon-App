import React from 'react';
import { useState } from 'react';
import { Alert,View,Text,Image,StyleSheet, TextInput, Pressable } from 'react-native';
export default function Subscribe() {
  const [text, setText] = useState('');
  const isButtonDisabled = text.trim().length === 0;
  const SubscribeMe=()=>{
    Alert.alert('Thanks for subscribing', '', [{ text: 'OK' }]);
  }
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}> 
      <Image  source={require('./images/little-lemon-logo-grey.png')}
        style={styles.img}
      />
      <Text style={styles.lowerText}>Subscribe to Newsletter for our</Text>
      <Text style={styles.lowerText1}>latest delicious recipies!</Text>
      </View>
      <View style={styles.inputTextWrapper} >
        <TextInput
        placeholder='Type your email'
        onChangeText={setText}
        value={text}
        style={styles.inputWrapper}
       />
      </View>
      <View style={styles.btnWrapper}>
      <Pressable
      disabled={isButtonDisabled}
      onPress={SubscribeMe}
      >
        <Text style={styles.buttonText}>Subscribe</Text>
      </Pressable>
      </View>
    </View>
  );
}

const styles=StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    bottom:100
  },
  img: {
    width: 100,
    height: 100,
    left:40
  },
  lowerText:{
    top:20,
    fontWeight:'bold',
    fontSize:15,
  },
  lowerText1:{
    top:20,
    fontWeight:'bold',
    fontSize:15,
    left:20
  },
  inputWrapper:{
    
    backgroundColor:'white',
    borderRadius:10,
    justifyContent:'center',
    borderColor:'black',
    borderWidth:1,
    top:40,
    color:'black'
  },
  inputTextWrapper:{
    width:350,
    height:40,
  },
  btnWrapper:{
    width:350,
    height:40,
    justifyContent:'center',
    alignItems:'center',
    top:50,
    backgroundColor:'darkgreen',
    borderRadius:10
  },
  buttonText:{
    color:'white'
  }
})