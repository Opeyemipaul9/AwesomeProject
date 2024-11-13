import React, {useState} from "react";
import {View , Text , StyleSheet, TextInput} from 'react-native';


const TextScreen =()=>{
    const [password, setPassword] = useState('');
    return(
        <View>
            <Text>Enter Password</Text>
            <TextInput 
            style = {style.input}
            autoCapitalize = "none"
            autoCorrect = {false}
            value = {password}
            onChangeText = {newValue => setPassword(newValue)}
            />
           {password.length < 8 ? <Text>Password must be 4 characters</Text> : null }
        </View>
    )

}


const style = StyleSheet.create({
    input:{
        margin:15,
        borderColor:'black',
        borderWidth:1
    }
});


export default TextScreen;
