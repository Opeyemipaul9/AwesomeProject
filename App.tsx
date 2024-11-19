import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackHeaderRightProps,
} from '@react-navigation/native-stack';
import IndexScreen from './src/screens/IndexScreen';
import { Provider as BlogProvider } from './src/context/Blogcontext';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import Feather from 'react-native-vector-icons/Feather';
import { TouchableOpacity } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import EditScreen from './src/screens/EditScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen
          name="Index"
          component={IndexScreen}
          options={({ navigation }) => ({
            title: 'Blogs',
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                <Feather name="plus" size={30} />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Show"
          component={ShowScreen}
          options={({ navigation, route }) => ({
            title: 'Show Blog',
            headerRight: () => {
              console.log(route.params, 'route.params');
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Edit', { id: route?.params?.id })
                  }>
                  <EvilIcons name="pencil" size={35} />
                </TouchableOpacity>
              );
            },
          })}
        />
        <Stack.Screen
          name="Create"
          component={CreateScreen}
          options={{ title: 'Create Blog' }}
        />
        <Stack.Screen
          name="Edit"
          component={EditScreen}
          options={{ title: 'Edit Blog' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  );
};
