import React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListScreen from './src/ListScreen';
import HomeScreen from './src/HomeScreen';
import ComponentsScreen from './src/ComponentsScreen'
import ImageScreen from './src/ImageScreen';
import CounterScreen from './src/CounterScreen';
import ColorScreen from './src/ColorScreen';
import SquareScreen from './src/SquareScreen';
import TextScreen from './src/TextScreen';
import BoxScreen from './src/BoxScreen';

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screens: {
    Home: HomeScreen,
    List: ListScreen,
    Components: ComponentsScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Square: SquareScreen,
    Text:TextScreen,
    Box: BoxScreen

  },
});

const Navigation = createStaticNavigation(RootStack);

function App(): React.JSX.Element {
  return (
    <Navigation />
  );
}

export default App;
