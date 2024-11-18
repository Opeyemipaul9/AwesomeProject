import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackHeaderRightProps } from "@react-navigation/native-stack";
import IndexScreen from "./src/screens/IndexScreen";
import { Provider as BlogProvider } from "./src/context/Blogcontext";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";
import Feather from 'react-native-vector-icons/Feather';
import { TouchableOpacity } from "react-native";


const Stack = createNativeStackNavigator();

const App = () =>{
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen name ='Index'
         component={IndexScreen} 
         options = {({navigation}) => ({
          title:'Blogs',
          headerRight: () => 
              <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                <Feather name ='plus' size ={30}/>
              </TouchableOpacity>      
          })}
        />
        <Stack.Screen name = 'Show' component={ShowScreen} options ={{title : 'Show Blog'}}/>
        <Stack.Screen name = 'Create' component={CreateScreen} options ={{title:'Create Blog'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default () => {
  return <BlogProvider>
    <App/>
  </BlogProvider>
}