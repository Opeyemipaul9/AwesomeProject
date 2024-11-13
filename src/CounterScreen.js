import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state,action)=>{
    switch(action.type){
        case'increment':
         return {...state, counter:state.counter + action.payload};
        case 'decrement':
            return {...state, counter:state.counter - action.payload};
        default:
            return state;
    }
};



const CounterScreen = () => {
    const [state, runMyReducer] = useReducer(reducer,{counter: 0});

    return (<View>
        <Button
            title='Increase'
            onPress={() => { runMyReducer({type:'increment', payload:1})
             }}
        />
        <Button
            title='Decrease'
            onPress={() => { runMyReducer({type:'decrement', payload:1})
            }}
        />
        <Text>Current Count: {state.counter} </Text>
    </View>)

};

const style = StyleSheet.create({});


export default CounterScreen; 