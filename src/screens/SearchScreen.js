import React, {useState} from 'react';
import { View, Text, StyleSheet , ScrollView} from 'react-native';
import SearchBar from '../Components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../Components/ResultsList';
import { useNavigation } from '@react-navigation/native';



 
const SearchScreen = ()=> {

    const navigation = useNavigation();
    
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults(); 

    const filterResultsByPrice = (price) =>{
        return results.filter(result =>{
            return result.price === price;
        });

    };
   


    return (
        <View style = {{flex:1}}>
            <SearchBar term = {term}
            //  onTermChange = {newTerm => setTerm( newTerm)}
             onTermChange = {setTerm}
             onTermSubmit={() => searchApi (term) }
             />
             {errorMessage ?
            <Text>
                {errorMessage}
            </Text>:null}
            
            <ScrollView>
            <ResultsList results = {filterResultsByPrice('$')} title = 'Cost Effective' navigation ={navigation}/>
            <ResultsList results = {filterResultsByPrice('$')} title = 'Bit Pricier' navigation ={navigation}/>
            <ResultsList results = {filterResultsByPrice('$')} title = 'Big Spender' navigation ={navigation}/>
            </ScrollView>
        </View>
    );

};

const styles = StyleSheet.create({});


export default SearchScreen;