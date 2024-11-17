import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const SearchBar = ({term, onTermChange, onTermSubmit})=> {
    return(
        <View style  = {styles.backgroundStyle}>
         <Feather name = 'search' size = {30}/>
         <TextInput 
          style = {styles.inputStyle}
          placeholder ='Search'
          value = {term}
        //   onChangeText={newTerm => onTermChange(newTerm)}
          onChangeText={onTermChange}
          autoCapitalize='none'
          autoCorrect={false}
          onEndEditing={onTermSubmit}
          />
          </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle:{
        backgroundColor:'#F0EEEE',
        height:50,
        borderRadius:5,
        marginHorizontal:15 ,
        flexDirection:'row',
        marginTop:15,
        marginBottom:10, 
        alignItems:'center'        
    } ,
    inputStyle :{
        flex:1,
        fontSize:18
    },
    iconStyle:{
        fontSize: 35,
        alignSelf:'center',
        marginHorizontal:15
    }
});

export default SearchBar;