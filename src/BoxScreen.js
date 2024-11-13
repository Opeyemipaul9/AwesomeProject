import React from "react";
import {View, Text, StyleSheet} from 'react-native';


const BoxScreen = ()=> {
    return (
        <View style = {styles.viewStyle}>
            <Text style = {styles.textOneStyle}>  </Text>
            <Text style = {styles.textTwoStyle}>  </Text>
            <Text style = {styles.textThreeStyle}>  </Text>
        </View>
    )
};

const styles  = StyleSheet.create({
    viewStyle:{
        borderWidth : 3,
        borderColor:'black',
        flexDirection:'row',
        justifyContent:'space-between',
        height:200
        
       
         
    },
    textOneStyle:{
        borderWidth:3,
        borderColor: 'red',
        width:100,
        height:100,
        backgroundColor:'red'
       
    },
    textTwoStyle:{
        borderWidth:3,
        borderColor: 'red',
        width:100,
        height:100,
        alignSelf:'flex-end',
        backgroundColor:'blue'
       
    //    position:'absolute',


        
    },
    textThreeStyle:{
        borderWidth:3,
        borderColor: 'red',
        width:100,
        height:100,
        backgroundColor:'yellow'
       
    }
})


export default BoxScreen;