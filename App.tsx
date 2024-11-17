import React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ResultsShowScreen from './src/screens/ResultsShowScreen';
import SearchScreen from './src/screens/SearchScreen';

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Search',
  screens: {
    Search:{
      screen: SearchScreen,
      options: {
        title: 'Business Search',
      },
    },
    ResultsShow:ResultsShowScreen ,  
  }
});

const Navigation = createStaticNavigation(RootStack);

function App(): React.JSX.Element {
  return (
    <Navigation />
  );
}

export default App;
