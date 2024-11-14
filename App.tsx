import React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/HomeScreen';
import SearchScreen from './src/SearchScreen';

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  defaultNavigationOptions:{
    title:'BusinessSearch'
  },
  screens: {
    Home: HomeScreen,
    Search:SearchScreen
  },
});

const Navigation = createStaticNavigation(RootStack);

function App(): React.JSX.Element {
  return (
    <Navigation />
  );
}

export default App;
