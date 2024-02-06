import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from "@react-navigation/drawer";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

//import Home from './src/pages/Home'; foi substituido pelo stackRoutes

import StackRoutes from './stackRoutes';
import Sobre from '../pages/Sobre';
import Contato from '../pages/Contato';
//navegação tipo pilha uma aba sobre a outra
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomDrawer from '../components/CustomDrawer';

const Drawer = createDrawerNavigator();

export default function Routes() {

  return (

    <Drawer.Navigator //estamos puxando um componente customizado - customDrawer
      drawerContent={CustomDrawer}
      // screenOptions={{

      // }}
    >

      <Drawer.Screen
        name='HomeStack'
        component={StackRoutes}  // stackRoutes da pasta routes
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
