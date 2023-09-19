import React from 'react';
import { View,Text,ScrollView,StyleSheet } from 'react-native';

const menuItemsToDisplay=[
    'Chicken \n Mutton \n Rice \n Salade \n Turkish Kabab \n Smoked Salmon \n Burger \n Pizze \n Shwarma \n Greek Salade \n Baklawa \n Fries \n KFC Wings \n pulao \n sabzi \n dall \n Salade \n Turkish Kabab \n Smoked Salmon \n Burger \n Pizze \n Shwarma \n Greek Salade \n Baklawa \n Fries \n KFC \n',
]

const MunuItems=()=> {
  return (
    <View style={menuStyle.container}>
        <ScrollView
        horizontal={false}
        indicatorStyle={'white'}
        style={menuStyle.innerContainer}>
            <Text
            style={{
                fontSize:40, flexWrap:'wrap',color:'red'
            }}>Menu items</Text>
            <Text
            style={menuStyle.otherContainer}
            >{menuItemsToDisplay[0]}</Text>            
        </ScrollView>
    </View>
  );
}
export default MunuItems;
const menuStyle=StyleSheet.create({
    container:{
        flex:0.75,
    },
    innerContainer:{
        padding:40,
        backgroundColor:'black',
    },
    otherContainer:{
        color:'yellow',
        fontSize:25,
        
    }
})