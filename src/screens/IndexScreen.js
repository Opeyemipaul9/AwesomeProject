import React, {useContext} from 'react';
import {View , Text , StyleSheet,FlatList,Button, TouchableOpacity} from 'react-native';
import { Context as BlogContext} from '../context/Blogcontext';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';



const IndexScreen =()=>{
    const navigation = useNavigation();
    const {state, addBlogPost, deleteBlogPost} = useContext(BlogContext);
    return (
        <View>
            
            <Button title = 'Add Post' onPress={addBlogPost}/> 
            <FlatList
            data ={state}
            keyExtractor={(blogpost)=>blogpost.title}
            renderItem={({item})=>{
            return( <TouchableOpacity onPress={()=> navigation.navigate('Show', {id:item.id})}>
             <View style ={style.row}>  
                <Text style = {style.title}>{item.title} - {item.id}</Text> 
                <TouchableOpacity onPress={()=>deleteBlogPost(item.id)}>
                <Feather style = {style.icon }name = 'trash'/>
                </TouchableOpacity>
                </View>
                </TouchableOpacity>
                );
                 }}
            />
             
           
        </View>
    );
};

// IndexScreen.navigationOptions = ()=>{
//     return{
//         headerRight:  <Feather name ='plus' size ={30}/>
//     };
// };


const style = StyleSheet.create({
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:20,
        borderTopWidth: 1,
        borderColor:'gray',
        paddingHorizontal:10
    },
    title:{
        fontSize:18,
    }, 
    icon:{
        fontSize:24
    }
});

export default IndexScreen;