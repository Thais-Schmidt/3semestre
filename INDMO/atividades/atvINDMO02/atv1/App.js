import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Routes from './src/routes';

const Tab = createBottomTabNavigator();

export default function App() {

  return (

    <NavigationContainer>
      <Routes />
    </NavigationContainer>

  )

}