import React from 'react';
import {View, Text, Pressable, Image, StyleSheet} from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
export default function Welcome(props) {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.imgWrapper}>
        <Text style={styles.upperText}>L I T T L E</Text>
        <Image
          source={require('./images/little-lemon-logo.png')}
          style={styles.img}
        />
        <Text style={styles.upperText}>L E M O N</Text>
      </View>
      <View style={styles.lowerTextWrapper}>
        <Text style={styles.lowerText}>Little Lemon, your local</Text>
        <Text style={styles.lowerText}>Mediterian Bistro</Text>
      </View>
      <Pressable style={styles.pressWrapper}
      onPress={()=>props.navigation.navigate('Subscribe')}
      >
        <Text style={styles.pressText}>Newsletter</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 100,
    height: 100,
  },
  upperText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'darkgreen',
    left: 4,
  },
  lowerText: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  lowerTextWrapper: {
    alignItems: 'center',
    marginTop: 20,
    top: 60,
  },
  imgWrapper: {
    alignItems: 'center',
    marginTop: 20,
  },
  pressWrapper:{
    alignItems: 'center',
    marginTop: 20,
    top: 180,
    width: 350,
    height: 45,
    backgroundColor: 'darkgreen',
    borderRadius: 20,
    justifyContent: 'center',
  },
  pressText:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  }
});
