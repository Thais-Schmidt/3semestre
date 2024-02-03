import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

//import Home from './src/pages/Home'; foi substituido pelo stackRoutes

import StackRoutes from './stackRoutes';
import Sobre from '../pages/Sobre';
import Contato from '../pages/Contato';
import { createDrawerNavigator } from "@react-navigation/drawer";
//navegação tipo pilha uma aba sobre a outra
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Routes() {

  const Drawer = createDrawerNavigator();

  return (

    <Drawer.Navigator>

      <Drawer.Screen
        name='HomeStack'
        component={StackRoutes}
      />

      <Drawer.Screen
        name='Sobre'
        component={Sobre}
      />

      <Drawer.Screen
        name='Contato'
        component={Contato}
      />
    </Drawer.Navigator>

  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b4c4bc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
