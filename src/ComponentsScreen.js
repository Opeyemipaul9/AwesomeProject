import React from "react";
import {View , Text, StyleSheet} from 'react-native';


const ComponentsScreen = () => {
    const name  = 'Peter'
    return (
        <View>
            <Text style = {styles.textStyle}>Getting Started with React Native</Text>
            <Text style = {styles.subStyle}>My name is {name}</Text>

        </View>
    )

};

const styles = StyleSheet.create({
    textStyle:{
        fontSize:40
    },
    subStyle:{
        fontSize:25
    }

})





















export default ComponentsScreen;