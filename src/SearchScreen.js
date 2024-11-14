import React from 'react';
import { View, Text, Stylesheet } from 'react-native';

const SearchScreen = ()=> {
    return(
        <View>
            <Text style = {styles.viewStyle}> Search Screen</Text>
        </View>
    )

};

const styles = Stylesheet.create({
    viewStyle:{
        fontSize:20
    }
});


export default SearchScreen;